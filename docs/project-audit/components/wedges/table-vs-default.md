# Wedges Table vs Default

## 1. Audit Metadata

- Style: wedges
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/wedges/ui/table.tsx:1-121`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Wedges raises the header (`h-14`) in solid `foreground` ink (shared only with
material), adds explicit border colors, and paints hover/selected rows with
`accent` instead of `muted`. Cells stay `p-4`. No structural change.

## 3. Base Classes

Deltas (`wedges` vs `default`): Header prefix swap; Footer `border-t
border-t-dft-border` → `border-t` (top-border color dropped — UNVERIFIED,
BORDER); Row prefix swap + `hover:bg-dft-muted/50` → `hover:bg-wedges-accent/50`
+ `data-[state=selected]:bg-dft-muted` → `data-[state=selected]:bg-wedges-accent`
(UNVERIFIED, COLOR); Head `h-12` → `h-14`, `text-dft-muted-foreground` →
`text-wedges-foreground` (UNVERIFIED, DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Header height change in §3.

## 6. Interaction States

Hover/selected recolored (§3). No focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED with §3 note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*`: accent/muted/border/foreground tokens.

## 12. Typography and Global Styling

Head stays `font-medium`; ink change is color-level (§3).

## 13. Findings and Upgrade Preservation

Findings: (1) tall solid-ink header + accent hover/selected — UNVERIFIED
(preserve; mirrors material's header language); (2) footer top-border color
deletion — UNVERIFIED (confirm or restore).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm header treatment + accent rows as intended.
