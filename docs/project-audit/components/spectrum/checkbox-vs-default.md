# Spectrum Checkbox vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/spectrum/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum keeps the 16px box but doubles the border (`border-2`), moves the resting
border to `input`, adds a checked border, and shrinks the icon (`h-3.5 w-3.5`).
Focus stack retained. (Prefix is `spctm`, not `spectrum`.)

## 3. Base Classes

Baseline Root (`default:16`) vs spectrum Root (`spectrum:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border` | `border-2` | 1px → 2px border | Heavier edge; inferred: check area tightens inside the 16px box | UNVERIFIED (concern BORDER) |
| `border-dft-primary` | `border-spctm-input` | Primary → input border color | Neutral resting edge | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-spctm-primary` | Added | Checked border matches fill | UNVERIFIED (concern COLOR) |
| checked bg/text, `h-4 w-4`, radius, ring stack, disabled | `spctm` equivalents / retained | Prefix swap only | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; box unchanged at 16px.

## 6. Interaction States

Hover: none in either file. Focus: identical. Checked: fill + recolor + added
border. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree, refs, merge order. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace (truncated prefix); semantic aliases under
`--spctm-color-*` (`app/globals.css:868-886`).

## 12. Typography and Global Styling

Icon `Check h-3.5 w-3.5` (`spectrum:24`) vs `h-4 w-4` — 14px glyph in a 16px box
with a 2px border. UNVERIFIED (concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) 2px border — UNVERIFIED; (2) input resting border — UNVERIFIED;
(3) checked border — UNVERIFIED; (4) smaller icon — UNVERIFIED. Re-apply all;
keep the `spctm` prefix (do not "fix" to `spectrum`).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
