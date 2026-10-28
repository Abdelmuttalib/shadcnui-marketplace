# Select — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09. Baseline `registry/default/ui/select.tsx`
(`h-10` boxed trigger, ring-2/offset-2, `p-1` viewport, `py-1.5` items,
left-side check). Structure, primitives, animations, positioning, and all 10
exports uniform everywhere. Reports: `components/<style>/select-vs-default.md`.

| Style | Trigger | Focus | Content/viewport | Item | Divergences | Doc |
|---|---|---|---|---|---|---|
| moon | `h-10` =, transparent face (UNVERIFIED) | = | swap | `py-2` (UNVERIFIED) | — | `moon/select-vs-default.md` |
| carbon | `h-10` =, underline + tint (UNVERIFIED) | ring-1 + border (UNVERIFIED) | square, unpadded viewport (UNVERIFIED) | `py-2`, muted check (UNVERIFIED) | chevron opacity-70 | `carbon/select-vs-default.md` |
| linear | `h-9`, transparent, shadow (UNVERIFIED) | ring-2, offset dropped (DIVERGENCE) | swap | mirrored right-side check (UNVERIFIED) | — | `linear/select-vs-default.md` |
| material | `border-2` transparent + 60% fill (UNVERIFIED) | border-only (UNVERIFIED) | unprefixed text (DIVERGENCE); commented `p-1` (DIVERGENCE) | square, `py-2.5` + `sm:pr-3` (UNVERIFIED) | — | `material/select-vs-default.md` |
| catalyst | `h-9` + 50% fill (UNVERIFIED) | ring-2, offset dropped (DIVERGENCE) | unprefixed text (DIVERGENCE); `p-0.5` (UNVERIFIED) | `py-2`, `pr-2.5` (UNVERIFIED) | input-token content border | `catalyst/select-vs-default.md` |
| spectrum | `h-9`, transparent (UNVERIFIED) | = | 70% border + `py-1` viewport (UNVERIFIED) | `py-2` (UNVERIFIED) | — | `spectrum/select-vs-default.md` |
| wedges | `h-9` + 20% fill (UNVERIFIED) | offset-1 | unpadded viewport (commented `p-1`, DIVERGENCE) | square + `sm:pr-3` (UNVERIFIED) | — | `wedges/select-vs-default.md` |
| lucid | `h-9`, border-token edge + inherit (UNVERIFIED) | = | swap | swap | — | `lucid/select-vs-default.md` |
| snow | `h-9`, opaque kept (UNVERIFIED) | ring-2, offset dropped (DIVERGENCE) | swap | hover+focus highlight (UNVERIFIED) | double space (no-op) | `snow/select-vs-default.md` |
| neon | `h-9` + 40% fill (UNVERIFIED) | = | swap | swap | — | `neon/select-vs-default.md` |
| libelle | `h-10` =, underline + fill (UNVERIFIED) | = | swap | swap | dual radius literal | `libelle/select-vs-default.md` |

## Corroborated patterns

- **Unprefixed `text-popover-foreground`** (material + catalyst Content, both
  line 78): identical instance in two styles — needs a joint designer ruling
  (shared typo vs shared convention); both reports keep DIVERGENCE pending it.
- **Commented viewport `p-1`** (material + wedges, both line 89): same dead-code
  pattern; remove or restore deliberately.
- **`sm:pr-3` items** (material + wedges): shared responsive treatment.
- **Roomier items `py-2`** (carbon/moon/catalyst/spectrum): near-universal —
  candidate for STYLE_INTENTIONAL as a set; reports keep UNVERIFIED.
- **Offset removal** (linear/catalyst/snow): DIVERGENCE in all three.
- **Right-side check** (linear only) and **hover highlight** (snow only): sole
  instances, UNVERIFIED.
