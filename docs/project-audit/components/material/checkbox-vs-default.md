# Material Checkbox vs Default

## 1. Audit Metadata

- Style: material
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/material/ui/checkbox.tsx:1-33`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material adds a hover/focus ripple halo (`span`, `group`-gated), enlarges to 20px,
rests on a filled `bg-material-background` with an `input`-colored border, and —
per owner decision A — **removes the visible focus ring entirely** (only
`focus-visible:outline-none` remains). Checked border added. Icon unchanged.

## 3. Base Classes

Baseline Root (`default:16`) vs material Root (`material:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| (none) | `group relative` | Added positioning + group gate | Anchors the halo span; enables `group-hover`/`group-focus-visible` | UNVERIFIED (concern STRUCTURE-adjacent styling; part of halo feature) |
| `h-4 w-4` | `h-5 w-5` | 16px → 20px | Larger box | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-material-input` | Primary → input border | Neutral resting edge | UNVERIFIED (concern COLOR) |
| (none) | `bg-material-background` | Added resting fill | Opaque resting face | UNVERIFIED (concern COLOR) |
| (none) | `hover:border-material-primary` | Added | Border resolves to primary on hover | UNVERIFIED (concern INTERACTION) |
| `focus-visible:ring-2 … ring-offset-2` (+ ring/offset colors) | `focus-visible:outline-none` only — ring, ring color, offset color+width all absent | Focus-ring stack removed | Inferred: no visible focus ring; only `group-focus-visible` halo (which requires hover-or-focus gating, see §9) | STYLE_INTENTIONAL, Corroborated (owner decision A; recurs in material radio-group + switch). Accessibility note in §9 |
| (none) | `data-[state=checked]:border-material-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| checked bg/text | `material` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable — no cva variants.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: border recolor + halo reveal. Focus: halo reveal via
`group-focus-visible:block`, no ring. Checked: border+fill+icon recolor. Disabled
identical. Halo span (`material:21`): `absolute -inset-2.5 z-10 hidden rounded-full
bg-material-primary/15 group-hover:block group-focus-visible:block` — inferred:
15%-opacity circular wash extending 10px beyond the box on hover/focus.

## 7. DOM and Component Structure

Added halo `span` before `Indicator` (`material:21`); `group relative` on Root.
Indicator, icon, refs, merge order unchanged. The halo is a decorative addition
gated on group state — candidate DESIGN_EXCEPTION feature (see §13).

## 8. Props, Exports, and API

Identical export, props, `displayName`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix state/keyboard/ref behavior unchanged. Accessibility note: with no focus
ring, keyboard focus is signaled only by the halo (same 15% wash as hover — hover
and focus are visually indistinguishable) plus the pre-existing border. This is the
documented cost of the intentional Material replication; no failure claimed, no
contrast measurement made. Halo has `z-10` above the box but `hidden` until
hover/focus and carries no pointer handlers — inferred: non-interactive decoration.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED. No new dependencies for the halo (pure Tailwind).

## 11. Token Dependencies

`material-*`: `--material-primary: 0.49 0.1992 260.6`, input/background tokens.
Halo uses `--material-primary` at 15%.

## 12. Typography and Global Styling

Icon `Check h-4 w-4` unchanged (`material:24`). No text.

## 13. Findings and Upgrade Preservation

Findings: (1) halo span + group gating — UNVERIFIED as DESIGN_EXCEPTION pending
protocol review (necessity: Material ripple language; behavior verified unchanged
in §9 — recommend registering on completion of batch review); (2) ring removal —
STYLE_INTENTIONAL/Corroborated (owner decision A); (3) 20px box, resting fill,
hover/checked borders — UNVERIFIED. Migration: preserve halo markup + group
classes exactly; preserve ring-less focus (do not "restore" a ring); keep tokens.

## 14. Verification

Both files read fully. Halo behavior inferred from classes; no browser check.

## 15. Unresolved Questions

1. Register halo as DESIGN_EXCEPTION (batch review)?
2. Confirm 20px/resting-fill/hover-border as intended Material language.
