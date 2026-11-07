# Carbon Hover-Card vs Default

## 1. Audit Metadata

- Style: carbon
- Component: hover-card
- Baseline source: `registry/default/ui/hover-card.tsx:1-29`
- Alternative source: `registry/carbon/ui/hover-card.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (single-line delta, verified by direct read of `carbon:21`)

## 2. Executive Summary

Carbon drops the border color entirely (bare `border` with no color token) and
uses the unprefixed `text-popover-foreground` — the same unprefixed-text
instance pattern as carbon tooltip. Geometry, animations, and exports unchanged.

## 3. Base Classes

Content (`carbon:21` vs `default:21`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border border-dft-border` | `border` (no color token) | Border color dropped | Edge renders at default/current color rather than themed border | PARITY_DIVERGENCE, Open (concern BORDER/TECHNICAL) — likely slip; confirm or restore `border-cb-border` |
| `text-dft-popover-foreground` | `text-popover-foreground` | Prefix missing | As carbon tooltip §3 | PARITY_DIVERGENCE, Needs-designer (concern COLOR/TECHNICAL) — joint ruling with tooltip (+ select set) |
| All else (`w-64`, `p-4`, radius, bg, shadow, anims) | `cb` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

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

`cb-*` namespace except the unprefixed text class and the colorless border (§3).

## 12. Typography and Global Styling

No size/weight classes on Content.

## 13. Findings and Upgrade Preservation

Findings: (1) colorless border — PARITY_DIVERGENCE/Open; (2) unprefixed text —
PARITY_DIVERGENCE/Needs-designer (joint ruling). Migration: confirm both before
carrying forward.

## 14. Verification

Full-file diff run; delta verified by direct read of line 21. Effects inferred.

## 15. Unresolved Questions

1. Bare `border`: deliberate or slip?
2. `text-popover-foreground`: rule jointly with tooltip/select instances.
