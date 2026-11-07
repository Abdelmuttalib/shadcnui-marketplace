# Neon Select vs Default

## 1. Audit Metadata

- Style: neon
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/neon/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Neon shortens the trigger (`h-9`) with a 40% input-tinted fill and is otherwise
a prefix swap — full ring-2/offset-2 focus, unchanged item padding, `p-1`
viewport, and all exports retained.

## 3. Base Classes

Trigger: `h-10` → `h-9`; `bg-dft-background` → `bg-neon-input/40` (tint mirrors
neon input/textarea/checkbox resting treatment); ring-2/offset-2 retained.
Height/fill UNVERIFIED (DIMENSION/COLOR); rest TOKEN_DEPENDENCY, Corroborated.
Content/Label/Item (`py-1.5` kept)/Separator/Scroll: prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger height change in §3.

## 6. Interaction States

Focus identical. Highlight/disabled/animations identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`neon-*`: trigger fill uses `--neon-input` at 40%.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact tinted trigger — UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
