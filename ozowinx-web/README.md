# Ozowinx — Marketing Website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · MDX

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run typecheck
```

## What is built

**Shipped to final quality**

- `/` — full home page, all 14 sections
- `/services/product-engineering` — the complete service-detail template
  (problem → approach → capabilities → process → technologies → deliverables
  → FAQ → related → CTA)
- `/case-studies` + `/case-studies/[slug]` — MDX-driven
- `/insights` + `/insights/[slug]` — MDX-driven

**Structural (route, metadata, nav and sitemap are real; body copy pending)**

Every other route renders a `PageShell` that states plainly which sections are
still to be written. Nothing is padded with filler.

## Adding the remaining four service pages

Service pages are data-driven. Open `src/lib/services.ts` and add a `detail`
block to a service — copy the shape from `product-engineering`. The route
`/services/[slug]` picks it up and renders the full template automatically.
No new components, no new routes.

## Content

Blog posts and case studies are MDX files:

```
content/insights/*.mdx
content/case-studies/*.mdx
```

Frontmatter fields are typed in `src/lib/content.ts`. Set `placeholder: true`
on any provisional entry — the UI badges it visibly so nothing unapproved
reaches production unmarked.

## Before launch

1. **Replace the metrics.** `src/lib/site.ts` → `METRICS`. Set
   `verified: true` once real; that removes the provisional caption on the
   metrics strip.
2. **Replace the placeholder case studies.** All three in
   `content/case-studies/` are marked `placeholder: true`.
3. **Set the production origin.** `NEXT_PUBLIC_SITE_URL` — used for canonical
   URLs, the sitemap, and JSON-LD.
4. **Add an OG image** at `public/og.png` (1200×630) and reference it in
   `src/lib/seo.ts`.
5. **Add a favicon** — `src/app/icon.png` or `favicon.ico`.

## Design tokens

All colour and type tokens live in the `@theme` block of
`src/app/globals.css` (Tailwind v4 is CSS-first — there is no
`tailwind.config.js`). Tokens are exposed as utilities: `bg-surface`,
`text-ink-secondary`, `border-line`, `text-accent`, and so on.

The palette is deliberately restrained: predominantly white, slate-biased
neutrals, one blue accent. The logo's full spectrum is confined to the mark
itself (`src/components/site/Logo.tsx`), which also ships an `ink` monochrome
variant for dense UI and dark grounds.

## Accessibility and robustness notes

- Scroll reveals are server-rendered with `opacity: 0` and animated in after
  hydration. A `<noscript>` override in `src/app/layout.tsx` forces everything
  visible when scripting is unavailable — without it the page renders blank.
- `prefers-reduced-motion` is honoured throughout; every Motion component
  short-circuits to a static render.
- Skip-to-content link, visible focus rings, and semantic landmarks are in place.

## Deploying

Deploys to Vercel with no configuration. Set `NEXT_PUBLIC_SITE_URL` in the
project's environment variables.
