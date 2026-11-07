# Linear Tabs vs Default

## 1. Audit Metadata

- Style: linear
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/linear/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Linear compacts the list (`h-9`, dropped `p-1`, added border) and restyles the
trigger as a full-height bordered tab (`h-full`, `border-transparent`,
narrower `px-2.5`, no `py`) with an `input`-bordered active state. Content
drops its offset width. Structure and exports unchanged.

## 3. Base Classes

List: `h-10` → `h-9`; `p-1` dropped; `border border-linear-border` added
(UNVERIFIED, DIMENSION/BORDER — framed compact bar).
Trigger: `h-full` added; `border border-transparent` added; `px-3` → `px-2.5`,
`py-1.5` dropped; active adds `border-linear-input` (UNVERIFIED set,
DIMENSION/BORDER). `rounded-linear-sm`, ring-2 retained; offset-2 dropped
(PARITY_DIVERGENCE, Needs-designer, FOCUS — linear offset pattern).
Content: offset-2 dropped, ring-2 kept (same divergence).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active bordered-tab treatment per §3; hover absent in both files; disabled
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed compact bar + full-height bordered triggers —
UNVERIFIED (preserve); (2) missing offsets (trigger + content) —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Offset widths: deliberate or slip?
