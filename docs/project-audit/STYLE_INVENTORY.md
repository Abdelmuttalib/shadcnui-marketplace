# STYLE_INVENTORY

Verified 2026-10-09. Sources: `hooks/use-style-store.tsx:31-287` (STYLES, STYLES_DATA),
`registry/styles.tsx:287-316` (prefixes), `registry/styles.tsx:225-254` (fonts),
`registry/registry-styles.ts:17-78` (radii), `tailwind.config.ts`, `app/globals.css`.
The 12-style list in the task prompt is **confirmed complete** — no additional styles found.

| Style | Variable Prefix | Font (verified `getStyleFontClassname`) | Registry radius (`registry-styles.ts`) | CSS radius (`globals.css`) | Component Directory | Special Implementations | Audit Status |
|---|---|---|---|---|---|---|---|
| default | `dft` | `font-sans` (Inter) | 0.5rem | `--dft-radius: 0.4rem` ⚠️ mismatch | `registry/default/` | `ButtonLink` export in button; `libelle/board` n/a; full 8 page examples | Stage 1 done; diffs pending |
| carbon | `cb` | `font-carbon` (IBM Plex Sans) | 0rem | `--cb-radius: 0rem` ✓ | `registry/carbon/` | `hello-world/` sample; own 8 page examples | Stage 1 done; button spot-checked |
| linear | `linear` | `font-sans` (Inter) | 0.5rem | `--linear-radius: 0.5rem` ✓ | `registry/linear/` | Own 8 page examples | Stage 1 done; diffs pending |
| material | `material` | `font-material` (Roboto) | 0.75rem | `--material-radius: 0.75rem` ✓ | `registry/material/` | Own 8 pages **+ board** (`MaterialBoardPage`); `material-color-primary-50…950` scale in tailwind config | Stage 1 done; diffs pending |
| catalyst | `catalyst` | `font-sans` (Inter) | 0.6rem | `--catalyst-radius: 0.6rem` ✓ | `registry/catalyst/` | Own 8 page examples; `themes.css` palettes (`theme-catalyst-palette1`, `theme-catalyst-rose`, …) | Stage 1 done; diffs pending |
| spectrum | `spctm` (truncated) | `font-spectrum` (Ubuntu) | 0.4rem | `--spctm-radius: 0.4rem` ✓ | `registry/spectrum/` | Own 8 page examples; `spctm-color-*` palettes | Stage 1 done; diffs pending |
| wedges | `wedges` | `font-sans` (Inter) | 0.5rem | `--wedges-radius: 0.5rem` ✓ | `registry/wedges/` | Own 8 page examples; `wedges-coolgray/gray/primary` + destructive hex scales | Stage 1 done; diffs pending |
| moon | `moon` | `font-sans` (Inter) | 0.6rem | `--moon-radius: 0.6rem` ✓ | `registry/moon/` | Own 8 pages **+ charts** (`MoonChartsPage`, `charts/`); custom tokens piccolo/jiren/hit/heles/beerus/goku/gohan/zeno/bulma/trunks/goten/popo | Stage 1 done; diffs pending |
| lucid | `lucid` | `font-sans` (Inter) | 0.5rem | `--lucid-radius: 0.5rem` ✓ | `registry/lucid/` | Own 8 page examples | Stage 1 done; diffs pending |
| snow | `snow` | `font-sans` (Inter) | 0.4rem | `--snow-radius: 0.75rem` ⚠️ mismatch | `registry/snow/` | Own 8 page examples | Stage 1 done; diffs pending |
| neon | `neon` | `font-poppins` (Poppins) | 0rem | `--neon-radius: 0rem` ✓ | `registry/neon/` | Own 8 pages **+ board** (`NeonBoardPage` — also the fallback for styles without one) | Stage 1 done; button spot-checked |
| libelle | `libelle` | `font-outfit` (Outfit) | 0rem | `--libelle-radius: 0rem` ✓ | `registry/libelle/` | Own 8 pages **+ board** (`LibelleBoardPage`) | Stage 1 done; diffs pending |

## Notes

- Only 5 styles have dedicated fonts (carbon, material, spectrum, neon, libelle); the other 7
  inherit Inter via `font-sans`. Verified fact — do not describe linear/catalyst/wedges/moon/
  lucid/snow as having custom typefaces.
- `font-carbon` = IBM Plex **Sans** (`lib/fonts.ts:29-33`), not IBM Plex Mono; `font-spectrum` =
  Ubuntu (`lib/fonts.ts:41-46`). Tailwind's `general-sans/public-sans/dm-sans/work-sans/
  dm-serif-display` families have no verified loader — open question for Stage 4.
- Radius mismatches (default 0.5 vs 0.4; snow 0.4 vs 0.75) are unresolved facts, not typos to fix.
- Moon custom token names (`--moon-piccolo` etc.) are verified present (`globals.css:1019-1034`);
  their semantic roles must be traced by usage in Stage 4, not inferred from names.
- No style is "official": carbon/spectrum/material evoke IBM/Adobe/Google systems but the code
  contains no upstream implementation — describe as "inspired" only.
- All styles share the same 48 `ui/` filenames (see COMPONENT_INVENTORY.md); every style has
  hero + showcase + card-showcase + page-examples modules.
