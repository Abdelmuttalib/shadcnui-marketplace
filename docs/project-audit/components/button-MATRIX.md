# Button — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; reports revised to the standard template
(same date). Baseline `registry/default/ui/button.tsx`
(base `rounded-dft-md text-sm font-medium offset-2`; sizes `h-10/9/11`; exports
`Button, ButtonLink, buttonVariants`). Effects inferred from source.
Classifications per `../FINDING_CLASSIFICATIONS.md`; single-instance styling is
UNVERIFIED by the strict corroboration bar (see Methodology note).

| Style | Shape | Type | Density (default/sm/lg) | Focus | Outline | Secondary / Ghost | Destructive | ButtonLink | Doc |
|---|---|---|---|---|---|---|---|---|---|
| moon | token (`--moon-radius 0.6rem`) | = | = `h-10/9/11` | = | token swap | token swap | token swap | ✅ kept | `moon/button-vs-default.md` |
| carbon | square (0rem) | = | = `h-10/9/11` | inset 1px ring, transparent ring + offset halo, dark offsets (UNVERIFIED) | border-only, svg-hover (UNVERIFIED) | bordered secondary (UNVERIFIED) | token swap | ❌ PARITY_DIVERGENCE | `carbon/button-vs-default.md` |
| linear | token (0.5rem) | = | compact `h-9/8/10`, no `py-2` on default | offset-1 (UNVERIFIED) | shadow + muted hover + dark fill (UNVERIFIED; dup `shadow-sm` = divergence) | token swap | token swap | ❌ PARITY_DIVERGENCE | `linear/button-vs-default.md` |
| material | pill (UNVERIFIED) | = | same heights, wider px (`px-5/4/8`) | offset moved to `default` variant only (UNVERIFIED) | secondary-tone hover + svg-hover (UNVERIFIED) | ghost hovers secondary (UNVERIFIED) | token swap | ❌ PARITY_DIVERGENCE | `material/button-vs-default.md` |
| catalyst | token (0.6rem) | semibold (UNVERIFIED) | compact `h-9/8/10`, tight `px-2` sm | offset-1 (UNVERIFIED) | shadow + secondary hover (UNVERIFIED) | token swap | token swap | ❌ PARITY_DIVERGENCE | `catalyst/button-vs-default.md` |
| spectrum | pill (UNVERIFIED) | = | densest `h-8/7/9`, `py-1.5` (UNVERIFIED) | = | asserts fg text (UNVERIFIED) | token swap | token swap | ❌ divergence + vestigial `next/link` import | `spectrum/button-vs-default.md` |
| wedges | token (0.5rem) | = | mild compact `h-9/9/10` (sm = default) | offset-1 (UNVERIFIED) | `/50` translucent hover (UNVERIFIED) | ghost `/50` hover (UNVERIFIED) | token swap | ❌ PARITY_DIVERGENCE | `wedges/button-vs-default.md` |
| lucid | token (0.5rem) | = | compact `h-9/8/10`, `px-2` sm (tied tightest w/ catalyst) | = | token swap | universal base `border` + tints; ghost/link `border-transparent` (UNVERIFIED set) | tinted border (UNVERIFIED) | ✅ kept | `lucid/button-vs-default.md` |
| snow | token (0.75rem CSS ⚠️) | = | compact `h-9/8/10` | offset width missing — PARITY_DIVERGENCE, Needs-designer | token swap | token swap | token swap | ❌ PARITY_DIVERGENCE | `snow/button-vs-default.md` |
| neon | square (0rem) | = | compact `h-9/8/10` (UNVERIFIED) | = | token swap | token swap | token swap | ❌ PARITY_DIVERGENCE | `neon/button-vs-default.md` |
| libelle | square (0rem) | `text-base` (UNVERIFIED) | = `h-10/9/11` | = | primary-colored (UNVERIFIED) | token swap | tint `/15`→`/35` (UNVERIFIED; unprefixed border token = divergence) | ✅ kept | `libelle/button-vs-default.md` |

## Corroborated patterns (each cites supporting cells above)

- **Density ladder** (default size): `h-10` default/moon/carbon/libelle (+ `h-10 wide`
  material) → `h-9` linear/lucid/neon/snow/wedges/catalyst → `h-8` spectrum.
  (Corrected: catalyst default is `h-9 px-3 py-2`, not `h-10`.)
- **Shape**: pill (material, spectrum) / square (carbon, neon, libelle) / token radius (rest).
- **Ghost hover**: accent (default-like) everywhere except material (secondary) and
  wedges (`/50`).
- **ButtonLink kept**: moon, lucid, libelle only. Absent in 8 styles with zero in-repo
  breakage (all consumers use local demo components) — PARITY_DIVERGENCE (drift), not design.
- **Icon sizing**: `size-4` universal; sole exception spectrum `icon-sm` (`size-3.5`).
- **Strict-bar note**: the only STYLE_INTENTIONAL button finding is catalyst's legacy-token
  link (convention verified across 7+ catalyst files). Everything marked UNVERIFIED above
  is a candidate pending cross-component recurrence or designer ruling.

## Methodology note

Matrix claims ⊆ report claims (validation gate §6.5). "UNVERIFIED" here means
"single-component evidence only" — see `../FINDING_CLASSIFICATIONS.md` and
`../METHODOLOGY.md`.
