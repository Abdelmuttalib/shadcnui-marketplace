# Lucid Button vs Default

## 1. Audit Metadata

- Style: lucid
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/lucid/ui/button.tsx:1-107`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; token reads

## 2. Executive Summary

Lucid keeps full API parity (`ButtonLink` included — one of 4 styles) but gives
every variant a visible border treatment: a universal base `border` plus
per-variant tints, including `border-transparent` on ghost/link. Compact sizes
with tight `sm` padding. Inter inherited.

## 3. Base Classes

`lucid:9` vs `default:9`: prefix swap + added `border` (border-width without
color → currentColor edge until overridden per variant). Inferred: every variant
renders an edge — the style's signature. UNVERIFIED, Needs-designer (concern
BORDER) — dominant but still single-component evidence.

## 4. Variants

| Variant | Default | Alternative (`lucid:12-23`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-dft-primary …` (no border) | `bg-lucid-primary … border-lucid-primary/30` | Tinted edge on the solid button | UNVERIFIED, Needs-designer (concern BORDER/COLOR) |
| destructive | `bg-dft-destructive …` | `bg-lucid-destructive … border-lucid-destructive/20` | Tinted edge | UNVERIFIED, Needs-designer |
| outline | `border border-dft-input …` | `border border-lucid-border …` | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| secondary | `bg-dft-secondary …` (borderless) | `border border-lucid-input bg-lucid-secondary …` | Border added (cf. carbon) | UNVERIFIED, Needs-designer |
| ghost | `hover:bg-dft-accent …` (no border) | `border-transparent hover:bg-lucid-accent …` | Transparent border reserves border width — inferred layout-stability effect (hover adds no width shift). Mechanism inferred from source, not measured | UNVERIFIED, Needs-designer |
| link | `text-dft-primary …` (no border) | `border-transparent text-lucid-primary …` | Same transparency treatment | UNVERIFIED, Needs-designer |

## 5. Sizes

| Size | Default | Alternative (`lucid:26-31`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-2.5 py-2` | Shorter, narrower |
| sm | `h-9 rounded-dft-md px-3` | `h-8 px-2` | Shorter; `px-2` shared tightest with catalyst |
| lg | `h-11 rounded-dft-md px-8` | `h-10 px-8` | Shorter; no radius utility |
| icon / icon-sm / icon-lg | `h-10/9/11` squares | `h-9 w-9` / `h-8 w-8` / `h-10 w-10` | One step smaller |

Density: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover per §4; focus (`ring-2`, `offset-2`) and `disabled:` unchanged. No
dark-mode classes.

## 7. DOM and Component Structure

`Button` and `ButtonLink` renders identical to baseline (`lucid:47-106`).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`Button`, `ButtonLink`, `buttonVariants`, both prop interfaces (incl.
`iconLeft`/`iconRight`) retained. Full parity. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Identical to baseline. PARITY_EXPECTED. No ARIA in either file.

## 10. Imports and Dependencies

Identical set incl. `next/link`. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` namespace. Resolved monochrome tokens: `--lucid-primary: 29.31% 0 0`,
`--lucid-ring: 29.31% 0 0`, `--lucid-radius: 0.5rem` (`app/globals.css:428-454`).
Border tints use opacity modifiers on semantic tokens.

## 12. Typography and Global Styling

No component-level change. Family Inter via inherited `font-sans`.

## 13. Findings and Upgrade Preservation

Findings: (1) universal base border + five per-variant treatments — UNVERIFIED
as a set (port carefully — dropping the base `border` collapses the system);
(2) tight sizes — UNVERIFIED. No divergences, no exceptions. Prior "intentional
as a set" and "layout-stability detail" wording corrected to UNVERIFIED/inferred.

## 14. Verification

Both files read fully. Prior revision's stability rationale relabeled as
inference. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the border system + density as intended lucid language (cross-component
   recurrence check pending).
