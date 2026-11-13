# Lucid Input vs Default

## 1. Audit Metadata

- Style: lucid
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/lucid/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid shortens to `h-9` with an inheriting face and is the only input whose
border uses the `border` token instead of `input`. Full focus stack retained.

## 3. Base Classes

Baseline vs lucid:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-10` | `h-9` | 40px → 36px | Shorter field | UNVERIFIED (concern DIMENSION) |
| `bg-dft-background` | `bg-inherit` | Opaque → inheriting | Shows parent surface | UNVERIFIED (concern COLOR) |
| `border-lucid-input` (expected) | `border-lucid-border` | Border token `input` → `border` (sole instance among inputs) | Edge tied to border token | UNVERIFIED (concern COLOR) — anomalous token choice, documented without defect verdict |
| Focus stack, file/placeholder/disabled/md | retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single height change in §3.

## 6. Interaction States

Focus identical. Hover/disabled/md identical. No invalid-state handling in
either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*`: border token (not input) drives the edge; `--lucid-radius: 0.5rem`.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + inheriting face — UNVERIFIED; (2) `border`-token edge —
UNVERIFIED (preserve literally; confirm token choice with designer).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Is the `border`-token edge (vs `input` everywhere else) deliberate?
