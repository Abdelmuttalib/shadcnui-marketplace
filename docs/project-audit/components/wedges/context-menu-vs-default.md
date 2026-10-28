# Wedges Context-Menu vs Default

## 1. Audit Metadata

- Style: wedges
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/wedges/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed line-pairs, verified)

## 2. Executive Summary

Wedges drops item radii, widens spacing (`px-3`, checkbox `pr-3`, label
`px-3 py-1`), unpads both contents (`p-1` gone), and uses `input`-token borders
on both contents. Separator uses the `border` token. Shortcut gains opacity.
Icons, animations, exports unchanged.

## 3. Base Classes

SubTrigger/Item: radius deleted + `px-2` → `px-3` (UNVERIFIED, SHAPE/DIMENSION).
Checkbox/RadioItem: radius deleted + `pr-2` → `pr-3` (UNVERIFIED).
SubContent + Content: `p-1` deleted (both); `border-dft-border` →
`border-wedges-input` (UNVERIFIED, COLOR/BORDER). Label: `px-2 py-1.5` → `px-3
py-1` (UNVERIFIED). Separator: `bg-dft-border` → `bg-wedges-border` (UNVERIFIED,
COLOR — border-token separator, as dropdown). Shortcut: adds `opacity-60`
(UNVERIFIED).

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

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace; text correctly prefixed throughout.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) radius-less spacing + unpadded contents + input edges —
UNVERIFIED as a set; (2) border-token separator + Shortcut opacity —
UNVERIFIED.

## 14. Verification

Full-file diff run (8 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the density set as intended.
