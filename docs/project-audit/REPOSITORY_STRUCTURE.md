# REPOSITORY_STRUCTURE

Verified 2026-10-09 by directory listing + targeted file reads. Paths repository-relative.

## Root

- `package.json` — Next 14.2.5 / React 18.3.1 / Tailwind 3.4.1 / shadcn 2.4.0-canary.20; scripts
  `dev`, `build` (= `generate:registry-prod && next build`), `generate:registry-local`,
  `registry:build`, `postbuild: next-sitemap`.
- `pnpm-lock.yaml` — pnpm is the package manager.
- `next.config.mjs` — strict mode, `fs`/`path` fallback off, `transpilePackages: [shiki]`,
  images `images.unsplash.com`.
- `tailwind.config.ts` (875 lines) — v3 config; `darkMode: ["class"]`; content
  `components/`, `app/`, `registry/`; 12 prefixed color namespaces + legacy + gray;
  per-prefix radius; extended fontFamily; accordion keyframes; `tailwindcss-animate` plugin.
- `components.json` — shadcn client config; **stale**: `tailwind.css: src/styles/globals.css`
  does not exist (real file `app/globals.css`).
- `registry.json` (root, 58 lines) — **stale sample** (hello-world + 4-file carbon); the real
  registry is `registry/*.ts`.
- `postcss.config.mjs`, `tsconfig.json`, `tsconfig.scripts.json`, `.eslintrc.json`,
  `prettier.config.cjs`, `next-sitemap.config.js`, `next-env.d.ts`.
- `__registry__/` — checked-in generated output (spot-check pending). `.next/` — build output.

## `app/`

- `layout.tsx` — root layout: `globals.css` + `themes.css`, `fontVariables`, `font-sans`,
  `NextThemesProvider`, `ThemeCustomizerWrapper`, `DevTools`, site `Toaster`, Analytics.
- `globals.css` (1903 lines) — `@tailwind` + `@layer base`: `:root` legacy vars, 12 prefixed
  token blocks, `.dark` legacy overrides. Single source of token truth (with `themes.css`).
- `themes.css` (595 lines) — `.theme-<style>-palette*` overrides incl. `.dark` variants
  (catalyst palettes verified at lines 1-120; full coverage pending).
- `catalyst-old.css`, `themes-old.css`, `simple.css` — legacy evidence; do not delete.
- `(styles)/` — standalone style layout + `dashboard/` (contents pending).
- `(www)/` — marketing site: `page.tsx`, `layout.tsx`, `account/`, `blocks/`, `colors/`,
  `typography/`, `_docs/`, `styles/{page.tsx, carbon/, moon/, neon/, wedges/, components/}`.
  Only 4 per-style www subpages exist vs 12 styles — gap to record in Stage 6.
- `(preview)/block`, `(internal)/`, `(test)/`, `robots.ts`, `sitemap.ts`, `not-found.tsx`.

## `registry/` (the product)

- Composition/config: `index.ts`, `registry-core.ts`, `registry-ui.ts` (48 items + deps),
  `registry-styles.ts` (12 style defs + `defaultRadius`), `registry-themes.ts`, `themes.ts`,
  `registry-blocks.tsx`, `registry-examples.ts`, `registry-categories.ts`,
  `registry-charts.ts`, `registry-hooks.ts`, `registry-icons.ts`, `registry-lib.ts`,
  `registry-internal.ts`, `registry-index.tsx`, `registry-palettes.tsx`.
- `styles.tsx` (623 lines) — runtime resolvers: background/foreground/font/prefix getters,
  `renderStyleCardShowcase/Hero/ShowcaseComponents/PageExample`. Imports every style's
  showcase + page modules (lines 1-161).
- Per-style dirs (each): `ui/` (48 files, identical filenames), `example/`, `examples/`,
  `blocks/`, `components/`, `hooks/`, `lib/`, `internal/`, hero/showcase/card-showcase/
  `page-examples.tsx`/`showcase.tsx`/`registry-index.tsx`; `moon/` additionally has
  `charts/`, `charts-demo.tsx`; `carbon/` has `hello-world/`, `read.js`.
- `lib/styles.ts` inside repo root `lib/` (default/new-york only) is **legacy**, superseded by
  `registry/registry-styles.ts` + `hooks/use-style-store.tsx`.

## `components/` (site chrome, not the style kits)

Own `ui/` copy (registry 48 + `animated-dialog`, `fullscreen-dialog`, `rich-badge`),
plus `theme-customizer.tsx`, `dev-tools.tsx`, `next-themes-provider.tsx`, etc.
Baseline provenance vs `registry/default/ui/` unverified — Stage 5 question.

## `lib/`, `hooks/`, `config/`, `utils/`

- `lib/`: `utils.ts` (`cn`), `fonts.ts` (7 next/font loaders), `styles.ts` (legacy),
  `themes.ts`, `registry.ts`, `generate-registry.ts`, `registry-script.mjs`,
  `component-loader.tsx` (dynamic `@/registry/<style>/example/<name>-demo`),
  `copy.ts`, `highlight-code.tsx`, `color.js`, `cssVarsToJs.js`, `use-theme-palette-store.tsx`,
  `use-forwarded-ref.tsx`.
- `hooks/`: `use-style-store.tsx` (12-style zustand store + STYLES_DATA + page types),
  `use-config.ts`, `use-load-component.tsx`, `use-media-query.tsx`, `use-mobile.tsx`,
  `use-mounted.ts`, `use-mutation-observer.tsx`, `use-theme-color.ts`.
- `config/`: `site-config.tsx` (`BASE_SITE_URL` used by registry gen), `types.ts`
  (`RegistryType`, `BlockPlan`), `blocks-registry.ts`, `blocks-preview-images.ts`, `block-script.tsx`.
- `utils/` — contents pending (Stage 2).

## `scripts/`, `public/`, `code/`, `pages/`

- `scripts/`: `generate-registry.mts` (793 lines, ts-morph → `public/r`),
  `build-registry.mts`, `capture-registry.mts`, `fix-import.mts` (import fixer referenced in
  git log `9abce6e`; behavior pending).
- `public/r/` — generated registry JSON (pending diff vs `__registry__/`).
- `code/`, `pages/` (pages-router remnants?) — pending inspection.

## Git history (available, read-only)

`git log --oneline -15` shows registry generation stabilization (`5ce9cc8`, `c06185d`),
style registry commands, import fixing (`9abce6e`), internal sink components (`7a1f0cc`),
and the HEAD fix `0fb3bdb` (toggle-group import path + card paddings across registries).
No changes made by this audit.
