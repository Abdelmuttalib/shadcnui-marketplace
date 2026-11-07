# Neon Alert vs Default

## 1. Audit Metadata

- Style: neon
- Component: alert
- Baseline source: `registry/default/ui/alert.tsx:1-59`
- Alternative source: `registry/neon/ui/alert.tsx:1-59`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Pure prefix swap; svg selectors, variants, Title/Description, role, exports unchanged.

## 3. Base Classes

Base (`neon:7`): svg-layout selectors (`[&>svg~*]:pl-7`, `[&>svg+div]:translate-y-[-3px]`, absolute positioning) identical; `rounded-neon-lg`, `border border-neon-border`, icon-ink token are prefix swaps. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

| Variant | Default | Alternative | Classification |
|---|---|---|---|
| default | `bg-*-background text-*-foreground` | `neon` equivalents | Prefix swap (Corroborated) |
| destructive | `border-*/destructive/50`, `dark:border-*`, svg ink | `neon` equivalents incl. dark variant | Prefix swap (Corroborated) |

## 5. Sizes

No size scale. `p-4` unchanged.

## 6. Interaction States

No hover/focus/disabled classes in either file; dark destructive border retained.

## 7. DOM and Component Structure

Identical (Alert div, h5 Title, div Description). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Alert`, `AlertTitle`, `AlertDescription`; `role="alert"` retained; `alertVariants` non-exported (verified 0/11 export it). PARITY_EXPECTED.

## 9. Behavior and Accessibility

`role="alert"` retained in all paths. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (cva, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*` namespace only.

## 12. Typography and Global Styling

Title `mb-1 font-medium leading-none tracking-tight`, Description `text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
