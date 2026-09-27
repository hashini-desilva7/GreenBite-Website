# GreenBite

A wellness web app: curated recipes, a nutrition calculator, guided workouts and
mindfulness routines. Built as an installable **progressive web app** — static
HTML, CSS and vanilla JavaScript, no build step and no dependencies.

**Live:** <https://hashini-desilva7.github.io/GreenBite-Website/>

## Pages

| File | What it does |
| --- | --- |
| `index.html` | Landing page, daily rotating health tip, testimonial, feature grid |
| `Recipie.html` + `Recipie.js` | 17 recipes with category filter, ingredients, steps and nutrition facts |
| `Calculator.html` | BMR / TDEE / macro-target calculator |
| `Bodyparts.html` | Workouts grouped by body part |
| `Equipment.html` | Gear checklist |
| `Mindfulness.html` | Guided mindfulness material |
| `Contact.html` | Contact form |
| `offline.html` | Shown when the network is unavailable |

Styling lives in one `style.css`; all behaviour in `script.js`.

## Running it locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

A server is needed rather than opening `index.html` directly, because service
workers are blocked on `file://`.

## PWA / service worker

`service-worker.js` precaches the shell so the app opens without a network.
Two details matter on GitHub Pages and are easy to get wrong:

- **All paths are relative** (`./style.css`, not `/style.css`). The app is
  served from `/GreenBite-Website/`, so a root-absolute path resolves to
  `github.io/style.css` and 404s — which also puts the worker outside its
  allowed scope.
- **Each asset is cached individually.** `cache.addAll()` is all-or-nothing:
  one 404 rejects the whole install and the worker never activates, so offline
  support disappears without any obvious error. Every `cache.add()` is
  individually caught and logged instead.

Navigations are network-first with a cache → app-shell → `offline.html`
fallback chain; other same-origin assets are cache-first with a background
refresh. The cache is versioned (`greenbite-v2`) and old versions are deleted on
activate.

## Images

All artwork is local SVG in `img/` — no hotlinking, no external requests. The
placeholders are generated, on-palette (`#4CAF50` / `#8BC34A` / `#2E7D32`) and
labelled, so every `<img>` resolves and nothing renders broken.

They are **placeholders, not photographs.** To use real photos, drop them into
`img/` and point the references back at them:

- the 6 feature tiles, 3 workout tiles, testimonial portrait and calculator
  illustration are referenced from `index.html`, `Bodyparts.html` and
  `Calculator.html`
- the 17 recipe images are referenced from the `image` field of each entry in
  `Recipie.js`

## Deploying

Pages publishes this repo from `main`/root. To deploy, just push:

```bash
git add .
git commit -m "Update GreenBite"
git push
```

`.nojekyll` is committed so Pages serves the files verbatim instead of running
them through Jekyll.
