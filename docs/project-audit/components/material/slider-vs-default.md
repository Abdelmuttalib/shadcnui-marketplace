# Material Slider vs Default

## 1. Audit Metadata

- Style: material
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/material/ui/slider.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material is the only slider with a structural addition: a `group`-gated halo
`span` nested inside the Thumb (30 vs 28 lines), echoing the checkbox/switch
ripple language. Track thins to 1px on `muted`; thumb becomes a 16px solid
primary dot (no border, no ring). No other style nests content in Thumb.

## 3. Base Classes

Root identical. Track: `h-2` → `h-1`; `bg-dft-secondary` → `bg-material-muted`
(UNVERIFIED, DIMENSION/COLOR). Range: prefix swap to `bg-material-primary`
(TOKEN_DEPENDENCY, Corroborated). Thumb: `h-5 w-5` → `size-4` (16px);
`border-2` dropped (no border classes); `bg-dft-background` → `bg-material-primary`
(solid dot); `group relative` added (gates the halo); full ring/offset stack
dropped leaving `focus-visible:outline-none`. Ring removal: consistent with
material's cross-component ring-less language — UNVERIFIED (concern FOCUS), not
swept into owner decision A (checkbox/radio/switch only); halo is the focus
signal. Disabled pair retained.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus: halo reveal via `group-focus-visible:block`, no ring. Hover: halo via
`group-hover:block`. Halo span: `absolute -inset-2.5 -z-10 hidden rounded-full
bg-material-primary/15 group-hover:block group-focus-visible:block` — inferred:
15% wash behind the thumb (`-z-10`) on hover/focus. Disabled identical. No
dark-mode classes.

## 7. DOM and Component Structure

Thumb contains a child `span` (nested element — sole instance among sliders);
`group relative` on Thumb. Indicator-free otherwise; refs/merge order unchanged.
Candidate DESIGN_EXCEPTION feature (see §13).

## 8. Props, Exports, and API

`Slider` export, props, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Accessibility note: no focus ring (halo instead);
hover/focus share the halo signal. Recorded UNVERIFIED with accessibility
relevance — not a failure claim, not owner-decided.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED. Halo is pure Tailwind.

## 11. Token Dependencies

`material-*`: muted rail, primary range/thumb/halo (15%).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) halo span + group gating — UNVERIFIED (recommend DESIGN_EXCEPTION
review; preserve exactly pending ruling); (2) hairline rail + solid-dot thumb —
UNVERIFIED; (3) ring-less thumb — UNVERIFIED (preserve; needs designer ruling on
visibility). Migration: keep nested span, group classes, and thumb classes
verbatim until verified.

## 14. Verification

Both files read fully; nested span confirmed by direct read (30 vs 28 lines).
Effects inferred.

## 15. Unresolved Questions

1. Register halo thumb as DESIGN_EXCEPTION?
2. Is ring-less focus intended for slider?
