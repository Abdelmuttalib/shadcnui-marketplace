# Linear Sheet vs Default

## 1. Audit Metadata

- Style: linear
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/linear/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Linear is a prefix swap except for the side borders: all four sides keep
`border-{side}` widths but drop the `border-{side}-*-border` colors (width-only
edges, as carbon/material/catalyst/wedges). Overlay, Close, type, durations,
default side, and exports unchanged.

## 3. Base Classes

Overlay identical (`bg-black/80`). Base `bg-linear-background` prefix swap.
Sides: `border-b/border-t/border-r/border-l` retained, color halves dropped on
all four (UNVERIFIED, BORDER — width-only edges). Close: `rounded-linear-sm`,
`ring-offset-linear-background`, full ring-2/offset-2 retained. Title
`text-linear-foreground` correctly prefixed. Durations/animations unchanged.

## 4. Variants

Side system + `defaultVariants.side: "right"` + `side = "right"` identical.
PARITY_EXPECTED for the contract; side colors differ per §3.

## 5. Sizes

No size scale. `p-6`, `w-3/4`, `sm:max-w-sm` unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps`, all 10 exports, `sheetVariants` non-exported, `side`
default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace only.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) width-only side edges — UNVERIFIED (preserve; shared pattern with
4 other styles — set-level ruling candidate).

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Are colorless side edges deliberate across the five styles sharing them?
