# Snow Badge vs Default

## 1. Audit Metadata

- Style: snow
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/snow/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Snow badge is a prefix swap with a `-md` radius tier plus one subtraction: the base drops `focus:ring-offset-2` (verified trailing space), continuing the snow offset pattern.

## 3. Base Classes

Base: `rounded-full` → `rounded-snow-md`; `px-2.5 py-0.5 text-xs font-semibold` retained; `focus:ring-offset-2` dropped with offset color kept — PARITY_DIVERGENCE, Needs-designer (FOCUS).

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default / secondary / destructive / outline | baseline fills + `/80` hovers / plain outline | `snow` equivalents | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

Hovers identical to baseline. No disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace only.

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap + `-md` tier — TOKEN_DEPENDENCY; (2) missing offset width — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
