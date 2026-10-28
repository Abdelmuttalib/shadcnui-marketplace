# Menubar — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run. Baseline
`registry/default/ui/menubar.tsx` (root `h-10 p-1`; trigger `py-1.5`; contents
`p-1`; 15 exports; `displayname` lowercase bug shared by all 12 — not a
divergence). Reports: `components/<style>/menubar-vs-default.md`.

| Style | Root | Items/trigger | Contents | Shortcut/misc | Structure | Divergences | Doc |
|---|---|---|---|---|---|---|---|
| carbon | padding dropped (DIVERGENCE) | `py-2.5` trigger, `px-2.5` rows (UNVERIFIED) | unpadded; SubContent text unprefixed (DIVERGENCE) | kbd chip (UNVERIFIED) | const aliases | 2 | `carbon/menubar-vs-default.md` |
| linear | `h-9` + `px-0.5` (UNVERIFIED) | swap | bare borders (DIVERGENCE) | wide tracking (UNVERIFIED) | function wrappers + data-slot (noted) | 1 | `linear/menubar-vs-default.md` |
| material | `h-9`, padding dropped (UNVERIFIED) | radius-less + `py-2.5` (UNVERIFIED) | bare borders + unprefixed text + unpadded (DIVERGENCE) | color+opacity (UNVERIFIED) | function wrappers + data-slot (noted) | 1 | `material/menubar-vs-default.md` |
| catalyst | heightless + `p-0.5` (UNVERIFIED) | `px-2.5 py-2` (UNVERIFIED) | `input` + `p-0.5` + unprefixed text (DIVERGENCE) | /60 tone (UNVERIFIED) | const aliases | 1 | `catalyst/menubar-vs-default.md` |
| spectrum | `h-9` + `px-1` (UNVERIFIED) | `px-3 py-2` set (UNVERIFIED) | `input/60` + `py-1` (UNVERIFIED) | swap | const aliases | — | `spectrum/menubar-vs-default.md` |
| wedges | `h-9`, padding dropped (UNVERIFIED) | radius-less + `sm:px-3` (UNVERIFIED) | unpadded (UNVERIFIED) | opacity (UNVERIFIED) | function wrappers + data-slot (noted) | — | `wedges/menubar-vs-default.md` |
| moon | swap | `py-2` rows/label (UNVERIFIED) | swap | swap | const aliases | — | `moon/menubar-vs-default.md` |
| lucid | `h-9` (UNVERIFIED) | swap | swap | swap | const aliases | — | `lucid/menubar-vs-default.md` |
| snow | `h-9` (UNVERIFIED) | `py-1` trigger, `px-3` rows (UNVERIFIED) | `p-1.5` (UNVERIFIED) | swap | const aliases | — | `snow/menubar-vs-default.md` |
| neon | `h-9` (UNVERIFIED) | swap | swap | swap | const aliases | — | `neon/menubar-vs-default.md` |
| libelle | swap | swap | swap + Content `font-outfit` (UNVERIFIED) | swap | const aliases | — | `libelle/menubar-vs-default.md` |

## Corroborated patterns

- **Compact roots** (`h-9`: linear/material/spectrum/wedges/lucid/snow/neon;
  catalyst heightless): near-universal, UNVERIFIED per style.
- **Function-wrapper rewrite** (linear/material/wedges): behavior-neutral,
  recorded with note — needs one ruling (deliberate alignment vs drift).
- **Bare content borders** (linear/material): DIVERGENCE, confirm or restore.
- **Unprefixed Content texts** (carbon SubContent, material ×2, catalyst ×2):
  joint ruling set.
