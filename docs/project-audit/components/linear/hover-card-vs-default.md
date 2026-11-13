# Linear Hover-Card vs Default

## 1. Audit Metadata

- Style: linear
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/linear/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `linear:21`)

## 2. Executive Summary

Linear's only change is dropping the border color (bare `border`, no color
token). Text stays correctly prefixed; geometry, animations, and exports
unchanged.

## 3. Base Classes

Content (`linear:21` vs `default:21`): `border border-dft-border` → bare
`border` (border color dropped — PARITY_DIVERGENCE, Open, BORDER/TECHNICAL;
likely slip, confirm or restore `border-linear-border`); everything else prefix
swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-64`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No Portal added. No hover/focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. defaults. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace; border color absent (§3).

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless border — PARITY_DIVERGENCE/Open. Migration: confirm or
restore the border color.

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

1. Bare `border`: deliberate or slip?
