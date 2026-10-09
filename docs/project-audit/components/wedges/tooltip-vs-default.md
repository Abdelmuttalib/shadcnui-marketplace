# Wedges Tooltip vs Default

## 1. Audit Metadata

- Style: wedges
- Component: tooltip
- Baseline source: `registry/default/ui/tooltip.tsx:1-30`
- Alternative source: `registry/wedges/ui/tooltip.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `wedges:22`)

## 2. Executive Summary

Wedges' only non-swap change is the border token (`input` instead of `border`).
Text correctly prefixed; padding, animations, and exports unchanged.

## 3. Base Classes

Content (`wedges:22` vs `default:22`): `border-dft-border` →
`border-wedges-input` (UNVERIFIED, COLOR — consistent with wedges
popover/hover-card); rest prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `px-3 py-1.5`, `text-sm` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. `sideOffset={4}`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace; edge on the input token.

## 12. Typography and Global Styling

`text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) input-token border — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

None.
