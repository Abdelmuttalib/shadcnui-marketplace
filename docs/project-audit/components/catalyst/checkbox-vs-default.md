# Catalyst Checkbox vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/catalyst/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst uses an 18px box (`size-[1.125rem]`), a muted resting fill
(`bg-catalyst-muted`) with an `input`-colored border, a checked border addition,
and a narrower icon (`h-3 w-4`). Focus stack (ring-2 + offset-2) fully retained.

## 3. Base Classes

Baseline Root (`default:16`) vs catalyst Root (`catalyst:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `size-[1.125rem]` | 16px → 18px arbitrary-value sizing | Slightly larger box | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-catalyst-input` | Primary → input border | Neutral resting edge | UNVERIFIED (concern COLOR) |
| (none) | `bg-catalyst-muted` | Added resting fill | Muted resting face | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-catalyst-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| checked bg/text, radius (`-sm`), ring stack, disabled | `catalyst` equivalents / retained | Prefix swap only | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none in either file. Focus: identical ring-2/offset-2. Checked: fill + icon
recolor + added border. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree, refs, merge order. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. Focus ring fully present. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*`: `--catalyst-primary: 0.274 0.006 286.033`; muted/input namespace tokens.

## 12. Typography and Global Styling

Icon `Check h-3 w-4` (`catalyst:24`) vs `h-4 w-4` — narrower glyph (12×16 vs
16×16) in an 18px box. UNVERIFIED (concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px box — UNVERIFIED; (2) muted resting fill + input border —
UNVERIFIED; (3) checked border — UNVERIFIED; (4) narrower icon — UNVERIFIED.
Re-apply all deliberately. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
