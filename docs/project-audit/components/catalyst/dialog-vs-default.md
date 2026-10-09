# Catalyst Dialog vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/catalyst/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Catalyst lightens the overlay to `black/30` (dark `black/70`) — the lightest
scrim in the set. Content, Close, type, animations, and exports are prefix-only
swaps.

## 3. Base Classes

Overlay: `bg-black/80` → `bg-black/30` + added `dark:bg-black/70` (UNVERIFIED,
COLOR — weakest modal scrim; dismissal/focus-trap untouched).
Content (`border-catalyst-border`, `bg-catalyst-background`,
`sm:rounded-catalyst-lg`), Close (full ring-2/offset-2, namespace tokens),
Description: prefix swaps (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations, Close hover/focus/disabled identical. Dark overlay variant noted
(§3). No other dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; lighter scrim noted without contrast-failure claim. PARITY_EXPECTED
with §3 note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` namespace; `--catalyst-radius: 0.6rem`.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) `black/30` overlay + dark variant — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (3 changed lines). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm the light scrim as intended catalyst language.
