# Neon Calendar vs Default

## 1. Audit Metadata

- Style: neon
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/neon/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed line-pairs, verified by `dfs-md` grep)

## 2. Executive Summary

Neon preserves the baseline `rounded-r-dfs-md` typo verbatim (verified) with
everything else a prefix swap. Nav stays `outline`. Own-style import verified.

## 3. Base Classes

Root: `cn("p-3")` unchanged. Nav `outline` retained. Cell `last:` helper:
`rounded-r-dfs-md` preserved verbatim — UNVERIFIED (concern TOKEN/TECHNICAL —
same ruling needed as snow/libelle; see snow report §13 for the preservation
protocol). Day states/icons: prefix swaps (Corroborated).

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

Own-style import `…/neon/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace only.

## 12. Typography and Global Styling

Caption/label/head-cell type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) verbatim typo preservation — UNVERIFIED (await the joint ruling).

## 14. Verification

Full-file diff run (5 changed line-pairs); `dfs-md` presence verified by grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Typo canonical resolution (joint ruling).
