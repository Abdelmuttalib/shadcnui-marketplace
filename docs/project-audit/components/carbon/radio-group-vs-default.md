# Carbon Radio-Group vs Default

## 1. Audit Metadata

- Style: carbon
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/carbon/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon enlarges items to 18px, recolors border/text around the `cb-ring` token,
narrows focus to 1px/offset-1, and fills checked items with `bg-cb-ring`.
Indicator and structure unchanged.

## 3. Base Classes

Root (`grid gap-2`) identical (`carbon:15` vs `default:15`). Item
(`carbon:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-[18px] w-[18px]` | 16px → 18px | Larger target | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-cb-ring` | Border follows ring token, not primary | Edge tied to focus color | UNVERIFIED (concern COLOR) |
| `text-dft-primary` | `text-cb-background` | Dot color → background token | Inferred: dot renders in background color (visible against checked `bg-cb-ring` fill) | UNVERIFIED (concern COLOR) |
| `focus-visible:ring-2` / `ring-offset-2` | `ring-1` / `ring-offset-1` + added `focus-visible:outline-none` | Thinner ring, tighter offset | Weaker focus marker; consistent with carbon button/checkbox | UNVERIFIED (concern FOCUS) |
| (none) | `data-[state=checked]:bg-cb-ring` | Added checked fill | Checked item fills ring color | UNVERIFIED (concern COLOR) |

`aspect-square`, `rounded-full`, `focus:outline-none`, disabled classes unchanged.

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none. Focus per §3. Checked: fill added (§3); dot inherits `text-current`
via `fill-current text-current` on the icon. Disabled identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical tree (`Root` / `Item` + `Indicator` + `Circle`), refs, merge order.
PARITY_EXPECTED.

## 8. Props, Exports, and API

`RadioGroup`, `RadioGroupItem` exports, prop types, `displayName`s identical.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Focus ring retained (thinner). PARITY_EXPECTED with
the §3 note; no failure claimed.

## 10. Imports and Dependencies

Identical set (radix radio-group, lucide `Circle`). PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: `--cb-ring: 55.65% 0.24 261.95` drives border, focus, and checked fill;
dot uses `--cb-background`.

## 12. Typography and Global Styling

Indicator `Circle h-2.5 w-2.5 fill-current text-current` unchanged (`carbon:37`).

## 13. Findings and Upgrade Preservation

Findings: (1) 18px items — UNVERIFIED; (2) ring-token border/text/fill set —
UNVERIFIED; (3) 1px/offset-1 focus — UNVERIFIED. Re-apply all; keep the
border→ring-token mapping (do not "correct" to `cb-primary`).

## 14. Verification

Both files read fully. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm ring-token color system + 18px as intended carbon language.
