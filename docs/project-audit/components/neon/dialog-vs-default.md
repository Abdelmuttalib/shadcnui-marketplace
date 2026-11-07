# Neon Dialog vs Default

## 1. Audit Metadata

- Style: neon
- Component: dialog
- Baseline source: `registry/default/ui/dialog.tsx:1-122`
- Alternative source: `registry/neon/ui/dialog.tsx:1-122`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Neon dialog is a pure token-namespace swap: identical overlay,
geometry, animations, Close button, type, and exports.

## 3. Base Classes

Overlay identical (`bg-black/80` + fades). Content: `border-neon-border`,
`bg-neon-background`, `sm:rounded-neon-lg` — prefix swap only. Close:
`rounded-neon-sm`, `ring-offset-neon-background`, ring-2/offset-2 retained.
Description: prefix swap. TOKEN_DEPENDENCY, Corroborated.

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

`neon-*` namespace only.

## 12. Typography and Global Styling

Title/icon/type identical.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run (3 changed lines: Content, Close, Description). Effects
inferred from source.

## 15. Unresolved Questions

None.
