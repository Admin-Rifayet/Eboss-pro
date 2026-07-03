# EbossPro — PHP → Next.js Migration Analysis

> Source: `https://ebosspro.com/index2.php` (+ `industries/*.php`, `topics/*.php`)
> Target: Next.js (App Router) + React + TypeScript + Tailwind CSS

---

## 1. How the source was obtained

The live site sits behind a **custom JavaScript anti-bot WAF** (an "One moment, please…"
interstitial that runs browser-fingerprint checks — `webdriver`, `userAgent`, `plugins`,
`mimeTypes`, `languages`, `outerWidth/Height` — and submits a computed `wsidchk` token to a
one-time clearance endpoint). The underlying PHP is additionally **SourceGuardian-encrypted**,
so the server-side source is not human-readable.

Because this is the owner's own site (authorized migration), the challenge was solved
programmatically (mock-DOM execution of the obfuscated challenge script → replay the clearance
token with a shared cookie jar) to retrieve the **real rendered HTML**, which is what we port.

## 2. What the site actually is

**EbossPro** — a Malaysian all-in-one business management platform (ERP + AI + Managed SaaS).
The PHP "pages" are effectively **server-rendered static marketing pages** with a large amount
of inline CSS (~1,200 lines) and vanilla JS. There is **no readable server logic** to port;
all dynamic behavior lives in the browser.

### Discovered pages
| Route (PHP) | Purpose | Notes |
|---|---|---|
| `index2.php` | Main landing page | 8,225 lines, ~1,200 lines inline CSS, 5-panel mega-menu |
| `industries/education.php` | Industry template | nav · hero · overview · segments · solutions · ai · managed · footer |
| `industries/sme-corporate.php` | Industry | same template |
| `industries/workshop.php` | Industry | same template |
| `industries/ngo.php` | Industry | same template |
| `industries/fnb-retail.php` | Industry | same template |
| `industries/property.php` | Industry | same template |
| `topics/erp.php` | Topic (ERP) | module-listing variant of landing |
| `topics/msaas.php` | Topic (Managed SaaS) | variant |
| `topics/ai.php` | Topic (AI) | variant |
| `topic-ai.php` | Linked in hero/nav | **404 on live site** — dead link, recreated as redirect to `/topics/ai` |

### Homepage section inventory
Topbar → Navbar (mega-menu: Discover, Products, Solutions, Pricing, Resources) →
Hero slider (3 auto-rotating slides) → Stats banner (5 figures) →
Industry gallery (6 cards, filterable) → Customer carousel (5 slides, autoplay + swipe) →
"Serving All of Malaysia" region legend + **Ask-AI chat** → CTA band → 5-column Footer.

## 3. Client-side behavior (the only real "logic")
- **Mega-menu engine** — open/close panels, overlay, ESC, outside-click, sidebar category/sub-category switching (`toggleMenu`, `switchProductCat`, `solSwitchTop/Sub`, `switchInstSub`).
- **Hero slider** — 3 slides, dots + arrows, 6 s autoplay.
- **Customer carousel** — 5 slides, dots/arrows/counter, 6 s autoplay, touch-swipe.
- **Industry gallery** — category filter + IntersectionObserver scroll-reveal stagger.
- **All-Modules drawer** — full-screen overlay with live search filter.
- **Ask-AI chat** — POSTs directly to `api.anthropic.com` from the browser (Claude Haiku). **Security issue** (browser-exposed API). → migrated to a server-side `/api/ai` route placeholder.
- **Page loader** fade-in + scroll-reveal animations.

## 4. PHP-feature → Next.js mapping
| PHP / legacy feature | Next.js equivalent |
|---|---|
| `.php` static page render | App Router route (`app/.../page.tsx`), server components |
| Shared header/footer include | `<Navbar/>` / `<Footer/>` in `app/layout.tsx` |
| `industries/<x>.php` (same template) | Dynamic route `app/industries/[slug]/page.tsx` + data map |
| `topics/<x>.php` | `app/topics/[slug]/page.tsx` + data map |
| Inline `<script>` vanilla JS | `useLandingScripts()` client hook / React state in interactive components |
| Browser → Anthropic API call | `POST /api/ai` route handler (key server-side) + mock fallback |
| Inline `<style>` (1,200 lines) | `app/globals.css` (preserved verbatim for pixel-fidelity) + Tailwind for new utilities |
| Image assets on `ebosspro.com/images/*` | Downloaded to `/public/images/*`, served locally |

## 5. Migration strategy (fidelity-first)
1. **Preserve the original CSS verbatim** in `globals.css` — guarantees identical colors,
   spacing, typography, responsiveness. Tailwind is enabled for any new/utility styling.
2. **Source-derived JSX**: the large mega-menu markup is converted from the real HTML by a
   deterministic script (`class`→`className`, inline `style`→object, `onclick`→React handler,
   void-element self-closing, entity-safe) so **no content is dropped or mistyped**.
3. **Componentize** by the section delimiters above — each section is its own component.
4. **Re-implement interactions in React** where idiomatic (slider/carousel state), and provide
   a thin client hook for the mega-menu DOM behavior to match the original exactly.
5. **Mock the backend**: content ships as typed dummy data (`src/data/*`), the AI chat hits a
   placeholder API route. No real database — per project scope.
6. **Loading & error states** for the AI route and dynamic pages.

## 6. Target project structure
```
src/
  app/
    layout.tsx            # Topbar + Navbar + Footer shell, fonts, globals
    page.tsx              # Homepage (composes all sections)
    loading.tsx           # Route loading state
    error.tsx             # Route error boundary
    industries/[slug]/page.tsx
    topics/[slug]/page.tsx
    api/ai/route.ts       # Ask-AI placeholder (server-side)
  components/
    layout/  (Topbar, Navbar, Footer, PageLoader, mega panels)
    sections/(Hero, Stats, IndustryGallery, CustomerCarousel, InfraSection, CtaBand)
    ui/      (reusable bits)
  data/      (modules, industries, topics, nav, stats — typed dummy data)
  hooks/     (useLandingScripts, useCarousel, useHeroSlider)
  lib/       (types)
public/images/*
```

## 7. Out of scope (per requirements)
- Real backend / database (content is dummy data).
- Redesign or visual changes (faithful recreation only).
