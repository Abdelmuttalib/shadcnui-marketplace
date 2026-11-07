# Catalyst Context-Menu vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/catalyst/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (10 changed line-pairs, verified)

## 2. Executive Summary

Catalyst widens item spacing, tightens content padding (`p-0.5`), swaps borders
to `input`, and carries three unprefixed tokens: both Content texts plus Label
`text-foreground` and Separator `bg-border`. Icons, animations, and exports
unchanged.

## 3. Base Classes

SubTrigger/Item: `px-2 py-1.5` → `px-2.5 py-2` (UNVERIFIED, DIMENSION).
Checkbox/RadioItem: `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-2.5` (UNVERIFIED).
SubContent + Content: `border-dft-border` → `border-catalyst-input`
(UNVERIFIED, COLOR); `p-1` → `p-0.5` (UNVERIFIED, DIMENSION);
`text-dft-popover-foreground` → **`text-popover-foreground` (unprefixed, both)**
— PARITY_DIVERGENCE, Needs-designer (joint ruling).
Label: `px-2.5 py-2 ... text-foreground` — spacing UNVERIFIED; **`text-foreground`
unprefixed** (consistent with catalyst's verified convention in badge/typography/
button-link, but still unconfirmed for context-menu — PARITY_DIVERGENCE,
Needs-designer; cite the convention evidence in the ruling).
Separator: `bg-dft-border` → **`bg-border` (unprefixed)** — PARITY_DIVERGENCE,
Open (confirm or re-tokenize to `bg-catalyst-border`).
Shortcut: adds `text-catalyst-muted-foreground/60` (UNVERIFIED, COLOR).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Item/label/content padding changes in §3.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 token questions (pending rulings, not failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except three unprefixed classes (§3); edges on the input token.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) spacing set + tight contents + input edges — UNVERIFIED;
(2) three unprefixed tokens — PARITY_DIVERGENCE (joint rulings; Label may
graduate on convention evidence); (3) Shortcut tone — UNVERIFIED.

## 14. Verification

Full-file diff run (10 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Are the three unprefixed tokens convention (cf. catalyst button-link/badge)
   or slips?
