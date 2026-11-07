# Snow Tabs vs Default

## 1. Audit Metadata

- Style: snow
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/snow/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Snow compacts the list (`h-9`, `-sm` radius, bare `border`, 60% muted fill,
dropped `p-1`) and restyles triggers as square-bottomed tabs (`rounded-b-none`,
`border-b-2 transparent`) with a primary active border and no shadow, dropping
both focus offsets. Content drops its offset too (trailing space). Structure
and exports unchanged.

## 3. Base Classes

List: `h-10` → `h-9`; `rounded-dft-md` → `rounded-snow-sm`; `p-1` dropped; bare
`border` (no color — PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip,
confirm or restore); `bg-dft-muted` → `bg-snow-muted/60` (UNVERIFIED set,
DIMENSION/SHAPE/COLOR).
Trigger: `rounded-dft-sm` kept + added `rounded-b-none border-b-2
border-transparent`; active `bg-dft-background` → `bg-snow-background` +
`border-snow-primary` added, `shadow-sm` dropped (UNVERIFIED set);
`focus:ring-offset-2` dropped, ring-2 kept (PARITY_DIVERGENCE, Needs-designer,
FOCUS — snow offset pattern). Content: offset-2 dropped with trailing space,
ring-2 kept (same divergence).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active treatment per §3; hover absent in both files; disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset questions. PARITY_EXPECTED with those notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace; list border color absent (§3).

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact square-bottomed tab system — UNVERIFIED (preserve);
(2) bare list border — PARITY_DIVERGENCE/Open; (3) missing offsets (trigger +
content) — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Bare list border: deliberate or slip?
2. Offsets: deliberate or slip (snow pattern)?
