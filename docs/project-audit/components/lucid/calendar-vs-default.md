# Lucid Calendar vs Default

## 1. Audit Metadata

- Style: lucid
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/lucid/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed line-pairs, verified by direct grep of the
  `first:`/`last:` helpers)

## 2. Executive Summary

Lucid resolves the typo asymmetrically: `first:` keeps plain `rounded-l-md`
while `last:` uses prefixed `rounded-r-lucid-md` (both verified by direct
grep) — the mirror image of a consistent fix. Nav stays `outline`. Own-style
import verified.

## 3. Base Classes

Root: `cn("p-3")` unchanged. Nav `outline` retained. Cell range helpers
(verified): `day-range-end` plain `rounded-r-md`; `first:` plain
`rounded-l-md`; **`last:` `rounded-r-lucid-md` (prefixed)** — asymmetric
resolution (PARITY_DIVERGENCE, Open, concern TOKEN/TECHNICAL — likely slip
during typo resolution mixing plain and prefixed forms in one string; confirm
one form for all three helpers). Day states/icons: prefix swaps (Corroborated).

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

Own-style import `…/lucid/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` namespace except the plain-`md` helpers (§3).

## 12. Typography and Global Styling

Caption/label/head-cell type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) asymmetric typo resolution — PARITY_DIVERGENCE/Open (unify to one
form per the joint ruling; the prefixed `last:` argues the file started toward
`lucid-md`).

## 14. Verification

Full-file diff run (5 changed line-pairs); helpers verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Which single form is canonical (joint ruling)?
