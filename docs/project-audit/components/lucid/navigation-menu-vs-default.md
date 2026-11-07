# Lucid Navigation-Menu vs Default

## 1. Audit Metadata

- Style: lucid
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/lucid/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Lucid shortens the trigger (`h-9`) with everything else a faithful prefix swap —
Viewport border color, text, and Indicator diamond all correctly prefixed.
Positioning, animations, and exports unchanged.

## 3. Base Classes

Trigger style: `h-10` → `h-9` (UNVERIFIED, DIMENSION); rest prefix swap.
Viewport (`border-lucid-border`, `text-lucid-popover-foreground`), Indicator
(`rounded-tl-lucid-sm bg-lucid-border`): prefix swaps (TOKEN_DEPENDENCY,
Corroborated).

## 4. Variants

`navigationMenuTriggerStyle` single-string base, same export name, no variant
keys. PARITY_EXPECTED.

## 5. Sizes

No size scale. Trigger height change in §3.

## 6. Interaction States

Hover/focus/active/open, chevron rotation, motion animations identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` namespace only.

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` trigger — UNVERIFIED (preserve; shared with
material/wedges/snow/neon).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

None.
