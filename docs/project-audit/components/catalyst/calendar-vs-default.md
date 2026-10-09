# Catalyst Calendar vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/catalyst/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed line-pairs, verified by direct grep of the
  `last:` helper)

## 2. Executive Summary

Catalyst resolves the `dfs-md` typo to **plain** `rounded-r-md` (not
`rounded-r-catalyst-md`) on the `last:` helper — verified by direct grep — while
head-cell keeps the prefixed `rounded-catalyst-md`. Root unpadded/unrounded,
nav stays `outline`. Own-style import verified.

## 3. Base Classes

Root: `cn("p-3")` unchanged (no font/rounding additions). Nav `outline`
retained. Cell `last:` helper: `rounded-r-dfs-md` → `rounded-r-md` (plain,
verified) — PARITY_DIVERGENCE, Open (concern TOKEN/TECHNICAL — inconsistent
with the file's own prefixed head-cell radius; likely slip during typo
resolution, confirm or re-tokenize to `rounded-r-catalyst-md`). Other range
helpers read plain `rounded-r-md`/`rounded-l-md` in this file (verified first
segments). Day states/icons: prefix swaps (Corroborated).

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

Own-style import `…/catalyst/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace except the plain-`md` range helpers (§3).

## 12. Typography and Global Styling

Caption/label/head-cell type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) plain-`md` typo resolution — PARITY_DIVERGENCE/Open (confirm
against the joint ruling; the prefixed head-cell in the same file argues for
`catalyst-md`).

## 14. Verification

Full-file diff run (5 changed line-pairs); `last:` helper verified by direct
grep. Effects inferred from source.

## 15. Unresolved Questions

1. Plain `md` vs prefixed `catalyst-md`: which is canonical (joint ruling)?
