# Snow Menubar vs Default

## 1. Audit Metadata

- Style: snow
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/snow/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (7 changed lines, verified)

## 2. Executive Summary

Snow compacts the root (`h-9`) and trigger (`py-1`), widens item spacing
(`px-3` on SubTrigger/Item/Label), and widens content padding (`p-1.5` on both
contents). Icons, animations, and exports unchanged.

## 3. Base Classes

Root: `h-10` → `h-9` (UNVERIFIED, DIMENSION). Trigger: `py-1.5` → `py-1`
(UNVERIFIED). SubTrigger/Item: `px-2` → `px-3` (UNVERIFIED). SubContent +
Content: `p-1` → `p-1.5` (UNVERIFIED, DIMENSION — roomier popover, consistent
with snow dropdown/context). Label `px-3` (UNVERIFIED). Checkbox/Radio/
Separator/Shortcut/text: prefix swaps (Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root/trigger/item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical (const aliases). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact root/trigger + wide spacing + roomy contents —
UNVERIFIED as a set (preserve).

## 14. Verification

Full-file diff run (7 changed lines). Effects inferred from source.

## 15. Unresolved Questions

None.
