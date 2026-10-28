# Snow Select vs Default

## 1. Audit Metadata

- Style: snow
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/snow/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Snow shortens the trigger (`h-9`), drops the focus-offset width (double space),
and is the only style adding `hover:` highlight alongside `focus:` on items.
Content, label, separator, and exports otherwise unchanged.

## 3. Base Classes

Trigger: `h-10` → `h-9`; `bg-snow-background` kept (opaque, unlike most);
`focus:ring-offset-2` dropped (double space; offset color kept); ring-2 retained.
Height UNVERIFIED (DIMENSION); offset removal PARITY_DIVERGENCE, Needs-designer
(FOCUS); rest TOKEN_DEPENDENCY, Corroborated.
Item: `outline-none hover:bg-snow-accent hover:text-snow-accent-foreground
focus:bg-snow-accent focus:text-snow-accent-foreground` — `hover:` pair added
alongside `focus:` (sole instance in the set; UNVERIFIED, INTERACTION —
mouse users get highlight feedback identical to keyboard focus).
Content/Label/Separator/Scroll/Viewport(`p-1` kept): prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger height change in §3.

## 6. Interaction States

Highlight per §3 (hover + focus). Disabled/animations identical. Focus ring-2
present, offset absent. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 items. PARITY_EXPECTED with those notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact opaque trigger — UNVERIFIED; (2) hover+focus highlight —
UNVERIFIED (preserve both pairs; do not drop `hover:` as redundant);
(3) missing offset — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Is the dual hover+focus highlight intended snow language?
2. Offset width: deliberate or slip?
