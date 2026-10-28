# Spectrum Popover vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: popover
- Baseline source: `registry/default/ui/popover.tsx:1-31`
- Alternative source: `registry/spectrum/ui/popover.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `spectrum:22`)

## 2. Executive Summary

Spectrum's only non-swap change is the border: `border-spctm-input/60`
(input token at 60% opacity instead of solid `border`). Geometry, animations,
and exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Content (`spectrum:22` vs `default:22`): `border-dft-border` →
`border-spctm-input/60` (UNVERIFIED, COLOR — softer edge); everything else
prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-72`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. defaults. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*`; edge uses the input token at 60%. Keep the `spctm` prefix.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) 60% input-token border — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

None.
