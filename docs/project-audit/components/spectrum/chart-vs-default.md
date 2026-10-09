# Spectrum Chart vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/spectrum/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
radial selector verified by direct grep)

## 2. Executive Summary

Spectrum is a prefix swap (`spctm`) except that it preserves the baseline
radial-selector bug with the prefix inserted
(`recharts-radial-bar-spctm-background-sector`, verified) — the buggy selector
matches no real Recharts class in either file. Grid/reference strokes stay
legacy-unprefixed (as baseline); tooltip keeps the duplicate-border pattern
with swapped tokens; value text correctly prefixed. Structure and exports
unchanged.

## 3. Base Classes

Container: tick/fill/curve/polar/rectangle namespace-swapped; grid
`stroke-border/50` + reference `stroke-border` retained legacy (as baseline —
not a divergence, the file never had them prefixed); radial selector in buggy
form with prefix inserted — UNVERIFIED (concern TECHNICAL — the selector is
dead in both files; the question is only which canonical form the migration
should converge on, per the joint ruling).
Tooltip: duplicate `border border-spctm-border border-spctm-border/50`
preserved (UNVERIFIED, BORDER — kept duplicate, unlike the collapsed group);
`rounded-spctm-lg`, `bg-spctm-background` swaps (Corroborated). Value text
correctly prefixed.

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

`spctm-*` namespace; grid/reference legacy (as baseline). Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-xs` + mono tabular value retained.

## 13. Findings and Upgrade Preservation

Findings: (1) preserved buggy selector — UNVERIFIED (await the joint ruling on
canonical form; do not "fix" per-style in prose); (2) kept duplicate tooltip
border — UNVERIFIED (preserve exactly).

## 14. Verification

Both files read fully; radial selector verified by direct grep. Dead-selector
assessment is source-level (class name matches no Recharts API used in-file).

## 15. Unresolved Questions

1. Radial canonical form (joint ruling: fix selector vs preserve)?
