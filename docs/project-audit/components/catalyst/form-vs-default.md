# Catalyst Form vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: form
- Baseline source: `registry/default/ui/form.tsx:1-179`
- Alternative source: `registry/catalyst/ui/form.tsx:1-179`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes;
import:16 and both `text-destructive` lines verified by direct grep of
`catalyst:98,161`)

## 2. Executive Summary

Catalyst matches carbon exactly in kind: own Label import, identical logic/ids/
ARIA/exports, but both error states (FormLabel + FormMessage) use unprefixed
`text-destructive` while Description stays `text-catalyst-muted-foreground`.
Joint ruling needed (with catalyst-convention evidence cited).

## 3. Base Classes

FormItem identical. FormLabel (`catalyst:98`, verified) + FormMessage
(`catalyst:161`, verified): `text-dft-destructive` → `text-destructive`
(unprefixed, both) — PARITY_DIVERGENCE, Needs-designer (joint ruling; note
catalyst's verified unprefixed convention in badge-outline/button-link/
typography, cited for the ruling, still unconfirmed here). FormControl:
no classes, identical wiring. Description: prefix swap (Corroborated).

## 4. Variants

Not applicable — error conditional unchanged.

## 5. Sizes

No size scale. `text-sm` retained.

## 6. Interaction States

Error-conditional rendering identical. No hover/focus/disabled/dark classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 8 exports, contexts, ids identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`aria-describedby`/`aria-invalid` identical. Unprefixed error color pending
ruling, not a failure claim.

## 10. Imports and Dependencies

Own-style import `…/catalyst/ui/label` verified; rest identical. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` for description; legacy unprefixed `--destructive` for errors (§3).

## 12. Typography and Global Styling

`text-sm font-medium` message retained.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed error tokens ×2 — PARITY_DIVERGENCE/Needs-designer
(joint ruling with carbon + convention evidence).

## 14. Verification

Both files read fully; import + error lines verified by direct grep. Effects
inferred from source.

## 15. Unresolved Questions

1. Convention (cf. button-link/badge/typography) or shared slip with carbon?
