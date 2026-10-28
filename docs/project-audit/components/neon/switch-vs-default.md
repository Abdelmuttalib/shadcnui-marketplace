# Neon Switch vs Default

## 1. Audit Metadata

- Style: neon
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/neon/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon is the only non-round switch: `rounded-neon-md` (square) on track and thumb,
with a rectangular thumb (`h-4 w-5`) in fixed `primary-foreground`, a `w-10`
track, and `translate-x-4/0` endpoints. Ring-2/offset-2 retained. Travel exactly
consistent (inferred).

## 3. Base Classes

Root (`neon:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `rounded-full` | `rounded-neon-md` | Pill → square utility (square via `--neon-radius: 0rem`) | Only square switch in the system | UNVERIFIED (concern SHAPE) |
| `h-6 w-11` | `h-5 w-10` | 24×44 → 20×40 | Wider-than-compact track | UNVERIFIED (concern DIMENSION) |
| All else incl. ring-2/offset-2, state fills, disabled | `neon` equivalents / retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

Thumb (`neon:22` vs `default:22`): `rounded-full` → `rounded-neon-md`;
`h-5 w-5` → `h-4 w-5` (rectangular — only non-square thumb); `bg-dft-background`
→ fixed `bg-neon-primary-foreground`; `translate-x-5` → `translate-x-4`.
UNVERIFIED as a set (concern SHAPE/DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference: inner 40 − 4 = 36px; thumb 20px wide →
available 16px; delta 16 − 0 = 16px. Exactly consistent.

## 6. Interaction States

Checked: primary track + primary-foreground rectangular thumb. Unchecked: input
track. Focus retained. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*`: `--neon-primary: 63.01% 0.1238 162.83`; `--neon-radius: 0rem` (square
track + thumb).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) square track + rectangular thumb + fixed color — UNVERIFIED as a
set (preserve exactly; shape is neon's switch identity); (2) `w-10` geometry +
endpoints — UNVERIFIED (keep paired). No divergences, no exceptions.

## 14. Verification

Both files read fully. Travel math inferred.

## 15. Unresolved Questions

1. Confirm square/rectangular switch identity as intended neon language.
