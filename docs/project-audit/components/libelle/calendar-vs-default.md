# Libelle Calendar vs Default

## 1. Audit Metadata

- Style: libelle
- Component: calendar
- Baseline source: `registry/default/ui/calendar.tsx:1-70`
- Alternative source: `registry/libelle/ui/calendar.tsx:1-70`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (6 changed line-pairs, verified by direct grep of
  root:21 and `dfs-md`)

## 2. Executive Summary

Libelle pins the root font (`font-outfit`, double-spaced — as material) and
preserves the `rounded-r-dfs-md` typo verbatim (verified). Nav stays `outline`.
Own-style import verified.

## 3. Base Classes

Root (`libelle:21`, verified): `cn("p-3")` → `cn("p-3  font-outfit")`
(double space is a no-op) — component-level family pin (UNVERIFIED, TYPOGRAPHY —
as material; rule jointly; redundant with the page font unless rendered outside
it). Nav `outline` retained. Cell `last:` helper: `rounded-r-dfs-md` preserved
verbatim — UNVERIFIED (same protocol as snow/neon). Day states/icons: prefix
swaps (Corroborated).

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

Own-style import `…/libelle/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace only.

## 12. Typography and Global Styling

Root `font-outfit` is component-level (§3); day text sizes retained.

## 13. Findings and Upgrade Preservation

Findings: (1) root font pin — UNVERIFIED (rule jointly with material's pin);
(2) verbatim typo preservation — UNVERIFIED (joint ruling).

## 14. Verification

Full-file diff run (6 changed line-pairs); root line and `dfs-md` presence
verified by direct grep. Effects inferred from source.

## 15. Unresolved Questions

1. Is root font pinning deliberate or redundant (rule with material)?
2. Typo canonical resolution (joint ruling).
