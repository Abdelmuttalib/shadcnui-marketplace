# Carbon Textarea vs Default

## 1. Audit Metadata

- Style: carbon
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/carbon/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon mirrors its input treatment: underline field (transparent box, 40%
bottom border), tinted fill, `ring-1` focus with border recolor, no offset.
`min-h-[80px]`, padding, and exports unchanged.

## 3. Base Classes

Baseline vs carbon:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `border border-dft-input` | `border border-transparent border-b-cb-foreground/40` | Underline-only edge | Underline-field look | UNVERIFIED (concern BORDER) |
| `bg-dft-background` | `bg-cb-input/40` | 40% tint fill | Tinted face | UNVERIFIED (concern COLOR) |
| (none) | `focus-visible:border-cb-ring` | Added | Border resolves on focus | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-2` | `focus-visible:ring-1` | Thinner ring | Carbon-wide pattern | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-offset-2` | (absent) | Offset width dropped | — | UNVERIFIED (concern FOCUS) |
| `min-h-[80px]`, padding, radius, placeholder/disabled/md | retained | — | — | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` class in either file
(browser-default vertical resize both).

## 6. Interaction States

Focus per §3. Hover/disabled/md identical. No invalid-state handling.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; focus indicator present. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: input/foreground/muted/ring tokens; `--cb-radius: 0rem`.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) underline system + tint — UNVERIFIED; (2) ring-1 + border focus,
no offset — UNVERIFIED. Re-apply as a set with carbon input.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm textarea matches input language deliberately (it does — verify intent once covers both).
