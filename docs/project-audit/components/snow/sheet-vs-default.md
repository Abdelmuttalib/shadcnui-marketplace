# Snow Sheet vs Default

## 1. Audit Metadata

- Style: snow
- Component: sheet
- Baseline source: `registry/default/ui/sheet.tsx:1-140`
- Alternative source: `registry/snow/ui/sheet.tsx:1-140`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full-file diff (8 changed lines, verified by direct read of `snow:68`)

## 2. Executive Summary

Snow keeps per-side border colors (colored-edge minority) but its Close button
drops `focus:ring-offset-2` (offset color kept, double space left behind) —
another snow offset instance, here on a dismiss control.

## 3. Base Classes

Overlay identical. Base `bg-snow-background` prefix swap. Sides:
`border-{side}-snow-border` explicitly present on all four (UNVERIFIED, BORDER —
minority pattern). Close (`snow:68`, verified): `focus:ring-offset-2` absent
with `ring-offset-snow-background` kept and a double space before
`data-[state=open]` (no-op); ring-2/ring retained. Offset removal:
PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY — keyboard-
reachable dismiss control). Title correctly prefixed.

## 4. Variants

Side system + default `"right"` identical. PARITY_EXPECTED for the contract.

## 5. Sizes

No size scale. Geometry unchanged.

## 6. Interaction States

Animations, Close hover/disabled identical; Close focus ring-2 present, offset
absent. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

`SheetContentProps`, all 10 exports, non-exported `sheetVariants`, `side`
default identical. PARITY_EXPECTED.

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

Findings: (1) kept side-border colors — UNVERIFIED; (2) missing Close offset —
PARITY_DIVERGENCE/Needs-designer (restore or record as intended).

## 14. Verification

Full-file diff run (8 changed lines); Close line verified by direct read.
Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip (snow offset pattern)?
