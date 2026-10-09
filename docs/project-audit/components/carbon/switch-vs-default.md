# Carbon Switch vs Default

## 1. Audit Metadata

- Style: carbon
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/carbon/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon widens the track (`w-11` → `w-12`), narrows the focus offset (2 → 1) with
an **unprefixed** `ring-offset-background`, mutes the unchecked track
(`muted-foreground/50`), and recolors the checked thumb via redundant
`group-data-` + `peer-data-` selectors. Thumb travel is geometrically consistent
(inferred). No structural additions.

## 3. Base Classes

Root (`carbon:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| (none) | `group` | Added gate for `group-data-[state=checked]` thumb selector | Enables the thumb recolor below | UNVERIFIED (concern TECHNICAL) — functional, not decorative |
| `w-11` | `w-12` | Track 44px → 48px | Wider track | UNVERIFIED (concern DIMENSION) |
| `focus-visible:ring-offset-2` | `focus-visible:ring-offset-1` | Offset 2 → 1 | Tighter halo; carbon-wide pattern | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-offset-dft-background` | `focus-visible:ring-offset-background` | Namespaced → legacy unprefixed offset color | Offset renders in legacy background | PARITY_DIVERGENCE, Open (concern COLOR/TECHNICAL) — likely slip (carbon checkbox uses the same unprefixed token, but no convention is established for carbon; single-style recurrence across two components is noted, still unconfirmed) |
| `data-[state=unchecked]:bg-dft-input` | `data-[state=unchecked]:bg-cb-muted-foreground/50` | Unchecked track → 50% muted-foreground | Muted off-state | UNVERIFIED (concern COLOR) |
| checked track | `cb` equivalent | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

Thumb (`carbon:22` vs `default:22`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `bg-dft-background` | `bg-white` + `group-data-[state=checked]:bg-cb-primary-foreground peer-data-[state=checked]:bg-cb-primary-foreground` | Resting thumb hardcoded white; checked recolor via two redundant state selectors (`group-data-` and `peer-data-` target the same checked Root) | Inferred: white thumb off, primary-foreground thumb on; the duplicate selectors are redundant — either alone would apply | Recolor UNVERIFIED (concern COLOR); redundancy PARITY_DIVERGENCE, Open (concern TECHNICAL) — drop one selector on migration |
| `data-[state=checked]:translate-x-5` | `data-[state=checked]:translate-x-6` | Travel 20px → 24px | Matches wider track (see §5) | UNVERIFIED (concern DIMENSION) |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Geometry (inferred travel check, Tailwind spacing arithmetic —
inference, not rendered verification): track inner width 48 − 2×2 (border-2) =
44px; thumb 20px → available travel 24px; delta `translate-x-6` − `translate-x-0`
= 24px. Consistent — no over/under-shoot inferred.

## 6. Interaction States

Checked: primary track + recolored thumb. Unchecked: 50% muted track + white
thumb. Focus: ring-2 retained, offset-1. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Root + Thumb, no extras). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Switch` export, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Focus ring present. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: `--cb-primary`, `--cb-primary-foreground`, `--cb-muted-foreground`,
`--cb-ring`. Legacy `--background` via the offset class (§3).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) wider track + travel-6 — UNVERIFIED (keep paired); (2) muted
unchecked track — UNVERIFIED; (3) thumb recolor — UNVERIFIED; de-duplicate the
selectors (keep one); (4) unprefixed offset — PARITY_DIVERGENCE/Open (confirm or
re-tokenize to `cb-background`); (5) offset-1 — UNVERIFIED.

## 14. Verification

Both files read fully. Travel math is class arithmetic, labeled inference.

## 15. Unresolved Questions

1. Unprefixed `ring-offset-background`: convention or slip?
2. Confirm geometry + recolor treatments as intended.
