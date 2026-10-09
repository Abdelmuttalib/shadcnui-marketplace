# Libelle Checkbox vs Default

## 1. Audit Metadata

- Style: libelle
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/libelle/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Libelle enlarges to a 20px box with a `rounded-[4px]` literal radius, keeps the
primary-colored resting border (like Default, unlike most styles), adds no
checked border, and shrinks the icon to `h-3 w-3` — the smallest checkbox glyph,
floating in the largest box. Focus stack retained.

## 3. Base Classes

Baseline Root (`default:16`) vs libelle Root (`libelle:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-5 w-5` | 16px → 20px | Largest box in the set | UNVERIFIED (concern DIMENSION) |
| `rounded-dft-sm` | `rounded-[4px]` | Token utility → arbitrary 4px | Bypasses `--libelle-radius` (0rem); renders 4px regardless | UNVERIFIED (concern SHAPE) — no defect verdict |
| `border-dft-primary` and checked bg/text | `libelle` equivalents | Prefix swap; primary resting border kept | Consistent with Default's primary-edge language | TOKEN_DEPENDENCY, Corroborated |

Ring-2/offset-2, disabled classes unchanged.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. 20px box + 12px icon (§12) gives the airiest glyph-to-box ratio —
inferred visual character, not a defect claim.

## 6. Interaction States

Hover: none. Focus: identical. Checked: fill + recolor, no added border (as
baseline). Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*`: `--libelle-primary: 0.3 0.205674 264.052`; `--libelle-radius: 0rem`
(square system, but checkbox renders 4px via literal).

## 12. Typography and Global Styling

Icon `Check h-3 w-3` (`libelle:24`) vs `h-4 w-4` — 12px glyph in a 20px box.
UNVERIFIED (concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) 20px box — UNVERIFIED; (2) `rounded-[4px]` literal — UNVERIFIED
(preserve literally); (3) 12px icon — UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm box/icon/radius combination as intended libelle language.
