# Carbon Badge vs Default

## 1. Audit Metadata

- Style: carbon
- Component: badge
- Baseline source: `registry/default/ui/badge.tsx:1-36`
- Alternative source: `registry/carbon/ui/badge.tsx:1-36`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Carbon rebuilds badge as a translucent system: medium weight, no focus ring,
duplicated `border ... border-cb-border` in base, all colored variants at
`/10`–`/50` opacity with redundant trailing `border-*/10` after
`border-transparent`, dark-mode overrides, and no `hover:` treatments.
Structure and exports unchanged.

## 3. Base Classes

Base: `font-semibold` → `font-medium`; `border-dft-border` → duplicated `border
... border border-cb-border` (redundant double border-width — PARITY_DIVERGENCE,
Open, TECHNICAL; harmless, drop one on migration); `focus:ring-2
focus:ring-dft-ring focus:ring-offset-2` deleted with `focus:outline-none` kept
— focus ring removed (UNVERIFIED, FOCUS — not covered by owner decision A;
record with accessibility relevance, not a failure claim). `rounded-full`,
`px-2.5 py-0.5`, `text-xs`, transitions retained.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `border-transparent bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/80` | `border-transparent bg-cb-primary/10 text-cb-primary border-cb-primary/10 dark:bg-cb-primary/10` | Solid → 10% tint + redundant trailing border color + dark override; `hover:` dropped (UNVERIFIED set) |
| secondary | `... bg-dft-secondary ... /80` | `border-transparent bg-cb-secondary/50 text-cb-foreground/80 border-cb-secondary dark:text-cb-foreground/80` | 50% tint + 80% ink + redundant border + dark (UNVERIFIED set) |
| destructive | `... bg-dft-destructive ... /80` | `border-transparent bg-cb-destructive/10 text-cb-destructive border-cb-destructive/10` | 10% tint + redundant border, no `hover:`, no dark (UNVERIFIED set) |
| outline | `text-dft-foreground` | `text-cb-foreground` | Prefix swap (Corroborated) |

Tint inks use base color tokens (`text-cb-primary`), not `-foreground` tokens.

## 5. Sizes

No size scale. `px-2.5 py-0.5` unchanged.

## 6. Interaction States

No `hover:` treatments anywhere (all dropped vs baseline `/80` hovers).
Disabled n/a (badge has no disabled classes in either file). Dark overrides on
default + secondary only (destructive has none — asymmetry recorded as observed
fact, UNVERIFIED whether deliberate).

## 7. DOM and Component Structure

Identical (`div`, `BadgeProps`, `cn(badgeVariants({variant}), className)`).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`Badge`, `badgeVariants` (same name), `BadgeProps` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged structurally; removed focus ring noted with accessibility relevance
(not a failure claim, not owner-decided).

## 10. Imports and Dependencies

Identical set (cva, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: primary/secondary/destructive/foreground/border/muted tokens at stated
opacities; `--cb-radius: 0rem` (pill `rounded-full` retained regardless).

## 12. Typography and Global Styling

Base `font-medium` + `text-xs` retained (weight change is component-level, §3).

## 13. Findings and Upgrade Preservation

Findings: (1) translucent variant system + dropped hovers + dark overrides —
UNVERIFIED as a set (preserve exactly, opacities included); (2) duplicated base
border — PARITY_DIVERGENCE/Open (drop one); (3) removed focus ring —
UNVERIFIED (preserve pending designer ruling on visibility).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the translucent system + missing hovers + asymmetric dark overrides
   as intended.
2. Is the removed focus ring deliberate?
