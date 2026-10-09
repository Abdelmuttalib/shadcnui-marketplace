# Wedges Button vs Default

## 1. Audit Metadata

- Style: wedges
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/wedges/ui/button.tsx:1-59`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Wedges is a light-touch style: prefix swap, tighter focus offset, translucent
`/50` hovers on outline and ghost, and mildly compact sizes. `ButtonLink` absent
(parity divergence). Inter inherited.

## 3. Base Classes

`wedges:8` vs `default:9`: prefix swap plus `focus-visible:ring-offset-2` →
`ring-offset-1 ring-offset-wedges-background` — offset width 2 → 1, expressed
without the `focus-visible:` variant prefix (always applied; cosmetic double
space in the string is a no-op). Inferred: tighter focus halo. Offset:
UNVERIFIED, Needs-designer (concern FOCUS); double space: PARITY_DIVERGENCE,
Open (concern TECHNICAL) — harmless, normalize on migration.

## 4. Variants

| Variant | Default | Alternative (`wedges:12-21`) | Change | Classification |
|---|---|---|---|---|
| default / destructive / secondary / link | baseline | `wedges` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `… hover:bg-dft-accent hover:text-dft-accent-foreground` (opaque) | `border border-wedges-border hover:bg-wedges-accent/50 hover:text-wedges-accent-foreground` (no bg assertion) | Translucent `/50` hover (unique opacity among styles) | UNVERIFIED, Needs-designer (concern COLOR/INTERACTION) |
| ghost | `hover:bg-dft-accent …` (opaque) | `hover:bg-wedges-accent/50 …` | Same translucency | UNVERIFIED, Needs-designer (concern COLOR) |

## 5. Sizes

| Size | Default | Alternative (`wedges:24-29`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-4 py-2` | Shorter only |
| sm | `h-9 rounded-dft-md px-3` | `h-9 rounded-wedges-md px-3` | Identical modulo prefix |
| lg | `h-11 rounded-dft-md px-8` | `h-10 rounded-wedges-md px-8` | Shorter only |
| icon | `h-10 w-10` | `h-9 w-9` | Smaller |
| icon-sm | `h-9 w-9` | `h-8 w-8` | Smaller |
| icon-lg | `h-11 w-11` | `h-10 w-10` | Smaller |

Mild compaction: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover per §4; focus per §3; `disabled:` unchanged. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumers use `Button` only — no in-repo breakage. PARITY_DIVERGENCE, Open
(concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED.

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical.

## 11. Token Dependencies

`wedges-*` namespace. Resolved: `--wedges-primary: 54.33% 0.2313 287.51` (purple),
`--wedges-ring: var(--wedges-primary)`, `--wedges-radius: 0.5rem`
(`app/globals.css:364-393`).

## 12. Typography and Global Styling

No component-level change. Family Inter via inherited `font-sans`.

## 13. Findings and Upgrade Preservation

Findings: (1) offset-1 focus — UNVERIFIED; (2) `/50` outline/ghost hovers —
UNVERIFIED; (3) mild compaction — UNVERIFIED; (4) double space —
PARITY_DIVERGENCE (normalize); (5) missing `ButtonLink` — PARITY_DIVERGENCE.
Re-apply 1–3 deliberately.

## 14. Verification

Both files read fully; consumer grep done. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm translucency + offset + density as intended wedges language.
2. Restore `ButtonLink`?
