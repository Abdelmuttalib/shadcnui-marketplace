# Wedges Calendar vs Default

## 1. Audit Metadata

- Style: wedges
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/wedges/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed line-pairs, verified)

## 2. Executive Summary

Wedges resolves the typo to `rounded-r-wedges-md` (verified — no `dfs` remains),
keeps nav `outline`, and is otherwise a prefix swap. Root unpadded/unrounded,
no font pin. Own-style import verified.

## 3. Base Classes

Root: `cn("p-3")` unchanged. Nav `outline` retained. Cell typo line: all
`wedges-md` (verified fixed). Day states/icons: prefix swaps (Corroborated).

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. Day cells stay `h-9 w-9`.

## 6. Interaction States

Selected/today/outside/disabled/range states namespace-swapped. No dark-mode
classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`CalendarProps`, `Calendar` export, `displayName`, `showOutsideDays` identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/wedges/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace only.

## 12. Typography and Global Styling

Caption/label/head-cell type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) typo fixed to `wedges-md` — joint ruling (§15). No divergences,
no exceptions.

## 14. Verification

Full-file diff run (5 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Typo canonical resolution (joint ruling).
