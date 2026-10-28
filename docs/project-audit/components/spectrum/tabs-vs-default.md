# Spectrum Tabs vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/spectrum/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Spectrum rebuilds tabs as underline tabs: unframed heightless list (no `h-10`,
bg, or padding), square triggers (`rounded-none`) with bottom-border edges, and
an active state carried by border ink + text color alone (no fill, no shadow).
Content unchanged. (Prefix `spctm`.)

## 3. Base Classes

List: `h-10` + `bg-dft-muted` + `p-1` all dropped (UNVERIFIED, DIMENSION/COLOR —
bare flex row). Trigger: `rounded-dft-sm` → `rounded-none`;
`border-b-2 border-b-spctm-border` added; `px-3` → `px-2.5` (UNVERIFIED set,
SHAPE/BORDER/DIMENSION). Active: `bg-*-*/shadow-sm` dropped;
`border-b-spctm-foreground` + `text-spctm-foreground` added (UNVERIFIED, COLOR —
ink-only active state). Ring-2/offset-2 retained. Content: prefix swap.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active treatment per §3 (no fill change on selection — border/text only);
hover absent in both files; disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Selection semantics unchanged; active affordance is border+ink (recorded as
observed; selected-vs-unselected distinction relies on those two cues — no
failure claimed).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace. Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) underline-tab system — UNVERIFIED as a set (preserve exactly;
spectrum's most distinctive tabs identity).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the underline-tab system as intended.
