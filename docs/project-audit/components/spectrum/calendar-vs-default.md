# Spectrum Calendar vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/spectrum/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (6 changed line-pairs, verified by direct read of
  cell:39)

## 2. Executive Summary

Spectrum resolves the typo to `spctm-md`, raises day-outside selected opacity
to `/80` (sole instance), and — uniquely — **drops the generic
`[&:has([aria-selected])]:bg-spctm-accent` selected-background helper** from
the cell string (verified by direct read). Own-style import verified. (Prefix
`spctm`.)

## 3. Base Classes

Root: `cn("p-3")` unchanged. Nav `outline` retained. Cell (`spectrum:39`,
verified): typo fixed to `spctm-md`; `day-outside` selected `bg-spctm-accent/80`
(vs `/50` everywhere else — UNVERIFIED, COLOR); generic selected-background
helper absent — PARITY_DIVERGENCE, Needs-designer (concern INTERACTION — the
base selected-day wash relies on this helper in every other style; its absence
may leave selected days demolished to only the today/disabled treatments;
confirm whether deliberate). Day states/icons otherwise prefix swaps.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. Day cells stay `h-9 w-9`.

## 6. Interaction States

Selected/today/outside/disabled/range per §3 (generic wash missing). No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`CalendarProps`, `Calendar` export, `displayName`, `showOutsideDays` identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Selected-day rendering is affected by the §3 omission (pending ruling, not a
failure claim — DayPicker still exposes `aria-selected`).

## 10. Imports and Dependencies

Own-style import `…/spectrum/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace. Keep the `spctm` prefix.

## 12. Typography and Global Styling

Caption/label/head-cell type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) typo fixed to `spctm-md` — joint ruling (§15); (2) `/80` outside
opacity — UNVERIFIED; (3) missing generic selected wash — PARITY_DIVERGENCE/
Needs-designer (restore the helper or record its absence as intended; do not
carry silently).

## 14. Verification

Full-file diff run (6 changed line-pairs); cell line verified by direct read
(absence confirmed — no `]:bg-spctm-accent ` generic helper present). Effects
inferred from source.

## 15. Unresolved Questions

1. Is the missing selected-background helper a slip? (Strongest calendar
   divergence in the batch.)
2. Typo canonical resolution (joint ruling).
