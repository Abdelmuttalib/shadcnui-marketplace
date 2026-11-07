# Carbon Context-Menu vs Default

## 1. Audit Metadata

- Style: carbon
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/carbon/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed line-pairs, verified)

## 2. Executive Summary

Carbon widens item spacing (`px-2.5`, label `px-2.5`), steps item radius to
`-md`, drops content padding (`p-1` gone on both contents), and restyles
Shortcut as a bordered kbd chip. Icons, animations, and all 15 exports unchanged.

## 3. Base Classes

SubTrigger/Item: `rounded-dft-sm px-2` → `rounded-cb-md px-2.5`, `py-1.5` kept
(UNVERIFIED, SHAPE/DIMENSION). Checkbox/RadioItem: `rounded-cb-md` only.
SubContent + Content: `p-1` deleted (both); text correctly prefixed here
(`text-cb-popover-foreground` — unlike carbon hover-card). Label `px-2.5`
(UNVERIFIED). Separator `bg-cb-border`: swap. Shortcut: kbd chip
(`rounded-cb-md border border-cb-border bg-cb-input/30 px-px ... /80`, opacity
dropped) — UNVERIFIED (consistent with carbon dropdown Shortcut).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations (incl. baseline's `animate-in
fade-in-80` on Content), side slides identical. ChevronRight `ml-auto h-4 w-4`
unchanged. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace throughout (text correctly prefixed — no divergence here).

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) wider spacing + `-md` radii + unpadded contents — UNVERIFIED;
(2) kbd Shortcut — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (8 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm spacing/radius/padding/Shortcut set as intended.
