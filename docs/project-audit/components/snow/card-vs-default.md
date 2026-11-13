# Snow Card vs Default

## 1. Audit Metadata

- Style: snow
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/snow/ui/card.tsx:1-83`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
Title line verified by direct grep of `snow:38`)

## 2. Executive Summary

Snow downsizes the Title (`text-xl`, `medium` weight — verified line 38) with
everything else a prefix swap. The 83-vs-86 line delta is formatting collapse
only, not structural. Structure and exports unchanged.

## 3. Base Classes

Card/Header/Description/Content/Footer: prefix swaps (Corroborated). Title
(`snow:38`, verified): `text-2xl font-semibold ...` → `text-xl font-medium ...`
(UNVERIFIED, TYPOGRAPHY — smaller, lighter title).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All padding unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree and prop types (line-count delta is collapsed JSX formatting).
PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 6 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

Title size+weight change is component-level (§3).

## 13. Findings and Upgrade Preservation

Findings: (1) smaller lighter Title — UNVERIFIED (preserve).

## 14. Verification

Both files read fully; Title line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Confirm downsized title as intended.
