# Progress — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; Root lines verified by direct grep per
style. Baseline `registry/default/ui/progress.tsx` (track `h-4 rounded-full
bg-secondary`; indicator `bg-primary` + identical translate transform; no `max`
handling). Transform/transition/structure/exports uniform everywhere. Reports:
`components/<style>/progress-vs-default.md`.

| Style | Track | Indicator | Divergences | Doc |
|---|---|---|---|---|
| carbon | `h-1`, `-md`, `secondary` (UNVERIFIED) | `primary` (swap) | — | `carbon/progress-vs-default.md` |
| linear | `h-2` (UNVERIFIED) | swap | — | `linear/progress-vs-default.md` |
| material | `h-2`, `muted` track (UNVERIFIED) | swap | — | `material/progress-vs-default.md` |
| catalyst | `h-2` (UNVERIFIED) | swap | — | `catalyst/progress-vs-default.md` |
| spectrum | `h-2` (UNVERIFIED) | swap (`spctm`) | — | `spectrum/progress-vs-default.md` |
| wedges | `h-1.5`, `input` track (UNVERIFIED) | swap | — | `wedges/progress-vs-default.md` |
| moon | `h-3` (UNVERIFIED) | swap | — | `moon/progress-vs-default.md` |
| lucid | `h-4` = (swap) | swap | — | `lucid/progress-vs-default.md` |
| snow | `h-2` (UNVERIFIED) | swap | — | `snow/progress-vs-default.md` |
| neon | `h-1.5`, `-md` (UNVERIFIED) | swap | — | `neon/progress-vs-default.md` |
| libelle | `h-4` = (swap) | swap | — | `libelle/progress-vs-default.md` |

## Corroborated patterns

- **Thinner tracks** (9 of 11; lucid/libelle keep `h-4`): UNVERIFIED per style —
  set-level ruling candidate.
- **Off-token tracks** (material `muted`, wedges `input`): UNVERIFIED per style.
- **Fill math identical** in all 12 (`translateX(-${100 - (value || 0)}%)`).
