# Switch — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/switch.tsx`
(track 24×44 `border-2 transparent`, offset-2; thumb 20px `bg-background`,
`translate-x-5/0`). Travel figures are class-arithmetic inferences (Tailwind
spacing, border-box), not rendered measurements. Reports:
`components/<style>/switch-vs-default.md`.

| Style | Track (h×w) | Thumb | Travel: avail vs delta (inferred) | Checked / unchecked | Focus | Extras / divergences | Doc |
|---|---|---|---|---|---|---|---|
| carbon | 24×48 | 20px white→primary-fg | 24 vs 24 ✓ | primary / 50%-muted | offset-1; unprefixed offset color (DIVERGENCE) | redundant group+peer selectors (DIVERGENCE) | `carbon/switch-vs-default.md` |
| linear | 24×36 | 16px always-primary-fg | 16 vs 12 ~4px under (UNVERIFIED) | primary / 40%-muted | ring-2 kept, offset width dropped (DIVERGENCE) | redundant checked-border (DIVERGENCE) | `linear/switch-vs-default.md` |
| material | 16×32, unconditional input base | 20px overhang, bordered, white, dark-borderless | 8 vs 14 ~6px over (UNVERIFIED) | primary / input(base) | **ring removed (INTENTIONAL, owner A)** | halo span (exception candidate) | `material/switch-vs-default.md` |
| catalyst | 20×32, border + 3px padding | 14px white | 10 vs 14 ~4px over (UNVERIFIED) | primary / input; **dark checked ≡ unchecked (DIVERGENCE)** | = ring-2/offset-2 | — | `catalyst/switch-vs-default.md` |
| spectrum | 16×28, borderless | 14px + state borders | 10 vs 12 ~2px over (UNVERIFIED) | primary / muted | = | — | `spectrum/switch-vs-default.md` |
| wedges | 20×36 | 16px white | 16 vs 16 ✓ | primary / input | offset-1 | — | `wedges/switch-vs-default.md` |
| moon | 20×36 | 16px white→primary-fg | 16 vs 16 ✓ | primary / input | = | — | `moon/switch-vs-default.md` |
| lucid | 20×32 | 16px namespace bg | 12 vs 12 ✓ | primary / input | = | — | `lucid/switch-vs-default.md` |
| snow | 20×32 (= lucid) | 16px namespace bg | 12 vs 12 ✓ | primary / input | ring-2, offset width dropped (DIVERGENCE) | double space (no-op) | `snow/switch-vs-default.md` |
| neon | 20×40 square | 16×20 rect, primary-fg | 16 vs 16 ✓ | primary / input | = | square track+thumb (UNVERIFIED set) | `neon/switch-vs-default.md` |
| libelle | 24×44, 1px primary border, transparent off | 24px bordered + CheckIcon | 18 vs 22 ~4px over (UNVERIFIED) | primary / transparent | = | CheckIcon node (exception candidate) | `libelle/switch-vs-default.md` |

## Corroborated patterns

- **Compact `h-5` tracks** (wedges/moon `w-9`, lucid/snow `w-8`, neon `w-10`, catalyst `w-8`)
  with paired endpoints — consistent-travel group (wedges/moon/lucid/snow/neon exact).
- **Ring removal** (material only): STYLE_INTENTIONAL per owner decision A.
- **White thumbs**: carbon/linear/material/catalyst/wedges/moon/neon hardcode white;
  lucid/snow keep namespace background tokens.
- **Travel over/under-shoots** (linear/material/catalyst/spectrum/libelle): all
  UNVERIFIED inferences — rendered verification is the batch's main open geometry item.
