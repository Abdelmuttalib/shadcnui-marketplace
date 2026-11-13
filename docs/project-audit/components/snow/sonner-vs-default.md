# Snow Sonner vs Default

## 1. Audit Metadata

- Style: snow
- Component: sonner
- Baseline source: `registry/default/ui/sonner.tsx:1-32`
- Alternative source: `registry/snow/ui/sonner.tsx:1-32`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files; token lines verified by token grep per style

## 2. Executive Summary

Snow sonner is a pure token-namespace swap across all four `classNames` keys (toast/description/actionButton/cancelButton): identical theme handling, `toaster group` class, ts-expect-error, override order, and sole `Toaster` export.

## 3. Base Classes

Snow sonner is a pure token-namespace swap across all four `classNames` keys (toast/description/actionButton/cancelButton): identical theme handling, `toaster group` class, ts-expect-error, override order, and sole `Toaster` export.

## 4. Variants

Not applicable — no cva variants; toast kinds flow through sonner props.

## 5. Sizes

No size scale. `min-w-[8rem]`, `shadow-lg` unchanged.

## 6. Interaction States

No hover/focus/disabled/dark classes in either file's chrome; sonner runtime behavior (swipe/dismiss/duration defaults — none set in either file) identical.

## 7. DOM and Component Structure

Identical (`Sonner` passthrough with `toastOptions.classNames`). PARITY_EXPECTED.

## 8. Props, Exports, and API

`ToasterProps` type, sole `Toaster` export, `{...props}` override-last, `theme as` cast identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

`useTheme` system-default + theme passthrough identical. No position/richColors/closeButton/duration overrides in either file. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set (next-themes, sonner, react types). PARITY_EXPECTED.

## 11. Token Dependencies

`snow-*` namespace; `bg/shadow` chrome per §3.

## 12. Typography and Global Styling

No text-size classes in either file's chrome (sonner renders its own type).

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY. No divergences, no exceptions.

## 14. Verification

Both files read fully (delegated read with exact quotes). Effects inferred.

## 15. Unresolved Questions

None.
