# Snow Dialog vs Default

## 1. Audit Metadata

- Style: snow
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/snow/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full-file diff (4 changed lines, verified by direct read of `snow:47`)

## 2. Executive Summary

Snow dialog is a prefix swap except for the Close button, which drops
`focus:ring-offset-2` (offset color kept, double space left behind) — another
instance of the snow offset pattern, here on a focusable dismiss control.

## 3. Base Classes

Overlay identical. Content: `border-snow-border`, `bg-snow-background`,
`sm:rounded-snow-lg` — prefix swap (Corroborated). Close (`snow:47`, verified):
`focus:ring-offset-2` absent with `ring-offset-snow-background` kept and a
double space before `data-[state=open]` (no-op); ring-2/ring retained.
Offset removal: PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY —
the Close button is keyboard-reachable, so this instance is interaction-relevant).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations, Close hover/disabled identical; Close focus ring-2 present, offset
absent. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree incl. X icon + sr-only "Close". PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Dismissal unchanged. Close focus distinction weakened (pending ruling, not a
failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace throughout.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) missing Close offset width — PARITY_DIVERGENCE/Needs-designer
(restore or record as intended; do not carry silently).

## 14. Verification

Full-file diff run (4 changed lines); Close line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip (snow offset pattern, ~11th instance)?
