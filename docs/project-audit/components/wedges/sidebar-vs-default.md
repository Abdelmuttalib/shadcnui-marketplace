# Wedges Sidebar vs Default

## 1. Audit Metadata

- Style: wedges
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/wedges/ui/sidebar.tsx:1-767`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
unprefixed lines verified by direct grep of `wedges:251,697`)

## 2. Executive Summary

Wedges shifts the size ladder (`h-9/h-9/h-11`), mutes menu-button icons, and
re-tokenizes the outline shadow fn — but leaves **two `border-sidebar-border`
classes unprefixed** (verified lines 251, 697): the floating inner frame and
the MenuSub left border. Constants, state, keyboard, mobile, and exports
unchanged. All own-style imports verified.

## 3. Base Classes

MenuButton base: added `[&>svg]:text-wedges-muted-foreground` (UNVERIFIED,
COLOR). Outline fn: `oklch(var(--wedges-sidebar-*))` (correctly namespaced).
Sizes: `h-8/h-7/h-12` → `h-9/h-9/h-11` (UNVERIFIED, DIMENSION — as material).
Floating inner (`wedges:251`, verified): `... border-wedges-sidebar-border`
expected but reads `border-sidebar-border` (unprefixed) — PARITY_DIVERGENCE,
Needs-designer. MenuSub (`wedges:697`, verified): `border-l
border-sidebar-border` (unprefixed) — same ruling. Rest namespace-swapped.

## 4. Variants

Side/variant/collapsible contract unchanged. PARITY_EXPECTED for the contract.

## 5. Sizes

Ladder change in §3. CSS vars unchanged.

## 6. Interaction States

Hover/active/open namespace-swapped. State/keyboard/mobile/skeleton identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 24 exports, types, hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 token questions (pending ruling, not failure claims).

## 10. Imports and Dependencies

Own-style imports verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` except two unprefixed sidebar-border classes (§3).

## 12. Typography and Global Styling

Trigger/menu text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) shifted ladder + muted icons — UNVERIFIED; (2) two unprefixed
border classes — PARITY_DIVERGENCE/Needs-designer (joint ruling; likely slips —
confirm or re-tokenize to `border-wedges-sidebar-border`).

## 14. Verification

Both files read fully; unprefixed lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. `border-sidebar-border` ×2: shared slip or convention?
