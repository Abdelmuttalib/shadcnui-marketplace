# Carbon Chart vs Default

## 1. Audit Metadata

- Style: carbon
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/carbon/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
tooltip:182, value:242, radial selector verified by direct grep)

## 2. Executive Summary

Carbon re-themes the chart surface: square tooltip (`rounded-none`) on popover
bg with a single unprefixed border, unprefixed tooltip value text, range/curve/
polar strokes de-prefixed to legacy tokens, and the radial selector fixed to
the correct (unprefixed) form. No `chart-1..5` literals anywhere; theming still
flows through `chartConfig`. Structure, exports, and THEMES mechanism unchanged.

## 3. Base Classes

Container: tick fill namespace-swapped; grid/reference strokes kept legacy
`stroke-border/50` + `stroke-border` (as baseline); curve/polar strokes
`stroke-dft-border` → `stroke-border` (de-prefixed — UNVERIFIED, COLOR; likely
slip shared with the tooltip border, confirm or re-tokenize); radial selector
fixed to correct `recharts-radial-bar-background-sector` with unprefixed
`fill-cb-muted`... (verified selector form; fill mapping per delegated read).
Tooltip (`carbon:182`, verified): `rounded-dft-lg` → `rounded-none` (square —
UNVERIFIED, SHAPE, sole instance); duplicate `border border-dft-border
border-dft-border/50` → single `border border-border/50` (unprefixed —
PARITY_DIVERGENCE, Needs-designer; joint ruling); `bg-dft-background` →
`bg-cb-popover` (UNVERIFIED, COLOR).
Value (`carbon:242`, verified): `text-dft-foreground` → `text-foreground`
(unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling).
Row/legend svg inks: `cb-muted-foreground` swaps (Corroborated).

## 4. Variants

Not applicable — no cva variants; chart types flow through recharts + config.

## 5. Sizes

No size scale. Tooltip `min-w-[8rem]`, indicator `rounded-[2px]` unchanged.

## 6. Interaction States

Tooltip/legend hover/active states are recharts-driven, unchanged. No
hover/focus/disabled/dark classes in either file's chrome.

## 7. DOM and Component Structure

Identical (Container/Tooltip/Legend/Content, ChartStyle, context). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ChartConfig` type, context hook, all 6 exports (`ChartContainer, ChartLegend,
ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent`),
`displayName`s, THEMES light/dark identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Theming mechanism (`--color-*` emission, indicator style vars) unchanged.
PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (react, recharts, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` for tick/fill/popover/legend tokens; legacy unprefixed tokens for
grid/reference/curve/polar/tooltip-border/value (§3).

## 12. Typography and Global Styling

`text-xs` container/tooltip, mono tabular value type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) square popover tooltip + single unprefixed border — first half
UNVERIFIED, second PARITY_DIVERGENCE/Needs-designer (joint ruling);
(2) unprefixed value text — PARITY_DIVERGENCE/Needs-designer (joint ruling);
(3) de-prefixed curve/polar strokes + fixed radial selector — UNVERIFIED
(confirm token choices; keep the corrected selector form).

## 14. Verification

Both files read fully; tooltip/value/radial lines verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Are the four unprefixed classes (tooltip border, value, curve, polar) slips
   or convention? (Joint ruling.)
2. Confirm square popover tooltip as intended.
