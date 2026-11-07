# Catalyst Switch vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/catalyst/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files; class-composition + specificity analysis
  for the dark-mode collision (§6)

## 2. Executive Summary

Catalyst uses a padded track model (`border` + `p-[3px]`, `h-5 w-8`) with a small
fixed-white thumb (`h-3.5`). Focus stack fully retained. The headline issue is a
**dark-mode state collision**: `dark:data-[state=checked]:bg-catalyst-input`
renders the checked track identical to the unchecked `bg-catalyst-input` in dark
mode (verified at class-composition level; rendered effect inferred).

## 3. Base Classes

Root (`catalyst:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-6 w-11` | `h-5 w-8` | 24×44 → 20×32 | Compact track | UNVERIFIED (concern DIMENSION) |
| `border-2 border-transparent` | `border border-catalyst-foreground/5` | 2px transparent → 1px 5%-foreground border | Hairline edge | UNVERIFIED (concern BORDER) |
| (none) | `p-[3px]` | Added inner padding (new box model) | Thumb travels inside padding (see §5) | UNVERIFIED (concern DIMENSION) |
| (none) | `dark:data-[state=checked]:bg-catalyst-input` | Added dark checked override | Dark checked = input color — see §6 | PARITY_DIVERGENCE, Needs-designer (concern COLOR/INTERACTION) |
| checked/unchecked tracks, ring-2/offset-2, disabled | `catalyst` equivalents / retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

Thumb (`catalyst:22` vs `default:22`): `h-5 w-5` → `h-3.5 w-3.5`; `bg-dft-background`
→ hardcoded `bg-white`; `translate-x-5`/`translate-x-0` → `translate-x-3`/
`-translate-x-0.5`. UNVERIFIED as a set (concern DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference (class arithmetic): content width 32 − 2×1
(border) − 2×3 (padding) = 24px; thumb 14px → available 10px; delta 12 − (−2) =
14px. Inferred ~4px over-travel past the content box (into padding). Labeled
inference — needs rendered check.

## 6. Interaction States

Checked (light): primary track + white thumb right. Unchecked: input track.
**Dark-mode composition analysis** (source-level, verified): in dark + checked,
two track-fill classes match — `data-[state=checked]:bg-catalyst-primary`
(one state variant), `dark:data-[state=checked]:bg-catalyst-input` (dark +
state = two stacked variants), and base `data-[state=unchecked]` does not match.
Tailwind orders stacked variants after single variants and the dark rule carries
`:is(.dark *)` specificity, so the dark rule wins: dark checked track renders
`bg-catalyst-input` — identical to the unchecked track. Inferred visual effect:
on/off indistinguishable by track fill in dark mode (thumb position still
differs). Classification above stands. Disabled identical. Focus retained.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. The dark collision is interaction-relevant (state
distinguishability) — recorded as divergence pending designer ruling, not a
failure claim. Thumb-position change still signals state.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*`: primary/input/foreground/ring tokens. Thumb white hardcoded.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) padded-box geometry + small white thumb + endpoints — UNVERIFIED
(verify travel visually); (2) dark checked override — PARITY_DIVERGENCE/
Needs-designer (likely slip: confirm whether dark checked should be primary or a
distinct dark token; do not carry silently). Migration: preserve everything
verbatim until (2) is ruled.

## 14. Verification

Both files read fully. Composition/precedence analysis performed at source level
per requirement 5; rendered effect remains inferred (no browser check) — hence
status stays Needs verification.

## 15. Unresolved Questions

1. Dark checked fill: intended (then unchecked dark needs its own token) or slip?
2. Is the ~4px over-travel real and intended?
