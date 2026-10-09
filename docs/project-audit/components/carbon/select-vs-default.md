# Carbon Select vs Default

## 1. Audit Metadata

- Style: carbon
- Component: select
- Baseline source: `registry/default/ui/select.tsx:1-160`
- Alternative source: `registry/carbon/ui/select.tsx:1-160`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (via delegated read + spot verification)

## 2. Executive Summary

Carbon restyles the trigger as an underline field (transparent borders +
bottom-only line, tinted fill, `ring-1`/border focus), squares the content (radius
dropped, viewport padding dropped), enlarges item padding (`py-2`), and mutes the
chevron and check-indicator colors. Open/close animations, positioning, disabled
handling, and all 10 exports unchanged.

## 3. Base Classes

Trigger (baseline vs carbon): `border-dft-input` → `border-transparent` +
`border-b-cb-foreground/40`; `bg-dft-background` → `bg-cb-input/40`;
`focus:ring-2/ring/offset-2` → `focus-visible:border-cb-primary` +
`focus-visible:ring-1/ring`; height stays `h-10`. Chevron `opacity-50` → `opacity-70`.
UNVERIFIED as a set (concern BORDER/COLOR/FOCUS).
ScrollUp/Down: added `text-cb-foreground/70` (UNVERIFIED, COLOR).
Content: radius class dropped entirely (square popover); `Viewport p-1` dropped
to no padding (UNVERIFIED, SHAPE/DIMENSION).
Item: `py-1.5` → `py-2`; `rounded-dft-sm` → `rounded-cb-md`; indicator span adds
`text-cb-foreground/70` (UNVERIFIED, DIMENSION/SHAPE/COLOR).
Label/Separator: prefix swaps (TOKEN_DEPENDENCY, Corroborated).

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Trigger stays `h-10`; item padding change in §3.

## 6. Interaction States

Focus: trigger ring-1 + border recolor; item highlight `focus:bg/accent`
namespace-swapped. Open/closed animations + `data-[side]` positioning identical.
Disabled (`cursor-not-allowed`/`opacity-50` trigger, `data-[disabled]` item)
identical. Chevron/check opacities recolored (§3). No dark-mode classes.

## 7. DOM and Component Structure

Identical tree (Root/Group/Value/Trigger/Scroll/Content/Viewport/Label/Item/
Separator), same Radix primitives, same `position="popper"` default.
PARITY_EXPECTED.

## 8. Props, Exports, and API

All 10 exports (`Select, SelectGroup, SelectValue, SelectTrigger,
SelectScrollUpButton, SelectScrollDownButton, SelectContent, SelectLabel,
SelectItem, SelectSeparator`) identical; no prop changes. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged; animations, positioning, disabled semantics retained.
PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set (radix select, lucide Check/Chevrons, react, utils).
PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*` namespace; `--cb-radius: 0rem` (square content); muted-foreground 70%
icon treatments.

## 12. Typography and Global Styling

`text-sm` trigger/item/label retained; `font-semibold` group label retained.

## 13. Findings and Upgrade Preservation

Findings: (1) underline trigger + ring-1/border focus — UNVERIFIED; (2) square
unpadded content — UNVERIFIED; (3) roomier items + muted icons — UNVERIFIED.
Re-apply as a set; do not restore boxed trigger or padding without designer
sign-off.

## 14. Verification

Both files read fully (delegated read with exact quotes; trigger/content/item
strings spot-verified). Effects inferred from source.

## 15. Unresolved Questions

1. Confirm underline trigger + square content + muted icons as intended.
