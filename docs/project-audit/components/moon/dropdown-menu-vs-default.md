# Moon Dropdown-Menu vs Default

## 1. Audit Metadata

- Style: moon
- Component: dropdown-menu
- Baseline source: `registry/default/ui/dropdown-menu.tsx:1-200`
- Alternative source: `registry/moon/ui/dropdown-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified)

## 2. Executive Summary

Moon widens vertical item padding (`py-1.5`→`py-2` on SubTrigger/Item/Label)
and is otherwise a prefix swap. Contents, checkbox rows, separator, Shortcut,
icons, animations, and exports unchanged.

## 3. Base Classes

SubTrigger/Item: `rounded-moon-sm` kept; `py-1.5` → `py-2` (UNVERIFIED,
DIMENSION — slightly roomier rows). Label: `py-1.5` → `py-2` (same).
Checkbox/RadioItem/Separator/Shortcut/Contents: prefix swaps (Corroborated).

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

`moon-*` namespace only.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) roomier rows/label — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run (8 changed lines). Effects inferred from source.

## 15. Unresolved Questions

None.
