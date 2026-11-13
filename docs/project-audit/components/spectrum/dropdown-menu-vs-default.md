# Spectrum Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/spectrum/ui/dropdown-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified)

## 2. Executive Summary

Spectrum drops all item radii, widens spacing (`px-3 py-2`, checkbox `pr-3`),
narrows content padding to vertical-only (`py-1`), and softens borders to
`input/70`. Text stays correctly prefixed. (Prefix `spctm`.)

## 3. Base Classes

SubTrigger/Item: `rounded-*-sm` deleted + `px-2 py-1.5` → `px-3 py-2`
(UNVERIFIED, SHAPE/DIMENSION — radius-less roomy rows, as material).
Checkbox/RadioItem: radius deleted + `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-3`
(UNVERIFIED). SubContent + Content: `border-dft-border` →
`border-spctm-input/70` (UNVERIFIED, COLOR — 70% input edge); `p-1` → `py-1`
(vertical-only; UNVERIFIED, DIMENSION). Label `px-3`: prefix swap + spacing
(UNVERIFIED). Separator/Shortcut/text: prefix swaps, correctly prefixed
(Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations, side slides identical. ChevronRight
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

`spctm-*`; edges use input at 70%. Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) radius-less density + vertical-only content + softened edge —
UNVERIFIED as a set (preserve exactly).

## 14. Verification

Full-file diff run (8 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the density set as intended spectrum language.
