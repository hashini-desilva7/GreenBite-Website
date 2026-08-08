const CACHE_NAME = 'greenbite-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/img/favicon-192.png',
  '/img/favicon-512.png',
  '/img/eat.jpg',
  '/img/workout.webp',
  // add other core assets you want offline
  '/offline.html'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => (key !== CACHE_NAME ? caches.delete(key) : null))
      );
    })
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const req = event.request;
  // For navigation requests (HTML pages) try network first, fallback to cache and offline page
  if (req.mode === 'navigate' || (req.method === 'GET' && req.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(req)
        .then(res => {
          // Optionally update the cache with the latest response
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
          return res;
        })
        .catch(() =>
          caches.match(req).then(cached => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // For other requests: try cache first, then network
  event.respondWith(
    caches.match(req).then(cached => {
      return cached || fetch(req).then(networkRes => {
        // optionally cache fetched assets (for same-origin)
        if (req.url.startsWith(self.location.origin)) {
          caches.open(CACHE_NAME).then(cache => cache.put(req, networkRes.clone()));
        }
        return networkRes;
      }).catch(() => {
        // optional image fallback for images
        if (req.destination === 'image') {
          return caches.match('/img/fallback.png'); // optional
        }
      });
    })
  );
});

