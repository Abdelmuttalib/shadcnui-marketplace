# Lucid Radio-Group vs Default

## 1. Audit Metadata

- Style: lucid
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/lucid/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid keeps the 16px item and full focus stack; changes are the resting border
(`input` instead of `primary`) and a larger dot (`h-3 w-3`). No checked-state
additions. Minimal near-swap.

## 3. Base Classes

Root identical. Item (`lucid:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border-dft-primary` | `border-lucid-input` | Primary → input resting border | Neutral edge until checked (dot-only checked state, as baseline) | UNVERIFIED (concern COLOR) |
| All else incl. ring-2/offset-2, disabled | `lucid` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; item unchanged.

## 6. Interaction States

Hover: none. Focus: identical. Checked: dot only. Disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` monochrome tokens.

## 12. Typography and Global Styling

Dot `Circle h-3 w-3 fill-current text-current` (`lucid:37`) vs `h-2.5 w-2.5` —
12px dot in a 16px item (largest dot-to-box ratio in the set). UNVERIFIED
(concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) input resting border — UNVERIFIED; (2) larger dot — UNVERIFIED.
Re-apply both. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
