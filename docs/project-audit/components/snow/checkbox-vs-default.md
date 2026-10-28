# Snow Checkbox vs Default

## 1. Audit Metadata

- Style: snow
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/snow/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Snow uses an 18px box, an arbitrary `rounded-[5px]` radius (not a token), a
`border`-token resting edge, and an added checked border — but drops the
focus-offset width (color kept), continuing the snow offset pattern from button.
Icon narrows to `h-3 w-4`.

## 3. Base Classes

Baseline Root (`default:16`) vs snow Root (`snow:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `size-[1.125rem]` | 16px → 18px | Larger box | UNVERIFIED (concern DIMENSION) |
| `rounded-dft-sm` | `rounded-[5px]` | Token utility → arbitrary 5px value | Radius bypasses `--snow-radius` (and the 0.75-vs-0.4 mismatch); renders 5px regardless | UNVERIFIED (concern SHAPE) — documented without defect verdict per requirements |
| `border-dft-primary` | `border-snow-border` | Primary → `border` token (unique among checkboxes) | Neutral edge tied to border token | UNVERIFIED (concern COLOR) |
| `focus-visible:ring-offset-2` | (absent; `ring-offset-snow-background` kept; double space before `disabled:` is a no-op) | Offset width dropped | Inferred: focus ring without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY) |
| (none) | `data-[state=checked]:border-snow-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| checked bg/text, ring-2/ring, disabled | `snow` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none. Focus per §3 (ring present, offset absent). Checked per §3. Disabled
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED. (Double space in class string: cosmetic, no-op.)

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question — accessibility-relevant, recorded as
divergence pending ruling, not a failure claim.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*`: `--snow-primary: 0% 0 0`, `--snow-ring: 89% 0.0602 258.65`. Radius is
hardcoded `5px`, independent of `--snow-radius`.

## 12. Typography and Global Styling

Icon `Check h-3 w-4` (`snow:24`) vs `h-4 w-4` — narrower glyph. UNVERIFIED
(concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px box — UNVERIFIED; (2) `rounded-[5px]` — UNVERIFIED (preserve
literally; do not "correct" to a token); (3) border-token edge + checked border —
UNVERIFIED; (4) missing offset width — PARITY_DIVERGENCE/Needs-designer; (5) narrow
icon — UNVERIFIED.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip (third snow instance after button/toggle)?
2. Confirm `5px` literal and `border`-token edge as intended.
