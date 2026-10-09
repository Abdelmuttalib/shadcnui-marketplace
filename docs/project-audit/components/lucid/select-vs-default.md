# Lucid Select vs Default

## 1. Audit Metadata

- Style: lucid
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/lucid/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes)

## 2. Executive Summary

Lucid shortens the trigger (`h-9`) with `border`-token edge and inheriting face;
content, label, item (including `py-1.5`), separator, and exports are prefix-only
swaps. Full focus stack retained.

## 3. Base Classes

Trigger: `h-10` → `h-9`; `border-*-input` → `border-*-border` (border-token edge,
consistent with lucid input/textarea/checkbox language — corroboration
candidate, still UNVERIFIED pending set-level ruling); `bg-*-background` →
`bg-inherit`. Height/face/edge UNVERIFIED (DIMENSION/COLOR); rest
TOKEN_DEPENDENCY, Corroborated.
Content/Label/Item/Separator/Scroll/Viewport(`p-1` kept): prefix swaps
(Corroborated).

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Trigger height change in §3.

## 6. Interaction States

Focus identical. Highlight/disabled/animations identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree and primitives. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`lucid-*`: trigger edge on the border token (not input).

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) compact trigger + border-token edge + inheriting face —
UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

1. Is the `border`-token trigger edge deliberate (now recurring across lucid
   input/textarea/checkbox/select)?
