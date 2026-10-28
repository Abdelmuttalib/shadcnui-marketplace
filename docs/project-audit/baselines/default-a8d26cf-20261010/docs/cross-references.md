# Cross-References — Baseline default-a8d26cf-20261010

Source-derived relationship map for the archived default implementation. All
paths below refer to `../sources/ui/` unless stated otherwise. Effects labeled
inferred where they go beyond source text; no runtime verification performed.

## 1. Shared utilities

- `cn()` (`../context/utils.ts`, `clsx` + `tailwind-merge`): used by every
  component that merges classes. Upgrade risk: HIGH — a `tailwind-merge`
  version change alters conflict resolution for every conflicting-utility pair
  (e.g. duplicate `shadow-sm`, `border` color pairs found in alternative styles;
  the default files themselves must be re-checked for latent conflicts).
- `buttonVariants` (`button.tsx`): consumed by `alert-dialog.tsx:7`,
  `calendar.tsx:8`, `carousel.tsx:10` (`Button`), `pagination.tsx:5`
  (`ButtonProps, buttonVariants`), `sidebar.tsx:10` (`Button`).
  Upgrade risk: HIGH — any variant/size/token change propagates to 6 consumers.
- `toggleVariants` (`toggle.tsx`): consumed by `toggle-group.tsx:8` (with
  `context.variant || variant` precedence). Upgrade risk: MEDIUM.
- `Label` (`label.tsx`): consumed by `form.tsx:16`. Upgrade risk: LOW (label is
  small, but form error wiring depends on its rendering).
- `Dialog, DialogContent` (`dialog.tsx`): consumed by `command.tsx:9`. Upgrade
  risk: MEDIUM.
- Table primitives (`table.tsx`): consumed by `data-table.tsx:10-17`.
  Upgrade risk: MEDIUM.

## 2. Internal dependency graph

```text
button ─┬─ alert-dialog (buttonVariants)
        ├─ calendar (buttonVariants)
        ├─ carousel (Button)
        ├─ pagination (ButtonProps + buttonVariants)
        └─ sidebar (Button)
toggle ─── toggle-group (toggleVariants)
label ──── form (Label)
dialog ─── command (Dialog, DialogContent)
table ──── data-table (Table×6)
input ──── sidebar (Input)
separator ─ sidebar (Separator)
sheet ──── sidebar (Sheet, SheetContent)
skeleton ─  sidebar (Skeleton)
tooltip ── sidebar (Tooltip + sub-imports)
```

Blast radius: a `button.tsx` change affects 6 files; a `toggle.tsx` change
affects 1; sidebar aggregates 6 modules — sidebar must be re-verified whenever
any of button/input/separator/sheet/skeleton/tooltip changes.

## 3. Global CSS and token dependencies

- Every styled component references `dft-*` utilities resolved via
  `../context/tailwind.config.ts` against CSS variables in
  `../context/globals.css` (`:root` light + `.dark` overrides).
- `../context/themes.css` carries per-palette overrides (catalyst palettes
  verified at audit time; full coverage belongs to the pending token audit).
- Font classes resolve via `../context/fonts.ts` (`next/font/google` loaders)
  applied on `<body>`; component files themselves carry almost no font-family
  classes (typography scale is size/weight only).
- Radius utilities (`rounded-dft-{sm,md,lg}`) derive from `--dft-radius`
  (0.4rem at capture; note the registry-declared 0.5rem mismatch recorded in
  the audit as an unresolved finding).
- Upgrade risk: HIGH — a Tailwind major version changes the variable-to-utility
  mechanism itself; a token rename silently breaks every referencing class
  string (no type safety on class names).

## 4. Dependency and configuration versions

Pinned at capture in `../MANIFEST.json` (`packages` + `radix` maps) with
`../context/package.json` + `../context/pnpm-lock.yaml` verbatim. Of special
upgrade relevance: `tailwindcss 3.4.1`, `next 14.2.5`, `react 18.3.1`,
`class-variance-authority 0.7.0`, `cmdk 0.2.0`, `vaul 1.1.2`,
`react-day-picker 8.10.1`, Radix 1.x–2.x set. Path alias `@/*` per
`../context/tsconfig.json`.

## 5. Verification status

Source-derived only. Component docs (`./<component>.md` × 48) record
per-component open questions; nothing here is browser-verified.
