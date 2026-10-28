# Libelle Sidebar vs Default

## 1. Audit Metadata

- Style: libelle
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/libelle/ui/sidebar.tsx:1-767`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes; size ladder verified `h-8/h-7/h-12` unchanged)

## 2. Executive Summary

Libelle sidebar is a prefix swap with a re-tokenized outline shadow function: identical geometry, menu system, constants, state, keyboard, mobile behavior, and all 24 exports. Outline shadow fn re-tokenized; otherwise prefix swap.

## 3. Base Classes

Frame/sides/group/menu/trigger/input/separator/sheet/skeleton/tooltip sub-imports: own-style paths verified (no cross-style imports). MenuButton sizes `h-8/h-7/h-12`, `gap-2/p-2`, group `p-2`, trigger `h-7 w-7` unchanged. Outline shadow fn namespaced. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Side/variant/collapsible contract + defaults unchanged. PARITY_EXPECTED.

## 5. Sizes

No size scale changes. CSS vars (`16rem/3rem`) unchanged.

## 6. Interaction States

Hover/active/open/keyboard/mobile/skeleton identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and context shape. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 24 exports, types, `useSidebar` hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Cookie/state/shortcut/tooltip-delay/mobile fallback identical. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style Button/Input/Separator/Sheet/Skeleton/Tooltip imports verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace (sidebar tokens, radius utilities) only.

## 12. Typography and Global Styling

Trigger/menu text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap + shadow-fn re-tokenization — TOKEN_DEPENDENCY. No divergences, no exceptions. Migration: keep import paths re-pointed; preserve the namespaced shadow fn.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
