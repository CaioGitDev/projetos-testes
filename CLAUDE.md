# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Lint with Biome
npm run format     # Format with Biome (writes changes)
npm run check      # TypeScript/Astro type checking
```

## Architecture

**Stack**: Astro 5 (SSG) + React 19 for interactive islands + TailwindCSS 3 + TypeScript strict mode.

**Component split**: Static layout (Header, Footer, ProjectCard) lives in `src/components/astro/` as `.astro` files. Interactive components (Carousel, Gallery, ContactForm, MobileMenu) live in `src/components/react/` as `.tsx` files and are hydrated with `client:load`.

**i18n**: URL-prefix routing (`/pt/`, `/en/`). Pages are duplicated under each locale in `src/pages/`. Translations are JSON files in `src/i18n/locales/`. The i18n helper in `src/i18n/index.ts` handles locale detection from the URL.

**Data layer**: Mock data and TypeScript interfaces are in `src/lib/cms.ts`, designed for eventual migration to Contentful or Sanity. No backend — all state is client-side.

**Path aliases**: `@/components`, `@/layouts`, `@/lib`, `@/i18n` (configured in `tsconfig.json`).

## Code Style

Biome enforces: 2-space indentation, 100-char line width, double quotes, ES5 trailing commas.

Custom Tailwind theme colors: `primary` (#ffcc00 yellow), `dark` (#1a1a1a), `light` (#f5f5f5).
