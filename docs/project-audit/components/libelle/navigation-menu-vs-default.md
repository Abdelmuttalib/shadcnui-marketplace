# Libelle Navigation-Menu vs Default

## 1. Audit Metadata

- Style: libelle
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/libelle/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified — all prefix swaps)

## 2. Executive Summary

Libelle navigation-menu is a pure token-namespace swap: Viewport border
color, Viewport text, and Indicator diamond all correctly prefixed; trigger
height kept at `h-10`. Positioning, animations, and all 9 exports unchanged.

## 3. Base Classes

Trigger style, Viewport (`border-libelle-border`, `text-libelle-popover-foreground`),
Indicator diamond (`rounded-tl-libelle-sm bg-libelle-border`): prefix swaps only.
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

`navigationMenuTriggerStyle` single-string base, same export name, no variant
keys. PARITY_EXPECTED.

## 5. Sizes

No size scale. Trigger `h-10` unchanged.

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

`libelle-*` namespace only.

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run (3 changed lines, all swaps). Effects inferred from source.

## 15. Unresolved Questions

None.
