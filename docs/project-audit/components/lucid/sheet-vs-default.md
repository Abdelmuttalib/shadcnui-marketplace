# Lucid Sheet vs Default

## 1. Audit Metadata

- Style: lucid
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/lucid/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Lucid is a prefix swap that keeps per-side border colors
(`border-{side}-lucid-border` on all four sides — the colored-edge minority,
with spectrum and snow). Overlay, Close, type, durations, default side, and
exports unchanged.

## 3. Base Classes

Overlay identical (`bg-black/80`). Base `bg-lucid-background` prefix swap. Sides:
`border-{side}-lucid-border` explicitly present on top/bottom/left/right
(UNVERIFIED, BORDER — minority pattern against the five width-only styles).
Close: namespace tokens, full ring-2/offset-2 retained. Title correctly
prefixed (`text-lucid-foreground`).

## 4. Variants

Side system + `defaultVariants.side: "right"` + `side = "right"` identical.
PARITY_EXPECTED for the contract.

## 5. Sizes

No size scale. `p-6`, `w-3/4`, `sm:max-w-sm` unchanged.

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

`lucid-*` namespace only.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) kept side-border colors — UNVERIFIED (preserve; set-level ruling
candidate against the width-only majority).

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Should side edges keep colors (this minority) or go width-only (majority)?
