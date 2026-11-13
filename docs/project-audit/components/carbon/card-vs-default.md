# Carbon Card vs Default

## 1. Audit Metadata

- Style: carbon
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/carbon/ui/card.tsx:1-86`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Carbon's only non-swap change is the radius tier (`rounded-*-lg` →
`rounded-cb-md` — the sole card radius change in the set). Card/Header/Title/
Description/Content/Footer structure, padding, type, shadow, and exports
unchanged.

## 3. Base Classes

Card: `rounded-dft-lg` → `rounded-cb-md` (UNVERIFIED, SHAPE — tier change, not
just prefix; square via `--cb-radius: 0rem` either way, but the utility tier
differs and must be preserved literally); `border-cb-border`, `bg-cb-card`,
`text-cb-card-foreground`, `shadow-sm` are prefix swaps (Corroborated).
Header (`space-y-1.5 p-6`), Title (`text-2xl semibold`), Content (`p-6 pt-0`),
Footer (`flex items-center p-6 pt-0`): identical. Description: prefix swap.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. All padding (`p-6`) unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree (6 forwardRef divs), prop types, displayNames. Explicitly
styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 6 exports (`Card, CardContent, CardDescription, CardFooter, CardHeader,
CardTitle`) identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: card/border/muted tokens; `--cb-radius: 0rem`.

## 12. Typography and Global Styling

Title `text-2xl font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `-md` radius tier — UNVERIFIED (preserve the literal utility;
do not "correct" to `-lg`).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
