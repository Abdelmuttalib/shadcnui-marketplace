# Catalyst Sidebar vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: sidebar
- Baseline source: `registry/default/ui/sidebar.tsx:1-767`
- Alternative source: `registry/catalyst/ui/sidebar.tsx:1-767`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Catalyst widens menu-button spacing (`gap-3`), mutes icons with hover/active
ink states, and shifts the ladder (`h-9/h-8/h-10`). Outline shadow fn keeps
the legacy `hsl(var(--sidebar-*))` form. Constants, state, keyboard, mobile,
and exports unchanged. All own-style imports verified.

## 3. Base Classes

MenuButton base: `gap-2` → `gap-3` + added `[&>svg]:text-catalyst-muted-foreground
[&>svg]:hover:text-catalyst-foreground` (UNVERIFIED set, DIMENSION/COLOR).
Outline fn: legacy `hsl(var(--sidebar-border/accent))` form kept (as baseline's
shape, UNVERIFIED whether the legacy form vs `oklch` namespaced form matters —
recorded, not flagged; linear/material/wedges/spectrum re-tokenized theirs).
Sizes: `h-8/h-7/h-12` → `h-9/h-8/h-10` (UNVERIFIED, DIMENSION).

## 4. Variants

Side/variant/collapsible contract unchanged. PARITY_EXPECTED for the contract.

## 5. Sizes

Ladder change in §3. CSS vars unchanged.

## 6. Interaction States

Hover/active/open + svg ink states namespace-swapped. State/keyboard/mobile/
skeleton identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 24 exports, types, hook identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style imports verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace; outline fn in legacy `hsl()` form (§3).

## 12. Typography and Global Styling

Trigger/menu text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) wider icon-muted menu buttons + shifted ladder — UNVERIFIED
(preserve).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the roomier menu system as intended.
