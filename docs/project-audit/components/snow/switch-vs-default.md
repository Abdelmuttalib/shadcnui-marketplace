# Snow Switch vs Default

## 1. Audit Metadata

- Style: snow
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/snow/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Needs verification
- Method: full source read of both files

## 2. Executive Summary

Snow matches lucid's geometry exactly (`h-5 w-8`, 16px thumb, `translate-x-3/0`,
consistent travel) with namespace tokens — except the focus-offset width is
dropped (color kept, double space left behind), the fifth snow instance of the
offset pattern.

## 3. Base Classes

Root (`snow:14` vs `default:14`): prefix swap + `h-6 w-11` → `h-5 w-8` +
`focus-visible:ring-offset-2` dropped (`focus-visible:ring-offset-snow-background`
color kept; double space before it is a no-op). Geometry UNVERIFIED (concern
DIMENSION); offset removal PARITY_DIVERGENCE, Needs-designer (concern
FOCUS/ACCESSIBILITY).

Thumb (`snow:22` vs `default:22`): `h-5 w-5` → `h-4 w-4`; `bg-dft-background` →
`bg-snow-background` (namespace-kept); `translate-x-5` → `translate-x-3`.
UNVERIFIED (concern DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference: inner 32 − 4 = 28px; thumb 16px → available
12px; delta 12. Exactly consistent.

## 6. Interaction States

Checked/unchecked fills per namespace tokens; ring-2 present, offset absent;
disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the §3 offset question — accessibility-relevant, pending ruling.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace throughout (thumb included).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) lucid-identical geometry — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer (restore or record as intended; do not carry
silently).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip (fifth snow instance)?
