# Neon Card vs Default

## 1. Audit Metadata

- Style: neon
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/neon/ui/card.tsx:1-86`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
Title line verified by direct grep of `neon:39`)

## 2. Executive Summary

Neon's only non-swap change is the Title weight (`semibold`→`medium`, shared
with spectrum). Everything else is a prefix swap; structure and exports unchanged.

## 3. Base Classes

Card/Header/Description/Content/Footer: prefix swaps (Corroborated). Title
(`neon:39`, verified): `font-semibold` → `font-medium`, size `text-2xl` kept
(UNVERIFIED, TYPOGRAPHY).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All padding unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 6 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace only.

## 12. Typography and Global Styling

Title weight change is component-level (§3).

## 13. Findings and Upgrade Preservation

Findings: (1) medium Title weight — UNVERIFIED (preserve; rule with spectrum).

## 14. Verification

Both files read fully; Title line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Confirm medium title weight as intended (rule with spectrum).
