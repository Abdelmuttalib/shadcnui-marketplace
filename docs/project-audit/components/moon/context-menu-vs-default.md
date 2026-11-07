# Moon Context-Menu vs Default

## 1. Audit Metadata

- Style: moon
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/moon/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed line-pairs, verified — all prefix swaps)

## 2. Executive Summary

Moon context-menu is a pure token-namespace swap: identical item
metrics, contents, label, separator, Shortcut, icons, animations (incl.
`animate-in fade-in-80`), and all 15 exports.

## 3. Base Classes

All sub-components: `dft` → `moon` on rounded/border/bg/text tokens only.
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. All metrics unchanged.

## 6. Interaction States

Highlight, open-state, disabled, animations identical. ChevronRight unchanged.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 15 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

`text-sm` items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Full-file diff run (8 changed line-pairs, all swaps). Effects inferred from source.

## 15. Unresolved Questions

None.
