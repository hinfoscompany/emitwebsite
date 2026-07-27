# EMITS website

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS frontend for EMITS
(Engineering in Maintenance and Installation of Technical System), built from the
company's real vision, mission, values, services and product catalog.

## What's included

- `/` — Home: hero, motto strip, 9 solutions, vision/values, product preview,
  productive-use equipment, impact numbers, contact CTA
- `/about` — Vision, full mission, objectives, values, org chart
- `/services` — All 9 service areas with descriptions and benefits
- `/products` — Full catalog (lighting kits + productive-use equipment) with
  category filtering
- FR/EN language toggle (`lib/LanguageContext.tsx`) — French is the default,
  matching EMITS' stated default language. All copy lives bilingually in
  `lib/content.ts`, so adding a third language (e.g. Kirundi) means extending
  the `Bi` type and every content entry — see "Adding a language" below.
- Brand tokens (green `#0E8A4A`, solar yellow `#FDB813`, deep navy `#06283D`)
  wired into `tailwind.config.ts`
- Scroll reveals and animated counters (`components/ui/Reveal.tsx`,
  `components/ui/Counter.tsx`) built on `IntersectionObserver`, no animation
  library dependency

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's deliberately NOT wired up yet

This is the frontend layer only. The original brief's full scope (database,
auth, admin dashboard, customer portal, quote/booking workflows, blog, careers,
email, file uploads) is a separate, much larger build. Specifically still
missing:

- **Data layer** — Prisma schema + PostgreSQL. Content currently lives as
  static TypeScript in `lib/content.ts` rather than a database.
- **Forms and submissions** — the quote/contact buttons currently link to
  `mailto:` / anchor targets rather than a working multi-step form with
  validation (React Hook Form + Zod) and email delivery (Resend).
- **Auth** — NextAuth, customer portal, admin dashboard.
- **Media** — Cloudinary image hosting; icons are currently Lucide, and
  product/project photography is represented with icon placeholders rather
  than real photos.
- **Remaining pages** — Projects, Blog, Careers, FAQ, Partners are in the
  original brief but not built yet.
- **SEO/perf polish** — sitemap.xml, robots.txt, structured data, PWA manifest.

## Adding a language

1. Extend `Lang` in `lib/content.ts` (e.g. `"fr" | "en" | "rn"`).
2. Add the third value to every `Bi`-shaped object (or migrate `Bi` to a
   `Record<Lang, string>`).
3. Add a third button to the toggle in `components/Header.tsx`.

## Project structure

```
app/
  layout.tsx        root layout, fonts, language provider
  page.tsx           home page
  about/page.tsx
  services/page.tsx
  products/page.tsx
  globals.css
components/
  Header.tsx, Footer.tsx, PageHeader.tsx
  Hero.tsx, MottoStrip.tsx, SolutionsGrid.tsx, WhyValues.tsx,
  ProductsGrid.tsx, ProductiveStrip.tsx, ImpactSection.tsx, CTASection.tsx
  ui/Reveal.tsx, ui/Counter.tsx
lib/
  content.ts          all bilingual copy and structured data
  LanguageContext.tsx  FR/EN state
```
