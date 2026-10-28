# Spectrum Badge vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/spectrum/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
base line verified by direct grep of `spectrum:7`)

## 2. Executive Summary

Spectrum rebuilds badge as an outlined system: `-md` radius, tighter `px-1.5`
+ taller `py-1` metrics, visible `border-*/40` / `border-input` edges replacing
`border-transparent`, translucent `/15` fills, `/30` hovers, and an outline
variant with border + accent hovers. Focus ring retained. (Prefix `spctm`.)

## 3. Base Classes

Base (`spectrum:7`, verified): `rounded-full` → `rounded-spctm-md`
(UNVERIFIED, SHAPE); `px-2.5` → `px-1.5`, `py-0.5` → `py-1` (UNVERIFIED,
DIMENSION — narrower, taller pill); `border border-dft-border` →
`border border-spctm-border` (swap); ring-2/offset-2 retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `border-transparent bg-dft-primary ... hover:/80` | `border-spctm-primary/40 bg-spctm-primary/15 text-spctm-primary hover:bg-spctm-primary/30` | Visible 40% edge + 15% fill + 30% hover (UNVERIFIED set) |
| secondary | `...` | `border-spctm-input bg-spctm-secondary text-spctm-secondary-foreground hover:bg-spctm-secondary/80` | Visible input edge (UNVERIFIED set) |
| destructive | `...` | `border-spctm-destructive/40 bg-spctm-destructive/15 text-spctm-destructive hover:bg-spctm-destructive/30` | As default variant (UNVERIFIED set) |
| outline | `text-dft-foreground` | `border-spctm-input text-spctm-foreground hover:bg-spctm-accent hover:text-spctm-accent-foreground` | Bordered outline + accent hovers (UNVERIFIED set) |

## 5. Sizes

No size scale. Base metrics change in §3.

## 6. Interaction States

`/30` hovers on default/destructive (vs `/80` baseline), `/80` retained on
secondary. No disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace throughout. Keep the `spctm` prefix.

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) outlined badge system (metrics + edges + fills + hovers) —
UNVERIFIED as a set (preserve exactly; spectrum's most distinctive badge
identity).

## 14. Verification

Both files read fully; base line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Confirm the outlined system as intended spectrum language.
