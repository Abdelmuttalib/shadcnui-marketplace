# data-table — Baseline Audit

## 1. Audit Metadata

- Baseline ID: `default-a8d26cf-20261010`
- Source path: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/data-table.tsx` (original: `registry/default/ui/data-table.tsx`)
- Line count: 80
- Capture date: 2026-10-09
- Status: Complete
- Method: Read-only static review of the verbatim baseline copy; no runtime execution; no browser verification.

## 2. Executive Summary

Generic `DataTable<TData, TValue>` built on `@tanstack/react-table` and internal `Table` primitives.
Renders header groups via `flexRender` with a `No results.` empty state.
Selection is surfaced via `data-state` only; no variants, sizes, or animations in source.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
| --- | --- | --- | --- |
| `DataTableProps<TData, TValue>` | interface (not exported) | `columns: ColumnDef<TData, TValue>[]`; `data: TData[]` | n/a (required props; no defaults in source) |
| `DataTable<TData, TValue>` | function component (exported) | `({ columns, data }: DataTableProps<TData, TValue>)`; generics `TData`, `TValue` forwarded to `ColumnDef<TData, TValue>` and `useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })` | No default props in source |

## 4. Variants

| Key | Exact classes |
| --- | --- |
| none | No `cva` in source; no variant map. |

## 5. Sizes

No size scale. No size prop. Fixed layout classes only: wrapper `"rounded-dft-md border border-dft-border"` and empty-state cell `"h-24 text-center"`.

## 6. Interaction States

- Selected: `data-state={row.getIsSelected() && "selected"}` on `TableRow` — source fact; styling of `selected` depends on `TableRow` definition, not defined in this file.
- Empty-state: when `table.getRowModel().rows?.length` is falsy, renders `<TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>`.
- Hover / focus / disabled / checked / open / dark / responsive: none present in this file.

## 7. DOM and Component Structure

- Outer element: `<div className="rounded-dft-md border border-dft-border">`.
- Composition: `Table` > `TableHeader` + `TableBody`; `TableHeader` maps `table.getHeaderGroups()` to `TableRow` > `TableHead`; `TableBody` maps `table.getRowModel().rows` to `TableRow` (`data-state`) > `TableCell`.
- Cell rendering: `flexRender(header.column.columnDef.header, header.getContext())` for headers (or `null` when `header.isPlaceholder`); `flexRender(cell.column.columnDef.cell, cell.getContext())` for cells.
- Primitives: no Radix/vaul primitives in this file; logic primitive is `useReactTable` with `getCoreRowModel()`.

## 8. Behavior

- Header/cell rendering via `flexRender` — source-derived fact.
- Row selection flag passthrough via `data-state` — source-derived fact.
- Empty-state swap between row list and single `No results.` row — source-derived fact.
- No transitions, animations, or event handlers in source; any visual transition effect would be inferred from source only — none present, and no browser behavior is claimed.

## 9. Accessibility

- Source facts only: `colSpan={columns.length}` on the empty-state cell; `key` props on mapped rows/cells/headers.
- No `aria-*` attributes, roles, labels, focus management, or keyboard handlers in this file.
- No runtime or browser verification performed.

## 10. Imports and Dependencies

- External: `@tanstack/react-table` — symbols `ColumnDef`, `flexRender`, `getCoreRowModel`, `useReactTable`.
- Internal: `@/registry/default/ui/table` (exact path) — symbols `Table`, `TableBody`, `TableCell`, `TableHead`, `TableHeader`, `TableRow`.
- Internal utility: none (`cn` not imported).
- Alert-dialog: n/a here (not imported).

## 11. Token Dependencies

| Token | Where used | Verification |
| --- | --- | --- |
| `rounded-dft-md` | `"rounded-dft-md border border-dft-border"` (wrapper) | Unresolved — definition not verified in this doc |
| `border-dft-border` | `"rounded-dft-md border border-dft-border"` (wrapper) | Unresolved — definition not verified in this doc |

No other `dft-*` tokens appear literally in this file. Tokens used inside `Table` primitives are out of scope for this file.

## 12. Upgrade-Sensitive Areas

- Hook config is minimal and exact: `useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })` — no sorting, filtering, pagination, or selection state managers in source; upgrades adding features must preserve generic signature.
- Empty state is hardcoded: `<TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>` — quoted exactly; `colSpan` derives from `columns.length`, not row count.
- Placeholder guard quoted exactly: `header.isPlaceholder ? null : flexRender(...)`.
- Selection quirk quoted exactly: `data-state={row.getIsSelected() && "selected"}` — evaluates to `false` when unselected (React omits/renders falsy per React semantics; no browser claim made).

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/data-table.tsx` in full (80 lines).
- Cross-checked export name and line count against `MANIFEST.json` entry for `data-table`.
- Assumptions: none beyond source text; `Table*` internals not re-audited here; no runtime, typecheck, or browser verification performed.

## 14. Unresolved Questions

- None.
