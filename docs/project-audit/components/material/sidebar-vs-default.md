# Material Sidebar vs Default

## 1. Audit Metadata

- Style: material
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/material/ui/sidebar.tsx:1-767`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
frame:244, trigger, sizes:525-527 verified by direct grep)

## 2. Executive Summary

Material adds a frame border to the non-floating variant, rounds the trigger,
mutes menu-button icons, and shifts the size ladder (`h-9/h-9/h-11`). Constants,
state, keyboard, mobile behavior, and all 24 exports unchanged. All own-style
imports verified.

## 3. Base Classes

Frame (`material:244`, verified): non-floating variant gains
`border-material-border` (UNVERIFIED, BORDER — framed sidebar).
Trigger: `h-7 w-7` + `rounded-material-md` added (UNVERIFIED, SHAPE).
MenuButton base: added `[&>svg]:text-material-muted-foreground` (UNVERIFIED,
COLOR). Outline shadow fn re-tokenized to `oklch(var(--material-sidebar-*))`
(UNVERIFIED, COLOR — correctly namespaced, unlike carbon's legacy form).
Sizes (`material:525-527`, verified): `h-8/h-7/h-12` → `h-9/h-9/h-11`
(UNVERIFIED, DIMENSION).

## 4. Variants

Side/variant/collapsible contract unchanged. PARITY_EXPECTED for the contract.

## 5. Sizes

Ladder + trigger rounding in §3. CSS vars unchanged.

## 6. Interaction States

Hover/active/open treatments namespace-swapped. State/keyboard/mobile/skeleton
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 24 exports, types, hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style imports verified (`material:10-20`); rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace throughout (outline fn correctly namespaced).

## 12. Typography and Global Styling

Trigger/menu text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed variant + rounded trigger + muted icons + shifted ladder —
UNVERIFIED as a set (preserve).

## 14. Verification

Both files read fully; frame/trigger/sizes verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Confirm the framed roomier system as intended.
