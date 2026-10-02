# Shree Narayan Traders — Official Website

Production-ready Next.js website for **Shree Narayan Traders**, a construction and engineering company.

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 14.x (App Router) |
| React | 18.x |
| TypeScript | 5.x (strict) |
| Tailwind CSS | 3.x |
| ESLint | 8.x |
| Lucide React | Latest |

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout — metadata, fonts, Header, Footer
    page.tsx            # Homepage placeholder
    globals.css         # Design tokens, Tailwind component classes
    sitemap.ts          # /sitemap.xml
    robots.ts           # /robots.txt
    about/page.tsx
    services/page.tsx
    projects/page.tsx
    contact/page.tsx

  components/
    layout/
      Header.tsx        # Sticky header with nav
      Footer.tsx        # Footer with nav and contact
      MobileNav.tsx     # Client component — mobile hamburger menu
    ui/
      SchemaOrg.tsx     # JSON-LD / schema.org components
    sections/           # Page-level section components (to be added)

  lib/
    constants.ts        # SITE_CONFIG, NAV_LINKS
    utils.ts            # cn() class merge utility

  types/
    index.ts            # Shared TypeScript types

public/
  images/               # Static images
  icons/                # Favicon / app icons
```

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# → Edit .env.local with your actual values

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

See [`.env.example`](.env.example) for all required variables.

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production URL (no trailing slash) |

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## SEO Foundation

- Next.js Metadata API (title templates, OG, Twitter cards)
- `sitemap.xml` via `src/app/sitemap.ts`
- `robots.txt` via `src/app/robots.ts`
- JSON-LD / schema.org components (Organization, LocalBusiness)
- Semantic HTML structure across all pages
- Canonical URLs on every route

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — protected, no direct commits |
| `develop` | Active development branch |

> **Note:** Do not commit directly to `main`. All changes go through `develop` and a pull request.

## Configuration Required Before Launch

The following items need real business information before going live:

- [ ] `NEXT_PUBLIC_SITE_URL` → set production domain in `.env.local`
- [ ] `SITE_CONFIG.description` → compelling site description
- [ ] `SITE_CONFIG.contact` → address, phone, email
- [ ] `SITE_CONFIG.social` → Twitter/X, LinkedIn, Instagram handles
- [ ] OG image → `/public/images/og-image.jpg` (1200×630)
- [ ] Favicon/icons → `/public/favicon.ico`, `/public/apple-touch-icon.png`
- [ ] `/public/site.webmanifest`
- [ ] JSON-LD schema fields (uncomment after contact details confirmed)

---

*This project was initialized on the `develop` branch. Do not merge to `main` until the website is production-ready.*
