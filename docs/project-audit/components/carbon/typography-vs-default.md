# Carbon Typography vs Default

## 1. Audit Metadata

- Style: carbon
- Component: typography
- Baseline source: `registry/default/ui/typography.tsx:1-138`
- Alternative source: `registry/carbon/ui/typography.tsx:1-138`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; base line + 60-key parity verified (delegated verbatim read + direct grep of line 29)

## 2. Executive Summary

Carbon typography base uses the **unprefixed** `text-foreground` (verified line 29) with all 60 size/weight keys verbatim. Imports, wrapper, defaults, and exports unchanged.

## 3. Base Classes

Base (`carbon:29`, verified): `font-normal  text-dft-foreground` → `font-normal  text-foreground` (double space retained) — PARITY_DIVERGENCE, Needs-designer (joint ruling). All 60 `size/weight` keys verbatim (verified — no size/weight/tracking/leading/color/border/code/link diffs; none exist as features).

## 4. Variants

All 60 `size/weight` keys (`xs–7xl` × `normal–extrabold`) verbatim in both files — verified, not sampled. No semantic keys (h1/p/blockquote/code/link) exist in either file.

## 5. Sizes

Size scale is the variant matrix itself (§4); identical.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file.

## 7. DOM and Component Structure

Identical wrapper (`text-balance` + variants + className, `as="p"`, `as` passthrough). PARITY_EXPECTED.

## 8. Props, Exports, and API

`Typography`, `TypographyProps`, `typographyVariants` identical; `defaultVariants "md/normal"` vs component default `"base/normal"` mismatch present in both files (shared-baseline quirk, not a divergence). PARITY_EXPECTED with note.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (cva, utils). PARITY_EXPECTED.

## 11. Token Dependencies

Base ink token per §3; variant keys carry no color tokens.

## 12. Typography and Global Styling

The file IS the type scale (§4 identical); family/weight/size/leading/tracking all verified identical. Rendered family follows the page font class.

## 13. Findings and Upgrade Preservation

Findings: (1) unprefixed base ink — PARITY_DIVERGENCE/Needs-designer (joint ruling).

## 14. Verification

Both files read fully; base line verified by direct grep; 60-key parity verified verbatim. Effects inferred (none — no visual delta beyond base ink).

## 15. Unresolved Questions

1. `text-foreground` base: convention or slip (rule jointly)?
