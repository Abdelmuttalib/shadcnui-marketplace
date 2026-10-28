# Spectrum Context-Menu vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/spectrum/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed line-pairs, verified)

## 2. Executive Summary

Spectrum drops item radii, widens spacing (`px-3 py-2`, checkbox `pr-3`,
label `px-3 py-2`), narrows content padding to vertical-only (`py-1`), and
softens borders to `input/70`. Text stays correctly prefixed. (Prefix `spctm`.)

## 3. Base Classes

SubTrigger/Item: radius deleted + `px-2 py-1.5` → `px-3 py-2` (UNVERIFIED,
SHAPE/DIMENSION). Checkbox/RadioItem: radius deleted + `py-2 pl-8 pr-2`
(UNVERIFIED). SubContent + Content: `border-dft-border` →
`border-spctm-input/70` (UNVERIFIED, COLOR); `p-1` → `py-1` (UNVERIFIED,
DIMENSION). Label `px-3 py-2` (UNVERIFIED). Separator/Shortcut/text: prefix
swaps, correctly prefixed (Corroborated).

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

`spctm-*`; edges use input at 70%. Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) radius-less density + vertical-only contents + softened edge —
UNVERIFIED as a set (preserve exactly).

## 14. Verification

Full-file diff run (8 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the density set as intended spectrum language.
