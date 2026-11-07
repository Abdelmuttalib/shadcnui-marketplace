# Accordion — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full source reads run. Baseline
`registry/default/ui/accordion.tsx` (item `border-b`; trigger `py-4 medium`
underline hover; trailing ChevronDown 180°; Content `pb-4 pt-0` + height anims;
4 exports). Animations/exports uniform everywhere. Reports:
`components/<style>/accordion-vs-default.md`.

| Style | Item | Trigger | Icon | Content | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | + border color (UNVERIFIED) | accent hover, ring, disabled, responsive pad (UNVERIFIED) | ChevronDown 180° = | responsive pad (UNVERIFIED) | — | `carbon/accordion-vs-default.md` |
| linear | swap | rounded padded row, accent hover (UNVERIFIED) | ChevronDown 180° = | padded + muted (UNVERIFIED) | — | `linear/accordion-vs-default.md` |
| material | swap | accent hover+ink, `px-3 py-3` (UNVERIFIED) | ChevronDown 180° = | `px-3` (UNVERIFIED) | — | `material/accordion-vs-default.md` |
| catalyst | + border color (UNVERIFIED) | rounded muted row (UNVERIFIED) | ChevronDown 180° = | `px-3` (UNVERIFIED) | — | `catalyst/accordion-vs-default.md` |
| spectrum | swap | gap layout, unprefixed hover (DIVERGENCE) | leading ChevronRight 90° (UNVERIFIED) | `px-3` (UNVERIFIED) | dead import (DIVERGENCE) | `spectrum/accordion-vs-default.md` |
| wedges | swap | accent hover+ink (UNVERIFIED) | ChevronDown 180° = | `px-3` (UNVERIFIED) | — | `wedges/accordion-vs-default.md` |
| moon | swap (=identical) | identical | identical | identical | — | `moon/accordion-vs-default.md` |
| lucid | + border color (UNVERIFIED) | identical | identical | identical | — | `lucid/accordion-vs-default.md` |
| snow | swap (=identical) | identical | identical | identical | — | `snow/accordion-vs-default.md` |
| neon | + border color (UNVERIFIED) | primary hover, `py-3` (UNVERIFIED) | Plus/Minus toggle (exception candidate) | dead imports (DIVERGENCE) | 1 | `neon/accordion-vs-default.md` |
| libelle | swap (=identical) | identical | identical | identical | — | `libelle/accordion-vs-default.md` |

## Corroborated patterns

- **Byte-identical** (moon/snow/libelle): NO_DIFFERENCE, diff-verified.
- **Filled-hover trigger rows** (carbon/linear/material/catalyst/wedges/neon):
  near-universal restyle, UNVERIFIED per style.
- **Structural icon changes** (spectrum leading-ChevronRight; neon Plus/Minus
  toggle): UNVERIFIED as design; neon is a DESIGN_EXCEPTION candidate (preserved
  behavior, as neon dots).
- **Padded Contents** (all except moon/snow/libelle): UNVERIFIED per style.
