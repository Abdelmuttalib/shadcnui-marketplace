# Moon Card vs Default

## 1. Audit Metadata

- Style: moon
- Component: card
- Baseline source: `registry/default/ui/card.tsx:1-86`
- Alternative source: `registry/moon/ui/card.tsx:1-86`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Moon card is a pure token-namespace swap: identical radius tier,
border, shadow, padding, title/description type, structure, and all 6 exports.

## 3. Base Classes

Card/Header/Title/Description/Content/Footer: `dft` → `moon` on rounded/border/
bg/text tokens only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. All padding (`p-6`, `pt-0`) unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree (6 forwardRef divs) and prop types. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 6 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

Title `text-2xl font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
