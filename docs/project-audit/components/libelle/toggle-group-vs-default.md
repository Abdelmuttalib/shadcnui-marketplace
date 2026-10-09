# Libelle Toggle-Group vs Default

## 1. Audit Metadata

- Style: libelle
- Component: toggle-group
- Baseline source: `registry/default/ui/toggle-group.tsx:1-61`
- Alternative source: `registry/libelle/ui/toggle-group.tsx:1-61`
- Audit date: 2026-10-09
- Status: Complete
- Method: full diff of both files (only line 8 differs; verified)

## 2. Executive Summary

Libelle's toggle-group is identical to Default except the `toggleVariants` import
points at libelle's own toggle module. No class, logic, or API difference.

## 3. Base Classes

Not applicable as a diff category — Root string `flex items-center justify-center
gap-1` (`libelle:24` vs `default:24`) identical. PARITY_EXPECTED.

## 4. Variants

No local variants; variant/size flow through the imported `toggleVariants`.
Context defaults `{ size: "default", variant: "default" }` (`libelle:13-14`)
identical. PARITY_EXPECTED. (no toggle differences to inherit — libelle toggle is an exact clone — see `libelle/toggle-vs-default.md`.)

## 5. Sizes

No local sizes; inherited via import. PARITY_EXPECTED.

## 6. Interaction States

None local; inherited via import. No dark-mode classes.

## 7. DOM and Component Structure

Identical: `Root` + context provider + `Item` with `context.variant || variant`
precedence (`libelle:45-51`). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ToggleGroup`, `ToggleGroupItem` exports, prop types, `displayName`s identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

`import { toggleVariants } from "@/registry/libelle/ui/toggle"` (`libelle:8`) vs
`@/registry/default/ui/toggle` (`default:8`) — own-style import, correct wiring
(no cross-style import). Remaining imports identical. PARITY_EXPECTED
(classification: correct namespacing, not a finding).

## 11. Token Dependencies

None local; inherited via libelle toggle tokens.

## 12. Typography and Global Styling

None local.

## 13. Findings and Upgrade Preservation

Findings: (1) own-style import — PARITY_EXPECTED (must be preserved on migration:
re-point at the new libelle toggle module, never at default's). No divergences,
no exceptions.

## 14. Verification

Full-file diff run; only line 8 differs. No cross-style import (verified across
all 11 toggle-group files).

## 15. Unresolved Questions

None.
