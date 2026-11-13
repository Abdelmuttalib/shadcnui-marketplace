# Wedges Checkbox vs Default

## 1. Audit Metadata

- Style: wedges
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/wedges/ui/checkbox.tsx:1-31`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Wedges uses an 18px box with a 2px `input` border, transparent resting fill, and
the only explicit dark-mode checkbox treatment in the system
(`dark:border-wedges-gray-600`, `checked:dark:border-wedges-primary`). A stray
`// </div>` comment sits inside the JSX. Focus stack retained.

## 3. Base Classes

Baseline Root (`default:16`) vs wedges Root (`wedges:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `size-[1.125rem]` + `relative` | 16px → 18px | Slightly larger box (`relative` has no positioned child — inert) | Dimension UNVERIFIED; `relative` PARITY_DIVERGENCE, Open (concern TECHNICAL) — likely leftover, harmless |
| `rounded-dft-sm` | `rounded-wedges-md` | Prefix swap (`-sm` → `-md` tier change follows wedges radius scale) | — | TOKEN_DEPENDENCY, Corroborated |
| `border` | `border-2` | 1px → 2px | Heavier edge | UNVERIFIED (concern BORDER) |
| `border-dft-primary` | `border-wedges-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| (none) | `bg-transparent` | Added resting fill | Transparent face | UNVERIFIED (concern COLOR) |
| (none) | `ring-transparent` | Added (persistent, non-conditional) | Reserves ring width invisibly; ring colors in on focus | UNVERIFIED (concern FOCUS) |
| (none) | `dark:border-wedges-gray-600` | Added dark-mode resting border | Dark resting edge differs from light | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-wedges-primary` + `data-[state=checked]:dark:border-wedges-primary` | Added incl. dark override | Checked border in both modes | UNVERIFIED (concern COLOR) |
| checked bg/text, ring-2/offset-2, disabled | `wedges` equivalents / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3. Note: 16px icon in an 18px box
with a 2px border leaves tight clearance — inferred, not measured.

## 6. Interaction States

Hover: none in either file. Focus: identical ring-2/offset-2 (+ transparent-ring
reservation). Checked per §3, both color modes. Disabled identical.

## 7. DOM and Component Structure

Tree identical except a stray `// </div>` comment line (`wedges:27`) inside the
`Root` JSX — dead text, no render effect. PARITY_DIVERGENCE, Open (concern
TECHNICAL): remove on migration. `relative` class (§3) is similarly inert.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; focus ring fully present. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*`: gray/input/primary tokens; `--wedges-radius: 0.5rem`. Dark classes
reference `--wedges-gray-600` / `--wedges-primary` directly.

## 12. Typography and Global Styling

Icon `Check h-4 w-4` unchanged (`wedges:24`).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px/`border-2`/transparent/dark-mode set — UNVERIFIED, re-apply;
(2) `relative` + `// </div>` — PARITY_DIVERGENCE, safe to drop. Preserve the dark
`border-wedges-gray-600` reference (only dark-aware checkbox resting state).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm dark-mode border treatment as intended (no other checkbox has one).
