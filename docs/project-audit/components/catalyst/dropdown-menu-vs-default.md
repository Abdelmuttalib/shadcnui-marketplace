# Catalyst Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/catalyst/ui/dropdown-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified)

## 2. Executive Summary

Catalyst widens item spacing (`px-2.5 py-2`, label `px-2.5 py-2`, checkbox
`pr-2.5`), tightens content padding (`p-0.5`), swaps borders to the `input`
token, and leaves both Content texts unprefixed. Icons, animations, Portal, and
all 15 exports unchanged.

## 3. Base Classes

SubTrigger/Item: `px-2 py-1.5` → `px-2.5 py-2` (UNVERIFIED, DIMENSION).
Checkbox/RadioItem: `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-2.5` (UNVERIFIED).
SubContent + Content: `border-dft-border` → `border-catalyst-input`
(UNVERIFIED, COLOR — input-token edge language); `p-1` → `p-0.5` (tighter;
UNVERIFIED, DIMENSION); `text-dft-popover-foreground` → **`text-popover-
foreground` (unprefixed, both)** — PARITY_DIVERGENCE, Needs-designer (joint
ruling with the catalyst set). Label `px-2.5 py-2`: prefix swap + spacing
(UNVERIFIED). Separator/Shortcut: prefix swaps (Corroborated).

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

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed Content texts (§3); edges on the input token.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) wider spacing + tight content + input edges — UNVERIFIED as a set;
(2) unprefixed texts ×2 — PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Full-file diff run (8 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm spacing set as intended.
2. `text-popover-foreground` ×2: rule jointly with the catalyst set.
