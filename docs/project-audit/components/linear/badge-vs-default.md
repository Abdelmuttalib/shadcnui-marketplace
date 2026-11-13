# Linear Badge vs Default

## 1. Audit Metadata

- Style: linear
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/linear/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
secondary line verified by direct grep of `linear:14`)

## 2. Executive Summary

Linear uses translucent tints (`/15`, secondary `/70`) with redundant trailing
`border-*/10` overrides, dark-mode overrides, no `hover:` treatments, a bare
`border` base (color dropped) — and its secondary variant carries an unprefixed
`border-secondary` (verified line 14). Structure and exports unchanged.

## 3. Base Classes

Base: `border border-dft-border` → bare `border` (color dropped —
PARITY_DIVERGENCE, Open, BORDER/TECHNICAL; likely slip shared with linear
menubar contents — confirm or restore). `rounded-full`, `px-2.5 py-0.5`,
`text-xs font-semibold`, full ring-2/offset-2 focus retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `border-transparent bg-dft-primary ... hover:/80` | `border-transparent bg-linear-primary/15 text-linear-primary border-linear-primary/10 dark:text-linear-primary-500 dark:bg-linear-primary-500/10` | 15% tint + redundant border + dark pair, no hover (UNVERIFIED set) |
| secondary | `...` | `border-transparent bg-linear-secondary/70 text-linear-foreground/80 border-secondary dark:text-linear-foreground/80` | 70% tint + 80% ink + **`border-secondary` (unprefixed)** — PARITY_DIVERGENCE, Needs-designer (verified line 14; likely slip, confirm or re-tokenize to `border-linear-secondary`) |
| destructive | `...` | `border-transparent bg-linear-destructive/15 text-linear-destructive border-linear-destructive/10` | 15% tint + redundant border, no hover/dark (UNVERIFIED set) |
| outline | `text-dft-foreground` | `text-linear-foreground` | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. Metrics unchanged.

## 6. Interaction States

No `hover:` treatments anywhere (all dropped). Dark overrides on default +
secondary only. No disabled classes in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants`, `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` except unprefixed secondary border (§4); `-500` shade tokens in dark
overrides.

## 12. Typography and Global Styling

`text-xs font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) translucent system + dropped hovers + dark overrides —
UNVERIFIED; (2) bare base border — PARITY_DIVERGENCE/Open; (3) unprefixed
secondary border — PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully; secondary line verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Are the two unprefixed/bare border instances slips?
2. Confirm the translucent system as intended.
