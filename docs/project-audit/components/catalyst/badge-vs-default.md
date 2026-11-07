# Catalyst Badge vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/catalyst/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
outline line verified by direct grep of `catalyst:17`)

## 2. Executive Summary

Catalyst is a prefix swap except for two drops: the base border color (bare
`border`) and the outline variant's prefix (`text-foreground` unprefixed,
verified line 17). Colored variants keep solid fills with `/80` hovers.
Structure and exports unchanged.

## 3. Base Classes

Base: `border border-dft-border` → bare `border` (color dropped —
PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip shared with catalyst
menubar contents — confirm or restore). `rounded-full`, metrics, weight,
ring-2/offset-2 retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default / secondary / destructive | solid fills + `/80` hovers | `catalyst` equivalents | Prefix swap (Corroborated) |
| outline | `text-dft-foreground` | **`text-foreground` (unprefixed**, verified line 17) | PARITY_DIVERGENCE, Needs-designer — joint ruling (note catalyst's verified unprefixed convention elsewhere, cited for the ruling, still unconfirmed here) |

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

Hovers identical to baseline. No disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 token questions (pending rulings, not failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except bare base border + unprefixed outline (§3/§4).

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) bare base border — PARITY_DIVERGENCE/Open; (2) unprefixed outline —
PARITY_DIVERGENCE/Needs-designer (joint ruling, with convention evidence cited).

## 14. Verification

Both files read fully; outline line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Bare border + unprefixed outline: slips or convention?
