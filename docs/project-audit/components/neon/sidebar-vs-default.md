# Neon Sidebar vs Default

## 1. Audit Metadata

- Style: neon
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/neon/ui/sidebar.tsx:1-767`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
frame line verified by direct grep of `neon:244`; sizes by `neon:525-527`)

## 2. Executive Summary

Neon adds a frame border to the non-floating variant and bumps the default
menu-button size (`h-9`), with sm/lg unchanged. Outline fn re-tokenized.
Constants, state, keyboard, mobile, and exports unchanged. All own-style
imports verified.

## 3. Base Classes

Frame (`neon:244`, verified): non-floating variant gains
`border-neon-sidebar-border` (UNVERIFIED, BORDER — framed sidebar, as
material). MenuButton sizes (`neon:525-527`, verified): default `h-8` → `h-9`;
sm `h-7`, lg `h-12` unchanged (UNVERIFIED, DIMENSION — partial ladder shift).
Outline fn: `oklch(var(--neon-sidebar-accent/border))` (correctly namespaced).
Rest namespace-swapped.

## 4. Variants

Side/variant/collapsible contract unchanged. PARITY_EXPECTED for the contract.

## 5. Sizes

Partial ladder shift in §3. CSS vars unchanged.

## 6. Interaction States

Hover/active/open namespace-swapped. State/keyboard/mobile/skeleton identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 24 exports, types, hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style imports verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace throughout.

## 12. Typography and Global Styling

Trigger/menu text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed variant + partial ladder shift — UNVERIFIED (preserve).

## 14. Verification

Both files read fully; frame/sizes verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Confirm framed variant + taller default button as intended.
