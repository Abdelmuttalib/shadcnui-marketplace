# Spectrum Radio-Group vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/spectrum/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum keeps the 16px item but doubles the border, adds a checked border+fill,
and rebuilds the indicator as a filled primary disc (`size-full rounded-full
bg-spctm-primary`) behind a shrunken hardcoded-white dot (`h-1.5`). Focus stack
retained. (Prefix `spctm`.)

## 3. Base Classes

Root identical. Item (`spectrum:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border` | `border-2` | 1px → 2px | Heavier edge in a 16px item | UNVERIFIED (concern BORDER) |
| `border-dft-primary` | `border-spctm-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-spctm-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:bg-spctm-primary` | Added | Checked item fills primary | UNVERIFIED (concern COLOR) |
| text/ring/offset/disabled | `spctm` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; item stays 16px while dot shrinks (§7).

## 6. Interaction States

Hover: none. Focus: identical. Checked: border + fill + filled indicator (§7).
Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Indicator `flex size-full items-center justify-center rounded-full bg-spctm-primary`
(`spectrum:36`) vs `flex items-center justify-center`: full-bleed filled disc.
Dot `Circle h-1.5 w-1.5 fill-current text-white` (`spectrum:37`) vs `h-2.5 …
text-current`: 6px hardcoded-white dot. Inferred: checked item shows a small white
dot centered on a solid primary disc — same filled-disc language as linear (§7 of
linear report corroborates the pattern within the audit, though each remains
UNVERIFIED pending designer ruling). Radix indicator behavior unchanged.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. White-on-primary contrast unmeasured — no claim.
Hardcoded white bypasses tokens (no dark override present).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace; disc fill/border from `--spctm-primary`. White dot hardcoded.

## 12. Typography and Global Styling

No text. Dot restyled per §7.

## 13. Findings and Upgrade Preservation

Findings: (1) `border-2` + input edge — UNVERIFIED; (2) checked border+fill —
UNVERIFIED; (3) filled-disc indicator + white 6px dot — UNVERIFIED (preserve as
one system: `size-full` + `rounded-full` + `bg-spctm-primary` + dot classes).
Keep `spctm` prefix.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm filled-disc checked design + hardcoded white as intended.
