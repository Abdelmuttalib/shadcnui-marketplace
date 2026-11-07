# Material Toggle vs Default

## 1. Audit Metadata

- Style: material
- Component: toggle
- Baseline source: `registry/default/ui/toggle.tsx:1-45`
- Alternative source: `registry/material/ui/toggle.tsx:1-45`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material drops the focus-offset width, compacts sizes unevenly (sm and lg both
shrink toward `h-8`/`h-10`), and carries a duplicated border-color pair in the
outline variant (`border-material-border border-material-input`). On-state and
structure unchanged.

## 3. Base Classes

Base (`material:10` vs `default:10`): prefix swap, except `focus-visible:ring-offset-2`
absent (offset color `ring-offset-material-background` kept, single-spaced).
Ring-2 retained. Offset removal: PARITY_DIVERGENCE, Needs-designer (concern FOCUS);
rest TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative (`material:13-17`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-transparent` | identical | — | PARITY_EXPECTED |
| outline | `border border-dft-input …` | `border border-material-border border-material-input bg-transparent hover:bg-material-accent …` | Duplicate border colors: `border-material-border` then `border-material-input` — twMerge keeps the later (`input`); the first is dead | PARITY_DIVERGENCE, Open (concern TECHNICAL) — harmless, drop `border-material-border` on migration; remaining outline is then a prefix swap (TOKEN_DEPENDENCY) |

## 5. Sizes

| Size | Default | Alternative (`material:18-22`) | Change | Classification |
|---|---|---|---|---|
| default | `h-10 px-3 min-w-10` | `h-10 px-2 min-w-10` | Same height, narrower | UNVERIFIED (concern DIMENSION) |
| sm | `h-9 px-2.5 min-w-9` | `h-8 px-1.5 min-w-8` | Shorter, narrower | UNVERIFIED |
| lg | `h-11 px-5 min-w-11` | `h-10 px-3 min-w-10` | Shorter, narrower (≈ default size) | UNVERIFIED |

Compact set: UNVERIFIED.

## 6. Interaction States

Hover, on-state (accent), disabled, svg sizing identical. Focus per §3. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Toggle`, `toggleVariants`, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace. Dead `border-material-border` references `--material-border`.

## 12. Typography and Global Styling

`text-sm font-medium` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact sizes — UNVERIFIED; (2) duplicated outline border —
PARITY_DIVERGENCE (drop first color); (3) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. twMerge dead-class analysis is source-level (later class
wins for conflicting border-color utilities); rendered effect inferred.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
