# BITE Bakery & Café

A bakery and café website for BITE in Malmö, Sweden. Browse the home, menu, about, gallery, and contact pages. The contact page does not yet include a form.

Built with React, TypeScript, React Router, and Vite+.

## Getting started

Install [Vite+](https://viteplus.dev/guide/) and dependencies, then start the development server:

```sh
vp install
vp dev
```

## Commands

```sh
vp check       # format, lint, and type-check
vp run build   # type-check and build for production
vp preview     # preview the build locally
```

Menu items live in `src/data/menu.json`; page copy lives in `src/pages/*/*.content.ts`. Vercel rewrites routes to `index.html` for client-side navigation.
