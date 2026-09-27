/*
 * GreenBite service worker
 *
 * Two things this file had to get right to actually work when deployed to a
 * GitHub Pages *project* site (served from /GreenBite-Website/, not /):
 *
 *  1. Every path is relative to the service worker's own location, not to the
 *     server root. An absolute "/style.css" resolves to github.io/style.css,
 *     which 404s.
 *
 *  2. cache.addAll() is all-or-nothing: if a single URL 404s the install
 *     promise rejects and the worker never activates, so the app silently
 *     loses all offline support. Each asset is therefore cached individually
 *     and failures are tolerated.
 */

const CACHE_NAME = 'greenbite-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './Recipie.html',
  './Calculator.html',
  './Bodyparts.html',
  './Equipment.html',
  './Mindfulness.html',
  './Contact.html',
  './offline.html',
  './style.css',
  './script.js',
  './Recipie.js',
  './manifest.json',
  './img/favicon.svg',
  './img/eat.svg',
  './img/workout.svg',
  './img/mindfulness3.svg',
  './img/nutrition.svg',
  './img/workers.svg',
  './img/Hydration.svg',
  './img/heart.svg',
  './img/anne.svg',
  './img/human.svg',
  './img/ArmWorkout.svg',
  './img/LegWorkout.svg',
  './img/fullbodyworkout.svg',
  './sounds/forest.wav',
  './sounds/rain.wav',
  './sounds/ocean.wav'
];

// Install: cache what we can, tolerate anything that is missing.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        ASSETS_TO_CACHE.map((url) =>
          // add() rejects on 404/opaque failure; catch so one bad asset
          // cannot abort the whole installation.
          cache.add(new Request(url, { cache: 'reload' })).catch((err) => {
            console.warn('[greenbite sw] skipped', url, err && err.message);
          })
        )
      )
    )
  );
  self.skipWaiting();
});

// Activate: drop caches from previous versions.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Fetch: navigations are network-first with a cache/offline fallback,
// everything else is cache-first with a background refresh.
self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  const isNavigate =
    req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isNavigate) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          if (cached) return cached;
          const shell = await caches.match('./index.html');
          if (shell) return shell;
          const offline = await caches.match('./offline.html');
          if (offline) return offline;
          return new Response(
            '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
              '<body style="font-family:system-ui;padding:3rem;text-align:center">' +
              '<h1>You are offline</h1><p>GreenBite could not reach the network.</p></body>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
          );
        })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
