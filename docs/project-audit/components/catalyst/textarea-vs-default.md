# Catalyst Textarea vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/catalyst/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst's only changes are a 50% input-tinted fill and a dropped focus-offset
width (ring-2 kept). Otherwise a prefix swap.

## 3. Base Classes

Baseline vs catalyst: `bg-dft-background` → `bg-catalyst-input/50` (UNVERIFIED,
COLOR); `focus-visible:ring-offset-2` absent with offset color kept (offset
removal PARITY_DIVERGENCE, Needs-designer, FOCUS); everything else prefix swap /
retained (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

## 6. Interaction States

Focus ring-2 present, offset absent. Hover/disabled/md identical.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 50% fill — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
