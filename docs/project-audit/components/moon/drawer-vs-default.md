# Moon Drawer vs Default

## 1. Audit Metadata

- Style: moon
- Component: drawer
- Baseline source: `registry/default/ui/drawer.tsx:1-118`
- Alternative source: `registry/moon/ui/drawer.tsx:1-118`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read with exact quotes; overlay/content/handle lines verified by direct grep)

## 2. Executive Summary

Moon drawer is a pure token-namespace swap: identical overlay, Content geometry/border/radius, handle, Header/Footer/Title, scaling, direction, and exports.

## 3. Base Classes

Overlay `bg-black/80`, Content (`rounded-t-[10px]`, `border-moon-border`, `bg-moon-background`), handle `bg-moon-muted`, Description `text-moon-muted-foreground`: prefix swaps only. TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

Not applicable — bottom-only sheet in both files.

## 5. Sizes

No size scale. `mt-24`, handle metrics unchanged.

## 6. Interaction States

Vaul behavior identical (`shouldScaleBackground=true` retained). No dark-mode classes.

## 7. DOM and Component Structure

Identical tree. PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports, Root props, refs, displayNames identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`moon-*` namespace only.

## 12. Typography and Global Styling

Title `text-lg font-semibold` retained.

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully; key lines verified by direct grep. Effects inferred.

## 15. Unresolved Questions

None.
