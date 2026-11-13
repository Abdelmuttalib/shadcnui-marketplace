# Neon Textarea vs Default

## 1. Audit Metadata

- Style: neon
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/neon/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Neon's only component-level change is the resting face (`bg-neon-input/40`
40% tint); border, full focus stack, padding, and disabled treatment are
identical. Near-token-swap.

## 3. Base Classes

Baseline vs neon: `bg-dft-background` → `bg-neon-input/40` (UNVERIFIED, COLOR —
tint mirrors neon input/checkbox/radio resting treatment); everything else prefix
swap / retained. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

## 6. Interaction States

All identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*`: resting fill uses `--neon-input` at 40%.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 40% tint face — UNVERIFIED; (2) namespace swap —
TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

None.
