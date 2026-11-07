# Wedges Label vs Default

## 1. Audit Metadata

- Style: wedges
- Component: label
- Baseline source: `registry/default/ui/label.tsx:1-26`
- Alternative source: `registry/wedges/ui/label.tsx:1-26`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; byte-identity confirmed by diff (no output)

## 2. Executive Summary

Wedges label is byte-identical to Default. No visual, structural, or API
difference of any kind — the only one of the 48 components (with separator
near-identical) showing zero per-style customization.

## 3. Base Classes

Base `cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed
peer-disabled:opacity-70")` identical — no variants or sizes exist in either file.
NO_DIFFERENCE (verified, not assumed).

## 4. Variants

Not applicable — `labelVariants` defines no variant keys in either file.

## 5. Sizes

Not applicable — no size scale in either file.

## 6. Interaction States

`peer-disabled:cursor-not-allowed peer-disabled:opacity-70` identical. No hover,
focus, or dark-mode classes in either file.

## 7. DOM and Component Structure

Identical (`LabelPrimitive.Root`, `cn(labelVariants(), className)`, ref spread).
PARITY_EXPECTED.

## 8. Props, Exports, and API

`labelVariants` non-exported const and sole `Label` export identical, including
`VariantProps<typeof labelVariants>` in props and `displayName`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (radix label, cva, react, utils). PARITY_EXPECTED.

## 11. Token Dependencies

None — the file references no color/spacing tokens, so there is nothing to resolve.

## 12. Typography and Global Styling

`text-sm font-medium leading-none` is identical at component level; rendered
family follows whatever page-level font class applies (no component-level
deviation to report).

## 13. Findings and Upgrade Preservation

Findings: none — NO_DIFFERENCE across all categories. Migration: replace freely
with any upstream label; no style-specific content to preserve. Note for future
work: if a style ever needs label customization, this file is the place it would
appear — its current identity is itself a finding.

## 14. Verification

Both files read fully; `diff -q` confirms byte-identity. No inferences required.

## 15. Unresolved Questions

None.
