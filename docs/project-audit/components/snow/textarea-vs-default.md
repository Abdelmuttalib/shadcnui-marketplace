# Snow Textarea vs Default

## 1. Audit Metadata

- Style: snow
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/snow/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Snow widens padding on both axes (`px-3.5 py-3` — largest textarea box) and
drops the focus-offset width (double space left behind). Otherwise a prefix swap.

## 3. Base Classes

Baseline vs snow: `px-3 py-2` → `px-3.5 py-3` (UNVERIFIED, DIMENSION — roomiest
box in the set); `focus-visible:ring-offset-2` absent with offset color kept
(offset removal PARITY_DIVERGENCE, Needs-designer, FOCUS); everything else prefix
swap / retained with ring-2 present (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Padding change in §3. `min-h-[80px]` unchanged. No `resize-*` in
either file.

## 6. Interaction States

Focus ring-2 present, offset absent. Hover/disabled/md identical.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED. (Double space before `disabled:`: cosmetic no-op.)

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged except the offset question. PARITY_EXPECTED with that note.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace throughout.

## 12. Typography and Global Styling

`text-base` + `md:text-sm` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) roomy padding — UNVERIFIED; (2) missing offset width —
PARITY_DIVERGENCE/Needs-designer.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate or slip?
