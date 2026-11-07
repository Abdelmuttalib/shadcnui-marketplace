# Carbon Toggle-Group vs Default

## 1. Audit Metadata

- Style: carbon
- Component: toggle-group
- Baseline source: `registry/default/ui/toggle-group.tsx:1-61`
- Alternative source: `registry/carbon/ui/toggle-group.tsx:1-61`
- Audit date: 2026-10-09
- Status: Complete
- Method: full diff of both files (only line 8 differs; verified)

## 2. Executive Summary

Carbon's toggle-group is identical to Default except the `toggleVariants` import
points at carbon's own toggle module. No class, logic, or API difference.

## 3. Base Classes

Not applicable as a diff category — Root string `flex items-center justify-center
gap-1` (`carbon:24` vs `default:24`) identical. PARITY_EXPECTED.

## 4. Variants

No local variants; variant/size flow through the imported `toggleVariants`.
Context defaults `{ size: "default", variant: "default" }` (`carbon:13-14`)
identical. PARITY_EXPECTED. (Carbon's outline/on-state-border toggle differences
apply automatically via the import — see `carbon/toggle-vs-default.md`.)

## 5. Sizes

No local sizes; inherited via import. PARITY_EXPECTED.

## 6. Interaction States

None local; inherited via import. No dark-mode classes.

## 7. DOM and Component Structure

Identical: `Root` + context provider + `Item` with `context.variant || variant`
precedence (`carbon:45-51`). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ToggleGroup`, `ToggleGroupItem` exports, prop types, `displayName`s identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

`import { toggleVariants } from "@/registry/carbon/ui/toggle"` (`carbon:8`) vs
`@/registry/default/ui/toggle` (`default:8`) — own-style import, correct wiring
(no cross-style import). Remaining imports identical. PARITY_EXPECTED
(classification: correct namespacing, not a finding).

## 11. Token Dependencies

None local; inherited via carbon toggle tokens.

## 12. Typography and Global Styling

None local.

## 13. Findings and Upgrade Preservation

Findings: (1) own-style import — PARITY_EXPECTED (must be preserved on migration:
re-point at the new carbon toggle module, never at default's). No divergences,
no exceptions.

## 14. Verification

Full-file diff run; only line 8 differs. No cross-style import (verified across
all 11 toggle-group files).

## 15. Unresolved Questions

None.
