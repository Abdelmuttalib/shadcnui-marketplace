# Libelle Badge vs Default

## 1. Audit Metadata

- Style: libelle
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/libelle/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
destructive line verified by direct grep of `libelle:16`)

## 2. Executive Summary

Libelle is a prefix swap with a `-md` radius tier everywhere except the
destructive variant, which becomes a bordered tint (`border-destructive/30`
unprefixed, `/15` fill, `/35` hover) — matching libelle button's destructive
treatment. Structure and exports unchanged.

## 3. Base Classes

Base: `rounded-full` → `rounded-libelle-md` (UNVERIFIED, SHAPE);
`px-2.5 py-0.5 text-xs font-semibold`, ring-2/offset-2 retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default / secondary / outline | baseline fills + `/80` hovers / plain outline | `libelle` equivalents | Prefix swap (Corroborated) |
| destructive | `border-transparent bg-dft-destructive text-dft-destructive-foreground hover:bg-dft-destructive/80` | `border border-destructive/30 bg-libelle-destructive/15 text-libelle-destructive hover:bg-libelle-destructive/35` (`libelle:16`, verified) | Bordered tint + **unprefixed `border-destructive/30`** — tint UNVERIFIED (consistent with libelle button destructive); unprefixed border PARITY_DIVERGENCE, Needs-designer (same ruling needed as libelle button's identical instance) |

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

Hovers per §4 (`/35` on destructive vs `/80` elsewhere). No disabled/dark
classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §4 border-token question (pending ruling, not a failure
claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` except unprefixed destructive border (§4); `--libelle-radius: 0rem`.

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `-md` tier — TOKEN_DEPENDENCY; (2) tinted destructive —
UNVERIFIED (preserve; consistent with libelle button); (3) unprefixed border —
PARITY_DIVERGENCE/Needs-designer (rule jointly with libelle button's instance).

## 14. Verification

Both files read fully; destructive line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. `border-destructive/30`: shared typo or shared convention (rule with button)?
