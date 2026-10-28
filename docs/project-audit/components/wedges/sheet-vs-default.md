# Wedges Sheet vs Default

## 1. Audit Metadata

- Style: wedges
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/wedges/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Wedges matches linear/material in kind: prefix swap plus width-only side borders
(all four colors dropped). Overlay, Close, type, durations, default side, and
exports unchanged.

## 3. Base Classes

Overlay identical. Base `bg-wedges-background` prefix swap. Sides: widths kept,
all four colors dropped (UNVERIFIED, BORDER — set-level ruling candidate).
Close: namespace tokens, ring stack retained. Title correctly prefixed.

## 4. Variants

Side system + default `"right"` identical. PARITY_EXPECTED for the contract.

## 5. Sizes

No size scale. Geometry unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps`, all 10 exports, non-exported `sheetVariants`, `side`
default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace only.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) width-only side edges — UNVERIFIED (preserve; set-level ruling
candidate).

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Are colorless side edges deliberate?
