# Wedges Separator vs Default

## 1. Audit Metadata

- Style: wedges
- Component: separator
- Baseline source: `registry/default/ui/separator.tsx:1-31`
- Alternative source: `registry/wedges/ui/separator.tsx:1-31`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files; line-for-line identity confirmed except base color token

## 2. Executive Summary

Only the base color token differs (`bg-border` unprefixed — flagged below). Orientation variants
(`h-px w-full` / `h-full w-px`), defaults (`horizontal`, `decorative`), structure,
and exports identical.

## 3. Base Classes

Base (`wedges:21` vs `default:21`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `bg-dft-border` | `bg-border` | Prefix dropped entirely — unprefixed shadcn token | Separator color resolves outside the wedges namespace | PARITY_DIVERGENCE, Open (concern TOKEN/TECHNICAL) — likely slip (sole unprefixed separator); confirm or re-tokenize to `bg-wedges-border` |

Orientation strings identical (`h-px w-full`, `h-full w-px`); `shrink-0` retained;
no margins, thickness, or color changes beyond the base token.

## 4. Variants

Orientation conditional identical (`orientation === "horizontal" ? ... : ...`).
PARITY_EXPECTED.

## 5. Sizes

Thickness fixed at 1px both orientations, both files. NO_DIFFERENCE.

## 6. Interaction States

Not applicable — separator carries no hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical (`SeparatorPrimitive.Root`, ref, `decorative`/`orientation` passthrough).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`Separator` export, prop types, `orientation="horizontal"` and `decorative=true`
defaults, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged (decorative default retained). PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix separator, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`bg-wedges-border` (unprefixed `--border`, outside the wedges namespace — confirm which token is canonical).

## 12. Typography and Global Styling

Not applicable — no text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed `bg-border` — PARITY_DIVERGENCE/Open (confirm intent or re-tokenize; do not carry silently). No other differences.

## 14. Verification

Both files read fully. Line-for-line identity except §3 verified by direct read.

## 15. Unresolved Questions

1. Is `bg-border` deliberate cross-token use or drift?
