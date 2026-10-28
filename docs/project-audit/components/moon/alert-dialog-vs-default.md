# Moon Alert-Dialog vs Default

## 1. Audit Metadata

- Style: moon
- Component: alert-dialog
- Baseline source: `registry/default/ui/alert-dialog.tsx:1-141`
- Alternative source: `registry/moon/ui/alert-dialog.tsx:1-141`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (3 changed lines, verified)

## 2. Executive Summary

Moon alert-dialog is a pure token-namespace swap: identical overlay,
bordered Content, Action/Cancel mapping (default/outline), type, animations,
and exports. Own-style `buttonVariants` import verified (no cross-style import).

## 3. Base Classes

Overlay identical (`bg-black/80` + fades). Content: `border-moon-border`,
`bg-moon-background`, `sm:rounded-moon-lg` — prefix swap only. Action
`buttonVariants()`, Cancel `buttonVariants({ variant: "outline" }) + "mt-2
sm:mt-0"` unchanged. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

No cva variants in this file.

## 5. Sizes

No size scale. `max-w-lg`, `p-6` unchanged.

## 6. Interaction States

Animations identical. Action/Cancel states flow through moon buttonVariants. No
dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/moon/ui/button` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

Title/description type identical (namespace tokens).

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap + own-style import — TOKEN_DEPENDENCY /
PARITY_EXPECTED. No divergences, no exceptions. Migration: keep the import
re-pointed at the new moon button module.

## 14. Verification

Full-file diff run (3 changed lines: import, Content, Description). Effects
inferred from source.

## 15. Unresolved Questions

None.
