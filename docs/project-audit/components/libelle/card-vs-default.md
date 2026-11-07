# Libelle Card vs Default

## 1. Audit Metadata

- Style: libelle
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/libelle/ui/card.tsx:1-83`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
Header:26 and Title:38 verified by direct grep)

## 2. Executive Summary

Libelle tightens Header padding (`p-6`→`p-5` — sole card padding change, leaving
Content/Footer at `p-6`) and restyles Title (`text-xl`, drops `tracking-tight`).
Card, Description, Content, Footer, structure, and exports otherwise unchanged
(83-vs-86 lines is formatting collapse only).

## 3. Base Classes

Card/Description/Content/Footer: prefix swaps (Corroborated). Header
(`libelle:26`, verified): `flex flex-col space-y-1.5 p-6` → `... p-5`
(UNVERIFIED, DIMENSION — tighter header, inconsistent with Content/Footer `p-6`;
recorded as observed fact, intent open). Title (`libelle:38`, verified):
`text-2xl font-semibold leading-none tracking-tight` → `text-xl font-semibold
leading-none` — smaller size + dropped tracking, weight kept (UNVERIFIED,
TYPOGRAPHY).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Header padding change in §3.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree and prop types. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 6 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace only.

## 12. Typography and Global Styling

Title size/tracking change is component-level (§3).

## 13. Findings and Upgrade Preservation

Findings: (1) tight header + restyled title — UNVERIFIED as a set (preserve
exactly, including the header/content padding split).

## 14. Verification

Both files read fully; Header/Title lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Is the header/content padding split deliberate?
