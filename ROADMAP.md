# Roadmap

Ideas queued for luismarques.ch, roughly in order. No dates, no SLAs (fitting for a status page).

## Next

- [ ] **Blog as post-incident reports.** A "Postmortems" (or "RCAs") section where each tech note is written like a mini root-cause analysis. Implementation sketch: Astro content collection in `src/content/posts/`, an RCA-styled post layout (severity, timeline, root cause, lessons learned), and a "Postmortems" entry in the nav. Tone: same as the rest of the site.
- [ ] **RSS feed** via `@astrojs/rss`, once there is at least one post worth subscribing to.

## Later / maybe

- [ ] "Cookies: 0" badge in the footer. No tracking cookies is a feature, brag about it.
- [ ] Scheduled maintenance section (upcoming vacations, rendered as maintenance windows).
- [ ] OG image generated from the status banner instead of the plain photo.
- [ ] Language toggle (EN/FR/PT) if it can be done without tripling maintenance.

## Done

- [x] Status-page concept: banner, metrics, components, uptime bars, incident history (Sep 2026)
- [x] Burger menu with deep-linkable section anchors (Sep 2026)
- [x] Social icons as inline SVGs, no icon library (Sep 2026)
- [x] Employer + AI disclosure lines in the footer (Sep 2026)
- [x] GitHub Pages deploy workflow + custom domain (Sep 2026)
- [x] Well-known files: security.txt, llms.txt, robots.txt, sitemap.xml, humans.txt (Sep 2026)
- [x] GoatCounter analytics, cookieless, with nav/outbound/channel click events (Sep 2026)
- [x] SEO: JSON-LD Person schema, full Open Graph + Twitter cards, canonical (Sep 2026)
- [x] Perf/security: Lighthouse 4×100, inlined CSS, resized avatar, meta CSP, Astro 7 (Sep 2026)
- [x] Uptime bars: instant hover/tap/focus readout, employer-based legend (Sep 2026)
- [x] WebP avatar with jpg fallback, page down to 22 KiB (Sep 2026)
- [x] Published to GitHub Pages on luismarques.ch, DNS via Cloudflare (Sep 2026)
