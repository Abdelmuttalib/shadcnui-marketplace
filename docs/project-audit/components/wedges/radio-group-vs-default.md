# Wedges Radio-Group vs Default

## 1. Audit Metadata

- Style: wedges
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/wedges/ui/radio-group.tsx:1-46`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Wedges uses 18px items with a 2px `input` border, reserves focus-ring space with a
persistent transparent `ring-2`, adds hover/focus border recoloring and a checked
border, and shrinks the dot to `h-2`. A commented-out baseline class string and a
stray `// </div>` are dead code. Focus ring retained.

## 3. Base Classes

Root identical. Item (`wedges:32` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-[18px] w-[18px]` + `overflow-hidden` | 18px + clipping | Larger item; overflow clips indicator to the circle | UNVERIFIED (concern DIMENSION) |
| `border` | `border-2` | 1px → 2px | Heavier edge | UNVERIFIED (concern BORDER) |
| `border-dft-primary` | `border-wedges-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| `ring-offset-…` (on focus) | `ring-2 ring-transparent ring-offset-2 ring-offset-wedges-background` (persistent, non-conditional) | Ring width + offset always present but transparent | Inferred: reserves focus-ring geometry so focus adds color only (`focus-visible:ring-wedges-ring`), no layout shift | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-2` | `focus-visible:ring-wedges-ring` (width from the persistent base) | Ring color on focus-visible | Same visible outcome, different mechanism | UNVERIFIED (concern FOCUS) |
| (none) | `focus:outline-0`, `focus-visible:outline-0`, `focus-visible:border-wedges-primary` | Added resets + border recolor | Border resolves on focus | Resets PARITY_DIVERGENCE/Open (redundant with `outline-none`, drop); border recolor UNVERIFIED |
| (none) | `data-[state=checked]:border-wedges-primary` | Added | Checked border matches | UNVERIFIED (concern COLOR) |

Disabled classes unchanged. Radius stays `rounded-full`.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: border recolor is focus-only here (no plain `hover:` — unlike linear);
checked per §3. Disabled identical. No live dark-mode classes.

## 7. DOM and Component Structure

Tree identical except two dead-code items: a commented-out baseline class string
above the live one (`wedges:31`) and a stray `// </div>` after the Item close
(`wedges:44`). Both no-ops. PARITY_DIVERGENCE, Open (concern TECHNICAL) — remove
on migration. Dot `Circle h-2 w-2 fill-current text-current` (`wedges:38`):
downsized, current-color kept. UNVERIFIED (concern DIMENSION).

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged; focus ring present (reserved-geometry mechanism).
PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`wedges-*` namespace throughout. No hardcoded colors.

## 12. Typography and Global Styling

No text. Dot downsized per §7.

## 13. Findings and Upgrade Preservation

Findings: (1) 18px/`border-2`/input edge/checked border — UNVERIFIED;
(2) transparent-ring reservation mechanism — UNVERIFIED (preserve exactly if
intended — focus behavior depends on the base/focus-visible split);
(3) dead comment + `// </div>` + redundant resets — PARITY_DIVERGENCE (remove);
(4) smaller dot — UNVERIFIED.

## 14. Verification

Both files read fully; dead code confirmed by direct read. Effects inferred.

## 15. Unresolved Questions

1. Confirm the ring-reservation mechanism and dimension set as intended.
