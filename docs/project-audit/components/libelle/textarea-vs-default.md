# Libelle Textarea vs Default

## 1. Audit Metadata

- Style: libelle
- Component: textarea
- Baseline source: `registry/default/ui/textarea.tsx:1-22`
- Alternative source: `registry/libelle/ui/textarea.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (line 12 verified by direct read)

## 2. Executive Summary

Libelle is the most divergent textarea: top-only `rounded-t-[4px]` radius
(square bottom), bottom-only `primary` border, 50% tinted fill, and desktop text
stays `text-base`. Focus stack retained.

## 3. Base Classes

Baseline (`default:12`) vs libelle (`libelle:12`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `rounded-dft-md` | `rounded-t-[4px]` | Full radius → top-only 4px literal | Square bottom corners, 4px top (sole top-only radius in the set) | UNVERIFIED (concern SHAPE) — no defect verdict |
| `border border-dft-input` | `border-b border-b-libelle-primary` | Full neutral border → bottom-only primary line | Underline-field edge | UNVERIFIED (concern BORDER/COLOR) |
| `bg-dft-background` | `bg-libelle-input/50` | 50% tint | Tinted face | UNVERIFIED (concern COLOR) |
| `md:text-sm` | `md:text-base` | Desktop downscale removed (sole instance) | Larger text at `md+` | UNVERIFIED (concern TYPOGRAPHY) |
| Focus stack, `min-h-[80px]`, placeholder/disabled | retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. `min-h-[80px]` unchanged. No `resize-*` in either file.

## 6. Interaction States

Focus identical. Hover/disabled identical.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*`: input/primary/foreground/muted tokens.

## 12. Typography and Global Styling

`md:text-base` is component-level (§3). Family Outfit via inherited `font-outfit`.

## 13. Findings and Upgrade Preservation

Findings: (1) underline system + top-only radius — UNVERIFIED (preserve
literally); (2) 50% fill — UNVERIFIED; (3) `md:text-base` — UNVERIFIED. No
divergences, no exceptions. Consistent with libelle input language.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm underline-field language + desktop type scale as intended.
