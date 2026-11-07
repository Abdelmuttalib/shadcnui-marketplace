# Carbon Sonner vs Default

## 1. Audit Metadata

- Style: carbon
- Component: sonner
- Baseline source: `registry/default/ui/sonner.tsx:1-32`
- Alternative source: `registry/carbon/ui/sonner.tsx:1-32`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; unprefixed lines verified by direct grep

## 2. Executive Summary

Carbon mixes prefixed and unprefixed tokens: `bg-cb-background` (swapped) with **unprefixed `text-foreground`, `border-border`, `text-primary-foreground`** (verified lines 19/22) — PARITY_DIVERGENCE, Needs-designer (joint ruling; likely slip). Description/action/cancel otherwise swapped.

## 3. Base Classes

Carbon mixes prefixed and unprefixed tokens: `bg-cb-background` (swapped) with **unprefixed `text-foreground`, `border-border`, `text-primary-foreground`** (verified lines 19/22) — PARITY_DIVERGENCE, Needs-designer (joint ruling; likely slip). Description/action/cancel otherwise swapped.

## 4. Variants

Not applicable — no cva variants; toast kinds flow through sonner props.

## 5. Sizes

No size scale. `min-w-[8rem]`, `shadow-lg` unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file's chrome; sonner runtime behavior (swipe/dismiss/duration defaults — none set in either file) identical.

## 7. DOM and Component Structure

Identical (`Sonner` passthrough with `toastOptions.classNames`). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ToasterProps` type, sole `Toaster` export, `{...props}` override-last, `theme as` cast identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`useTheme` system-default + theme passthrough identical. No position/richColors/closeButton/duration overrides in either file. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (next-themes, sonner, react types). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace except §3 unprefixed classes; `bg/shadow` chrome per §3.

## 12. Typography and Global Styling

No text-size classes in either file's chrome (sonner renders its own type).

## 13. Findings and Upgrade Preservation

Findings: (1) three unprefixed tokens — PARITY_DIVERGENCE/Needs-designer (joint ruling; confirm or re-tokenize to `cb-*`).

## 14. Verification

Both files read fully (delegated read with exact quotes; unprefixed lines verified by direct grep). Effects inferred.

## 15. Unresolved Questions

1. Unprefixed trio: shared slip or convention?
