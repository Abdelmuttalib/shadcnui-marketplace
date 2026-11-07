# Libelle Switch vs Default

## 1. Audit Metadata

- Style: libelle
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/libelle/ui/switch.tsx:1-31`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Libelle keeps Default's track size (`h-6 w-11`) but re-borders it
(`border-libelle-primary`, no unchecked fill — transparent off-state), oversizes
the thumb (`h-6 w-6` with primary border, recoloring to `primary-foreground` when
checked), and adds a state-gated `CheckIcon` inside the track. Inferred travel
math over-shoots the available distance by ~4px (needs rendered check).

## 3. Base Classes

Root (`libelle:14` vs `default:14`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| (none) | `relative` | Added | Anchors the absolute CheckIcon | Functional part of the icon feature — UNVERIFIED with the set |
| `h-6 w-11` | kept, but `border-2 border-transparent` → `border border-libelle-primary` | Same size; 2px transparent → 1px primary border | Edged track | UNVERIFIED (concern BORDER) |
| `data-[state=unchecked]:bg-dft-input` | (absent — no unchecked fill at all) | Off-state fill dropped | Inferred: transparent off track showing only border + thumb + icon | UNVERIFIED (concern COLOR) |
| checked fill, ring-2/offset-2, disabled | `libelle` equivalents / retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

Thumb (`libelle:22` vs `default:22`): `h-5 w-5` → `h-6 w-6` + added
`border border-libelle-primary` + `peer` gate class; `bg-dft-background` →
`bg-libelle-background` + `data-[state=checked]:bg-libelle-primary-foreground`;
`translate-x-5`/`translate-x-0` → `translate-x-5`/`-translate-x-0.5`. UNVERIFIED
as a set (concern DIMENSION/BORDER/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference (class arithmetic): track 44px, 1px border →
inner 42px; thumb outer 24px → available 18px; delta 20 − (−2) = 22px. Inferred
~4px over-travel past the inner edge (thumb protrudes right when checked).
Labeled inference — needs rendered verification.

## 6. Interaction States

Checked: primary track + primary-foreground thumb + visible CheckIcon
(`peer-data-[state=checked]:block` sets display against the `hidden` applied by
`peer-data-[state=unchecked]:hidden` — i.e. the icon shows when checked and hides
when unchecked; inferred from the state-gated display pair). Unchecked:
transparent track + background thumb, icon hidden. Disabled identical.
Focus retained.

## 7. DOM and Component Structure

Added `CheckIcon` node (`libelle:26`): `absolute right-0.5 top-1/2 h-3.5 w-3.5
-translate-y-1/2 text-libelle-primary peer-data-[state=checked]:block
peer-data-[state=unchecked]:hidden`, gated on the Thumb's `peer` class. Extra
`lucide-react` import (`CheckIcon`, `libelle:4`). Decorative state-gated icon —
candidate DESIGN_EXCEPTION feature (see §13).

## 8. Props, Exports, and API

`Switch` export, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. The icon is decorative (no ARIA in either file);
thumb-position + track-fill still carry state. PARITY_EXPECTED with §5/§6 notes.

## 10. Imports and Dependencies

Added `CheckIcon` from `lucide-react` (live import, used once). Rest identical.
No new packages.

## 11. Token Dependencies

`libelle-*`: primary/primary-foreground/background/ring tokens; icon in
`--libelle-primary`.

## 12. Typography and Global Styling

No text. Icon feature per §7.

## 13. Findings and Upgrade Preservation

Findings: (1) re-bordered track + transparent off-state + oversized bordered
thumb + CheckIcon — UNVERIFIED as a set (recommend DESIGN_EXCEPTION review:
decorative icon + overhang geometry; preserve exactly pending ruling);
(2) ~4px over-travel — UNVERIFIED (verify rendered resting position; adjust
endpoints if unwanted). Migration: keep icon node, `peer`/`relative` gates, and
all travel classes verbatim until verified.

## 14. Verification

Both files read fully. Travel math and icon-visibility logic inferred from
classes (no browser check) — hence status stays Needs verification.

## 15. Unresolved Questions

1. Is the ~4px over-travel real and intended?
2. Register icon + overhang as DESIGN_EXCEPTION?
3. Confirm transparent off-state as intended.
