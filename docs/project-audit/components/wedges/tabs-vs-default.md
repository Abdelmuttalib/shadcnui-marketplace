# Wedges Tabs vs Default

## 1. Audit Metadata

- Style: wedges
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/wedges/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Wedges rebuilds the list as a divided bordered frame (`divide-x`,
`overflow-hidden`, no height/bg/padding) with edge-to-edge `border-y`
triggers, the only `hover:` treatment (`hover:bg-wedges-accent`), primary
active underline, and the only `data-[state=inactive]` styling in the set.
Content unchanged. Structure and exports unchanged.

## 3. Base Classes

List: `h-10` + `bg-dft-muted` + `p-1` dropped; `divide-x overflow-hidden` +
`border border-wedges-border` added (UNVERIFIED set, DIMENSION/BORDER — segmented
frame). Trigger: `rounded-dft-sm` dropped (square); `border-y-2
border-y-transparent` added; `px-3` → `px-3.5`; `hover:bg-wedges-accent` added
(sole hover in the set); active `bg-dft-background` → `bg-wedges-background` +
`border-b-wedges-primary` added, `shadow-sm` dropped (UNVERIFIED set); added
`data-[state=inactive]:text-wedges-muted-foreground` (sole inactive treatment —
UNVERIFIED). Ring-2/offset-2 retained. Content: prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Hover (sole instance), active underline+fill, inactive ink, disabled identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED — restyle only, no new nodes.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Selection semantics unchanged. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*`: accent/primary/muted/border tokens.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) segmented-frame tab system (list + triggers + hover + active +
inactive) — UNVERIFIED as a set (preserve exactly; wedges' most distinctive
tabs identity).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the segmented system as intended.
