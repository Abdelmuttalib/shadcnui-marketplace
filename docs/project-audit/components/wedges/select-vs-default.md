# Wedges Select vs Default

## 1. Audit Metadata

- Style: wedges
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/wedges/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read + direct source
  verification of the lines below)

## 2. Executive Summary

Wedges shortens the trigger (`h-9`) with a 20% tinted fill and offset-1 focus,
empties viewport padding (commented-out `p-1`, verified `wedges:89`), drops item
rounding, and adds responsive `sm:pr-3` item padding. Otherwise a prefix swap.

## 3. Base Classes

Trigger (`wedges:22`, verified): `h-10` → `h-9`; `bg-dft-background` →
`bg-wedges-input/20`; base offset color dropped; `focus:ring-offset-1` (1, not 2)
with offset color. Height/fill UNVERIFIED (DIMENSION/COLOR); offset-1
UNVERIFIED (FOCUS).
Content: prefix swaps. Viewport: `// "p-1"` commented out (`wedges:89`,
verified) → no padding. PARITY_DIVERGENCE, Open (commented code — remove comment
or restore padding deliberately).
Item: `rounded-*-sm` dropped (square); `sm:pr-3` added (responsive padding, as
material). UNVERIFIED (SHAPE/DIMENSION).
Label/Separator/Scroll: prefix swaps (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/item padding changes in §3.

## 6. Interaction States

Focus ring-2/offset-1 present. Highlight/disabled/animations identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact tinted trigger + offset-1 — UNVERIFIED; (2) square items
+ `sm:pr-3` — UNVERIFIED (note material shares `sm:pr-3`); (3) commented viewport
padding — PARITY_DIVERGENCE/Open.

## 14. Verification

Delegated full read with exact quotes; trigger line and commented `p-1`
verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Restore viewport padding or keep unpadded deliberately?
