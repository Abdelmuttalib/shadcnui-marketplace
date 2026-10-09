# Linear Radio-Group vs Default

## 1. Audit Metadata

- Style: linear
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/linear/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear rebuilds the checked look: 20px items with a hardcoded `border-gray-500`
resting edge, hover/focus border recoloring, and a full-bleed `bg-linear-primary`
indicator behind a hardcoded white dot. Ring keeps width-2 but at 60% opacity and
without offset width.

## 3. Base Classes

Root identical. Item (`linear:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-5 w-5` + `overflow-hidden` | 20px + clipping | Larger item; `overflow-hidden` clips the full-bleed indicator to the circle | UNVERIFIED (concern DIMENSION/STRUCTURE-adjacent) |
| `border-dft-primary` | `border-gray-500` | Namespaced token → hardcoded default-palette gray | Resting edge bypasses the linear token system entirely | PARITY_DIVERGENCE, Open (concern COLOR/TECHNICAL) — hardcoded palette reference; works only because Tailwind's default palette is present. Confirm intent or re-tokenize |
| (none) | `hover:border-linear-primary`, `focus-visible:border-linear-primary` | Added | Border resolves to primary on hover/focus | UNVERIFIED (concern INTERACTION/FOCUS) |
| `focus:outline-none` (kept) | + `focus:outline-0` | Added (redundant with `outline-none`) | No visual change; duplicate reset | PARITY_DIVERGENCE, Open (concern TECHNICAL) — harmless, drop on migration |
| `focus-visible:ring-dft-ring` | `focus-visible:ring-linear-ring/60` | 60% opacity ring | Softer focus ring | UNVERIFIED (concern FOCUS) |
| `ring-offset-…` + `ring-offset-2` | (absent — no offset classes at all) | Offset color and width dropped | Inferred: ring sits directly on the edge | PARITY_DIVERGENCE, Needs-designer (concern FOCUS) |
| (none) | `data-[state=checked]:border-linear-primary` | Added | Checked border matches | UNVERIFIED (concern COLOR) |

Disabled classes unchanged. Radius stays `rounded-full`.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Checked rendering is indicator-driven (§7): border recolor + filled indicator.
Hover/focus recolor borders. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

`Indicator className="flex size-full items-center justify-center bg-linear-primary"`
(`linear:36`) vs `flex items-center justify-center`: full-bleed primary fill behind
the dot — the structural core of linear's checked look. Dot `Circle h-2.5 w-2.5
fill-current text-white` (`linear:37`): hardcoded white, not `text-current`.
Inferred: checked item shows a white dot on a solid primary disc. Icon component
(lucide `Circle`) retained, so Radix indicator behavior is unchanged.

## 8. Props, Exports, and API

Identical exports, props, `displayName`s. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. White-dot-on-primary-fill contrast is not measured —
no claim. Hardcoded `gray-500`/`white` bypass theme tokens (dark-mode behavior
unverified — no dark classes present).

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*` for primary/ring/focus-border/indicator fill. Exceptions:
`border-gray-500` (Tailwind default palette) and `text-white` (hardcoded) —
flag for token hygiene review.

## 12. Typography and Global Styling

No text. Dot keeps `h-2.5 w-2.5` dimensions; color hardcoded white.

## 13. Findings and Upgrade Preservation

Findings: (1) filled-indicator checked design — UNVERIFIED (preserve exactly:
`size-full` + `bg-linear-primary` + white dot + `overflow-hidden` act as one
system); (2) hardcoded gray/white — PARITY_DIVERGENCE/Open; (3) redundant
`focus:outline-0` — PARITY_DIVERGENCE (drop); (4) missing offset —
PARITY_DIVERGENCE/Needs-designer; (5) 60% ring + border states — UNVERIFIED.

## 14. Verification

Both files read fully. Hardcoded values confirmed by direct read. Effects inferred.

## 15. Unresolved Questions

1. Are `gray-500`/`white` deliberate or token drift?
2. Offset removal: deliberate or slip?
3. Confirm filled-dot checked design as intended linear language.
