# Wedges Chart vs Default

## 1. Audit Metadata

- Style: wedges
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/wedges/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
container/tooltip lines verified by direct grep)

## 2. Executive Summary

Wedges matches linear/material exactly: fully unprefixed Container (correct
radial selector form) with a single namespaced tooltip border
(`border-wedges-border/50`), correctly prefixed value text. Structure, exports,
and theming mechanism unchanged.

## 3. Base Classes

Container: legacy unprefixed throughout + fixed radial selector (UNVERIFIED as
a set — joint ruling with linear/material). Tooltip (`wedges:182`, verified):
duplicate collapsed to single `border border-wedges-border/50` (UNVERIFIED,
BORDER); `rounded-wedges-lg`, `bg-wedges-background` swaps (Corroborated).
Value text correctly prefixed. Row/legend inks swapped.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Tooltip metrics unchanged.

## 6. Interaction States

Recharts-driven states unchanged. No hover/focus/disabled/dark classes in
either file's chrome.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`ChartConfig`, context, all 6 exports, THEMES identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Theming mechanism unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

Container legacy unprefixed (§3); tooltip/legend/value `wedges-*`.

## 12. Typography and Global Styling

`text-xs` + mono tabular value retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed container — UNVERIFIED (joint ruling with
linear/material); (2) collapsed tooltip border — UNVERIFIED.

## 14. Verification

Both files read fully; container/tooltip lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Unprefixed container: deliberate (rule with linear/material)?
