# AI Copilot Instructions - Portfolio Website

## Project Overview
An Astro-based portfolio website showcasing dual professional roles (Software Developer & IT Support). The site uses **profile-based customization** with localStorage to dynamically show role-specific content—a key architectural pattern throughout the codebase.

Always respond in Bahasa Melayu. Use Gen Z tone and emoji for full emotional respond. Break task into few chunk of steps for heavy request. When creating a full documentation, always to clean up file not used again for better space in project folder and structure.

## Build & Run Commands
```bash
npm run dev --base=/portfolio/        # Development with GitHub Pages base
npm run build                         # Production build (outputs to dist/)
npm run preview                       # Preview built site locally
```

## Critical Architecture Patterns

### 1. Profile-Based Content System
The portfolio dynamically adapts content based on selected profile (`it-support` or `software-developer`):
- **Config**: `src/utils/profileContext.ts` defines `PROFILE_CONFIG` with metadata, colors, icons, and skills per role
- **Selection**: `src/components/ProfileSelector.astro` modal displays on first visit, stores choice in `localStorage.selectedProfile`
- **Navigation**: `src/pages/role-it-support/` and `src/pages/role-software-developer/` contain role-specific pages
- **Pattern**: Pages import components and use `localStorage` to conditionally render role-appropriate content (e.g., `home-it-support.astro` vs `home-software-developer.astro`)
- **JavaScript integration**: Client-side logic in project detail pages reads localStorage to determine correct "back" navigation

### 2. Site Structure with GitHub Pages Base
- **Base URL**: Deployed to `/portfolio/` subdirectory on GitHub Pages
- **Config**: `astro.config.mjs` sets `base: '/portfolio/'`
- **Usage**: All links use `{import.meta.env.BASE_URL}` prefix (e.g., `{import.meta.env.BASE_URL}projects/stylehub`)
- **Critical**: When adding new pages/links, always prepend BASE_URL to relative paths to avoid broken routing

### 3. Component Reusability & Styling Conventions
- **CSS Variables**: `src/styles/global.css` defines theme colors (`--primary-color`, `--background-color`, etc.) for consistent branding
- **Button Styles**: `.button_primary` (filled) and `.button_secondary` (outlined) classes provide standard CTAs
- **Dark Theme**: Background `#121212`, card `#1e1e1e`, with primary accent `#0a58ca` (blue)
- **Tailwind + CSS**: Mix of Tailwind utility classes and custom CSS for fine-grained control
- **Project Cards**: Reusable pattern with badges (e.g., `.project-badge`), descriptions, and action buttons

### 4. Project Detail Pages
- **Location**: `src/pages/projects/*.astro` for individual project pages
- **Pattern**: Each has hero image, overview grid, key features, and project links
- **Back Navigation**: Uses localStorage-based profile detection to route back to correct role projects page
- **Example**: See `rumah-tenang.astro` or `stylehub.astro` for full-featured templates
- **New Projects**: Copy structure from existing project, update title/description/technologies/features

## Deployment & SEO
- **GitHub Actions**: Configured in workflow (not in repo) to build and deploy on push to main
- **SEO Setup**: 
  - `Layout.astro` includes canonical URLs and Open Graph meta tags
  - Each page defines `title`, `description`, and optional `canonical` props
  - Google Analytics & Search Console verified (see `public/` docs)
- **Manifest & PWA**: `public/manifest.json` for installable app experience

## Key Files Reference
| File | Purpose |
|------|---------|
| `src/layouts/Layout.astro` | Base HTML template, meta tags, PWA setup |
| `src/styles/global.css` | Theme colors, button styles, animations (995 lines) |
| `src/utils/profileContext.ts` | Profile config and localStorage utilities |
| `src/components/ProfileSelector.astro` | Modal for role selection on first visit |
| `astro.config.mjs` | Base path, Tailwind integration, build config |
| `tailwind.config.mjs` | Tailwind customization (if present) |

## Common Tasks

### Adding a New Project Page
1. Create `src/pages/projects/[project-name].astro`
2. Use `stylehub.astro` or `rumah-tenang.astro` as template
3. Replace project metadata: title, description, tech stack, features, links
4. Ensure back button logic uses `localStorage.getItem('selectedProfile')` to navigate to correct role
5. Test with `npm run dev` and navigate via profile pages

### Updating Role-Specific Content
1. Edit corresponding page in `src/pages/role-[role]/` (e.g., `role-software-developer/index.astro`)
2. Verify all links use `{import.meta.env.BASE_URL}` prefix for relative URLs
3. Cross-check profile config in `profileContext.ts` for consistency

### Modifying Styling
- **Global changes**: Update CSS variables in `src/styles/global.css` (e.g., color scheme)
- **Component-specific**: Add scoped `<style>` tags in `.astro` files or inline Tailwind classes
- **Dark theme**: Maintain consistency with existing palette; avoid hard-coded colors in HTML

## Development Workflow
1. **Local dev**: `npm run dev --base=/portfolio/` to match deployed environment
2. **Testing**: Manually test profile selection modal and role-specific routing
3. **Build verification**: Run `npm run build` to catch asset/import errors before pushing
4. **GitHub Pages**: Push to main branch; GitHub Actions handles deployment (verify in GitHub Actions tab)

## Project-Specific Conventions
- **Import paths**: Use relative paths from file location; let Astro resolve
- **Environment variables**: Access with `import.meta.env.BASE_URL` (set in config)
- **Asset references**: Prefix with `BASE_URL` in templates: `{import.meta.env.BASE_URL}assets/image.webp`
- **Markdown files**: `TODO.md`, `changes.md`, `PLAN_SALES_DASHBOARD.md` document planning; not part of build

## Notes for Future Features
- **Sales Dashboard**: Planned interactive analytics feature (see `PLAN_SALES_DASHBOARD.md`) with chart animations and responsive filters
- **Blog/Writings**: TODO item suggests adding `/blog/` section for technical articles (not yet implemented)
- **Data Analyst Role**: Third profile role option exists in codebase structure but not fully active (see `role-data-analyst/`)
