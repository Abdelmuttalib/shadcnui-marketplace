# Material Switch vs Default

## 1. Audit Metadata

- Style: material
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/material/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material rebuilds the switch in Material language: short wide track (`h-4 w-8`)
with an unconditional `input` fill, an **oversized overhanging thumb** (`h-5`
in a `h-4` track, bordered, `z-10`), a hover/focus ripple halo, and no focus
ring widths (owner decision A — STYLE_INTENTIONAL). The unchecked track has no
state selector (always-`input` base). Thumb travel approximately spans the track
with intentional overhang geometry (inferred).

## 3. Base Classes

Root (`material:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| (none) | `group relative` | Added | Anchors halo span; gates `group-hover`/`group-focus-visible` | UNVERIFIED (functional part of halo feature) |
| `h-6 w-11` | `h-4 w-8` | 24×44px → 16×32px | Short wide track | UNVERIFIED (concern DIMENSION) |
| (none) | `bg-material-input` (unconditional; `data-[state=unchecked]` selector dropped) | Track always input-colored at base; checked overrides | Off-state fill no longer state-gated | UNVERIFIED (concern COLOR/STRUCTURE-adjacent) |
| `focus-visible:ring-2 … ring-offset-2` | `focus-visible:ring-material-ring` + `focus-visible:ring-offset-material-background` (colors only, no widths) | Ring/offset widths removed | Inferred: effectively no visible focus ring; halo is the focus signal | STYLE_INTENTIONAL, Corroborated (owner decision A; recurs in material checkbox + radio-group). A11y note §9 |
| checked track | `material` equivalent | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

Thumb (`material:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `h-5 w-5` + `z-10` + `border border-material-border` + `dark:border-none` | Same size; added stacking, border, dark border removal | Thumb deliberately larger than the 16px track (overhang); bordered face that goes borderless in dark | UNVERIFIED as a set (concern DIMENSION/BORDER) |
| `bg-dft-background` | `bg-white` | Hardcoded white | Fixed thumb face | UNVERIFIED (concern COLOR) |
| `translate-x-5` / `translate-x-0` | `translate-x-3` / `-translate-x-0.5` | Endpoints changed | See §5 | UNVERIFIED (concern DIMENSION) |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference (class arithmetic): inner width 32 − 2×2 = 28px;
thumb 20px → available 8px; delta 12 − (−2) = 14px. Inferred: ~6px over-travel
past the inner edge — consistent with an overhang aesthetic (thumb starts 2px
left of the track and ends past the right inner edge), but the exact resting
geometry needs rendered verification. Labeled inference.

## 6. Interaction States

Checked: primary track + white bordered thumb right. Unchecked: input track +
white thumb left (overhanging). Focus: halo reveal (`material:25`: `absolute
-inset-2.5 hidden rounded-full bg-material-primary/15 group-hover:block
group-focus-visible:block`), no ring. Disabled identical. Dark: thumb border
removed (`dark:border-none`).

## 7. DOM and Component Structure

Added halo `span` after `Thumb` (`material:25`); `group relative` on Root;
`Thumb` uses non-self-closing tags (no-op). Indicator-free (as baseline).
Halo + overhang thumb = candidate DESIGN_EXCEPTION feature set (see §13).

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Accessibility note: no focus ring (intentional);
keyboard focus shows the same halo as hover — focus/hover indistinguishable
beyond the track fill. No failure claimed, no measurement made.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED. Halo is pure Tailwind.

## 11. Token Dependencies

`material-*`: input/primary/border/background-ring tokens. Thumb/border whites
hardcoded (`bg-white`, `border-material-border`).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) ring removal — STYLE_INTENTIONAL/Corroborated (preserve; do not
restore a ring); (2) overhang geometry + halo + unconditional input base —
UNVERIFIED as a set (recommend DESIGN_EXCEPTION registration on batch review;
preserve exactly); (3) travel endpoints — UNVERIFIED (verify rendered resting
position). Migration: keep halo markup, group classes, thumb border/dark rule,
and all three travel/state classes verbatim pending verification.

## 14. Verification

Both files read fully. Travel math inferred. Halo classes quoted from source.

## 15. Unresolved Questions

1. Register overhang+halo as DESIGN_EXCEPTION?
2. Is the inferred ~6px over-travel the intended resting geometry?
