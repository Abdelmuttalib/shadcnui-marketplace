# Linear Command vs Default

## 1. Audit Metadata

- Style: linear
- Component: command
- Baseline source: `registry/default/ui/command.tsx:1-156`
- Alternative source: `registry/linear/ui/command.tsx:1-153`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (structural wrapper collapse + 3 class deltas, verified)

## 2. Executive Summary

Linear drops the input wrapper's border color (bare `border-b`), mutes item
svgs, and restyles Shortcut with wide tracking — with a collapsed wrapper `div`
(153 vs 156 lines, no logic change). Own-style dialog import verified.

## 3. Base Classes

Root/inner/input/list/empty/group/separator: prefix swaps (Corroborated;
`h-11`, `p-1`, `tracking` baseline values kept).
Wrapper: `border-b border-b-dft-border` → bare `border-b` (color dropped —
PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip shared with linear
menubar contents — confirm or restore).
Item: added `[&_svg]:text-linear-muted-foreground` (UNVERIFIED, COLOR — muted
item icons, as material/wedges command).
Shortcut: `tracking-widest opacity-60` → `tracking-[0.3rem]
text-linear-muted-foreground` (opacity dropped) — UNVERIFIED (linear-wide
Shortcut language).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All metrics unchanged.

## 6. Interaction States

Selected/disabled/dialog/icon states identical. Search icon unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

Wrapper `div` collapsed from 5 lines to 1 (`<div className="..." cmdk-input-wrapper="">`)
— same element, attributes, and children (verified: 153 vs 156 lines, no logic
change). PARITY_EXPECTED with note (cosmetic formatting difference, not a finding).

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/linear/ui/dialog` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace; wrapper border color absent (§3).

## 12. Typography and Global Styling

Shortcut tracking change is component-level (§3); headings/items `text-xs`/
`text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless wrapper border — PARITY_DIVERGENCE/Open; (2) muted item
svg + Shortcut restyle — UNVERIFIED. Wrapper collapse needs no action.

## 14. Verification

Full-file diff run; wrapper collapse verified by direct read. Effects inferred.

## 15. Unresolved Questions

1. Bare wrapper border: deliberate or slip?
