# Carbon Slider vs Default

## 1. Audit Metadata

- Style: carbon
- Component: slider
- Baseline source: `registry/default/ui/slider.tsx:1-28`
- Alternative source: `registry/carbon/ui/slider.tsx:1-28`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon thins the track to 1px with square (unrounded) ends, recolors range and
thumb around the legacy `foreground` token, shrinks the thumb to 16px solid
(no border), and removes the thumb's focus ring/offset (only `outline-none`
remains). No structural divergence (28 lines, same tree).

## 3. Base Classes

Root identical (`relative flex w-full touch-none select-none items-center`).
Track (`carbon` vs `default`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-2` | `h-1` | 8px → 4px track | Hairline track | UNVERIFIED (concern DIMENSION) |
| `rounded-full` | (absent) | Rounding dropped (only style without it) | Square track ends | UNVERIFIED (concern SHAPE) |
| `bg-dft-secondary` | `bg-cb-muted` | Secondary → muted track | Muted rail | UNVERIFIED (concern COLOR) |

Range: `bg-dft-primary` → `bg-foreground` (legacy unprefixed — UNVERIFIED, COLOR;
same unprefixed pattern as carbon checkbox, still unconfirmed as convention).
Thumb:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-5 w-5` | `h-4 w-4` | 20px → 16px | Smaller grip | UNVERIFIED (concern DIMENSION) |
| `border-2 border-dft-primary` | (absent — no border classes) | Border dropped | Solid dot thumb | UNVERIFIED (concern BORDER) |
| `bg-dft-background` | `bg-foreground` | Solid foreground dot | High-contrast grip on muted rail | UNVERIFIED (concern COLOR) |
| `ring-offset-dft-background focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` | `focus-visible:outline-none` only | Full ring/offset stack removed | Inferred: no visible focus ring on the thumb | PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY) |
| `disabled:` pair | retained | — | — | PARITY_EXPECTED |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Track/thumb dimensions in §3.

## 6. Interaction States

Focus: thumb ring removed (§3); track/range carry no focus classes in either
file. Disabled identical. No dark-mode classes. No invalid-state handling.

## 7. DOM and Component Structure

Identical tree (Root/Track/Range/Thumb), refs, merge order. No nested elements.
PARITY_EXPECTED — class-only restyle, not a structural exception.

## 8. Props, Exports, and API

`Slider` export, Root prop types, `displayName` identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. The removed thumb ring is accessibility-relevant:
divergence pending designer ruling, not a failure claim and not covered by any
owner decision (decision A covers checkbox/radio/switch only).

## 10. Imports and Dependencies

Identical set (radix slider, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: muted token for the rail. `foreground` (legacy unprefixed) drives range
+ thumb — confirm token choice with designer (recurs in carbon checkbox, still
UNVERIFIED as convention).

## 12. Typography and Global Styling

No text or icons.

## 13. Findings and Upgrade Preservation

Findings: (1) hairline square rail + solid-dot thumb — UNVERIFIED as a set;
(2) unprefixed range/thumb tokens — UNVERIFIED; (3) removed thumb ring —
PARITY_DIVERGENCE/Needs-designer (restore a ring or record ring-less as intended).

## 14. Verification

Both files read fully. Deletion confirmed by direct read. Effects inferred.

## 15. Unresolved Questions

1. Is the ring-less thumb deliberate or a slip?
2. Confirm `foreground`-token color system as intended.
