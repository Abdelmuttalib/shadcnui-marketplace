# Wedges Popover vs Default

## 1. Audit Metadata

- Style: wedges
- Component: popover
- Baseline source: `registry/default/ui/popover.tsx:1-31`
- Alternative source: `registry/wedges/ui/popover.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `wedges:22`)

## 2. Executive Summary

Wedges' only non-swap change is the border token (`input` instead of `border`).
Geometry, animations, Portal, defaults, and exports unchanged.

## 3. Base Classes

Content (`wedges:22` vs `default:22`): `border-dft-border` →
`border-wedges-input` (UNVERIFIED, COLOR); everything else prefix swap
(TOKEN_DEPENDENCY, Corroborated).

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

`wedges-*` namespace; edge on the input token.

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED (preserve; consistent with wedges'
input-token edges elsewhere).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

None.
