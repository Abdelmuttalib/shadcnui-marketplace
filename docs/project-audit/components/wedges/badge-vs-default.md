# Wedges Badge vs Default

## 1. Audit Metadata

- Style: wedge
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/wedges/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
secondary line verified by direct grep of `wedges:14`; base line of `wedges:7`)

## 2. Executive Summary

Wedges reshapes the badge (`-md` radius, `py-1`, medium weight, no base border),
uses translucent tints (`/20`, secondary `/10`) with dual hovers, borders its
outline variant with accent hover — and its secondary ink is the unprefixed
`text-secondary-foreground` (verified line 14). Structure and exports unchanged.

## 3. Base Classes

Base (`wedges:7`, verified): `rounded-full` → `rounded-wedges-md`
(UNVERIFIED, SHAPE); `border border-dft-border` deleted entirely (UNVERIFIED,
BORDER); `py-0.5` → `py-1` (UNVERIFIED, DIMENSION); `font-semibold` →
`font-medium` (UNVERIFIED, TYPOGRAPHY); ring-2/offset-2 retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `border-transparent bg-dft-primary ... hover:/80` | `border-transparent bg-wedges-primary/20 text-wedges-primary hover:bg-wedges-primary/80 hover:text-wedges-primary-foreground` | 20% tint + dual hover (UNVERIFIED set) |
| secondary | `...` | `border-transparent bg-wedges-secondary/10 text-secondary-foreground hover:bg-wedges-secondary/80 hover:text-wedges-secondary-foreground` | 10% tint + **`text-secondary-foreground` (unprefixed**, verified) — PARITY_DIVERGENCE, Needs-designer (likely slip, confirm or re-tokenize) |
| destructive | `...` | `border-transparent bg-wedges-destructive/20 text-wedges-destructive hover:bg-wedges-destructive/80 hover:text-wedges-destructive-foreground` | 20% tint + dual hover (UNVERIFIED set) |
| outline | `text-dft-foreground` | `text-wedges-foreground border border-wedges-border hover:bg-wedges-accent` | Bordered outline + accent hover, no accent-ink hover (UNVERIFIED set) |

## 5. Sizes

No size scale. `py-1` change in §3.

## 6. Interaction States

Dual hovers throughout (bg + foreground). No disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §4 ink-token question (pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` except unprefixed secondary ink (§4).

## 12. Typography and Global Styling

Base `font-medium` + `text-xs` retained (weight change component-level, §3).

## 13. Findings and Upgrade Preservation

Findings: (1) reshaped translucent system + bordered outline — UNVERIFIED
(preserve exactly); (2) unprefixed secondary ink — PARITY_DIVERGENCE/
Needs-designer.

## 14. Verification

Both files read fully; secondary + base lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. `text-secondary-foreground`: typo for `text-wedges-secondary-foreground`?
