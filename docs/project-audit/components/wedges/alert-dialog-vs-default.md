# Wedges Alert-Dialog vs Default

## 1. Audit Metadata

- Style: wedges
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/wedges/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Wedges' only non-swap change is deleting the Content border classes (borderless
panel, as linear/material). Overlay, Action/Cancel mapping, type, animations,
and exports unchanged. Own-style import verified.

## 3. Base Classes

Overlay identical. Content: border deleted (UNVERIFIED, BORDER);
`bg-wedges-background`, `sm:rounded-wedges-lg` prefix swaps (Corroborated).
Action/Cancel unchanged.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel flow through wedges buttonVariants. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/wedges/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace only.

## 12. Typography and Global Styling

Title/description type identical (namespace tokens).

## 13. Findings and Upgrade Preservation

Findings: (1) borderless Content — UNVERIFIED (preserve; keep own-style import
re-pointed on migration).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm borderless panel as intended.
