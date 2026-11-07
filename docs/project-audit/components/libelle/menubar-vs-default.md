# Libelle Menubar vs Default

## 1. Audit Metadata

- Style: libelle
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/libelle/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed lines, verified by direct read of `libelle:100`)

## 2. Executive Summary

Libelle is a prefix swap except for the wide Content (`min-w-[12rem]`), which
adds a `font-outfit` override — matching libelle dialog's Content-level font
pinning. Root keeps `h-10`; all metrics, animations, and exports otherwise
unchanged.

## 3. Base Classes

Content (`libelle:100`, verified): `... bg-libelle-popover p-1` +
**`font-outfit`** + `text-libelle-popover-foreground ...` — added component-level
font class (UNVERIFIED, TYPOGRAPHY — second libelle Content-level `font-outfit`
after dialog; set-level corroboration candidate, still UNVERIFIED pending ruling).
SubContent has no such override (asymmetric with Content — recorded as observed
fact). Everything else prefix swap (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. All metrics unchanged.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical (const aliases). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. `displayname` bug retained (shared-baseline note).
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace only.

## 12. Typography and Global Styling

Content `font-outfit` is component-level (§3); triggers/items/label stay
`text-sm` with inherited family.

## 13. Findings and Upgrade Preservation

Findings: (1) Content-level `font-outfit` — UNVERIFIED (preserve exactly;
confirm whether pinning is intended or redundant with the page font; rule
jointly with libelle dialog Content).

## 14. Verification

Full-file diff run (8 changed lines); Content line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Is Content-level font pinning deliberate (now in dialog + menubar)?
