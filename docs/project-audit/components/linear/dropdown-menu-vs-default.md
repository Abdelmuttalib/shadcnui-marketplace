# Linear Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: linear
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/linear/ui/dropdown-menu.tsx:1-203`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified)

## 2. Executive Summary

Linear is a prefix swap except for the Shortcut: `tracking-[0.3rem]` replaces
`tracking-widest`, opacity dropped, muted-foreground color added. All items,
contents, label, separator, icons, animations, and exports unchanged.

## 3. Base Classes

SubTrigger/Item/Checkbox/RadioItem/Label/Separator/Separator: prefix swaps only
(`rounded-linear-sm`, `px-2 py-1.5`, `p-1` contents kept, `text-linear-
popover-foreground` correctly prefixed). TOKEN_DEPENDENCY, Corroborated.
Shortcut: `ml-auto text-xs tracking-widest opacity-60` → `ml-auto text-xs
tracking-[0.3rem] text-linear-muted-foreground` — wider tracking, explicit muted
color, opacity dropped (UNVERIFIED, TYPOGRAPHY/COLOR — linear-wide Shortcut
language, cf. linear command/toggle Shortcut treatments).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. All metrics unchanged.

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

`linear-*` namespace throughout.

## 12. Typography and Global Styling

Shortcut tracking change is component-level (§3); items/label `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) Shortcut restyle — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (8 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm wide-tracked Shortcut as intended linear language.
