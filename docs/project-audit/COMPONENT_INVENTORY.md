# COMPONENT_INVENTORY

Verified 2026-10-09 by listing `registry/<style>/ui/` for all 12 styles.
Result: **identical filename sets — 48 files in every style** (no missing/extra per-style files
(Correction 2026-10-09: earlier revisions said 47; disk verification across all 12
styles counts 48 `.tsx` files each. All derived totals updated accordingly.)
at the filename level). Content diffs are **not yet audited** (Stage 5); "Present" below means
"file exists", not "identical to default".

Status legend: `Present` = file exists, content unaudited; `Audited` = full vs-default
comparison doc exists (button only). Filename presence and audit status are tracked
separately — all other components remain `Present`/unaudited.

| Component (file) | Default | Carbon | Linear | Material | Catalyst | Spectrum | Wedges | Moon | Lucid | Snow | Neon | Libelle | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| accordion | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + accordion-MATRIX.md (2026-10-09). Spectrum icon swap; neon Plus/Minus (exception candidate). |
| alert | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + alert-MATRIX.md. Catalyst unprefixed set (divergence); bare borders. |
| alert-dialog | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + alert-dialog-MATRIX.md. Own-style button imports verified; carbon Cancel secondary. |
| aspect-ratio | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + aspect-ratio-MATRIX.md. Byte-identical in all 12; no differences. |
| avatar | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + avatar-MATRIX.md. 36px Roots in 6 styles (UNVERIFIED). |
| badge | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + badge-MATRIX.md. Full variant tables; unprefixed tokens (divergence). `*`snow: offset; |
| breadcrumb | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + breadcrumb-MATRIX.md. Carbon Slash, snow text sep, unprefixed texts (divergence). |
| button | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited* | 11 docs in `components/<style>/button-vs-default.md` + `components/button-MATRIX.md` (standard template, 2026-10-09). ButtonLink kept in moon/lucid/libelle only (divergence elsewhere). `*` = Needs verification: snow offset-width divergence + radius mismatch; libelle border-token intent |
| calendar | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + calendar-MATRIX.md. Typo map: fixed/plain/preserved; spectrum wash missing (divergence). |
| card | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + card-MATRIX.md. Material unprefixed fg (divergence); title restyles. |
| carousel | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + carousel-MATRIX.md. Own-style Button imports verified; otherwise identical. |
| chart | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + chart-MATRIX.md. Radial-selector map verified; unprefixed containers (divergence). |
| checkbox | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + checkbox-MATRIX.md (2026-10-09). Material ring removal intentional (owner A); neon dot exception (owner B). `*`snow: offset divergence |
| collapsible | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + collapsible-MATRIX.md (2026-10-09). Byte-identical in all 12; no differences. |
| command | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + command-MATRIX.md. Own-style dialog imports verified; unprefixed texts (divergence). |
| context-menu | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + context-menu-MATRIX.md. Catalyst 4 unprefixed tokens (divergence). |
| data-table | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + data-table-MATRIX.md. Own-style table imports verified; linear bare wrapper (divergence). |
| dialog | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + dialog-MATRIX.md (2026-10-09). Snow Close offset (divergence). `*`snow: Close offset; |
| drawer | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + drawer-MATRIX.md. Bare Content borders (divergence); carbon/spectrum scrims. |
| dropdown-menu | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + dropdown-menu-MATRIX.md (2026-10-09). Carbon kbd Shortcut; wedges split borders (divergence). |
| form | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + form-MATRIX.md. Own-style Label imports verified; carbon/catalyst unprefixed errors (divergence). |
| hover-card | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + hover-card-MATRIX.md. Bare borders + unprefixed text (divergences). |
| input | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | Audited | Audited | Audited | 11 docs + input-MATRIX.md (2026-10-09). Wedges ring deletion (divergence). `*`wedges: focus deletion; |
| input-otp | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + input-otp-MATRIX.md. Carbon frame; compact slots; unprefixed carets (divergence). |
| label | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + label-MATRIX.md. Byte-identical in all 11 styles; no differences. |
| menubar | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + menubar-MATRIX.md. Function wrappers (linear/material/wedges); displayname bug shared. |
| navigation-menu | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + navigation-menu-MATRIX.md. Bare viewports + unprefixed diamonds (divergence). |
| pagination | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + pagination-MATRIX.md. Own-style Button imports verified; otherwise identical. |
| popover | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + popover-MATRIX.md. Material+catalyst unprefixed text (divergence). |
| progress | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + progress-MATRIX.md. Thinner tracks in 9 styles; fill math identical. |
| radio-group | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + radio-group-MATRIX.md. Structure uniform. `*`snow: offset divergence |
| resizable | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + resizable-MATRIX.md (2026-10-09). Bare grips + unprefixed tokens (divergence). |
| scroll-area | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + scroll-area-MATRIX.md. Thumb token only; unprefixed ×4 (divergence). |
| select | Present (baseline) | Audited | Audited | Audited* | Audited* | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + select-MATRIX.md. Material+catalyst unprefixed Content text (divergence). `*`material/catalyst: unprefixed text + (material) padding; |
| separator | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + separator-MATRIX.md. Wedges unprefixed bg-border (divergence). |
| sheet | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + sheet-MATRIX.md. Width-only vs kept-color sides; snow Close offset (divergence). `*`snow: Close offset; |
| sidebar | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + sidebar-MATRIX.md. Own-style imports verified; carbon dead region (divergence). |
| skeleton | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + skeleton-MATRIX.md. Uniform namespace swap; no differences. |
| slider | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + slider-MATRIX.md. Material nested halo (exception candidate). |
| sonner | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + sonner-MATRIX.md. Third-party config identical; carbon trio (divergence). |
| switch | Present (baseline) | Audited | Audited | Audited | Audited* | Audited | Audited | Audited | Audited | Audited* | Audited | Audited* | 11 docs + switch-MATRIX.md. Travel figures inferred. `*`catalyst: dark collision; snow: offset; libelle: travel+icon |
| table | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + table-MATRIX.md (2026-10-09). Baseline carries border colors; carbon chrome, linear density, material/wedges headers. |
| tabs | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + tabs-MATRIX.md. No shared tab system; all rows UNVERIFIED per style. |
| textarea | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | Audited | Audited | Audited | 11 docs + textarea-MATRIX.md. Mirrors input per style; wedges ring deletion (divergence). `*`wedges: focus deletion; |
| toggle | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited* | Audited | Audited | 11 docs + toggle-MATRIX.md. Moon+libelle exact clones. `*`snow: secondary on-state + offset |
| toggle-group | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + toggle-group-MATRIX.md. Own-style imports verified by diff; uniform parity, no divergences |
| tooltip | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + tooltip-MATRIX.md. Spectrum density; carbon/material/catalyst text (divergence). |
| typography | Present (baseline) | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | Audited | 11 docs + typography-MATRIX.md. 60 keys verbatim; carbon/catalyst base ink (divergence). |

## Non-`ui/` component layers (inventory only, diffs pending)

- Per-style `example/` + `examples/` demos (loaded by `lib/component-loader.tsx`), `blocks/`,
  `components/`, `hooks/`, `lib/`, `internal/`, hero/showcase/card-showcase/page-examples.
- Page examples per style: mail, dashboard, cards, tasks, playground, forms (SettingsProfile),
  music, authentication — all 12 styles; plus moon/charts, material/board, libelle/board,
  neon/board. `charts`/`board` fallback routing (`registry/styles.tsx:318-333`) needs Stage 6 audit.
- Site chrome `components/ui/` (48 + `animated-dialog`, `fullscreen-dialog`, `rich-badge`);
  baseline provenance unverified.
- `registry/registry-ui.ts` defines the same 48 items (incl. `typography`, `data-table`) with
  npm/registry dependencies — the authoritative item list for generation.
