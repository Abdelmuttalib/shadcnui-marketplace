# Linear Select vs Default

## 1. Audit Metadata

- Style: linear
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/linear/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read + spot verification)

## 2. Executive Summary

Linear shortens the trigger (`h-9`), drops its background and offset (adds
`shadow-sm`), and — uniquely — **mirrors the item layout**: label/item padding
flips from `pl-8 pr-2` to `pl-2 pr-8` with the check indicator moved to the
right (`right-2` instead of `left-2`). Content/viewport/separator/exports unchanged.

## 3. Base Classes

Trigger: `h-10` → `h-9`; `bg-dft-background` dropped (transparent);
`ring-offset-*` + `focus:ring-offset-2` dropped (ring-2 kept); `shadow-sm` added.
UNVERIFIED (DIMENSION/COLOR/FOCUS/SHADOW); offset removal PARITY_DIVERGENCE,
Needs-designer.
Label: `py-1.5 pl-8 pr-2` → `py-1.5 pl-2 pr-8` (mirrored). Item: `pl-8 pr-2` →
`pl-2 pr-8`; indicator `absolute left-2` → `absolute right-2` (right-side check —
sole instance in the set). Mirroring UNVERIFIED as a set (concern
STRUCTURE-adjacent styling — same elements, reversed sides).
Content (`p-1` viewport kept), Separator, Scroll buttons: prefix swaps
(TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger height + item padding changes in §3.

## 6. Interaction States

Focus ring-2 present, offset absent. Item highlight namespace-swapped. Disabled
identical. Animations/positioning identical. No dark-mode classes.

## 7. DOM and Component Structure

Same elements and primitives; indicator side flipped left→right with matching
padding mirror — layout mechanism preserved, direction reversed. No added/removed
nodes. PARITY_EXPECTED for structure; the mirror itself is §3 styling.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; check still renders via Indicator on selection (side change only).
PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact shadowed trigger — UNVERIFIED; (2) mirrored item layout +
right-side check — UNVERIFIED (preserve exactly: padding flip and `right-2` act
as one system); (3) missing offset — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Is the right-side check + mirrored padding intended linear language?
2. Offset width: deliberate or slip?
