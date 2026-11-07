# Carbon Calendar vs Default

## 1. Audit Metadata

- Style: carbon
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/carbon/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (6 changed line-pairs, verified by direct grep of
  import:8, root:21, nav:29, cell:39, typo lines)

## 2. Executive Summary

Carbon styles the calendar root (`rounded-cb-md bg-cb-popover`), switches nav
buttons to the `ghost` variant (sole instance), resolves the baseline
`rounded-r-dfs-md` typo to `rounded-r-cb-md` (verified fixed — no `dfs` string
remains), and otherwise swaps tokens. Own-style `buttonVariants` import verified.

## 3. Base Classes

Root (`carbon:21`, verified): `cn("p-3")` → `cn("rounded-cb-md bg-cb-popover p-3")`
— rounded popover-surfaced root, sole instance (UNVERIFIED, COLOR/SHAPE).
Nav (`carbon:29`, verified): `buttonVariants({ variant: "outline" })` →
`buttonVariants({ variant: "ghost" })` — sole ghost-nav instance (UNVERIFIED,
INTERACTION — nav buttons lose their outline edge; ghost styling flows through
carbon buttonVariants automatically).
Head-cell/day-selected/today/outside/disabled/range-middle: prefix swaps
(Corroborated). Cell `h-9 w-9` unchanged. Icons `h-4 w-4` unchanged.

## 4. Variants

No cva variants in this file; button-variant mapping via import (§3, §10).

## 5. Sizes

No size scale. Day cells stay `h-9 w-9`; head cells `w-9`.

## 6. Interaction States

Selected/today/outside/disabled/range states namespace-swapped. Nav
hover-opacity retained. No dark-mode classes.

## 7. DOM and Component Structure

Identical (DayPicker + classNames + IconLeft/Right). PARITY_EXPECTED.

## 8. Props, Exports, and API

`CalendarProps` type, `Calendar` export, `displayName`, `showOutsideDays`
default identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/carbon/ui/button` verified (`carbon:8`); rest identical
(lucide chevrons, day-picker, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` caption/label, `text-[0.8rem]` head cells retained.

## 13. Findings and Upgrade Preservation

Findings: (1) popover-surfaced rounded root — UNVERIFIED; (2) ghost nav buttons —
UNVERIFIED (preserve; keep import re-pointed so ghost resolves through the new
carbon button); (3) typo fixed to `cb-md` — see §15. Migration: preserve 1–2
deliberately.

## 14. Verification

Full-file diff run (6 changed line-pairs); import/root/nav/cell lines verified
by direct grep. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm popover root + ghost nav as intended carbon language.
2. Typo handling: carbon resolves `dfs-md` → `cb-md`. A single owner ruling on
   the canonical resolution (prefixed tier vs plain `md` vs verbatim) should
   cover all styles — see calendar-MATRIX.md. Do not normalize per-style in prose.
