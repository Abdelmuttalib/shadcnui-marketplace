# Spectrum Slider vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/spectrum/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum thins the track to 1px, shrinks the thumb to 16px with a
`foreground`-colored (not primary) border, and replaces the ring focus with
`focus-visible:border-4` — the only border-width focus treatment in the set.
(Prefix `spctm`.)

## 3. Base Classes

Root identical. Track: `h-2` → `h-1`; `bg-dft-secondary` → `bg-spctm-secondary`
(UNVERIFIED, DIMENSION/COLOR). Range: prefix swap (TOKEN_DEPENDENCY,
Corroborated). Thumb:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `h-4 w-4` | 20px → 16px | Smaller grip | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-spctm-foreground` | Primary → foreground border | Neutral edge | UNVERIFIED (concern COLOR) |
| `focus-visible:ring-2 focus-visible:ring-spctm-ring focus-visible:ring-offset-2` (+ offset color) | `focus-visible:border-4` (with `outline-none` kept) | Ring/offset stack → 4px border on focus | Inferred: thumb grows a 4px border instead of a halo when focused | UNVERIFIED (concern FOCUS) |
| `bg-spctm-background`, disabled pair | retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus per §3 (border-based). Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED — class-only restyle.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Border-based focus recorded UNVERIFIED with
accessibility relevance, not a failure claim.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace; thumb edge uses the foreground token (not primary).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) hairline rail + small thumb + foreground edge — UNVERIFIED;
(2) `border-4` focus — UNVERIFIED (preserve exactly; unique mechanism). Keep the
`spctm` prefix.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Is border-width focus intended, or should a ring be restored?
