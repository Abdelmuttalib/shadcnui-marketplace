# Libelle Input vs Default

## 1. Audit Metadata

- Style: libelle
- Component: input
- Baseline source: `registry/default/ui/input.tsx:1-22`
- Alternative source: `registry/libelle/ui/input.tsx:1-22`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files (line 11 verified by direct read)

## 2. Executive Summary

Libelle keeps `h-10` but restyles input as a bottom-bordered field: dual
`rounded-libelle-md` + `rounded-t-[4px]` radius, `border-b` with competing
`input`/`primary` border colors, 50% tinted fill, and — uniquely — desktop text
stays `text-base` (`md:text-base` instead of `md:text-sm`). Focus stack retained.

## 3. Base Classes

Baseline (`default:11`) vs libelle (`libelle:11`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `rounded-dft-md` | `rounded-libelle-md rounded-t-[4px]` | Base radius + arbitrary 4px top override (sole arbitrary radius among inputs) | Inferred: 4px top corners win over the radius token (later class, same property) | UNVERIFIED (concern SHAPE) — documented without defect verdict |
| `border border-dft-input` | `border-b border-libelle-input border-b-libelle-primary` | Full border → bottom-only with dual colors (`input` base + `primary` bottom override) | Underline-field edge in primary color | UNVERIFIED (concern BORDER/COLOR) |
| `bg-dft-background` | `bg-libelle-input/50` | Opaque → 50% tint | Tinted face | UNVERIFIED (concern COLOR) |
| `md:text-sm` | `md:text-base` | Desktop downscale removed (sole instance) | Larger text at `md+` | UNVERIFIED (concern TYPOGRAPHY) |
| Focus stack, `h-10`, file/placeholder/disabled | retained | — | Focus fully present | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale; height stays `h-10`.

## 6. Interaction States

Focus identical. Hover/disabled identical. No invalid-state handling in either file.

## 7. DOM and Component Structure

Identical. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Unchanged. PARITY_EXPECTED.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*`: input/primary/foreground/muted tokens; `--libelle-radius: 0rem`
(square system, but input renders token-md + 4px top via literal).

## 12. Typography and Global Styling

`md:text-base` is component-level (§3). Family Outfit via inherited `font-outfit`.

## 13. Findings and Upgrade Preservation

Findings: (1) underline border system + dual radius — UNVERIFIED (preserve
literally, including class order); (2) 50% fill — UNVERIFIED; (3) `md:text-base` —
UNVERIFIED. No divergences, no exceptions.

## 14. Verification

Both files read fully; line 11 verified by direct read. Radius-override
precedence inferred from class order (same-property conflict).

## 15. Unresolved Questions

1. Confirm underline-field language + desktop type scale as intended.
