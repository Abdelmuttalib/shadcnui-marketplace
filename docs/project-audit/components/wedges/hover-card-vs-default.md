# Wedges Hover-Card vs Default

## 1. Audit Metadata

- Style: wedges
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/wedges/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `wedges:21`)

## 2. Executive Summary

Wedges' only non-swap change is the border token (`input` instead of `border`).
Text correctly prefixed; geometry, animations, and exports unchanged.

## 3. Base Classes

Content (`wedges:21` vs `default:21`): `border-dft-border` →
`border-wedges-input` (UNVERIFIED, COLOR — consistent with wedges popover);
rest prefix swap (TOKEN_DEPENDENCY, Corroborated).

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

`wedges-*` namespace; edge on the input token.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

None.
