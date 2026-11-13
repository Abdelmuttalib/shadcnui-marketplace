# Carbon Menubar vs Default

## 1. Audit Metadata

- Style: carbon
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/carbon/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (9 changed lines, verified)

## 2. Executive Summary

Carbon drops root padding (`p-1` gone, trailing space left), widens trigger and
item spacing (`py-2.5` trigger, `px-2.5` sub/item rows), unpads SubContent and
leaves its text unprefixed, and restyles Shortcut as a bordered kbd chip.
Icons, animations, Portal, and all 15 exports unchanged.

## 3. Base Classes

Root: `p-1` deleted + trailing space (cosmetic no-op) — PARITY_DIVERGENCE, Open
(concern TECHNICAL; harmless, normalize on migration); `h-10` kept.
Trigger: `py-1.5` → `py-2.5` (UNVERIFIED, DIMENSION). SubTrigger/Item:
`px-2` → `px-2.5` (UNVERIFIED). SubContent: `p-1` deleted +
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed)** —
PARITY_DIVERGENCE, Needs-designer (joint ruling). Content: `p-1` deleted, text
correctly prefixed. Checkbox/RadioItem/Label/Separator: prefix swaps.
Shortcut: kbd chip (`rounded-cb-md border border-cb-border bg-input/30 px-px
... /80`, opacity dropped) — UNVERIFIED (consistent with carbon dropdown/context
Shortcuts).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/trigger/item/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical (const aliases, no function wrappers). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. `MenubarShortcut.displayname` lowercase bug present
here as in baseline — shared-baseline quirk, PARITY_EXPECTED with note (not a
divergence; verified present in all 12 files).

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` except unprefixed SubContent text (§3). Note `bg-input/30` in Shortcut is
also unprefixed (same ruling family).

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) spacing set + unpadded contents — UNVERIFIED; (2) unprefixed
SubContent text — PARITY_DIVERGENCE/Needs-designer (joint ruling);
(3) kbd Shortcut — UNVERIFIED; (4) dropped root padding + trailing space —
PARITY_DIVERGENCE/Open (normalize).

## 14. Verification

Full-file diff run (9 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm spacing/Shortcut set as intended.
2. Unprefixed tokens: rule jointly with the set.
