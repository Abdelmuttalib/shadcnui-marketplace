# Snow Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: snow
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/snow/ui/dropdown-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed line-pairs, verified by direct read)

## 2. Executive Summary

Snow widens content padding (`p-1.5` on both SubContent and Content) and
restyles the Label (`py-1`, medium weight, muted color). Items, separator,
Shortcut, icons, animations, and exports unchanged.

## 3. Base Classes

SubContent + Content: `p-1` → `p-1.5` (UNVERIFIED, DIMENSION — roomier popover,
consistent with snow's spacing language). Label: `px-2 py-1.5 text-sm
font-semibold` → `px-2 py-1 text-sm font-medium text-snow-muted-foreground`
(UNVERIFIED, TYPOGRAPHY/COLOR — smaller, lighter, muted label). Items/Separator/
Shortcut/text tokens: prefix swaps (Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Content/label padding changes in §3.

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

`snow-*` namespace only.

## 12. Typography and Global Styling

Label weight/color change is component-level (§3); items stay `text-sm`.

## 13. Findings and Upgrade Preservation

Findings: (1) `p-1.5` contents + restyled label — UNVERIFIED as a set (preserve).

## 14. Verification

Full-file diff run (7 changed line-pairs, verified by direct read). Effects
inferred from source.

## 15. Unresolved Questions

1. Confirm roomier contents + muted label as intended.
