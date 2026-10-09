# Spectrum Input vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/spectrum/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Spectrum shortens to `h-9` with an inheriting `bg-inherit` face and is the only
style with a disabled fill (`disabled:bg-spctm-muted`). It is also the only input
retaining the full baseline focus stack including `ring-offset-2`. (Prefix `spctm`.)

## 3. Base Classes

Baseline vs spectrum:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-10` | `h-9` | 40px → 36px | Shorter field | UNVERIFIED (concern DIMENSION) |
| `bg-dft-background` | `bg-inherit` | Opaque → inheriting | Shows parent surface | UNVERIFIED (concern COLOR) |
| (none) | `disabled:bg-spctm-muted` | Added disabled fill (sole instance) | Disabled fields read muted-filled | UNVERIFIED (concern INTERACTION) |
| Focus stack incl. offset-2, border, file/placeholder/disabled/md | prefix swap / retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single height change in §3.

## 6. Interaction States

Focus identical to baseline. Disabled adds fill (§3). No invalid-state handling
in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace; disabled fill uses `--spctm-muted`.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` + `bg-inherit` — UNVERIFIED; (2) disabled fill —
UNVERIFIED (preserve; unique in set). No divergences. Keep the `spctm` prefix.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm disabled fill + inheriting face as intended.
