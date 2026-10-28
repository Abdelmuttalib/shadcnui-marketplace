# Libelle Dialog vs Default

## 1. Audit Metadata

- Style: libelle
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/libelle/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (4 changed lines, verified)

## 2. Executive Summary

Libelle dialog is a prefix swap plus a `font-outfit` override on Content — the
only dialog with a component-level font declaration. Geometry, overlay,
animations, Close, and exports unchanged.

## 3. Base Classes

Overlay identical. Content: `border-libelle-border`, `bg-libelle-background`,
`sm:rounded-libelle-lg` (prefix swaps, Corroborated) + added `font-outfit`
(UNVERIFIED, TYPOGRAPHY — component-level family override; dialog inherits the
page font everywhere else). Close: full ring-2/offset-2 retained.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace; `--libelle-radius: 0rem`.

## 12. Typography and Global Styling

Content `font-outfit` is component-level (§3); Title/icon/type otherwise
identical. Family Outfit matches the inherited page font — the override pins it
regardless of context.

## 13. Findings and Upgrade Preservation

Findings: (1) `font-outfit` Content override — UNVERIFIED (preserve exactly;
confirm whether pinning is intended or redundant with the page font).

## 14. Verification

Full-file diff run (4 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Is the Content-level font pinning deliberate or redundant?
