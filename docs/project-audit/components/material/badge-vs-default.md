# Material Badge vs Default

## 1. Audit Metadata

- Style: material
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/material/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
base line verified by direct grep of `material:7`)

## 2. Executive Summary

Material reshapes the badge (`rounded-material-md`, `py-1`, medium weight, no
base border) with translucent tints (`/15`, destructive `/5`), base-color inks
(not `-foreground`), and dual hover treatments (bg + foreground). Focus ring
retained. Structure and exports unchanged.

## 3. Base Classes

Base (`material:7`, verified): `rounded-full` → `rounded-material-md` (UNVERIFIED,
SHAPE — only non-pill badge base besides spectrum/wedges/lucid/neon/libelle
`-md` set; see matrix); `border border-dft-border` deleted entirely (UNVERIFIED,
BORDER); `py-0.5` → `py-1` (UNVERIFIED, DIMENSION); `font-semibold` →
`font-medium` (UNVERIFIED, TYPOGRAPHY); ring-2/offset-2 retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `border-transparent bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/80` | `border-transparent bg-material-primary/15 text-material-primary hover:bg-material-primary/80 hover:text-material-primary-foreground` | 15% tint + base-color ink + dual hover (UNVERIFIED set) |
| secondary | `...` | `border-transparent bg-material-secondary/15 text-material-secondary-foreground hover:bg-material-secondary/80` | 15% tint, single hover (UNVERIFIED) |
| destructive | `...` | `border-transparent bg-material-destructive/5 text-material-destructive hover:bg-material-destructive/80 hover:text-material-destructive-foreground` | 5% tint (faintest) + dual hover (UNVERIFIED set) |
| outline | `text-dft-foreground` | `text-material-foreground` | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. `py-1` change in §3.

## 6. Interaction States

Dual hovers on default/destructive, single on secondary (asymmetry recorded as
observed fact). No disabled classes. No dark overrides (unlike carbon/linear).

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace throughout.

## 12. Typography and Global Styling

Base `font-medium` + `text-xs` retained (weight change component-level, §3).

## 13. Findings and Upgrade Preservation

Findings: (1) reshaped base + tints + dual hovers — UNVERIFIED as a set
(preserve exactly, opacities included).

## 14. Verification

Both files read fully; base line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Confirm the reshaped translucent system + asymmetric hovers as intended.
