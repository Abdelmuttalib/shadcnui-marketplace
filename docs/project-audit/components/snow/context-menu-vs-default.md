# Snow Context-Menu vs Default

## 1. Audit Metadata

- Style: snow
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/snow/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed line-pairs, verified)

## 2. Executive Summary

Snow widens content padding (`p-1.5` on both contents) and is otherwise a prefix
swap. Items, label, separator, Shortcut, icons, animations, and exports
unchanged.

## 3. Base Classes

SubContent + Content: `p-1` → `p-1.5` (UNVERIFIED, DIMENSION — roomier popover,
consistent with snow dropdown/select). Everything else prefix swap
(TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Content padding change in §3.

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

`snow-*` namespace only.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `p-1.5` contents — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run (3 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

None.
