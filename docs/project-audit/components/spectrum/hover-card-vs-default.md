# Spectrum Hover-Card vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/spectrum/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `spectrum:21`)

## 2. Executive Summary

Spectrum's only non-swap change is the border: `border-spctm-input/70`
(input token at 70% opacity). Text stays correctly prefixed; geometry,
animations, and exports unchanged. (Prefix `spctm`.)

## 3. Base Classes

Content (`spectrum:21` vs `default:21`): `border-dft-border` →
`border-spctm-input/70` (UNVERIFIED, COLOR — softer edge, consistent with
spectrum popover/tooltip); rest prefix swap (TOKEN_DEPENDENCY, Corroborated).

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

`spctm-*`; edge uses input at 70%. Keep the `spctm` prefix.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) 70% input-token border — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

None.
