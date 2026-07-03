# EbossPro — Next.js

A faithful Next.js (App Router) recreation of the legacy PHP marketing site
`ebosspro.com/index2.php`. See [`ANALYSIS.md`](./ANALYSIS.md) for the full
migration analysis (how the source was obtained, page inventory, PHP→Next
mapping, and strategy).

## Tech stack
- **Next.js 15** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS 3**
- No backend — content ships as typed dummy data (`src/data/*`). The Ask-AI chat
  is proxied through a server route with a mock fallback.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional — only needed for live AI replies
npm run dev                  # http://localhost:3000
```

### Production

```bash
npm run build
npm run start
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | No | Enables live Ask-AI replies via `/api/ai`. Without it the route returns a deterministic mock so the UI still works. |
| `ANTHROPIC_MODEL` | No | Override the model (default `claude-haiku-4-5-20251001`). |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL for metadata. |

## Routes

| Route | Source | Rendering |
|---|---|---|
| `/` | `index2.php` | Componentized (clean React) |
| `/industries/[slug]` | `industries/*.php` | 6 static pages (faithful legacy markup) |
| `/topics/[slug]` | `topics/*.php` | 3 static pages (`erp`, `msaas`, `ai`) |
| `/api/ai` | browser→Anthropic call | Server-side proxy + mock fallback |
| `/topic-ai`, `/index.php`, `/index2.php` | legacy links | 308 redirects |

## Project structure

```
src/
  app/
    layout.tsx              # html/body shell + IBM Plex fonts
    page.tsx                # homepage (imports globals.css)
    globals.css             # legacy stylesheet, verbatim (pixel fidelity)
    loading.tsx / error.tsx # route loading + error boundary
    industries/[slug]/page.tsx
    topics/[slug]/page.tsx
    api/ai/route.ts         # Ask-AI server proxy
  components/
    layout/   Topbar, Navbar, MegaMenu, Footer, PageLoader, LegacyPage
    sections/ Hero, Stats, IndustryGallery, CustomerCarousel, InfraSection, CtaBand
  data/
    home.ts                 # typed homepage dummy data
    panels/*                # verbatim mega-menu / drawer markup
    legacy/                 # self-contained industry & topic pages
  hooks/      useMegaMenu.ts # mega-menu engine (ported 1:1 from legacy JS)
  types/      global.d.ts
public/images/*             # all site images, served locally
```

## Architecture notes (fidelity-first)

- **Legacy CSS preserved verbatim** in `globals.css` (and per-page for sub-pages)
  to keep colors, spacing, typography, and responsiveness identical. Tailwind is
  configured (brand tokens, `preflight` disabled) for any new utility styling.
- The **homepage** is rebuilt as clean, reusable React components with data-driven
  content and React-managed interactions (hero slider, carousel, Ask-AI chat).
- The **mega-menu panels** (~6,000 lines of static markup) and the **sub-pages**
  are rendered from the original HTML to guarantee zero content loss; their
  inline handlers resolve to functions installed on `window`
  (`src/hooks/useMegaMenu.ts`) — identical behavior to the original.
- The Ask-AI call was moved **server-side** (`/api/ai`) — the legacy site exposed
  the API key in the browser.

## Deployment

Deploys as a standard Next.js app.

- **Vercel:** import the repo, set `ANTHROPIC_API_KEY` (optional), deploy.
- **Node host:** `npm run build && npm run start` (default port 3000).
- **Docker:** standard `node:20-alpine` multi-stage build running `next start`.

> Migration working files (`index2.html`, `_source_pages/`) are git-ignored and
> not needed at runtime.
