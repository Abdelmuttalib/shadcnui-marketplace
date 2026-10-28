# Lucid Menubar vs Default

## 1. Audit Metadata

- Style: lucid
- Component: menubar
- Baseline source: `registry/default/ui/menubar.tsx:1-236`
- Alternative source: `registry/lucid/ui/menubar.tsx:1-236`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (2 changed lines, verified)

## 2. Executive Summary

Lucid's only non-swap change is the root height (`h-10`→`h-9`). All triggers,
items, contents, label, separator, Shortcut, icons, animations, and exports
unchanged.

## 3. Base Classes

Root: `h-10` → `h-9` (UNVERIFIED, DIMENSION). Everything else prefix swap
(TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable — `inset` handling unchanged.

## 5. Sizes

No size scale. Root height change in §3.

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

`lucid-*` namespace only.

## 12. Typography and Global Styling

`text-sm` triggers/items/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) `h-9` root — UNVERIFIED (preserve).

## 14. Verification

Full-file diff run (2 changed lines). Effects inferred from source.

## 15. Unresolved Questions

None.
