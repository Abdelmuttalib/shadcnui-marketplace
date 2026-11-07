# Catalyst Select vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/catalyst/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files (via delegated read + direct source
  verification of the line below)

## 2. Executive Summary

Catalyst shortens the trigger (`h-9`) with a 50% tinted fill, tightens viewport
padding (`p-0.5`), enlarges label/item padding, and — like material — carries an
**unprefixed `text-popover-foreground`** on Content, verified by direct read
(`catalyst:78`). Trigger ring-2 kept; offset width dropped.

## 3. Base Classes

Trigger: `h-10` → `h-9`; `bg-dft-background` → `bg-catalyst-input/50`;
`focus:ring-offset-2` dropped (ring-2 kept). Height/fill UNVERIFIED
(DIMENSION/COLOR); offset removal PARITY_DIVERGENCE, Needs-designer (FOCUS).
Content (`catalyst:78`, verified): `border-catalyst-input` (input, not border
token — UNVERIFIED, COLOR) + `bg-catalyst-popover` + **`text-popover-foreground`
(unprefixed)**. PARITY_DIVERGENCE, Needs-designer — same ruling needed as
material's identical instance; recurrence across two styles is noted but the
pair still awaits designer confirmation (strict bar).
Viewport: `p-1` → `p-0.5` (tighter; UNVERIFIED, DIMENSION).
Label: `py-1.5 pl-8 pr-2` → `py-2 pl-8 pr-2.5` (roomier; UNVERIFIED).
Item: `py-1.5` → `py-2`, `pr-2` → `pr-2.5`, radius prefix-kept (UNVERIFIED).
Separator/Scroll: prefix swaps (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger/item/label padding changes in §3.

## 6. Interaction States

Focus ring-2 present, offset absent. Highlight/disabled/animations identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except §3 items; unprefixed-text fallback concern as in material
(pending ruling, not a failure claim).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` throughout except unprefixed Content text (§3).

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact tinted trigger + roomy label/item + tight viewport —
UNVERIFIED as a set; (2) unprefixed Content text — PARITY_DIVERGENCE/
Needs-designer (rule jointly with material's instance); (3) missing offset —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Delegated full read with exact quotes; `catalyst:78` verified by direct grep.
Effects inferred.

## 15. Unresolved Questions

1. `text-popover-foreground`: shared typo or shared convention? (Rule together
   with material.)
2. Offset width: deliberate or slip?
