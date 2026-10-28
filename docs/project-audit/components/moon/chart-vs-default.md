# Moon Chart vs Default

## 1. Audit Metadata

- Style: moon
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/moon/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes; radial selector verified by direct grep)

## 2. Executive Summary

Moon is a prefix swap except that it preserves the baseline radial-selector bug with the prefix inserted (`recharts-radial-bar-moon-background-sector`, verified) — dead in both files. Grid/reference strokes stay legacy-unprefixed (as baseline); tooltip duplicate border kept with swapped tokens; value text correctly prefixed. Structure and exports unchanged.

## 3. Base Classes

Container: tick/fill/curve/polar/rectangle namespace-swapped; grid `stroke-border/50` + reference `stroke-border` retained legacy (as baseline — not a divergence). Radial selector in buggy prefixed form — UNVERIFIED (TECHNICAL; joint ruling on canonical form, same as spectrum). Tooltip: duplicate `border border-moon-border border-moon-border/50` preserved (UNVERIFIED, BORDER); `rounded-moon-lg`, `bg-moon-background` swaps (Corroborated). Value text correctly prefixed.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Tooltip metrics unchanged.

## 6. Interaction States

Recharts-driven states unchanged. No hover/focus/disabled/dark classes in either file's chrome.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`ChartConfig`, context, all 6 exports, THEMES identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Theming mechanism unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace; grid/reference legacy (as baseline).

## 12. Typography and Global Styling

`text-xs` + mono tabular value retained.

## 13. Findings and Upgrade Preservation

Findings: (1) preserved buggy selector — UNVERIFIED (joint ruling); (2) kept duplicate border — UNVERIFIED (preserve exactly).

## 14. Verification

Both files read fully; radial selector verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Radial canonical form (joint ruling)?
