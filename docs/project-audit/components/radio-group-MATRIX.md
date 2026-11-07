# Radio-Group — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/radio-group.tsx`
(Root `grid gap-2`; item 16px `rounded-full` `border-dft-primary`, offset-2; plain
Indicator + lucide `Circle h-2.5 fill-current text-current`). Structure, Root, exports
identical in all 11 alternatives. Reports: `components/<style>/radio-group-vs-default.md`.

| Style | Item size | Border | Checked rendering | Indicator/dot | Focus | Divergences | Doc |
|---|---|---|---|---|---|---|---|
| moon | 16px | primary (swap) | dot only (as base) | Circle 10px current | = | — | `moon/radio-group-vs-default.md` |
| carbon | 18px (UNVERIFIED) | `cb-ring` (UNVERIFIED) | `bg-cb-ring` fill (UNVERIFIED) | Circle 10px current | ring-1/offset-1 (UNVERIFIED) | — | `carbon/radio-group-vs-default.md` |
| linear | 20px + clip (UNVERIFIED) | hardcoded `gray-500` (DIVERGENCE) + hover/focus recolor | filled `bg-primary` disc + white dot (UNVERIFIED) | full-bleed disc, hardcoded white dot | 60% ring (UNVERIFIED); offset removal (DIVERGENCE) | hardcoded colors; redundant `outline-0` (DIVERGENCE) | `linear/radio-group-vs-default.md` |
| material | 20px, aspect dropped (UNVERIFIED) | `input` + recolors (UNVERIFIED) | border recolor only, dot only | Circle 10px current | **ring removed (INTENTIONAL, owner A)** | commented halo span; redundant resets (DIVERGENCE) | `material/radio-group-vs-default.md` |
| catalyst | ~19px (UNVERIFIED) | `input` + `bg-muted` (UNVERIFIED) | 5-class set: border/accent-fill/bg-ink/inset-shadow/dark-override (UNVERIFIED) | Circle 8px hardcoded white (UNVERIFIED) | = | raw `--color-gray-500` in shadow (UNVERIFIED) | `catalyst/radio-group-vs-default.md` |
| spectrum | 16px | `border-2 input` (UNVERIFIED) | border + primary fill (UNVERIFIED) | filled disc + 6px white dot (UNVERIFIED) | = | hardcoded white dot | `spectrum/radio-group-vs-default.md` |
| wedges | 18px + clip (UNVERIFIED) | `border-2 input` (UNVERIFIED) | checked border (UNVERIFIED) | Circle 8px current (UNVERIFIED) | transparent-ring reservation (UNVERIFIED) | dead comment + `// </div>`; redundant resets (DIVERGENCE) | `wedges/radio-group-vs-default.md` |
| lucid | 16px | `input` (UNVERIFIED) | dot only (as base) | Circle 12px current (UNVERIFIED) | = | — | `lucid/radio-group-vs-default.md` |
| snow | 16px | primary (swap) | dot only (as base) | Circle 10px (parity) | **offset width dropped (DIVERGENCE)** | double space (no-op) | `snow/radio-group-vs-default.md` |
| neon | 16px square `rounded-neon-md` (UNVERIFIED) | `input` + tint + checked border (UNVERIFIED) | border recolor + dot (no fill) | **8px square span, Circle commented out (EXCEPTION, owner B)** | = | dead `Circle` import (DIVERGENCE) | `neon/radio-group-vs-default.md` |
| libelle | 18px (UNVERIFIED) | primary (swap) | dot only (as base) | Circle 8px current (UNVERIFIED) | = | — | `libelle/radio-group-vs-default.md` |

## Corroborated patterns

- **Filled-disc indicators** (linear, spectrum): same design language in two styles —
  candidate for STYLE_INTENTIONAL as a set; reports keep UNVERIFIED pending ruling.
- **Ring removal** (material only): STYLE_INTENTIONAL per owner decision A.
- **Dot indicator** (neon only): DESIGN_EXCEPTION per owner decision B (squareness
  of the dot itself still open — see neon report §15.2).
- **Offset removal** (snow only here; linear drops offset color+width as part of its
  restyle): snow = PARITY_DIVERGENCE, Needs-designer.
