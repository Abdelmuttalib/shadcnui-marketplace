# Material Navigation-Menu vs Default

## 1. Audit Metadata

- Style: material
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/material/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Material shortens the trigger (`h-9`), drops the Viewport border color (bare
`border`), and leaves Viewport text plus the whole Indicator diamond unprefixed.
Positioning, animations, and exports unchanged.

## 3. Base Classes

Trigger style: `h-10` → `h-9` (UNVERIFIED, DIMENSION); rest prefix swap.
Viewport: bare `border` (color dropped — PARITY_DIVERGENCE, Open) +
**`text-popover-foreground` (unprefixed)** — PARITY_DIVERGENCE, Needs-designer
(joint ruling). Indicator diamond: **`rounded-tl-sm bg-border` (both
unprefixed)** — PARITY_DIVERGENCE, Needs-designer (joint ruling).
Root/List/Content/chevron/positioning identical.

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

Unchanged except §3 token questions (pending rulings, not failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except bare viewport border + three unprefixed classes (§3).

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` trigger — UNVERIFIED; (2) bare border — PARITY_DIVERGENCE/
Open; (3) three unprefixed classes — PARITY_DIVERGENCE/Needs-designer (joint
ruling).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Bare border + unprefixed trio: slips or convention?
