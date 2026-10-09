# Neon Table vs Default

## 1. Audit Metadata

- Style: neon
- Component: table
- Baseline source: `registry/default/ui/table.tsx:1-121`
- Alternative source: `registry/neon/ui/table.tsx:1-121`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (6 changed line-pairs, verified)

## 2. Executive Summary

Neon's only non-swap change is a 50% muted tint on the scroll wrapper
(`bg-neon-muted/50` — sole instance). Header/footer/row/head/cell/caption are
pure prefix swaps (the baseline already carries explicit border colors).
No structural change.

## 3. Base Classes

Wrapper: `relative w-full overflow-auto` → same + `bg-neon-muted/50`
(UNVERIFIED, COLOR — tinted scroll container, sole instance). Everything else
`dft` → `neon` swaps, verified by full-file diff. TOKEN_DEPENDENCY,
Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Head `h-12`, cell `p-4` unchanged.

## 6. Interaction States

Hover/selected namespace-swapped. No focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and prop types. Styling-only. PARITY_EXPECTED for structure.

## 8. Props, Exports, and API

All 8 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace only.

## 12. Typography and Global Styling

Head `font-medium`, table `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) tinted wrapper — UNVERIFIED (preserve); (2) namespace swap —
TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run (6 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

None.
