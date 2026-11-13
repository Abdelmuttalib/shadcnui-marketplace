# Material Table vs Default

## 1. Audit Metadata

- Style: material
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/material/ui/table.tsx:1-121`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Material raises the header (`h-14`) in solid `foreground` ink (not muted, shared
only with wedges), adds explicit border colors, and paints selected rows with
the `accent` token instead of `muted`. Cells stay `p-4`. No structural change.

## 3. Base Classes

Deltas (`material` vs `default`):

| Part | Default | Alternative | Classification |
|---|---|---|---|
| Header | `[&_tr]:border-b [&_tr]:border-b-dft-border` | `... [&_tr]:border-b-material-border` | Prefix swap (baseline already colored) | TOKEN_DEPENDENCY, Corroborated |
| Footer | `border-t border-t-dft-border ...` | `border-t bg-material-muted/50 ...` (top-border color dropped) | Footer top color deleted (UNVERIFIED, BORDER) |
| Row | `border-b border-b-dft-border ... data-[state=selected]:bg-dft-muted` | `border-b border-b-material-border ... data-[state=selected]:bg-material-accent` | Prefix swap + accent selected (UNVERIFIED, COLOR) |
| Head | `h-12 px-4 ... text-dft-muted-foreground` | `h-14 px-4 ... text-material-foreground` | Taller header + solid-ink text (UNVERIFIED, DIMENSION/COLOR) |
| Footer/Body/Cell/Caption/Table | — | prefix swaps / identical | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Header height change in §3.

## 6. Interaction States

Hover namespace-swapped; selected recolored (§3). No focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Selected-state visibility changes color only; plain table, no ARIA layer.
PARITY_EXPECTED with §3 note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*`: accent/muted/border/foreground tokens.

## 12. Typography and Global Styling

Head stays `font-medium`; header ink change is color-level (§3).

## 13. Findings and Upgrade Preservation

Findings: (1) tall solid-ink header + accent selected — UNVERIFIED (preserve);
(2) footer top-border color deletion — UNVERIFIED (confirm or restore
`border-t-material-border`).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm header treatment + accent selected rows as intended.
