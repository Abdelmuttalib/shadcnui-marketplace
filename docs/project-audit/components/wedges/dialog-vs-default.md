# Wedges Dialog vs Default

## 1. Audit Metadata

- Style: wedges
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/wedges/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Wedges' only non-swap change is deleting the Content border classes (borderless
dialog, as material). Overlay, geometry, animations, Close focus stack, type,
and exports unchanged.

## 3. Base Classes

Overlay identical. Content: `border border-dft-border` deleted with no
replacement (UNVERIFIED, BORDER — borderless panel); `bg-wedges-background`,
`sm:rounded-wedges-lg` are prefix swaps (Corroborated). Close: full ring-2/
offset-2 retained.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace; `--wedges-radius: 0.5rem`.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) borderless Content — UNVERIFIED (preserve; do not restore a
border without designer sign-off).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm borderless dialog as intended wedges language.
