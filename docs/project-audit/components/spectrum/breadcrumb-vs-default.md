# Spectrum Breadcrumb vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: breadcrumb
- Baseline source: `registry/default/ui/breadcrumb.tsx:1-115`
- Alternative source: `registry/spectrum/ui/breadcrumb.tsx:1-115`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Spectrum's only non-swap change is coloring the default separator icon
(`text-spctm-foreground` on the ChevronRight — sole instance). Link/Page
correctly prefixed; icons, Ellipsis, props, and exports unchanged. (Prefix
`spctm`.)

## 3. Base Classes

List/Item/Link/Page: prefix swaps (Corroborated). Separator default:
`<ChevronRight />` → `<ChevronRight className="text-spctm-foreground" />`
(UNVERIFIED, COLOR — only style tinting the separator glyph; `li` box stays
`h-3.5`).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Ellipsis `h-9 w-9` unchanged.

## 6. Interaction States

Link hover correctly prefixed. Page ARIA unchanged. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and roles. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 7 exports identical incl. `Elipssis` typo (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`spctm-*` namespace only. Keep the `spctm` prefix.

## 12. Typography and Global Styling

List `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) tinted separator glyph — UNVERIFIED (preserve exactly).

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the tinted separator as intended.
