# Carbon Form vs Default

## 1. Audit Metadata

- Style: carbon
- Component: form
- Baseline source: `registry/default/ui/form.tsx:1-179`
- Alternative source: `registry/carbon/ui/form.tsx:1-179`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
import:16 and both `text-destructive` lines verified by direct grep of
`carbon:98,161`)

## 2. Executive Summary

Carbon imports its own Label (verified, no cross-style leakage) with identical
logic, ids, ARIA wiring, and exports — but renders both error states
(FormLabel + FormMessage) in the **unprefixed** `text-destructive` token while
Description stays correctly `text-cb-muted-foreground`. Inconsistent within the
file; joint ruling needed.

## 3. Base Classes

FormItem `space-y-2` identical. FormLabel (`carbon:98`, verified): `error &&
"text-dft-destructive"` → `error && "text-destructive"` (unprefixed) —
PARITY_DIVERGENCE, Needs-designer (joint ruling with catalyst + the unprefixed
set; error text is the form's primary failure signal, so token choice matters).
FormControl: no classes in either file (Slot with `id`/`aria-describedby`/
`aria-invalid` identical). FormDescription: `text-cb-muted-foreground` swap
(Corroborated). FormMessage (`carbon:161`, verified): `text-dft-destructive` →
`text-destructive` (unprefixed) — same ruling.

## 4. Variants

Not applicable — no cva variants; error conditional unchanged.

## 5. Sizes

No size scale. `text-sm` description/message retained.

## 6. Interaction States

Error-conditional rendering (`error ? String(error?.message) : children` +
null-guard) identical. No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical tree (contexts, Slot, ids). PARITY_EXPECTED.

## 8. Props, Exports, and API

All 8 exports (`Form, FormControl, FormDescription, FormField, FormItem,
FormLabel, FormMessage, useFormField`), contexts, `useId`, `getFieldState`
identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`aria-describedby`/`aria-invalid` wiring, error retrieval, id composition
identical. Unprefixed error color pending ruling, not a failure claim.

## 10. Imports and Dependencies

Own-style import `…/carbon/ui/label` verified (`carbon:16`); RHF/resolvers
imports identical. PARITY_EXPECTED — the import path is expected namespacing
(though carbon Label is itself byte-identical to default, the wiring is correct).

## 11. Token Dependencies

`cb-*` for description; legacy unprefixed `--destructive` for both error
states (§3).

## 12. Typography and Global Styling

`text-sm font-medium` message retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed error tokens ×2 — PARITY_DIVERGENCE/Needs-designer
(joint ruling; do not re-prefix silently — error color is load-bearing UI).

## 14. Verification

Both files read fully; import + both error lines verified by direct grep.
Effects inferred from source.

## 15. Unresolved Questions

1. `text-destructive`: shared slip with catalyst or convention (rule jointly)?
