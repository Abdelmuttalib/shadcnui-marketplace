# Moon Switch vs Default

## 1. Audit Metadata

- Style: moon
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/moon/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon is a compact near-swap (`h-5 w-9`, 16px thumb, `translate-x-4/0`,
offset-2 retained) with one extra: the checked thumb recolors to
`bg-moon-primary-foreground`. Travel exactly consistent (inferred).

## 3. Base Classes

Root (`moon:14` vs `default:14`): prefix swap + `h-6 w-11` → `h-5 w-9`.
Geometry UNVERIFIED (concern DIMENSION); rest TOKEN_DEPENDENCY, Corroborated
(ring-2/offset-2 fully retained).

Thumb (`moon:22` vs `default:22`): `h-5 w-5` → `h-4 w-4`; `bg-dft-background` →
`bg-white` + added `data-[state=checked]:bg-moon-primary-foreground`;
`translate-x-5` → `translate-x-4`. Recolor + geometry UNVERIFIED (concern
COLOR/DIMENSION).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference: inner 36 − 4 = 32px; thumb 16px → available
16px; delta 16. Exactly consistent.

## 6. Interaction States

Checked: primary track + primary-foreground thumb. Unchecked: input track +
white thumb. Focus retained. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace. Thumb white hardcoded at rest, namespace token when checked.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) compact geometry + endpoints — UNVERIFIED (keep paired);
(2) checked thumb recolor — UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully. Travel math inferred.

## 15. Unresolved Questions

None.
