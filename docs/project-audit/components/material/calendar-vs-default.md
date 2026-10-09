# Material Calendar vs Default

## 1. Audit Metadata

- Style: material
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/material/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (5 changed line-pairs, verified by direct grep of
  root:21 and typo lines)

## 2. Executive Summary

Material pins the root font (`font-material` — second root-font instance after
libelle's `font-outfit`) and resolves the typo to `rounded-r-material-md`.
Nav stays `outline`. All else is a prefix swap. Own-style import verified.

## 3. Base Classes

Root (`material:21`, verified): `cn("p-3")` → `cn("p-3 font-material")`
(UNVERIFIED, TYPOGRAPHY — component-level family pin, as libelle; redundant
with the page font unless rendered outside it). Nav `outline` retained. Cell
typo line: all `material-md` (verified fixed). Day states/icons: prefix swaps
(Corroborated).

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

Own-style import `…/material/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace only.

## 12. Typography and Global Styling

Root `font-material` is component-level (§3); day text sizes retained. Family
Roboto matches the inherited page font — the pin matters only if rendered
outside it.

## 13. Findings and Upgrade Preservation

Findings: (1) root font pin — UNVERIFIED (preserve exactly; rule jointly with
libelle's pin); (2) typo fixed to `material-md` — joint ruling (§15).

## 14. Verification

Full-file diff run (5 changed line-pairs); root line verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. Is root font pinning deliberate or redundant (rule with libelle)?
2. Typo canonical resolution (joint ruling).
