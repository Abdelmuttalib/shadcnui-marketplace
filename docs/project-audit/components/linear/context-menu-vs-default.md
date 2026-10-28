# Linear Context-Menu vs Default

## 1. Audit Metadata

- Style: linear
- Component: context-menu
- Baseline source: `registry/default/ui/context-menu.tsx:1-200`
- Alternative source: `registry/linear/ui/context-menu.tsx:1-200`
- Audit date: 2026-10-09
- Status: Complete
- Method: full-file diff (8 changed line-pairs, verified — all prefix swaps
  except Shortcut)

## 2. Executive Summary

Linear is a prefix swap except for the Shortcut (`tracking-[0.3rem]`, opacity
dropped, muted color added — linear-wide Shortcut language). All items,
contents, label, separator, icons, animations, and exports unchanged.

## 3. Base Classes

All sub-components prefix swaps (`rounded-linear-sm`, `px-2 py-1.5`, `p-1`
contents kept, correctly prefixed text). TOKEN_DEPENDENCY, Corroborated.
Shortcut: `tracking-widest opacity-60` → `tracking-[0.3rem]
text-linear-muted-foreground` (opacity dropped) — UNVERIFIED (TYPOGRAPHY/COLOR).

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

`linear-*` namespace throughout.

## 12. Typography and Global Styling

Shortcut tracking change is component-level (§3); items/label `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) Shortcut restyle — UNVERIFIED (preserve exactly).

## 14. Verification

Full-file diff run (8 changed line-pairs). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm wide-tracked Shortcut as intended.
