# Spectrum Switch vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/spectrum/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum is the smallest switch (`h-4 w-7`), drops the track border entirely,
rests the unchecked track on `muted` (not `input`), and gives the thumb
state-colored 2px borders (`primary` when on, `input` when off). Focus stack
retained. Travel slightly exceeds the available distance (inferred ~2px).

## 3. Base Classes

Root (`spectrum:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-6 w-11` | `h-4 w-7` | 24×44 → 16×28 | Smallest switch in the set | UNVERIFIED (concern DIMENSION) |
| `border-2 border-transparent` | (absent — no border classes at all) | Track border removed | Borderless track | UNVERIFIED (concern BORDER) |
| `data-[state=unchecked]:bg-dft-input` | `data-[state=unchecked]:bg-spctm-muted` | Unchecked fill input → muted | Muted off-state | UNVERIFIED (concern COLOR) |
| checked track, ring-2/offset-2, disabled | `spctm` equivalents / retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

Thumb (`spectrum:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `h-3.5 w-3.5` | 20px → 14px | Small thumb | UNVERIFIED (concern DIMENSION) |
| (none) | `border-2` + `data-[state=checked]:border-spctm-primary` + `data-[state=unchecked]:border-spctm-input` | Added state-colored thumb border | Thumb edge signals state alongside track | UNVERIFIED (concern BORDER/COLOR) |
| `translate-x-5` | `translate-x-3` (unchecked `translate-x-0` kept) | Endpoints changed | See §5 | UNVERIFIED (concern DIMENSION) |

Thumb base fill `bg-spctm-background` is a prefix swap (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference (class arithmetic, border-box accounting stated for
auditability): no track border → inner width 28px; thumb `h-3.5 w-3.5` plus its own
`border-2` → outer width 14 + 2×2 = 18px; available travel = 28 − 18 = 10px; delta
12 − 0 = 12px. Inferred ~2px over-travel. Labeled inference — needs rendered check.

## 6. Interaction States

Checked: primary track + bordered thumb right. Unchecked: muted track. Focus
retained. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Smallest geometry noted for future tap-target review,
not claimed as failure. PARITY_EXPECTED with §3/§5 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace (primary/muted/input/background/ring).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) smallest geometry + borderless track + muted off-state —
UNVERIFIED; (2) state-colored thumb borders — UNVERIFIED (preserve as a set with
the thumb size); (3) ~2px over-travel — UNVERIFIED (verify rendered position).

## 14. Verification

Both files read fully. Travel math inferred with explicit box accounting.

## 15. Unresolved Questions

1. Confirm geometry + thumb-border system as intended.
2. Is the ~2px over-travel real and intended?
