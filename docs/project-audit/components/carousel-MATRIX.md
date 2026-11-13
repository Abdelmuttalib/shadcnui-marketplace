# Carousel — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (exactly 2 changed
lines each — the import pair). Baseline `registry/default/ui/carousel.tsx`
(embla context, orientation, keyboard arrows, container/track/slide geometry,
outline icon buttons with sr-only labels, 6 exports). No dots/indicators in any
file. Reports: `components/<style>/carousel-vs-default.md`.

| Style | Button import | Other deltas | Divergences | Doc |
|---|---|---|---|---|
| carbon | own ✓ | none | — | `carbon/carousel-vs-default.md` |
| linear | own ✓ | none | — | `linear/carousel-vs-default.md` |
| material | own ✓ | none | — | `material/carousel-vs-default.md` |
| catalyst | own ✓ | none | — | `catalyst/carousel-vs-default.md` |
| spectrum | own ✓ | none | — | `spectrum/carousel-vs-default.md` |
| wedges | own ✓ | none | — | `wedges/carousel-vs-default.md` |
| moon | own ✓ | none | — | `moon/carousel-vs-default.md` |
| lucid | own ✓ | none | — | `lucid/carousel-vs-default.md` |
| snow | own ✓ | none | — | `snow/carousel-vs-default.md` |
| neon | own ✓ | none | — | `neon/carousel-vs-default.md` |
| libelle | own ✓ | none | — | `libelle/carousel-vs-default.md` |

## Result

Uniform own-style wiring + byte-identity otherwise: all 11 import their own
button module (no cross-style imports — toggle-group/command/calendar precedent
holds); geometry, keyboard, ARIA, exports identical. No divergences, no
exceptions. All 11 Complete.
