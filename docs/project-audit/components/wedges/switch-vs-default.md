# Wedges Switch vs Default

## 1. Audit Metadata

- Style: wedges
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/wedges/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Wedges is a compact near-swap: `h-5 w-9` track, 16px fixed-white thumb,
`translate-x-4/0` endpoints, and offset-1 focus. Travel math is exactly
consistent (inferred). No structural additions.

## 3. Base Classes

Root (`wedges:14` vs `default:14`): prefix swap + `h-6 w-11` → `h-5 w-9` +
`focus-visible:ring-offset-2` → `focus-visible:ring-offset-1`. Geometry/focus:
UNVERIFIED (concern DIMENSION/FOCUS); rest TOKEN_DEPENDENCY, Corroborated.

Thumb (`wedges:22` vs `default:22`): `h-5 w-5` → `h-4 w-4`; `bg-dft-background`
→ hardcoded `bg-white`; `translate-x-5` → `translate-x-4` (unchecked `0` kept).
UNVERIFIED (concern DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference: inner 36 − 4 = 32px; thumb 16px → available
16px; delta 16 − 0 = 16px. Exactly consistent — no issue inferred.

## 6. Interaction States

Checked/unchecked fills per namespace tokens; focus ring-2 retained at offset-1;
disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace. Thumb white hardcoded.

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) compact geometry + endpoints — UNVERIFIED (keep paired);
(2) white thumb + offset-1 — UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully. Travel math inferred.

## 15. Unresolved Questions

None.
