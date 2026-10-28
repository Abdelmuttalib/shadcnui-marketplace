# Moon Dialog vs Default

## 1. Audit Metadata

- Style: moon
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/moon/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified by direct read of `moon:41`)

## 2. Executive Summary

Moon dialog is a prefix swap except for the Content surface: `bg-moon-popover`
instead of `bg-moon-background`. Geometry, overlay, animations, Close, type, and
exports unchanged.

## 3. Base Classes

Overlay identical. Content (`moon:41`, verified): `bg-dft-background` →
`bg-moon-popover` (UNVERIFIED, COLOR — popover-surfaced panel, as carbon/
spectrum); `border-moon-border`, `sm:rounded-moon-lg` are prefix swaps
(Corroborated). Close: full ring-2/offset-2 retained with namespace tokens.

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

`moon-*` namespace; Content surface on the popover token.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) popover-surfaced Content — UNVERIFIED (preserve; note carbon and
spectrum share this choice).

## 14. Verification

Full-file diff run (3 changed lines); Content line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Confirm popover-surfaced dialog as intended (recurs in carbon/spectrum —
   set-level ruling candidate).
