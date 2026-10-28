# progress — Baseline Audit (default-a8d26cf-20261010)

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/progress.tsx`
- Line count: 28
- Capture date: 2026-10-09
- Status: Complete
- Method: Static source read of verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Single `Progress` wrapper over Radix progress root plus inner indicator.
Fill position is an inline `translateX` style derived from `value` with zero fallback.
No variants or sizes; track and fill use `dft-secondary` and `dft-primary`.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `Progress` | `React.forwardRef` | `React.ElementRef<typeof ProgressPrimitive.Root>`, `React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>`; destructures `{ className, value, ...props }`; `value` consumed for style but not re-passed explicitly (falls in `...props` only if present — source destructures it out, so only `style` carries it) | No local defaults; `value || 0` fallback in style math |

Export statement: `export { Progress };`.

## 4. Variants

None — no `cva` in source.

| Key | Exact classes |
| --- | --- |
| none | — |

## 5. Sizes

No size scale.

## 6. Interaction States

- Hover / focus / disabled / checked / open / selected / active: none in source.
- Dark: no `dark:` classes in source.
- Responsive: no responsive prefixes in source.
- Value-driven fill: `value` prop drives inline transform (see Behavior); not a CSS state class.

## 7. DOM and Component Structure

- Outer: `<ProgressPrimitive.Root ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-dft-secondary", className)} {...props}>`.
- Inner: `<ProgressPrimitive.Indicator className="h-full w-full flex-1 bg-dft-primary transition-all" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />` with no `ref` and no prop spread.
- Primitives: `@radix-ui/react-progress` `Root` + `Indicator`.
- Display name: `Progress.displayName = ProgressPrimitive.Root.displayName;` (source-derived).

## 8. Behavior

- Fill slides horizontally as `value` changes — inferred from source (effect inferred from `"transition-all"` plus inline `transform: translateX(-(100 - value)%)`; no browser verification).
- Track clips overflowing fill — inferred from source (effect inferred from `"relative ... overflow-hidden"`; no browser verification).
- Missing/zero `value` renders empty fill at `-100%` — inferred from source (effect inferred from `(value || 0)` fallback math; no browser verification).

## 9. Accessibility

- Source facts only: relies on Radix `ProgressPrimitive.Root` for `progressbar` semantics; no explicit `role`, `aria-valuenow`, or keyboard handling in this file; `value` is destructured for style and remaining props spread to root — with the consequence that `Root` never receives `value`, so Radix cannot derive `aria-valuenow`/native progress semantics from it (source-derived consequence, not a browser-tested failure claim).
- No runtime/browser verification.

## 10. Imports and Dependencies

- External: `"@radix-ui/react-progress"` as `ProgressPrimitive`; `"react"` as `React`.
- Internal: `{ cn }` from `"@/lib/utils"`.
- No `@/registry/default/*` imports in this file.

## 11. Token Dependencies

Each `dft-*` token observed (values unresolved — not verified against theme files in this doc):

- `dft-secondary` in `"relative h-4 w-full overflow-hidden rounded-full bg-dft-secondary"`.
- `dft-primary` in `"h-full w-full flex-1 bg-dft-primary transition-all"`.

Token values marked unresolved where not verified.

## 12. Upgrade-Sensitive Areas

- No travel math in this file.
- Transform math (exact): ``style={{ transform: `translateX(-${100 - (value || 0)}%)` }}`` — assumes `value` in 0–100 range; no clamping in source; `null`/`undefined`/`0` all map to `-100%`.
- `value` is destructured out and not explicitly re-passed to `Root`; downstream `value` delivery depends on Radix reading props via `...props` exclusion — source-exact destructuring `{ className, value, ...props }`.
- Indicator has fixed `className` with no `className` merge prop.
- Arbitrary values: none.

## 13. Verification

- Read: full file `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/progress.tsx` (28 lines).
- Verified: root and indicator class strings, transform template string, `value || 0` fallback, `displayName` delegation, single export.
- Assumptions: none beyond source text; Radix ARIA mapping and `cn` merging not verified.

## 14. Unresolved Questions

1. Should `value` be clamped to 0–100, or is out-of-range input intentionally unhandled?
2. Should the indicator accept a `className` override, given it is currently fixed?
