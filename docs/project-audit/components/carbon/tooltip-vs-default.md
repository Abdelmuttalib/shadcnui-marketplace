# Carbon Tooltip vs Default

## 1. Audit Metadata

- Style: carbon
- Component: tooltip
- Baseline source: `registry/default/ui/tooltip.tsx:1-30`
- Alternative source: `registry/carbon/ui/tooltip.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `carbon:22`)

## 2. Executive Summary

Carbon's only non-swap change is the unprefixed `text-popover-foreground`
(border stays correctly `border-cb-border` here — unlike carbon hover-card).
Padding, text size, animations, and exports unchanged.

## 3. Base Classes

Content (`carbon:22` vs `default:22`): `text-dft-popover-foreground` →
`text-popover-foreground` (PARITY_DIVERGENCE, Needs-designer, COLOR/TECHNICAL —
joint ruling with carbon hover-card + tooltip/select set); everything else
prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `px-3 py-1.5`, `text-sm` unchanged.

## 6. Interaction States

Animations identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. `sideOffset={4}`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace except the unprefixed text class (§3).

## 12. Typography and Global Styling

`text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed text — PARITY_DIVERGENCE/Needs-designer (joint ruling;
do not carry silently).

## 14. Verification

Full-file diff run; delta verified by direct read of line 22. Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground`: rule jointly with carbon hover-card (+ select set).
