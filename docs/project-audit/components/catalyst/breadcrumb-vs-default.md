# Catalyst Breadcrumb vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: breadcrumb
- Baseline source: `registry/default/ui/breadcrumb.tsx:1-115`
- Alternative source: `registry/catalyst/ui/breadcrumb.tsx:1-115`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Catalyst leaves Link/Page text unprefixed (as carbon) and shrinks separator
icons to `h-3`, keeping the ChevronRight glyph. List, Item, Ellipsis, props,
and exports unchanged — including the shared `Elipssis` typo.

## 3. Base Classes

List: prefix swap. Item identical. Link: `hover:text-dft-foreground` →
`hover:text-foreground` (unprefixed) — PARITY_DIVERGENCE, Needs-designer (joint
ruling; catalyst-convention evidence cited, still unconfirmed here). Page:
`text-dft-foreground` → `text-foreground` (unprefixed) — same ruling.
Separator `li`: `[&>svg]:h-3.5` → `[&>svg]:h-3` both axes (UNVERIFIED,
DIMENSION — slightly smaller glyph box); default icon still ChevronRight.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Separator icon box change in §3; Ellipsis unchanged.

## 6. Interaction States

Link hover per §3. Page ARIA attributes unchanged. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and roles. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 7 exports identical incl. `Elipssis` typo (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 token questions (pending rulings, not failure claims).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` except unprefixed Link/Page text (§3).

## 12. Typography and Global Styling

List `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) smaller separator icons — UNVERIFIED; (2) unprefixed Link/Page —
PARITY_DIVERGENCE/Needs-designer (joint ruling, with convention evidence cited).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Unprefixed Link/Page: convention (cf. button-link/badge) or slips?
