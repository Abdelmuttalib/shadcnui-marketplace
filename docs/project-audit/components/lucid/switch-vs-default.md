# Lucid Switch vs Default

## 1. Audit Metadata

- Style: lucid
- Component: switch
- Baseline source: `registry/default/ui/switch.tsx:1-29`
- Alternative source: `registry/lucid/ui/switch.tsx:1-29`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Lucid is a compact near-swap: `h-5 w-8` track, 16px thumb in `bg-lucid-background`,
`translate-x-3/0` endpoints, full ring-2/offset-2 focus. Travel exactly consistent
(inferred). No structural additions.

## 3. Base Classes

Root (`lucid:14` vs `default:14`): prefix swap + `h-6 w-11` → `h-5 w-8`.
Geometry UNVERIFIED (concern DIMENSION); rest TOKEN_DEPENDENCY, Corroborated.

Thumb (`lucid:22` vs `default:22`): `h-5 w-5` → `h-4 w-4`; `bg-dft-background` →
`bg-lucid-background` (namespace-kept, unlike the hardcoded whites elsewhere);
`translate-x-5` → `translate-x-3`. UNVERIFIED (concern DIMENSION/COLOR).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Travel inference: inner 32 − 4 = 28px; thumb 16px → available
12px; delta 12 − 0 = 12px. Exactly consistent.

## 6. Interaction States

Checked/unchecked fills per namespace tokens; focus retained; disabled identical.
No dark-mode classes.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*` throughout (thumb included — no hardcoded white).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) compact geometry + endpoints — UNVERIFIED (keep paired).
No divergences, no exceptions.

## 14. Verification

Both files read fully. Travel math inferred.

## 15. Unresolved Questions

None.
