# Catalyst Alert vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: alert
- Baseline source: `registry/default/ui/alert.tsx:1-59`
- Alternative source: `registry/catalyst/ui/alert.tsx:1-59`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
unprefixed lines verified by direct grep of `catalyst:7,11,13`)

## 2. Executive Summary

Catalyst drops the base border color (bare `border`, as linear/material/wedges)
and leaves four token references unprefixed: svg icon ink, default text, and
the entire destructive variant (`border-destructive/50`, `text-destructive`,
`dark:border-destructive`, svg ink). Title/Description, role, and exports
unchanged.

## 3. Base Classes

Base (`catalyst:7`, verified): `border border-dft-border` → bare `border`
(color dropped — PARITY_DIVERGENCE, Open); `[&>svg]:text-dft-foreground` →
**`[&>svg]:text-foreground` (unprefixed)** — PARITY_DIVERGENCE, Needs-designer
(joint ruling; catalyst-convention evidence cited, still unconfirmed here);
svg-layout selectors + radius are swaps/prefix (Corroborated).

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `bg-dft-background text-dft-foreground` | `bg-catalyst-background` + **`text-foreground` (unprefixed**, verified `catalyst:11`) | bg swap Corroborated; text PARITY_DIVERGENCE/Needs-designer (joint ruling) |
| destructive | `border-dft-destructive/50 text-dft-destructive dark:border-dft-destructive [&>svg]:text-dft-destructive` | **`border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive` (fully unprefixed**, verified `catalyst:13`) | PARITY_DIVERGENCE, Needs-designer — an entire variant outside the namespace; confirm whether deliberate cross-token use or a missed prefix pass |

## 5. Sizes

No size scale. `p-4` unchanged.

## 6. Interaction States

No hover/focus/disabled classes in either file; dark destructive border retained
(unprefixed form).

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Alert`, `AlertTitle`, `AlertDescription`; `role="alert"` retained;
`alertVariants` non-exported. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`role="alert"` retained. Unprefixed destructive colors render from legacy tokens
(pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` background only; four references resolve to legacy unprefixed
tokens (§3/§4).

## 12. Typography and Global Styling

Title/Description type retained.

## 13. Findings and Upgrade Preservation

Findings: (1) bare base border — PARITY_DIVERGENCE/Open; (2) four unprefixed
references incl. a whole variant — PARITY_DIVERGENCE/Needs-designer (joint
ruling with convention evidence; do not carry silently — a migration that
re-prefixes everything would erase this file's actual rendered look if the
legacy tokens turn out to be intended).

## 14. Verification

Both files read fully; unprefixed lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

1. Is the unprefixed destructive variant (plus icon/default text) the catalyst
   convention or a missed prefix pass?
