# Linear Alert-Dialog vs Default

## 1. Audit Metadata

- Style: linear
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/linear/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Linear's only non-swap change is deleting the Content border classes (borderless
panel). Overlay, Action/Cancel mapping (default/outline), type, animations, and
exports unchanged. Own-style `buttonVariants` import verified.

## 3. Base Classes

Overlay identical. Content: `border border-dft-border` deleted, `bg-linear-background`
kept (UNVERIFIED, BORDER — borderless panel, as material/wedges); `sm:rounded-linear-lg`
prefix swap (Corroborated). Action `buttonVariants()`, Cancel
`buttonVariants({ variant: "outline" }) + "mt-2 sm:mt-0"` unchanged.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel states flow through linear buttonVariants.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/linear/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace only.

## 12. Typography and Global Styling

Title/description type identical (namespace tokens).

## 13. Findings and Upgrade Preservation

Findings: (1) borderless Content — UNVERIFIED (preserve; keep own-style import
re-pointed on migration).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm borderless panel as intended.
