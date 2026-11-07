# Carbon Navigation-Menu vs Default

## 1. Audit Metadata

- Style: carbon
- Component: navigation-menu
- Baseline source: `registry/default/ui/navigation-menu.tsx:1-128`
- Alternative source: `registry/carbon/ui/navigation-menu.tsx:1-128`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Carbon drops the Viewport border color (bare `border`), leaves Viewport text
and the Indicator diamond unprefixed (`text-popover-foreground`,
`rounded-tl-sm bg-border`), and is otherwise a prefix swap. Trigger height
(`h-10`), chevron, positioning, animations, and all 9 exports unchanged.

## 3. Base Classes

Trigger style: prefix swap only, `h-10` kept (TOKEN_DEPENDENCY, Corroborated).
Viewport (`carbon:89`, verified): `border border-dft-border` → bare `border`
(color dropped — PARITY_DIVERGENCE, Open, BORDER/TECHNICAL);
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed)** —
PARITY_DIVERGENCE, Needs-designer (joint ruling).
Indicator diamond: `rounded-tl-dft-sm bg-dft-border` → **`rounded-tl-sm
bg-border` (both unprefixed)** — PARITY_DIVERGENCE, Needs-designer (joint ruling;
the diamond is the indicator's visible face, so both classes matter).
Root/List/Content/chevron/viewport-wrap: identical (Corroborated).

## 4. Variants

`navigationMenuTriggerStyle` is a cva single-string base with no variant keys in
either file; same export name. PARITY_EXPECTED.

## 5. Sizes

No size scale. Trigger `h-10` unchanged.

## 6. Interaction States

Hover/focus/active/open treatments, chevron rotation, viewport/content motion
animations identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 9 exports incl. `navigationMenuTriggerStyle` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 token questions (pending rulings, not failure claims).

## 10. Imports and Dependencies

Identical set (radix nav-menu, cva, chevron, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace except three unprefixed classes (§3: viewport text, diamond
radius + fill) and the colorless viewport border.

## 12. Typography and Global Styling

Trigger `text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) bare viewport border — PARITY_DIVERGENCE/Open; (2) three
unprefixed classes — PARITY_DIVERGENCE/Needs-designer (joint ruling).
Migration: confirm all before carrying forward.

## 14. Verification

Full-file diff run (3 changed lines); viewport + indicator lines verified by
direct read. Effects inferred from source.

## 15. Unresolved Questions

1. Bare border + unprefixed trio: slips or convention?
