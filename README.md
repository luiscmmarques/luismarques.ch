# luismarques.ch

Personal site styled as a status page, built with [Astro](https://astro.build). Static, zero client-side framework, one tiny inline script for the uptime counter.

## Editing content

Everything lives in **`src/data/status.js`** — profile, links, support channels, components, incident history (career timeline) and the uptime-bar eras. Edit that file, push to `main`, done. New job? Add an incident and extend `eras`.

House rule (AWS-employee friendly): public facts only — job titles, cities, years. No customers, no internals, no exact age.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via `.github/workflows/deploy.yml` (Pages source: GitHub Actions, custom domain in `public/CNAME`).

There are no hosted branch previews; preview changes locally with `npm run build && npm run preview`.

## Structure

```
src/data/status.js        ← all content (edit this)
src/pages/index.astro     ← the page + layout styles
src/components/           ← StatusRow, Incident, Icon
src/styles/global.css     ← theme (black + brand blue), background glow
public/                   ← logo.svg, photo, CNAME, robots/sitemap/llms/humans/security.txt
tmp/                      ← private source material, git-ignored, never published
```
