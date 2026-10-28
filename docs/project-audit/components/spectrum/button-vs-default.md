# Spectrum Button vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/spectrum/ui/button.tsx:1-61`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Spectrum is the densest style (smallest heights, only `py` change in the system)
with pill shape and a foreground-asserting outline. Its `icon-sm` uniquely shrinks
icons. It imports `next/link` but defines no `ButtonLink` — vestigial import
drift alongside the missing export. Ubuntu inherited.

## 3. Base Classes

`spectrum:9` vs `default:9`: prefix swap + `rounded-dft-md` → `rounded-full`.
All states unchanged. Shape: UNVERIFIED, Needs-designer (concern SHAPE); rest
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`spectrum:12-22`) | Change | Classification |
|---|---|---|---|---|
| default / destructive / secondary / ghost / link | baseline | `spctm` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `border border-dft-input bg-dft-background hover:bg-dft-accent …` (no resting text color) | `border border-spctm-input text-spctm-foreground hover:bg-spctm-accent hover:text-spctm-accent-foreground` (no background assertion) | Resting text color asserted (only style doing so on outline); background transparent until hover | UNVERIFIED, Needs-designer (concern COLOR) |

## 5. Sizes

| Size | Default | Alternative (`spectrum:25-30`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-8 px-4 py-1.5` | Much shorter; only `py` change in the system |
| sm | `h-9 rounded-dft-md px-3` | `h-7 px-2.5` | Shortest sm in the system, no radius utility |
| lg | `h-11 rounded-dft-md px-8` | `h-9 px-6` | Shortest lg, no radius utility |
| icon | `h-10 w-10` | `h-8 w-8` | Smaller |
| icon-sm | `h-9 w-9` | `h-7 w-7 [&_svg]:size-3.5` | Smaller + icon override to `size-3.5` (only icon-size override in the system; base `size-4` retained elsewhere) |
| icon-lg | `h-11 w-11` | `h-9 w-9` | Smaller |

Density + icon override: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover, focus (`ring-2`, `offset-2` retained), disabled identical. NO_DIFFERENCE
beyond §4–§5. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight` — but `import Link,
{ LinkProps } from "next/link"` remains at `spectrum:3`, the only style with the
import and not the component. Import: PARITY_DIVERGENCE, Open (concern TECHNICAL) —
leftover from a deletion (drift), harmless at runtime, lint-visible. Export:
PARITY_DIVERGENCE, Open (concern API). Consumers use `Button` only — no in-repo
breakage.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED. Density extremes are noted
for future tap-target review, not claimed as failures.

## 10. Imports and Dependencies

Vestigial `next/link` import (§8). Otherwise identical. No dependency changes.

## 11. Token Dependencies

`spctm-*` namespace (truncated prefix). Semantic tokens alias
`--spctm-color-primary-600` etc. (`app/globals.css:868-886`); `--spctm-radius:
0.4rem` (mostly superseded by `rounded-full`).

## 12. Typography and Global Styling

No component-level change. Family Ubuntu via inherited `font-spectrum`
(`registry/styles.tsx:237-238`; `lib/fonts.ts:41-46`).

## 13. Findings and Upgrade Preservation

Findings: (1) pill — UNVERIFIED; (2) outline fg assertion — UNVERIFIED; (3) densest
sizes + `py-1.5` + icon-sm override — UNVERIFIED; (4) vestigial import —
PARITY_DIVERGENCE (remove, or restore `ButtonLink` — designer call);
(5) missing `ButtonLink` — PARITY_DIVERGENCE.

## 14. Verification

Both files read fully; consumer grep done. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm density + outline + pill as intended spectrum language.
2. Remove import or restore `ButtonLink`?
