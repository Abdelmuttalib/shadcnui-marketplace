# Linear Switch vs Default

## 1. Audit Metadata

- Style: linear
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/linear/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear shrinks the switch (`w-9` track, 16px thumb) with always-colored thumb
(`primary-foreground` in both states), a 40%-opacity unchecked track, and a
redundant checked-border addition. Focus keeps `ring-2` but drops the offset
width. Inferred travel math under-shoots the available distance by ~4px.

## 3. Base Classes

Root (`linear:13` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `w-11` | `w-9` | Track 44px → 36px | Compact switch | UNVERIFIED (concern DIMENSION) |
| `focus-visible:ring-offset-2` | (absent; `focus-visible:ring-offset-linear-background` color kept) | Offset width dropped — note: `focus-visible:ring-2` IS retained (correction of any claim otherwise) | Inferred: ring without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| (none) | `data-[state=checked]:border-linear-primary` | Added (track already has `border-2 border-transparent`) | Recolors the transparent border on checked — border stays transparent in effect; redundant | PARITY_DIVERGENCE, Open (concern TECHNICAL) — no visual change inferred (transparent border recolored, still transparent); drop on migration |
| `data-[state=unchecked]:bg-dft-input` | `data-[state=unchecked]:bg-linear-muted-foreground/40` | Unchecked track → 40% muted | Muted off-state | UNVERIFIED (concern COLOR) |
| checked track | `linear` equivalent | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

Thumb (`linear:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `h-4 w-4` | 20px → 16px | Smaller thumb | UNVERIFIED (concern DIMENSION) |
| `bg-dft-background` | `bg-linear-primary-foreground` (both states) | Thumb always primary-foreground | Thumb never uses background token | UNVERIFIED (concern COLOR) |
| `translate-x-5` / `translate-x-0` | `translate-x-3.5` / `translate-x-0.5` | Travel endpoints changed | See §5 travel inference | UNVERIFIED (concern DIMENSION) |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference (class arithmetic, not rendered): inner width
36 − 2×2 (border-2) = 32px; thumb 16px → available 16px; delta 14 − 2 = 12px.
Inferred under-shoot of ~4px: thumb may rest 4px short of the track end in the
checked state. Labeled inference — needs rendered verification.

## 6. Interaction States

Checked: primary track + primary-foreground thumb. Unchecked: 40% muted track.
Focus per §3. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Focus ring present (width kept, offset dropped).
Travel under-shoot is a visual-alignment note, not a behavior break.
PARITY_EXPECTED with §3/§5 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*`: primary/primary-foreground/muted-foreground/ring tokens.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) compact geometry + travel endpoints — UNVERIFIED (verify travel
visually; adjust to `translate-x-4`/`0` if the under-shoot is real and unwanted);
(2) always-colored thumb + muted track — UNVERIFIED; (3) redundant checked-border —
PARITY_DIVERGENCE (drop); (4) missing offset width — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Ring-2 retention confirmed by direct read. Travel math
inferred.

## 15. Unresolved Questions

1. Is the ~4px travel under-shoot real? If so, intended or slip?
2. Offset width: deliberate or slip?
