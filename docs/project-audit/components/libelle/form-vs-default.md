# Libelle Form vs Default

## 1. Audit Metadata

- Style: libelle
- Component: form
- Baseline source: `registry/default/ui/form.tsx:1-179`
- Alternative source: `registry/libelle/ui/form.tsx:1-179`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes; own-style import verified)

## 2. Executive Summary

Libelle form is a pure token-namespace swap: own `libelle` Label import (verified, no cross-style leakage), identical RHF logic, ids, ARIA wiring, error handling, and all 8 exports.

## 3. Base Classes

FormItem `space-y-2` identical. FormLabel: `error && "text-libelle-destructive"`. FormControl: no classes, identical `id`/`aria-describedby`/`aria-invalid`. FormDescription: `text-sm text-libelle-muted-foreground`. FormMessage: `text-sm font-medium text-libelle-destructive` with identical null-guard. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — error conditional unchanged.

## 5. Sizes

No size scale. `text-sm` retained.

## 6. Interaction States

Error-conditional rendering identical. No hover/focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical tree and contexts. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 8 exports, contexts, `useId`, `getFieldState`, id composition identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`aria-describedby`/`aria-invalid`, error retrieval identical. PARITY_EXPECTED.

## 10. Imports and Dependencies

Own-style import `…/libelle/ui/label` verified; RHF/resolvers imports identical. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace: description + both error states.

## 12. Typography and Global Styling

`text-sm font-medium` message retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap + own-style import — TOKEN_DEPENDENCY / PARITY_EXPECTED. No divergences, no exceptions. Migration: keep the import re-pointed at the new libelle label module.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
