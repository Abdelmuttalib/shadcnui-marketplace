# Material Context-Menu vs Default

## 1. Audit Metadata

- Style: material
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/material/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (9 changed line-pairs, verified)

## 2. Executive Summary

Material drops all item radii, widens spacing (`px-3 py-2.5`, checkbox `pr-3`,
label `px-3 py-1`), unpads both contents, and leaves both Content texts
unprefixed. Icons, animations, and all 15 exports unchanged.

## 3. Base Classes

SubTrigger/Item: radius deleted + `px-2 py-1.5` → `px-3 py-2.5` (UNVERIFIED,
SHAPE/DIMENSION). Checkbox/RadioItem: radius deleted + `py-1.5 pl-8 pr-2` →
`py-2.5 pl-8 pr-3` (UNVERIFIED). SubContent + Content: `p-1` deleted (both) +
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed, both)**
— PARITY_DIVERGENCE, Needs-designer (joint ruling with the material set).
Label: `px-2 py-1.5` → `px-3 py-1` (UNVERIFIED). Separator `bg-material-border`:
swap. Shortcut: adds `text-material-muted-foreground` + `opacity-60`
(UNVERIFIED, COLOR).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except unprefixed Content texts (§3).

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) radius-less density + unpadded contents — UNVERIFIED;
(2) unprefixed texts ×2 — PARITY_DIVERGENCE/Needs-designer (joint ruling);
(3) Shortcut color — UNVERIFIED.

## 14. Verification

Full-file diff run (9 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm density set as intended.
2. `text-popover-foreground` ×2: rule jointly with the material set.
