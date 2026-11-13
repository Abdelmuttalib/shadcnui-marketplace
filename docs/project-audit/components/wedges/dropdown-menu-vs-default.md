# Wedges Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: wedges
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/wedges/ui/dropdown-menu.tsx:1-203`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (9 changed lines, verified by direct read of
  SubContent:50 and Content:68)

## 2. Executive Summary

Wedges drops item radii, widens spacing (`px-3`, checkbox `pr-3`), and splits
its content borders inconsistently: SubContent uses `input` while Content keeps
`border` — verified by direct read, flagged for ruling. Separator moves to the
`border` token; Shortcut becomes a blurred accent pill. Icons, animations,
Portal, and exports unchanged.

## 3. Base Classes

SubTrigger/Item: `rounded-*-sm` deleted + `px-2` → `px-3` (UNVERIFIED,
SHAPE/DIMENSION). Checkbox/RadioItem: radius deleted + `pr-2` → `pr-3`
(UNVERIFIED). SubContent (`wedges:50`, verified): `border-wedges-input`;
Content (`wedges:68`, verified): `border-wedges-border` — **same file uses two
different border tokens for the two content surfaces** (PARITY_DIVERGENCE, Open,
concern COLOR/TECHNICAL — likely slip; confirm one token or justify both).
Label `px-3`: prefix swap + spacing (UNVERIFIED). Separator: `bg-dft-muted` →
`bg-wedges-border` (UNVERIFIED, COLOR — border-token separator, unique in the set).
Shortcut: `ml-auto rounded-wedges-md border border-wedges-accent
bg-wedges-accent/50 px-0.5 text-xs tracking-widest text-wedges-muted-foreground
opacity-60 backdrop-blur-sm` — accent pill with backdrop blur (UNVERIFIED,
COLOR/BORDER — most decorated Shortcut in the set).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Item/label padding changes in §3.

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

`wedges-*` namespace; text correctly prefixed throughout.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) radius-less spacing set — UNVERIFIED; (2) split content borders —
PARITY_DIVERGENCE/Open (unify or justify); (3) border-token separator —
UNVERIFIED; (4) blurred Shortcut pill — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (9 changed lines); SubContent/Content border lines verified
by direct read. Effects inferred from source.

## 15. Unresolved Questions

1. SubContent `input` vs Content `border`: deliberate distinction or slip?
2. Confirm density + Shortcut pill as intended.
