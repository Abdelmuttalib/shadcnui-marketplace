# Carbon Input vs Default

## 1. Audit Metadata

- Style: carbon
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/carbon/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon restyles input as an underline field: transparent box with a 40%-opacity
bottom border only, tinted `bg-cb-input/40` fill, thinner `ring-1` focus with a
border-color change, and no ring offset. Structure, height, and exports unchanged.

## 3. Base Classes

Baseline (`default:11`) vs carbon (`carbon:11`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border border-dft-input` | `border border-transparent border-b-cb-foreground/40` | Transparent box + bottom-only 40% line | Underline-field resting look | UNVERIFIED (concern BORDER) |
| `bg-dft-background` | `bg-cb-input/40` | Opaque → 40% tint fill | Tinted face | UNVERIFIED (concern COLOR) |
| `ring-offset-dft-background` | (absent) | Offset color dropped | No offset layer | UNVERIFIED (concern FOCUS) |
| (none) | `focus-visible:border-cb-ring` | Added | Border resolves to ring color on focus | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-2` | `focus-visible:ring-1` | 2px → 1px | Thinner focus ring (carbon-wide pattern) | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-offset-2` | (absent) | Offset width dropped | Ring sits directly on edge | UNVERIFIED (concern FOCUS) |
| `h-10`, `px-3 py-2`, `rounded-cb-md`, file/placeholder/disabled/md | prefix swap / retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale; height stays `h-10`.

## 6. Interaction States

Focus: border recolor + 1px ring, no offset. Hover: none in either file. Disabled
identical (`cursor-not-allowed`, `opacity-50`). No dark-mode classes. No
`invalid:`/`aria-invalid` handling in either file (unstyled everywhere — noted,
not flagged as divergence).

## 7. DOM and Component Structure

Identical (`input` with `type` passthrough, ref spread). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Input` export, `ComponentProps<"input">` props, `displayName` identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; focus indicator present (ring + border). PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: input/foreground/muted/ring tokens; `--cb-radius: 0rem` (square).
`border-b-cb-foreground/40` uses foreground at 40%.

## 12. Typography and Global Styling

`text-base` + `md:text-sm`, file/placeholder treatment retained. No
component-level type change.

## 13. Findings and Upgrade Preservation

Findings: (1) underline border system — UNVERIFIED; (2) tinted fill —
UNVERIFIED; (3) ring-1 + border focus, no offset — UNVERIFIED. Re-apply as a set;
do not restore a boxed border or offset without designer sign-off.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm underline-field language + focus treatment as intended.
