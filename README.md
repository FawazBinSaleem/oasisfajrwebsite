# Oasis Fajr Website

A React + TypeScript website built with TanStack Start, Vite, Tailwind CSS, and the Lovable TanStack configuration.

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Static GitHub Pages deployment

The project is configured to prerender all static routes into `.output/public`. The workflow at `.github/workflows/deploy-pages.yml` builds and deploys that directory whenever `main` is updated.

In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**. Keep the custom domain set to:

```text
oasisfajircontracting.com
```

The site contains no runtime server functions, so the prerendered output can be hosted as a static site. The custom `src/server.ts` file remains because Lovable's build process uses it while prerendering.

## Static assets

All images and other public files belong in `public/`. They are referenced from the site with root paths, for example:

```tsx
<img src="/media/oasisfajr.webp" alt="Oasis Fajr Contracting logo" />
```

## Generated files

Do not edit `src/routeTree.gen.ts` manually. TanStack Router regenerates it from the route files in `src/routes/`.
