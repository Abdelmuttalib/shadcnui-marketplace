# Wedges Drawer vs Default

## 1. Audit Metadata

- Style: wedges
- Component: drawer
- Baseline source: `registry/default/ui/drawer.tsx:1-118`
- Alternative source: `registry/wedges/ui/drawer.tsx:1-118`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes; overlay/content lines verified by direct grep)

## 2. Executive Summary

Wedges drops the Content border color (bare `border`, verified) with everything else a prefix swap. Overlay, handle, Header/Footer/Title, scaling, direction, and exports unchanged.

## 3. Base Classes

Overlay `bg-black/80`: identical. Content: `border border-dft-border` → bare `border` (color dropped — PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip shared with 4 other styles — confirm or restore `border-wedges-border`). `bg-wedges-background`, `rounded-t-[10px]`, `mt-24` retained. Handle `bg-wedges-muted`, Description `text-wedges-muted-foreground`: swaps (Corroborated).

## 4. Variants

Not applicable — bottom-only sheet in both files.

## 5. Sizes

No size scale. `mt-24`, handle metrics unchanged.

## 6. Interaction States

Vaul behavior identical (`shouldScaleBackground=true` retained). No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports, Root props, refs, displayNames identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace except bare Content border (§3).

## 12. Typography and Global Styling

Title `text-lg font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless Content border — PARITY_DIVERGENCE/Open (confirm or restore; set-level ruling candidate with carbon/linear/material/catalyst/wedges).

## 14. Verification

Both files read fully; overlay/content lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Bare Content border: deliberate or slip?
