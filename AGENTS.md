# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains route-based `.astro` pages (e.g., `role-devops-engineer/`, `projects/`).
- `src/components/` holds reusable UI components, with shared variants under `shared/` and role-specific groupings under `software-dev/`, `it-support/`, and `ide/`.
- `src/layouts/` defines page wrappers like `Layout.astro`.
- `src/styles/` contains global CSS (`global.css`).
- `src/data/` and `src/types/` hold structured content and TypeScript types.
- `src/utils/` includes client-side helpers.
- `public/` is for static assets (e.g., `public/assets/`, `favicon.ico`, `sitemap.xml`).
- `dist/` is the build output (generated).

## Build, Test, and Development Commands
- `npm install` or `npm ci`: install dependencies.
- `npm run dev`: run local dev server with the GitHub Pages base path (`/portfolio/`).
- `npm run start`: run dev server without the base path override (useful for local-only routes).
- `npm run build`: build the static site into `dist/`.
- `npm run preview`: preview the production build locally.

## Coding Style & Naming Conventions
- Follow existing file conventions: `.astro` files use tabs and double quotes; `.ts` files use 2-space indentation and single quotes.
- Keep component and layout names in PascalCase (e.g., `LandingHeader.astro`).
- Route folders use kebab-case (e.g., `role-data-analyst/`), and pages map to routes by filename.
- Tailwind CSS is used for styling; prefer utility classes and keep custom CSS in `src/styles/global.css`.

## Testing Guidelines
- No automated test framework is configured yet.
- Validate changes by running `npm run dev` for UI checks and `npm run build` to ensure production build passes.

## Commit & Pull Request Guidelines
- Commit history shows short, descriptive messages without a strict convention; keep messages concise and action-oriented (e.g., “Fix header layout”).
- PRs should include: a brief summary, testing notes (commands run), and screenshots for visible UI changes.
- Link related issues when applicable.

## Deployment & Configuration Notes
- GitHub Actions deploys from `main` to GitHub Pages using `npm run build`.
- Base URL is configured in `astro.config.mjs` (`/portfolio/`); ensure routes and asset links respect this.

## Arahan Bahasa (Melayu Gen Z)
- Kalau nak berbual dalam Bahasa Melayu Gen Z, gunakan gaya santai dan ringkas (contoh: "boleh settle", "ringkas je", "buat cepat").
- Nyatakan konteks fail atau lokasi jelas (contoh: `src/pages/` atau `public/assets/`) dan sebut output yang diingini.
