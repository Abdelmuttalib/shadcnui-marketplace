# Libelle Radio-Group vs Default

## 1. Audit Metadata

- Style: libelle
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/libelle/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Libelle enlarges items to 18px, keeps the primary-colored border and full focus
stack, and shrinks the dot to `h-2 w-2`. No checked-state additions. Near-swap
with a dimension delta.

## 3. Base Classes

Root identical. Item (`libelle:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-[18px] w-[18px]` | 16px → 18px | Larger item (matches libelle checkbox scale language) | UNVERIFIED (concern DIMENSION) |
| All tokens | `libelle` equivalents | Prefix swap (`border-libelle-primary`, `text-libelle-primary`, ring, offset-2) | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none. Focus: identical. Checked: dot only, as baseline. Disabled
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*`: `--libelle-primary: 0.3 0.205674 264.052`.

## 12. Typography and Global Styling

Dot `Circle h-2 w-2 fill-current text-current` (`libelle:37`) vs `h-2.5 w-2.5` —
8px dot in an 18px item. UNVERIFIED (concern DIMENSION).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px items — UNVERIFIED; (2) smaller dot — UNVERIFIED. Re-apply
both. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
