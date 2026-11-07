# Catalyst Chart vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/catalyst/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
value:242 verified by direct grep)

## 2. Executive Summary

Catalyst is mixed: grid/reference strokes namespaced, curve/polar/reference
prefixed, but the radial fill de-prefixed (`fill-muted`) and the tooltip value
text unprefixed (`text-foreground`, verified line 242). Tooltip border
collapsed to a single namespaced class. Structure, exports, and theming
unchanged.

## 3. Base Classes

Container: tick/grid/curve/polar/rectangle strokes namespace-swapped except
radial fill `fill-dft-muted` → `fill-muted` (de-prefixed — UNVERIFIED,
COLOR/TECHNICAL; likely slip within an otherwise-prefixed container, confirm
or re-tokenize); radial selector in correct form. Tooltip: duplicate collapsed
to single `border border-catalyst-border/50` (UNVERIFIED, BORDER);
`rounded-catalyst-lg`, `bg-catalyst-background` swaps (Corroborated). Value
(`catalyst:242`, verified): `text-dft-foreground` → `text-foreground`
(unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint ruling). Row/legend
inks swapped.

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

Theming mechanism unchanged. Unprefixed value pending ruling, not a failure claim.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except radial fill + value text (§3).

## 12. Typography and Global Styling

`text-xs` + mono tabular value retained (color is the §3 finding).

## 13. Findings and Upgrade Preservation

Findings: (1) de-prefixed radial fill — PARITY_DIVERGENCE, Open (confirm or
re-tokenize); (2) unprefixed value — PARITY_DIVERGENCE/Needs-designer (joint
ruling); (3) collapsed tooltip border — UNVERIFIED.

## 14. Verification

Both files read fully; value line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Are the two de-prefixed classes slips in an otherwise-prefixed file?
