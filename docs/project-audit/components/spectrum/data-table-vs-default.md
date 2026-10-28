# Spectrum Data-Table vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: data-table
- Baseline source: `registry/default/ui/data-table.tsx:1-80`
- Alternative source: `registry/spectrum/ui/data-table.tsx:1-80`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
import + wrapper lines verified by direct grep)

## 2. Executive Summary

Spectrum data-table wires its own style's table module (verified — no
cross-style import) with a namespace-swapped wrapper. Hook usage, props, generics,
selected-state handling, empty state, and exports identical.

## 3. Base Classes

Wrapper: `rounded-dft-md border border-dft-border` →
`rounded-spctm-md border border-spctm-border` (prefix swap). Import path own-style
(verified); hook/props/generics/selected-state/empty-state identical.
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — no cva variants; column definitions flow through props.

## 5. Sizes

No size scale. Empty-state cell `h-24 text-center` unchanged.

## 6. Interaction States

Row selection (`data-state="selected"`) flows through the imported table
components; logic identical. No focus/disabled/dark classes in this file.

## 7. DOM and Component Structure

Identical tree (div > Table > Header/Body, flexRender cells, empty-state row).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`DataTableProps<TData, TValue>` (`columns`, `data`), generic signature, sole
`DataTable` export identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`useReactTable` config, row model, placeholder/empty rendering identical.
PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style table import (`…/spectrum/ui/table`) verified; tanstack imports
(`ColumnDef`, `flexRender`, `getCoreRowModel`, `useReactTable`) identical.
PARITY_EXPECTED — the import path itself is expected namespacing.

## 11. Token Dependencies

Wrapper tokens resolve within the spectrum namespace.

## 12. Typography and Global Styling

Empty-state "No results." text unchanged (same string, same classes).

## 13. Findings and Upgrade Preservation

Findings: (1) own-style table import + namespace-swapped wrapper —
PARITY_EXPECTED / TOKEN_DEPENDENCY. No divergences, no exceptions. Migration:
keep the import re-pointed at the new spectrum table module.

## 14. Verification

Both files read fully (delegated read with exact quotes); import + wrapper
verified by direct grep. Effects inferred from source.

## 15. Unresolved Questions

None.
