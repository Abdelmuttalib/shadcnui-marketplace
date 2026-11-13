# Moon Badge vs Default

## 1. Audit Metadata

- Style: moon
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/moon/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Moon badge is an exact prefix swap: identical metrics, variants, hovers, structure, and exports.

## 3. Base Classes

Base: `rounded-full`, `px-2.5 py-0.5 text-xs font-semibold`, ring-2/offset-2 all retained modulo prefix. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default / secondary / destructive / outline | baseline fills + `/80` hovers / plain outline | `moon` equivalents | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

Hovers identical to baseline. No disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
