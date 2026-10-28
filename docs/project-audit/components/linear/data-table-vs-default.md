# Linear Data-Table vs Default

## 1. Audit Metadata

- Style: linear
- Component: data-table
- Baseline source: `registry/default/ui/data-table.tsx:1-80`
- Alternative source: `registry/linear/ui/data-table.tsx:1-80`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
import + wrapper lines verified by direct grep)

## 2. Executive Summary

Linear data-table wires its own style's table module (verified — no
cross-style import) with a bare-border wrapper (divergence, see §3). Hook usage, props, generics,
selected-state handling, empty state, and exports identical.

## 3. Base Classes

Wrapper (`linear:35`, verified): `rounded-dft-md border border-dft-border` →
`rounded-linear-md border` (border color dropped — bare width) —
PARITY_DIVERGENCE, Open (concern BORDER/TECHNICAL; likely slip shared with
linear menubar contents — confirm or restore `border-linear-border`).
Import path + all logic: own-style import verified; hook/props/generics/
selected-state/empty-state identical.

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

Own-style table import (`…/linear/ui/table`) verified; tanstack imports
(`ColumnDef`, `flexRender`, `getCoreRowModel`, `useReactTable`) identical.
PARITY_EXPECTED — the import path itself is expected namespacing.

## 11. Token Dependencies

Wrapper tokens resolve within the linear namespace (border color absent — §3).

## 12. Typography and Global Styling

Empty-state "No results." text unchanged (same string, same classes).

## 13. Findings and Upgrade Preservation

Findings: (1) own-style table import — PARITY_EXPECTED (keep re-pointed);
(2) bare-border wrapper — PARITY_DIVERGENCE/Open (confirm or restore).

## 14. Verification

Both files read fully (delegated read with exact quotes); import + wrapper
verified by direct grep. Effects inferred from source.

## 15. Unresolved Questions

1. Bare wrapper border: deliberate or slip?
