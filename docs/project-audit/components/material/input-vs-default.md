# Material Input vs Default

## 1. Audit Metadata

- Style: material
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/material/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Material uses a 2px transparent border with a 60% tinted fill, drops the entire
ring/offset stack in favor of border-color focus (`focus:border-material-ring`),
and softens disabled opacity to 60%. Focus is border-only — weak but
namespace-consistent with material's other form treatments.

## 3. Base Classes

Baseline vs material (`material:11`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border` | `border-2` | 1px → 2px | Heavier edge box | UNVERIFIED (concern BORDER) |
| `border-dft-input` | `border-transparent` | Visible color → transparent | Edge invisible until focus | UNVERIFIED (concern BORDER) |
| `bg-dft-background` | `bg-material-input/60` | Opaque → 60% tint | Tinted face | UNVERIFIED (concern COLOR) |
| `ring-offset-dft-background` | (absent) | Offset layer dropped | — | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-2 focus-visible:ring-dft-ring focus-visible:ring-offset-2` | `focus-visible:border-material-ring` (with `focus-visible:outline-none` kept) | Full ring stack → border-color change only | Inferred: focus signaled by border recolor alone, no halo | UNVERIFIED (concern FOCUS) — not swept into owner decision A (which covers checkbox/radio/switch only) |
| `disabled:opacity-50` | `disabled:opacity-60` | 50% → 60% | Slightly stronger disabled presence | UNVERIFIED (concern INTERACTION) |
| Height/padding/file/placeholder/md | retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; height stays `h-10`.

## 6. Interaction States

Focus per §3 (border-only). Hover: none. Disabled opacity differs (§3). No
invalid-state handling in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged structurally; focus visibility rests on a 2px border recolor —
recorded as UNVERIFIED with accessibility relevance, not a failure claim and not
covered by any owner decision.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`material-*`: input/ring/muted tokens; `--material-radius: 0.75rem`.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) 2px transparent border + 60% fill — UNVERIFIED; (2) border-only
focus — UNVERIFIED (preserve exactly; needs designer ruling on visibility);
(3) disabled 60% — UNVERIFIED.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Is border-only focus intended for inputs, or should a ring be restored?
2. Confirm 60% disabled opacity as deliberate.
