# Linear Chart vs Default

## 1. Audit Metadata

- Style: linear
- Component: chart
- Baseline source: `registry/default/ui/chart.tsx:1-365`
- Alternative source: `registry/linear/ui/chart.tsx:1-365`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
container/tooltip lines verified by direct grep)

## 2. Executive Summary

Linear strips the entire Container of namespaced tokens (fully unprefixed
recharts-targeting classes), fixes the radial selector to the correct form, and
collapses the tooltip's duplicate border to a single namespaced
`border-linear-border/50`. Tooltip value text stays correctly prefixed.
Structure, exports, and theming mechanism unchanged.

## 3. Base Classes

Container (verified): tick `fill-dft-muted-foreground` → `fill-muted-foreground`
+ grid/reference/curve/polar/radial/rectangle fills and strokes all legacy
unprefixed (radial selector fixed to correct form) — wholesale de-prefixing
(UNVERIFIED as a set, COLOR/TECHNICAL — consistent enough to be a deliberate
"recharts layer stays unthemed" choice, but unconfirmed; joint ruling candidate
with material/wedges, which share the identical container).
Tooltip (`linear:182`, verified): duplicate `border border-dft-border
border-dft-border/50` → single `border border-linear-border/50`
(UNVERIFIED, BORDER — collapsed duplicate, correctly prefixed);
`rounded-linear-lg`, `bg-linear-background` swaps (Corroborated). Value text
correctly prefixed. Row/legend inks swapped.

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

Container resolves to legacy unprefixed tokens (§3); tooltip/legend/value to
`linear-*`.

## 12. Typography and Global Styling

`text-xs` + mono tabular value retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed container — UNVERIFIED (preserve exactly pending
ruling; do not "fix" by re-prefixing without designer sign-off — it may be the
intended recharts-layer treatment shared by three styles); (2) collapsed single
tooltip border — UNVERIFIED (preserve).

## 14. Verification

Both files read fully; container/tooltip lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Is the unprefixed container deliberate (rule jointly with material/wedges)?
