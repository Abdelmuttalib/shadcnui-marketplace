# Lucid Checkbox vs Default

## 1. Audit Metadata

- Style: lucid
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/lucid/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid keeps Default's 16px box, icon, and full focus stack; the only changes are
the resting border (`input` instead of `primary`) and an added checked border.
Minimal, near-token-swap checkbox.

## 3. Base Classes

Baseline Root (`default:16`) vs lucid Root (`lucid:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border-dft-primary` | `border-lucid-input` | Primary → input resting border | Neutral edge until checked | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-lucid-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| `h-4 w-4`, radius, ring stack, checked bg/text, disabled | `lucid` equivalents / retained | Prefix swap only | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; box unchanged.

## 6. Interaction States

Hover: none. Focus: identical. Checked per §3. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` monochrome tokens (`--lucid-primary: 29.31% 0 0`).

## 12. Typography and Global Styling

Icon `Check h-4 w-4` unchanged (`lucid:24`).

## 13. Findings and Upgrade Preservation

Findings: (1) input resting border — UNVERIFIED; (2) checked border — UNVERIFIED.
Re-apply both. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
