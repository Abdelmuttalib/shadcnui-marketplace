# Spectrum Select vs Default

## 1. Audit Metadata

- Style: spectrum
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/spectrum/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Spectrum shortens the trigger (`h-9`, transparent face), gives Content a 70%
border, narrows viewport padding to vertical-only (`py-1`), and enlarges
label/item vertical padding (`py-2`). Full ring-2/offset-2 focus retained.
(Prefix `spctm`.)

## 3. Base Classes

Trigger: `h-10` → `h-9`; `bg-dft-background` dropped (transparent); ring-2/
offset-2 retained. Height/face UNVERIFIED (DIMENSION/COLOR); rest
TOKEN_DEPENDENCY, Corroborated.
Content: `border-spctm-input/70` (70% border opacity — sole instance;
UNVERIFIED, COLOR). Viewport: `p-1` → `py-1` (vertical-only; UNVERIFIED,
DIMENSION). Label: `py-1.5` → `py-2` (UNVERIFIED). Item: `py-1.5` → `py-2`,
radius prefix-kept (UNVERIFIED). Separator/Scroll: prefix swaps (Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/item/label padding changes in §3.

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

`spctm-*` namespace; Content border at 70% opacity.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact transparent trigger — UNVERIFIED; (2) 70% Content border
+ `py-1` viewport + roomy label/item — UNVERIFIED as a set. No divergences, no
exceptions. Keep the `spctm` prefix.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Confirm the spacing/border-opacity set as intended spectrum language.
