# Linear Checkbox vs Default

## 1. Audit Metadata

- Style: linear
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/linear/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Linear enlarges the box to 20px, gives the resting border a translucent
`foreground/40` treatment, and adds hover/focus-visible/checked border states
absent in Default. It drops the focus-offset width (offset color kept).
Icon and structure unchanged.

## 3. Base Classes

Baseline Root (`default:16`) vs linear Root (`linear:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-5 w-5` | 16px → 20px | Larger box | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-linear-foreground/40` | Solid primary → translucent foreground border | Muted resting edge | UNVERIFIED (concern COLOR/BORDER) |
| (none) | `hover:border-linear-primary` | Added | Border resolves to primary on hover | UNVERIFIED (concern INTERACTION) |
| (none) | `focus-visible:border-linear-primary` | Added | Border resolves to primary on keyboard focus | UNVERIFIED (concern FOCUS) |
| `focus-visible:ring-offset-2` | (absent; `ring-offset-linear-background` color kept) | Offset width dropped | Inferred: focus ring without offset gap — same pattern as linear button/toggle; weaker focus distinction | PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY) |
| (none) | `data-[state=checked]:border-linear-primary` | Added (baseline sets checked bg+text only) | Checked border matches fill | UNVERIFIED (concern COLOR) |
| checked bg/text | `linear` equivalents | Prefix swap | — | TOKEN_DEPENDENCY, Corroborated |

`peer`, `rounded-linear-sm`, `ring-2`/`ring-linear-ring`, disabled classes unchanged.

## 4. Variants

Not applicable — no cva variants in either file.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

New border-driven hover/focus/checked states (§3) are linear's main interactive
identity; Default has none on checkbox. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree, refs, merge order. PARITY_EXPECTED.

## 8. Props, Exports, and API

Identical export, props, `displayName`. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. The dropped offset width is accessibility-relevant
(focus distinction); recorded as divergence pending designer ruling, not a
failure claim. The added `focus-visible:border-*` partially compensates by
recoloring the border on focus — noted as mitigation, inferred.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`linear-*`: `--linear-primary`/`ring: 55.93% 0.158 274.41`. Resting border uses
`--linear-foreground` at 40% opacity.

## 12. Typography and Global Styling

Icon `Check h-4 w-4` unchanged (`linear:24`). No text.

## 13. Findings and Upgrade Preservation

Findings: (1) 20px box — UNVERIFIED; (2) translucent resting border + added
border states — UNVERIFIED; (3) missing offset width — PARITY_DIVERGENCE/
Needs-designer (restore offset or record offset-less focus as intended);
(4) checked border — UNVERIFIED. Re-apply 1, 2, 4 deliberately.

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate minimalism or slip (recurs in linear toggle — see
   `toggle-vs-default.md` — but generality still unconfirmed)?
