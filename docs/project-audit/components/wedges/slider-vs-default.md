# Wedges Slider vs Default

## 1. Audit Metadata

- Style: wedges
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/wedges/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Wedges uses a 1.5px `input`-colored rail with the smallest thumb in the set
(`size-3.5`, 1px `border`-token edge, hardcoded white face), an always-on 1px
offset base, and no focus offset width. No structural divergence.

## 3. Base Classes

Root identical. Track: `h-2` → `h-1.5`; `bg-dft-secondary` → `bg-wedges-input`
(UNVERIFIED, DIMENSION/COLOR). Range: prefix swap (TOKEN_DEPENDENCY,
Corroborated). Thumb:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `size-3.5` | 20px → 14px (smallest grip) | Small grip | UNVERIFIED (concern DIMENSION) |
| `border-2` | `border` | 2px → 1px | Lighter edge | UNVERIFIED (concern BORDER) |
| `border-dft-primary` | `border-wedges-border` | Primary → border token | Neutral edge | UNVERIFIED (concern COLOR) |
| `bg-dft-background` | `bg-white` | Hardcoded white face | Fixed grip face | UNVERIFIED (concern COLOR) |
| `ring-offset-dft-background` | `ring-offset-1 ring-offset-wedges-background` | Offset color kept; unconditional `ring-offset-1` added | Always-on 1px offset base (not focus-gated) | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-offset-2` | (absent) | Focus offset width dropped | No additional focus offset | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-2/ring`, disabled | retained | — | Focus present | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus per §3 (ring-2 present; unconditional 1px offset base, no focus offset).
Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*`: input rail, border-token thumb edge; thumb face hardcoded white.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) 1.5px rail + smallest white thumb + border-token edge —
UNVERIFIED; (2) always-on offset-1 with dropped focus offset — UNVERIFIED
(preserve as written; confirm the non-gated offset is intended).

## 14. Verification

Both files read fully. Offset-conflict mechanism inferred from class order +
twMerge semantics, not rendered.

## 15. Unresolved Questions

1. Is the always-on (non-focus-gated) 1px offset with no focus offset intended?
