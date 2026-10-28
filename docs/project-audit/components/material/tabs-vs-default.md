# Material Tabs vs Default

## 1. Audit Metadata

- Style: material
- Component: tabs
- Baseline source: `registry/default/ui/tabs.tsx:1-55`
- Alternative source: `registry/material/ui/tabs.tsx:1-55`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Material frames the list (border, `overflow-hidden`, 80% muted fill, dropped
`p-1`, stray active selectors) and restyles triggers as `-md` bordered tabs
with `py-2`, `shadow-xl` active fill, and a contradictory
`border-material-border border-transparent` pair. Content unchanged. Structure
and exports unchanged.

## 3. Base Classes

List: `p-1` dropped; `border border-material-border`, `overflow-hidden`,
`bg-material-muted/80` added; stray `data-[state=active]:bg-material-background
data-[state=active]:text-material-foreground` on the List (no-op — Radix never
sets state on List; PARITY_DIVERGENCE, Open, TECHNICAL — dead selectors, remove
on migration). Trigger: `rounded-dft-sm` → `rounded-material-md`; contradictory
`border border-material-border border-transparent` (twMerge keeps the later
transparent — inferred; the visible-border class is dead) — PARITY_DIVERGENCE,
Open (drop one); `py-1.5` → `py-2`; active `shadow-sm` → `shadow-xl` +
`border-material-border` added (UNVERIFIED, DIMENSION/SHADOW/BORDER).
Content: prefix swap (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. List/trigger metrics in §3.

## 6. Interaction States

Active treatment per §3; hover absent in both files; disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 4 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*` namespace throughout.

## 12. Typography and Global Styling

`text-sm font-medium` trigger retained.

## 13. Findings and Upgrade Preservation

Findings: (1) framed list + `-md` bordered triggers + `shadow-xl` active —
UNVERIFIED (preserve); (2) stray List active selectors — PARITY_DIVERGENCE
(remove); (3) contradictory trigger border pair — PARITY_DIVERGENCE (keep one).

## 14. Verification

Both files read fully (delegated read with exact quotes). twMerge/dead-selector
mechanisms inferred from source, not rendered.

## 15. Unresolved Questions

1. Confirm the framed elevated-active treatment as intended.
