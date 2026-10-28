# Material Menubar vs Default

## 1. Audit Metadata

- Style: material
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/material/ui/menubar.tsx:1-256`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (structural wrapper + 11 class deltas, verified)

## 2. Executive Summary

Material rewrites aliases as function wrappers (+`data-slot`, as linear/wedges),
shortens the root (`h-9`, padding dropped), removes item radii with wider spacing,
strips content borders to bare widths with unprefixed text and no padding, and
adds muted Shortcut color + opacity. Checkbox indicator span gains `text-current`.

## 3. Base Classes

Root: `h-10` → `h-9`, `p-1` deleted (UNVERIFIED, DIMENSION). SubTrigger/Item:
radius deleted + `px-2 py-1.5` → `px-3 py-2.5` (UNVERIFIED, SHAPE/DIMENSION).
Checkbox/RadioItem: radius deleted + `py-1.5 pl-8 pr-2` → `py-2.5 pl-8 pr-3`
(UNVERIFIED); checkbox span adds `text-current` (radio span does not —
inconsistency noted, cosmetic: both inherit currentColor for the icon;
UNVERIFIED/TECHNICAL trivia, no effect inferred).
SubContent + Content: `border border-*-border` → bare `border` (color dropped) +
`p-1` deleted + `text-dft-popover-foreground` → **`text-popover-foreground`
(unprefixed, both)** — bare borders PARITY_DIVERGENCE/Open; unprefixed texts
PARITY_DIVERGENCE/Needs-designer (joint ruling).
Label `px-3`: prefix swap + spacing (UNVERIFIED). Separator swap. Shortcut: adds
`text-material-muted-foreground` + `opacity-60` (UNVERIFIED, COLOR).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Function-wrapper rewrite + `data-slot` as linear (§7 of linear report applies
verbatim). Checkbox `text-current` span inconsistency noted above. Otherwise
identical tree. PARITY_EXPECTED with notes.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except unprefixed Content texts (§3); content border colors absent.

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact radius-less density + unpadded contents — UNVERIFIED;
(2) bare borders — PARITY_DIVERGENCE/Open; (3) unprefixed texts ×2 —
PARITY_DIVERGENCE/Needs-designer (joint ruling); (4) wrappers + `data-slot` —
parity with note; (5) Shortcut tone + span inconsistency — UNVERIFIED/trivia.

## 14. Verification

Full-file diff run; wrapper rewrite and class deltas verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Bare borders + unprefixed texts: deliberate or slips?
2. Function wrappers: shared deliberate alignment or drift?
