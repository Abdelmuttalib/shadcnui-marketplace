# table

## 1. Audit Metadata

| Field | Value |
|---|---|
| Baseline ID | `default-a8d26cf-20261010` |
| Source path | `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/table.tsx` |
| Source line count | 121 |
| Capture date | 2026-10-09 |
| Status | Complete |
| Method | Static read of the verbatim baseline copy only; no runtime, browser, or computed-style verification. All dynamic effects below are labeled inferred from source. |

## 2. Executive Summary

`table.tsx` exports eight `forwardRef` primitives wrapping native table elements.
`Table` adds a scroll wrapper (`relative w-full overflow-auto`) around a `w-full caption-bottom text-sm` table.
Row striping/selection use border and `data-[state=selected]` classes; header/footer/cell/caption carry fixed spacing tokens.
No `cva` variants and no size scale; customization is via `className` merge.

## 3. Exports and API

| Symbol | Kind | Props / Types | Defaults |
|---|---|---|---|
| `Table` | `React.forwardRef` → wrapper `div` + `table` | `HTMLTableElement`; `React.HTMLAttributes<HTMLTableElement>` | No defaults; `className` merged via `cn("w-full caption-bottom text-sm", className)`; `ref` is attached to the inner `table`, not the wrapper `div` |
| `TableHeader` | `React.forwardRef` → `thead` | `HTMLTableSectionElement`; `React.HTMLAttributes<HTMLTableSectionElement>` | No defaults; merges `cn("[&_tr]:border-b [&_tr]:border-b-dft-border", className)` |
| `TableBody` | `React.forwardRef` → `tbody` | `HTMLTableSectionElement`; `React.HTMLAttributes<HTMLTableSectionElement>` | No defaults; merges `cn("[&_tr:last-child]:border-0", className)` |
| `TableFooter` | `React.forwardRef` → `tfoot` | `HTMLTableSectionElement`; `React.HTMLAttributes<HTMLTableSectionElement>` | No defaults; merges `cn("border-t border-t-dft-border bg-dft-muted/50 font-medium [&>tr]:last:border-b-0", className)` |
| `TableRow` | `React.forwardRef` → `tr` | `HTMLTableRowElement`; `React.HTMLAttributes<HTMLTableRowElement>` | No defaults; merges `cn("border-b border-b-dft-border transition-colors hover:bg-dft-muted/50 data-[state=selected]:bg-dft-muted", className)` |
| `TableHead` | `React.forwardRef` → `th` | `HTMLTableCellElement`; `React.ThHTMLAttributes<HTMLTableCellElement>` | No defaults; merges `cn("h-12 px-4 text-left align-middle font-medium text-dft-muted-foreground [&:has([role=checkbox])]:pr-0", className)` |
| `TableCell` | `React.forwardRef` → `td` | `HTMLTableCellElement`; `React.TdHTMLAttributes<HTMLTableCellElement>` | No defaults; merges `cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)` |
| `TableCaption` | `React.forwardRef` → `caption` | `HTMLTableCaptionElement`; `React.HTMLAttributes<HTMLTableCaptionElement>` | No defaults; merges `cn("mt-4 text-sm text-dft-muted-foreground", className)` |

Each symbol sets `displayName` to its own name (e.g. `Table.displayName = "Table"`). No `cva` export in this file.

## 4. Variants

None. No `cva` variant table is present in source.

Exact base class strings (quoted):

- `Table` table: `"w-full caption-bottom text-sm"`; wrapper `div`: `"relative w-full overflow-auto"`
- `TableHeader`: `"[&_tr]:border-b [&_tr]:border-b-dft-border"`
- `TableBody`: `"[&_tr:last-child]:border-0"`
- `TableFooter`: `"border-t border-t-dft-border bg-dft-muted/50 font-medium [&>tr]:last:border-b-0"`
- `TableRow`: `"border-b border-b-dft-border transition-colors hover:bg-dft-muted/50 data-[state=selected]:bg-dft-muted"`
- `TableHead`: `"h-12 px-4 text-left align-middle font-medium text-dft-muted-foreground [&:has([role=checkbox])]:pr-0"`
- `TableCell`: `"p-4 align-middle [&:has([role=checkbox])]:pr-0"`
- `TableCaption`: `"mt-4 text-sm text-dft-muted-foreground"`

## 5. Sizes

No size scale. Spacing is fixed per element (`h-12 px-4` on `TableHead`, `p-4` on `TableCell`, `mt-4 text-sm` on `TableCaption`, `text-sm` on `Table`).

## 6. Interaction States

Source-derived classes only:

- Hover: `hover:bg-dft-muted/50` on `TableRow` only.
- Focus: none (`focus-visible:*` / `focus:*` absent).
- Disabled: none (`disabled:*` absent).
- Checked/open: none (`data-[state=checked]`, `data-[state=open]` absent).
- Selected: `data-[state=selected]:bg-dft-muted` on `TableRow`.
- Active: none (`data-[state=active]` / `data-[state=on]` absent).
- Dark mode: none (`dark:*` absent).
- Responsive: none (`sm:*` / `md:*` absent).

Structural pseudo-states present: `[&_tr]:border-b`, `[&_tr:last-child]:border-0`, `[&>tr]:last:border-b-0`, `[&:has([role=checkbox])]:pr-0` (on `TableHead` and `TableCell`).

## 7. DOM and Component Structure

- `Table` renders `<div className="relative w-full overflow-auto"><table ref={ref} … /></div>`; `ref` targets the `table`.
- `TableHeader` → `thead`; `TableBody` → `tbody`; `TableFooter` → `tfoot`; `TableRow` → `tr`; `TableHead` → `th`; `TableCell` → `td`; `TableCaption` → `caption`.
- Each forwards `ref` and spreads `{...props}` onto its native element.
- Composition is by nesting (Header/Body/Footer/Row/Head/Cell/Caption inside `Table`); no primitive library or context is used.

## 8. Behavior

- Scroll containment — inferred from source: `relative w-full overflow-auto` on the wrapper suggests horizontal scrolling for wide tables; scrollbar behavior was not verified.
- Hover highlight — inferred from source: `hover:bg-dft-muted/50` with `transition-colors` on `TableRow` suggests animated row highlight; timing values are not in source.
- Selection highlight — inferred from source: `data-[state=selected]:bg-dft-muted` suggests a selected row is styled when a `data-state="selected"` attribute is set by the consumer; no selection logic exists in this file.
- Border collapsing between sections is expressed only via the `[&_tr]` / `[&>tr]` selectors; no runtime/browser verification was performed.

## 9. Accessibility

Source facts only:

- Native table elements (`table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, `caption`) are used, preserving native table semantics.
- `[&:has([role=checkbox])]:pr-0` on `TableHead`/`TableCell` acknowledges checkbox-in-cell usage via `role=checkbox`; no ARIA attributes are hardcoded.
- No `scope`, `aria-*`, keyboard handling, or focus styles are present in source.
- `TableCaption` renders a native `caption` element; caption text is consumer-provided.

## 10. Imports and Dependencies

External:

- `react` as `React`

Internal:

- `@/lib/utils` — `cn` class-name merge utility

No Radix, `cva`, or `@/registry/default/*` links in this file.

## 11. Token Dependencies

Tokens appearing verbatim in class strings (values not verified in this audit — unresolved):

| Token | Where used | Status |
|---|---|---|
| `dft-border` | `[&_tr]:border-b-dft-border`; `border-t-dft-border`; `border-b-dft-border` | Unresolved — token value not verified |
| `dft-muted` | `bg-dft-muted/50` (Footer, Row hover); `data-[state=selected]:bg-dft-muted` (Row) | Unresolved — token value not verified |
| `dft-muted-foreground` | `text-dft-muted-foreground` (Head, Caption) | Unresolved — token value not verified |

## 12. Upgrade-Sensitive Areas

- Arbitrary-variant selectors are load-bearing: `"[&_tr]:border-b [&_tr]:border-b-dft-border"`, `"[&_tr:last-child]:border-0"`, `"[&>tr]:last:border-b-0"`, `"[&:has([role=checkbox])]:pr-0"`. Tailwind upgrades or selector refactors must preserve these exact strings.
- `ref` placement quirk: on `Table`, `ref` is attached to the inner `<table>`, not the scroll wrapper `<div className="relative w-full overflow-auto">`. Consumers measuring the scroll container cannot use this `ref`.
- Footer selector `"[&>tr]:last:border-b-0"` differs in combinator (`>`) from Body's `"[&_tr:last-child]:border-0"` (descendant); changing one without the other alters last-row borders.
- `caption-bottom` and `text-sm` on `Table` are global to the whole table; overrides must target the merged `className`.
- No dead code observed; 8 components, 121 lines.

## 13. Verification

- Read: `docs/project-audit/baselines/default-a8d26cf-20261010/sources/ui/table.tsx` (121 lines) in full.
- Verified: all 8 export names, each element type, each exact class string, `ref`-on-`table` placement, presence of `hover:` / `data-[state=selected]` and absence of `focus:` / `disabled:` / `dark:` / responsive classes.
- Assumptions: `cn` merges classes; `data-state="selected"` is set by consumers (no setter in this file).

## 14. Unresolved Questions

1. What are the resolved values of `dft-border`, `dft-muted`, and `dft-muted-foreground`?
2. Which consumer sets `data-state="selected"` on rows, and is single- or multi-select intended?
3. Is the `ref`-on-`table` (rather than wrapper) placement intentional for measurement/focus use cases?
