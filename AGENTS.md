# AGENTS.md

Instructions for AI agents (and humans) working on this repo.

## What this is

Personal website of Luís Marques (luismarques.ch), styled as a **parody of a status page**: "All Systems Operational", career history rendered as resolved incidents, uptime bars per year, support channels as escalation paths. The humor is sarcastic but professional-safe.

Built with **Astro** (static output, zero client-side framework). The only JavaScript shipped is one small inline script in `src/pages/index.astro` (uptime-since-page-open counter, Day 1 counter, uptime-bar readout, burger menu, footer year) plus the GoatCounter analytics script. Keep it that way: no client frameworks, no icon libraries, no trackers, no cookies.

## Content rules (non-negotiable)

Luís is an AWS employee. Anything published here must respect:

1. **Public facts only**: job titles, employers, cities, years. Nothing about customers, colleagues, internal tools, or anything work-confidential.
2. **Birth year (1988) is published on purpose**, as the "Initial boot" incident. Luís decided that in September 2026, after the site first shipped without it. Do not publish a full birth date (day and month), and keep the uptime counter measuring time since page open, not since birth.
3. **No em dashes** in site copy. Write naturally and narratively; use commas or periods instead. Also avoid hard word wraps in markdown prose and string literals: one paragraph or sentence per line, let editors soft-wrap.
4. **No "kauwi" references.** It was an abandoned brand idea. The logo (`public/logo.svg`) keeps its cloud + orange arrow motif but is branded only "luís marques".
5. Keep the disclosure lines in the footer (employer, AI, analytics disclosures). If you add a blog, those disclosures cover posts too.
6. `tmp/` holds private source material (CV, LinkedIn export). It is git-ignored. Never publish, commit, or quote from it beyond what the site already shows.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/status.js` | **All content**: person, links, analytics config, channels, components, incidents, eras, disclaimers. Edit this for any copy change. |
| `src/pages/index.astro` | The single page: layout, inline script, page-scoped styles, meta/SEO tags, CSP. |
| `src/components/` | `StatusRow` (component rows), `Incident` (timeline entries), `Icon` (brand SVG paths from Simple Icons, CC0, plus a Material email icon), `Glyph` (outline glyphs for component rows, traced from Feather Icons), `Flag` (CH/PT), `Canton` (VS/VD/GE arms, deliberately stylized because real blazons turn to mush at 14px). All of them take `label={false}` or are `aria-hidden` when the surrounding text already says the same thing. |
| `src/styles/global.css` | Theme: black base, brand blue `#4d8dff` / `#2979ff`, orange `#ff8b3d`, kiro-style glow + grid background. Mobile-first. |
| `public/` | `logo.svg`, `og.png` (the link preview card, generated from `tools/og-card.html`, not hand-edited), `luis.jpg` (portrait used by the JSON-LD `image`, kept as jpg for scrapers), `luis-sm.webp` + `luis-sm.jpg` (page avatar, WebP first with a jpg fallback; regenerate with `cwebp -q 82 public/luis-sm.jpg -o public/luis-sm.webp`), `CNAME`, `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`, `.well-known/security.txt` (RFC 9116, has an Expires date to renew yearly). |
| `tools/` | Build-time helpers, excluded from the site. `og-card.html` is the 1200x630 source of `public/og.png`; `og-optimize.py` palettes the screenshot down from around 210 KB to around 70 KB. Regeneration command is in the card's header comment. Nothing here ends up in `dist/`. |
| `.github/workflows/deploy.yml` | GitHub Pages deploy on push to `main` (withastro/action). There are no hosted branch previews; preview locally with `npm run preview`. |
| `ROADMAP.md` | Planned work. Check it before proposing features. |

## Analytics

GoatCounter (cookieless, no consent banner needed), configured in `src/data/status.js` (`analytics.goatcounter`, empty string disables it). Click tracking uses `data-goatcounter-click` attributes: `nav-*` for menu items, `out-*` for outbound profile links, `channel-*` for support channels. If you add a tracked link, follow that naming. Any change that would introduce cookies or personal-data collection requires a consent banner and is therefore out of scope; do not add one.

## Common tasks

- **New job / role change**: add an incident object at the top of `incidents` in `src/data/status.js` and extend `eras` for the uptime bars.
- **Copy tweaks**: edit `src/data/status.js` only; the page renders from it.
- **Link preview**: after changing the name, title or theme, regenerate `public/og.png` (see `tools/og-card.html`) so the card does not drift from the page.
- **Uptime bars**: each era in `eras` declares only the year it `start`ed; it runs until the next era begins, and the last runs to today. Concurrent engagements go in `overlaps` and render as split bars. Never hardcode end years, that is how bars and incident periods drift apart.
- **New section**: add the section in `index.astro`, give it a stable `id` (it becomes a deep link), and add it to the `navItems` array so both the desktop nav and burger menu pick it up.

## Build, test, deploy

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/, must pass before pushing
npm run preview    # serve dist/ locally
```

Visual checks are done with Playwright screenshots (device emulation, e.g. Pixel 7); Playwright is not a project dependency, use `npx playwright@latest screenshot` or a throwaway `npm i --no-save playwright`. When auditing performance with Lighthouse, audit `npm run preview` output, never the dev server (dev mode ships the Vite client and skews every number).

Deployment is automatic: push to `main`, the workflow builds and publishes to GitHub Pages. Custom domain is `public/CNAME`; GitHub Pages source must stay set to "GitHub Actions".

## Quality bar

- Mobile-first and responsive; verify at ~390 px and 1280 px before calling a layout change done.
- Accessible: keep the skip link, `aria-expanded` on the burger, `aria-label`s on icon-only links, focus styles, `aria-live` on the bars readout, and `prefers-reduced-motion` handling. Lighthouse accessibility stays at 100.
- Fast: the whole site is a single HTML page with inlined CSS. Lighthouse performance stays at 100 (last check: 100 across performance, accessibility, best practices and SEO, mobile and desktop, 24 KiB transferred). If a change adds a network request or a dependency, it needs a very good reason. New iconography goes in as inline SVG, never as an emoji (platform-dependent rendering) or a font.
- The CSP meta tag in `index.astro` must list any new external origin (script/img/connect) or the resource will be blocked. GitHub Pages serves no custom headers, so `frame-ancestors` and HSTS are out of reach: the meta CSP is the whole defence, keep `object-src 'none'`, `base-uri 'self'` and `form-action 'none'` in it.
- Every external link keeps `rel="noopener"`. No inline event handlers, no `innerHTML` in the inline script.
