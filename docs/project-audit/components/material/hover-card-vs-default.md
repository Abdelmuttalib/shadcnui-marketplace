# Material Hover-Card vs Default

## 1. Audit Metadata

- Style: material
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/material/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `material:21`)

## 2. Executive Summary

Material drops the border color (bare `border`) and uses unprefixed
`text-popover-foreground` — the same two deviations as carbon hover-card.
Geometry, animations, and exports unchanged.

## 3. Base Classes

Content (`material:21` vs `default:21`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border border-dft-border` | `border` (no color) | Border color dropped | Unthemed edge | PARITY_DIVERGENCE, Open (concern BORDER/TECHNICAL) |
| `text-dft-popover-foreground` | `text-popover-foreground` | Prefix missing | As material popover/select §3 | PARITY_DIVERGENCE, Needs-designer — joint ruling with the material set |
| All else | `material` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `w-64`, `p-4` unchanged.

## 6. Interaction States

Animations identical. No Portal added. No hover/focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical incl. defaults. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 text-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` except unprefixed text + colorless border (§3).

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless border — PARITY_DIVERGENCE/Open; (2) unprefixed text —
PARITY_DIVERGENCE/Needs-designer (joint ruling). Migration: confirm both.

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

1. Bare `border`: deliberate or slip?
2. `text-popover-foreground`: rule jointly with material popover/select.
