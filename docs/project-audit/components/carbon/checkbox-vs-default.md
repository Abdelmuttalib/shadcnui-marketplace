# Carbon Checkbox vs Default

## 1. Audit Metadata

- Style: carbon
- Component: checkbox
- Baseline source: `registry/default/ui/checkbox.tsx:1-30`
- Alternative source: `registry/carbon/ui/checkbox.tsx:1-30`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Carbon enlarges the box (`h-4 w-4` → `h-5 w-5`), narrows the focus offset (2 → 1),
and restyles border/checked states around the **unprefixed legacy** `foreground` /
`background` tokens instead of the namespaced primary. Icon and structure unchanged.

## 3. Base Classes

Baseline Root (`default:16`) vs carbon Root (`carbon:16`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `h-5 w-5` | Box 16px → 20px | Larger hit area and glyph | UNVERIFIED (concern DIMENSION) |
| `rounded-dft-sm` | `rounded-cb-md` | Prefix swap | Square via `--cb-radius: 0rem` | TOKEN_DEPENDENCY, Corroborated |
| `border-dft-primary` | `border-foreground` | Namespaced primary → legacy unprefixed token | Resting border follows global foreground, not carbon primary | UNVERIFIED (concern COLOR) — single instance; catalyst convention does not transfer to carbon |
| `ring-offset-dft-background` | `ring-offset-background` | Same unprefixed shift for offset color | Offset renders in legacy background | UNVERIFIED (concern COLOR) |
| `focus-visible:ring-offset-2` | `focus-visible:ring-offset-1` | Offset width 2 → 1 | Tighter focus halo; consistent with carbon button | UNVERIFIED (concern FOCUS) |
| `data-[state=checked]:bg-dft-primary` | `data-[state=checked]:bg-foreground` | Checked fill → legacy foreground | Checked box fills foreground color | UNVERIFIED (concern COLOR) |
| `data-[state=checked]:text-dft-primary-foreground` | `data-[state=checked]:text-background` | Checked icon color → legacy background | Check glyph renders in background color | UNVERIFIED (concern COLOR) |

`peer`, `shrink-0`, `focus-visible:ring-2`/`ring-cb-ring`, `outline-none`, disabled
classes unchanged.

## 4. Variants

Not applicable — checkbox defines no cva variants in either file.

## 5. Sizes

No size scale in either file. The single dimension change (`h-5 w-5`) is
documented in §3.

## 6. Interaction States

Hover: no hover classes in either file. Focus: ring-2 retained, offset narrowed
(§3). Checked: recolored per §3. Disabled (`cursor-not-allowed`, `opacity-50`)
identical. No dark-mode classes.

## 7. DOM and Component Structure

Identical: `Root` → `Indicator` → `Check`, same `forwardRef`, same `cn()` merge
order. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Checkbox` export, prop types (`ComponentPropsWithoutRef<Root>`), `displayName`
identical. No API difference. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix state exposure, keyboard interaction, ref forwarding unchanged.
Focus ring retained (ring-2 + ring color), only offset narrowed — no removal.
PARITY_EXPECTED with the §3 focus note (no failure claimed).

## 10. Imports and Dependencies

Identical set (`@radix-ui/react-checkbox`, lucide `Check`, `react`, `@/lib/utils`).
PARITY_EXPECTED.

## 11. Token Dependencies

`cb-*`: `--cb-ring: 55.65% 0.24 261.95`, `--cb-radius: 0rem`. Legacy
`--foreground` / `--background` (unprefixed `:root` blocks) drive border, offset,
checked fill, and icon color — migration must preserve the legacy tokens, and a
designer should confirm the unprefixed choice (it bypasses the carbon namespace).

## 12. Typography and Global Styling

No component text. Icon `Check h-4 w-4` unchanged (`carbon:24` vs `default:24`).
Family inheritance not applicable to the glyph (lucide stroke icon).

## 13. Findings and Upgrade Preservation

Findings: (1) 20px box — UNVERIFIED; (2) offset-1 — UNVERIFIED; (3–6) unprefixed
border/offset/checked tokens — UNVERIFIED as a set. Re-apply all deliberately;
do not "correct" to `cb-*` without designer sign-off. No divergences, no exceptions.

## 14. Verification

Both files read fully. Effects inferred from source; no browser check.

## 15. Unresolved Questions

1. Are the unprefixed legacy tokens deliberate (theme-following) or drift?
