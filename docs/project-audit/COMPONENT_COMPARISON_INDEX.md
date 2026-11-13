# COMPONENT_COMPARISON_INDEX

## Button (11/11 styles audited 2026-10-09, revised to standard template)

Classification system: `FINDING_CLASSIFICATIONS.md`. Only catalyst/link is
STYLE_INTENTIONAL (corroborated); all other styling is TOKEN_DEPENDENCY or
UNVERIFIED; structural gaps are PARITY_DIVERGENCE. Reports: `components/<style>/button-vs-default.md`.
Matrix: `components/button-MATRIX.md`.

| Style | Compared Against | Main areas | Documentation | Status |
|---|---|---|---|---|
| Carbon | Default Button | Focus stack, outline/secondary borders, square; missing ButtonLink (divergence) | `components/carbon/button-vs-default.md` | Complete |
| Linear | Default Button | Compact sizes, offset-1, shadowed outline (dup shadow = divergence) | `components/linear/button-vs-default.md` | Complete |
| Material | Default Button | Pill, wide padding, secondary ghost, variant-scoped offset (open) | `components/material/button-vs-default.md` | Complete |
| Catalyst | Default Button | Semibold, compact sizes, legacy-token link (intentional); `cn(,"")` + missing ButtonLink (divergences) | `components/catalyst/button-vs-default.md` | Complete |
| Spectrum | Default Button | Densest pill, fg-text outline, icon-sm override; vestigial import (divergence) | `components/spectrum/button-vs-default.md` | Complete |
| Wedges | Default Button | `/50` hovers, offset-1, mild compaction | `components/wedges/button-vs-default.md` | Complete |
| Moon | Default Button | Token swap only; full parity | `components/moon/button-vs-default.md` | Complete |
| Lucid | Default Button | Universal border system, tight sizes; full parity | `components/lucid/button-vs-default.md` | Complete |
| Snow | Default Button | Compact sizes, sm/lg radius steps; missing offset width (divergence, open) | `components/snow/button-vs-default.md` | Needs verification |
| Neon | Default Button | Compact sizes, square; missing ButtonLink (divergence) | `components/neon/button-vs-default.md` | Complete |
| Libelle | Default Button | `text-base`, tinted destructive, primary outline; unprefixed border token (divergence, open) | `components/libelle/button-vs-default.md` | Needs verification |

## Style-centric view (Button)

| Style | One line | Status |
|---|---|---|
| Moon | Default with moon tokens; parity | Complete |
| Carbon | Halo focus, bordered secondary, square; ButtonLink divergence | Complete |
| Linear | Compact, shadowed outline, offset-1 | Complete |
| Material | Pill, wide, secondary ghost, offset scope open | Complete |
| Catalyst | Semibold, compact, legacy-token link (intentional) | Complete |
| Spectrum | Densest pill, fg-text outline; import divergence | Complete |
| Wedges | Translucent hovers, offset-1 | Complete |
| Lucid | Border system; parity | Complete |
| Snow | Compact, radius steps, offset divergence open | Needs verification |
| Neon | Compact square; ButtonLink divergence | Complete |
| Libelle | text-base, tinted destructive, primary outline; border-token open | Needs verification |

## Open divergence / verification list (Button)

- Snow offset width + snow radius canonical value — Needs-designer.
- Libelle `border-destructive/30` prefix intent — Needs-designer.
- Material variant-scoped offset generality — Needs-designer.
- `ButtonLink` parity decision (8 styles) — Open.
- Intent corroboration for all UNVERIFIED styling — pending cross-component recurrence.

## Checkbox (11/11 styles audited 2026-10-09)

Reports: `components/<style>/checkbox-vs-default.md`. Matrix: `components/checkbox-MATRIX.md`.
Only material's ring removal is STYLE_INTENTIONAL (owner decision A); neon's dot is a
DESIGN_EXCEPTION candidate (owner decision B); all other styling UNVERIFIED.

| Style | One line | Status |
|---|---|---|
| Moon | 18px box, otherwise token swap | Complete |
| Carbon | 20px, legacy-foreground border/checked set, offset-1 | Complete |
| Linear | 20px, translucent border + added border states, offset dropped (divergence) | Complete |
| Material | Halo span, 20px, ring removed (intentional) | Complete |
| Catalyst | 18px, muted fill, narrow icon | Complete |
| Spectrum | `border-2`, small icon | Complete |
| Wedges | 18px, `border-2`, dark-mode borders; dead comment (divergence) | Complete |
| Lucid | Input border + checked border only | Complete |
| Snow | 18px, `rounded-[5px]`, offset dropped (divergence) | Needs verification |
| Neon | Tinted face, dot indicator (exception); dead imports (divergence) | Complete |
| Libelle | 20px, `rounded-[4px]`, 12px icon | Complete |

## Radio-Group (11/11 styles audited 2026-10-09)

Reports: `components/<style>/radio-group-vs-default.md`. Matrix:
`components/radio-group-MATRIX.md`. Structure/Root/exports uniform everywhere.

| Style | One line | Status |
|---|---|---|
| Moon | Pure token swap | Complete |
| Carbon | 18px, ring-token color set, 1px/offset-1 focus | Complete |
| Linear | 20px, hardcoded gray/white, filled-disc indicator; redundant reset (divergence) | Complete |
| Material | 20px, ring removed (intentional); commented halo (divergence) | Complete |
| Catalyst | 19px, five-class checked set, white dot | Complete |
| Spectrum | `border-2`, filled disc + 6px white dot | Complete |
| Wedges | 18px, `border-2`, transparent-ring reservation; dead code (divergence) | Complete |
| Lucid | Input border, 12px dot | Complete |
| Snow | Token swap except dropped offset (divergence) | Needs verification |
| Neon | Square item, tinted face, dot span (exception); dead import (divergence) | Complete |
| Libelle | 18px, 8px dot | Complete |

## Switch (11/11 styles audited 2026-10-09)

Reports: `components/<style>/switch-vs-default.md`. Matrix:
`components/switch-MATRIX.md`. Travel figures are class-arithmetic inferences.

| Style | One line | Status |
|---|---|---|
| Carbon | `w-12`, muted off-track, redundant thumb selectors (divergence), unprefixed offset (divergence) | Complete |
| Linear | Compact, ~4px travel under-shoot (inferred); offset dropped (divergence) | Complete |
| Material | Overhang thumb + halo, ring removed (intentional); travel ~6px over (inferred) | Complete |
| Catalyst | Padded-box model; **dark checked≡unchecked collision (divergence)** | Needs verification |
| Spectrum | Smallest, state-bordered thumb; ~2px over (inferred) | Complete |
| Wedges | Compact, exact travel, offset-1 | Complete |
| Moon | Compact, exact travel, checked thumb recolor | Complete |
| Lucid | Compact, exact travel | Complete |
| Snow | Lucid geometry, offset dropped (divergence) | Needs verification |
| Neon | Square track + rectangular thumb, exact travel | Complete |
| Libelle | Oversized thumb + CheckIcon, transparent off-state; ~4px over (inferred) | Needs verification |

## Toggle (11/11 styles audited 2026-10-09)

Reports: `components/<style>/toggle-vs-default.md`. Matrix:
`components/toggle-MATRIX.md`. Moon + libelle are exact clones.

| Style | One line | Status |
|---|---|---|
| Moon | Exact clone (prefix only) | Complete |
| Libelle | Exact clone (prefix only) | Complete |
| Carbon | Outline border token + on-state border; narrower lg | Complete |
| Catalyst | Compact sizes only | Complete |
| Spectrum | Compact sizes only | Complete |
| Lucid | Compact sizes only | Complete |
| Neon | Compact narrow sizes only | Complete |
| Wedges | Compact sizes; offset dropped (divergence) | Complete |
| Linear | Compact sizes; offset dropped (divergence) | Complete |
| Material | Compact sizes; dup border colors (divergence); offset dropped (divergence) | Complete |
| Snow | Secondary on-state, radius overrides; offset dropped (divergence) | Needs verification |

## Toggle-Group (11/11 styles audited 2026-10-09)

Reports: `components/<style>/toggle-group-vs-default.md`. Matrix:
`components/toggle-group-MATRIX.md`. Uniform parity: every style imports its own
toggle's `toggleVariants` (full-file diffs run — only line 8 differs per file; no
cross-style imports). No divergences, no exceptions. All 11 Complete.

## Input (11/11 styles audited 2026-10-09)

Reports: `components/<style>/input-vs-default.md`. Matrix:
`components/input-MATRIX.md`. Structure/exports uniform; no invalid-state
styling anywhere.

| Style | One line | Status |
|---|---|---|
| Moon | `bg-inherit` face only | Complete |
| Carbon | Underline field, ring-1/border focus, no offset | Complete |
| Linear | `h-9`, transparent, offset dropped (divergence) | Complete |
| Material | 2px transparent border, border-only focus, opacity-60 | Complete |
| Catalyst | `h-9`, 50% fill, offset dropped (divergence) | Complete |
| Spectrum | `h-9`, inherit face, disabled fill | Complete |
| Wedges | 20% fill; ring deleted with no replacement (divergence) | Needs verification |
| Lucid | `h-9`, inherit face, `border`-token edge | Complete |
| Snow | `h-9`, `px-3.5`, offset dropped (divergence) | Complete |
| Neon | `h-9`, 40% tint | Complete |
| Libelle | Underline + dual radius, 50% fill, `md:text-base` | Complete |

## Textarea (11/11 styles audited 2026-10-09)

Reports: `components/<style>/textarea-vs-default.md`. Matrix:
`components/textarea-MATRIX.md`. Each style mirrors its input treatment.

| Style | One line | Status |
|---|---|---|
| Moon | `bg-inherit` face only | Complete |
| Spectrum | `bg-inherit` face only | Complete |
| Carbon | Underline + tint, ring-1/border focus | Complete |
| Linear | Transparent, offset color+width dropped (divergence) | Complete |
| Material | 2px transparent border, `py-3`, border-only focus | Complete |
| Catalyst | 50% fill, offset dropped (divergence) | Complete |
| Wedges | 20% fill; ring deleted with no replacement (divergence) | Needs verification |
| Lucid | Inherit face, `border`-token edge | Complete |
| Snow | `px-3.5 py-3`, offset dropped (divergence) | Complete |
| Neon | 40% tint only | Complete |
| Libelle | Underline primary, top-only radius, `md:text-base` | Complete |

## Label (11/11 styles audited 2026-10-09)

Reports: `components/<style>/label-vs-default.md`. Matrix:
`components/label-MATRIX.md`. Byte-identical in all 11 styles (diff-verified):
no visual, structural, or API difference of any kind. All 11 Complete.

## Select (11/11 styles audited 2026-10-09)

Reports: `components/<style>/select-vs-default.md`. Matrix:
`components/select-MATRIX.md`. Structure/animations/exports uniform everywhere.

| Style | One line | Status |
|---|---|---|
| Moon | Transparent trigger, taller items | Complete |
| Carbon | Underline trigger, square unpadded content, roomy items | Complete |
| Linear | Compact shadowed trigger; mirrored right-side check | Complete |
| Material | Border-only trigger; unprefixed Content text (divergence); commented padding (divergence) | Needs verification |
| Catalyst | Compact trigger, tight viewport, roomy items; unprefixed Content text (divergence) | Needs verification |
| Spectrum | Compact trigger, 70% content border, `py-1` viewport | Complete |
| Wedges | Compact trigger, offset-1; unpadded viewport (divergence); square items | Complete |
| Lucid | Compact trigger, border-token edge | Complete |
| Snow | Compact trigger, hover+focus highlight, offset dropped (divergence) | Complete |
| Neon | Compact tinted trigger | Complete |
| Libelle | Underline trigger, `h-10` kept | Complete |

## Slider (11/11 styles audited 2026-10-09)

Reports: `components/<style>/slider-vs-default.md`. Matrix:
`components/slider-MATRIX.md`. Imports/props uniform except material's nested halo.

| Style | One line | Status |
|---|---|---|
| Moon | Pure token swap | Complete |
| Lucid | Pure token swap | Complete |
| Carbon | Hairline square rail, solid dot, ring removed (divergence) | Complete |
| Linear | Offset dropped (divergence) | Complete |
| Material | Nested halo span, solid dot, ring-less (exception candidate) | Complete |
| Catalyst | 1.5px rail, 16px thumb | Complete |
| Spectrum | Hairline rail, `border-4` focus | Complete |
| Wedges | 1.5px rail, smallest white thumb, always-on offset-1 | Complete |
| Snow | Offset dropped (divergence) | Complete |
| Neon | Square rail + rectangular thumb | Complete |
| Libelle | Outlined transparent rail, 1px thumb edge | Complete |

## Separator (11/11 styles audited 2026-10-09)

Reports: `components/<style>/separator-vs-default.md`. Matrix:
`components/separator-MATRIX.md`. Line-for-line identity except base color token;
wedges uses unprefixed `bg-border` (divergence). All others Complete; wedges
Needs verification.

## Open divergence / verification list (Batch 1)

- Switch travel over/under-shoots (linear/material/catalyst/spectrum/libelle) —
  class-arithmetic inferences; rendered verification open.
- Catalyst switch dark collision — PARITY_DIVERGENCE, Needs-designer (composition
  analysis done at source level; rendered effect inferred).
- Snow offset-width removals (checkbox/radio/switch/toggle + button) — Needs-designer.
- Linear offset removals (checkbox/toggle; switch keeps ring-2) — Needs-designer.
- Material/wedges toggle offset removals — Needs-designer.
- Neon dot indicators — DESIGN_EXCEPTION candidates (owner decision B); register pending.
- Material halo spans (checkbox/switch) + libelle CheckIcon — exception candidates;
  register pending.
- Dead code: neon `Dot`/`Check` + `Circle` imports, wedges `// </div>` + comments,
  material radio halo comment, carbon duplicate selectors, material toggle dup border,
  linear redundant resets, catalyst `cn(,"")` precedent — all Open.
- Unprefixed/hardcoded tokens: carbon checkbox/switch offsets, linear radio
  `gray-500`/`white`, catalyst radio `--color-gray-500`, spectrum/linear/catalyst
  white dots — token-hygiene review open.
- Snow/libelle arbitrary radii (`5px`/`4px`) — documented, intent open.
- Prior Button open items carry over (snow radius value, libelle border token,
  material offset scope, `ButtonLink` parity).

## Design exceptions

Per owner decisions (recorded, registration pending in `DESIGN_EXCEPTIONS.md`):
neon checkbox/radio dot indicators (decision B); material focus-ring removals
(decision A, STYLE_INTENTIONAL — not an exception filing, listed here for
traceability). Candidates: material halo spans, libelle switch CheckIcon.
Other candidates: switch/slider/select remain in protocol.

## Popover (11/11 styles audited 2026-10-09)

Reports: `components/<style>/popover-vs-default.md`. Matrix:
`components/popover-MATRIX.md`. Full-file diffs (single-line delta each);
structure/defaults/exports/animations uniform. 7 pure swaps (carbon, linear,
moon, lucid, snow, neon, libelle). Non-swap: material + catalyst unprefixed text
(divergence, joint ruling); catalyst/spectrum/wedges input-token borders
(UNVERIFIED). All 11 Complete.

## Hover-Card (11/11 styles audited 2026-10-09)

Reports: `components/<style>/hover-card-vs-default.md`. Matrix:
`components/hover-card-MATRIX.md`. Full-file diffs; no Portal added anywhere.
5 pure swaps (moon, lucid, snow, neon, libelle). Non-swap: bare colorless border
in carbon/linear/material (divergence); unprefixed text in carbon/material/
catalyst (divergence, joint ruling); input-token borders in catalyst/spectrum/
wedges (UNVERIFIED). All 11 Complete.

## Tooltip (11/11 styles audited 2026-10-09)

Reports: `components/<style>/tooltip-vs-default.md`. Matrix:
`components/tooltip-MATRIX.md`. Full-file diffs; animations and all 4 exports
uniform. 6 pure swaps (linear, moon, lucid, snow, neon, libelle). Non-swap:
unprefixed text in carbon/material/catalyst (divergence, joint ruling);
input-token borders in catalyst/wedges, 70% border + `px-2 py-0.5` density in
spectrum (UNVERIFIED). All 11 Complete.

## Dialog (11/11 styles audited 2026-10-09)

Reports: `components/<style>/dialog-vs-default.md`. Matrix:
`components/dialog-MATRIX.md`. Full-file diffs (3–4 lines each). Pure swaps:
linear, lucid, neon. Rest: lighter scrims (carbon/catalyst/spectrum),
borderless panels (material/wedges), popover surfaces (carbon/moon/spectrum),
`-md` radius tier (carbon/spectrum), libelle `font-outfit`, carbon unprefixed
Close offset (divergence), snow Close offset dropped (divergence). Snow Needs
verification; rest Complete.

## Alert-Dialog (11/11 styles audited 2026-10-09)

Reports: `components/<style>/alert-dialog-vs-default.md`. Matrix:
`components/alert-dialog-MATRIX.md`. Own-style `buttonVariants` imports verified
in all 11 (no cross-style imports). Pure swaps: moon, lucid, snow, neon,
libelle. Rest: lighter scrims (carbon/catalyst/spectrum), borderless panels
(carbon/linear/material/wedges), catalyst width-only border, carbon
Cancel→secondary remap (UNVERIFIED). All 11 Complete.

## Sheet (11/11 styles audited 2026-10-09)

Reports: `components/<style>/sheet-vs-default.md`. Matrix:
`components/sheet-MATRIX.md`. Side system, default side (right), durations,
exports, non-exported `sheetVariants` uniform everywhere. Width-only side edges
in carbon/linear/material/catalyst/wedges vs kept colors in
spectrum/moon/lucid/snow/neon/libelle (set-level ruling candidate). Scrims:
carbon gray-950, catalyst black/30, spectrum black/60. Carbon Close ×2 +
Title and catalyst Title unprefixed (divergence, joint ruling). Snow Close
offset dropped (divergence). Snow Needs verification; rest Complete.

## Open divergence / verification list (B2-A)

- Wedges input/textarea focus deletion (no replacement) — Needs-designer.
- Material/catalyst input+textarea offset removals; linear input/textarea/linear-slider/snow-slider offsets — Needs-designer.
- Material + catalyst select unprefixed `text-popover-foreground` — joint ruling
  (shared typo vs shared convention); do not ship migration until ruled.
- Material + wedges select commented viewport `p-1` — remove or restore.
- Wedges separator unprefixed `bg-border` — confirm or re-tokenize.
- Material slider halo + libelle switch CheckIcon exception registration — pending
  (halo spans now recur in checkbox/switch/slider: strengthens the case).
- Lucid `border`-token edges (input/textarea/checkbox/select) — set-level ruling
  candidate (fourth recurrence).
- Carbon slider ring removal; spectrum slider `border-4` focus; neon slider square
  set — UNVERIFIED as documented.

## Dropdown-Menu (11/11 styles audited 2026-10-09)

Reports: `components/<style>/dropdown-menu-vs-default.md`. Matrix:
`components/dropdown-menu-MATRIX.md`. Full-file diffs; icons/animations/Portal/
exports uniform. Pure swaps: lucid/neon/libelle. Rest: roomier rows (most),
unpadded contents (carbon/material/wedges), unprefixed Content text
(carbon/material/catalyst — divergence, joint ruling), kbd/pill Shortcuts
(carbon/wedges), wedges split content borders (divergence), snow `p-1.5` +
restyled label. All 11 Complete.

## Context-Menu (11/11 styles audited 2026-10-09)

Reports: `components/<style>/context-menu-vs-default.md`. Matrix:
`components/context-menu-MATRIX.md`. Full-file diffs; pure swaps moon/lucid/
neon/libelle (+linear except Shortcut). Unprefixed tokens: material Content ×2,
catalyst Content ×2 + Label + Separator (divergences, joint rulings). Density
sets per style (UNVERIFIED). All 11 Complete.

## Menubar (11/11 styles audited 2026-10-09)

Reports: `components/<style>/menubar-vs-default.md`. Matrix:
`components/menubar-MATRIX.md`. Function-wrapper rewrite + `data-slot` in
linear/material/wedges (behavior-neutral, recorded with note). Compact roots
near-universal. Bare content borders (linear/material) and unprefixed texts
(carbon/material/catalyst) are divergences (joint rulings). Libelle Content
`font-outfit`. `displayname` bug shared by all 12 (not a divergence). All 11
Complete.

## Navigation-Menu (11/11 styles audited 2026-10-09)

Reports: `components/<style>/navigation-menu-vs-default.md`. Matrix:
`components/navigation-menu-MATRIX.md`. Full-file diffs (3 lines each).
Faithful clones: spectrum/moon/libelle. Bare Viewport borders in
carbon/linear/material/catalyst/wedges (divergence); unprefixed text/diamond in
carbon/material/catalyst/wedges + linear radius (divergence, joint ruling);
`h-9` triggers in material/wedges/lucid/snow/neon (UNVERIFIED). All 11 Complete.

## Command (11/11 styles audited 2026-10-09)

Reports: `components/<style>/command-vs-default.md`. Matrix:
`components/command-MATRIX.md`. Own-style dialog imports verified in all 11.
Pure swaps: lucid/snow/neon/libelle (+moon except `py-2` items). Unprefixed
texts: carbon Group, material Root, catalyst Root (divergence, joint ruling).
Input `h-10` (spectrum/wedges), tight/roomy groups, state-colored icons,
kbd Shortcut (carbon), wedges unprefixed separator (divergence). All 11 Complete.

## Calendar (11/11 styles audited 2026-10-09)

Reports: `components/<style>/calendar-vs-default.md`. Matrix:
`components/calendar-MATRIX.md`. Own-style `buttonVariants` imports verified in
all 11. Typo map: fixed-to-prefixed (carbon/linear/material/spectrum/wedges/
moon), plain-`md` (catalyst + asymmetric lucid — divergence), preserved verbatim
(snow/neon/libelle — UNVERIFIED); single joint ruling requested, no per-style
normalization. Other: carbon ghost nav + popover root; material/libelle root
font pins (joint ruling); spectrum `/80` outside + missing generic selected wash
(divergence). All 11 Complete.

## Open divergence / verification list (B2-B)

- Unprefixed-token joint ruling set now spans select (2) + popover (2) +
  hover-card (3) + tooltip (3) + sheet Close/Title (3) — recommend one
  consolidated owner ruling after B2-B.
- Sheet side edges: width-only majority (5) vs kept-color minority (6) — one
  set-level ruling.
- Snow Close offsets (dialog + sheet) — Needs-designer (snow pattern).
- Carbon Cancel→secondary remap; libelle dialog `font-outfit`; spectrum tooltip
  density; snow select hover highlight — UNVERIFIED as documented.
- Bare colorless hover-card borders (carbon/linear/material) — Open drift check.

## Table (11/11 styles audited 2026-10-09)

Reports: `components/<style>/table-vs-default.md`. Matrix:
`components/table-MATRIX.md`. Full-file diffs; structure/exports uniform.
Pure swaps: catalyst/spectrum/moon/lucid/snow/libelle (baseline already carries
explicit border colors — correction landed during audit). Rest: carbon accent
chrome + footer-top deletion; linear density + header-color deletion; material/
wedges tall solid-ink headers + accent rows + footer-top deletions; neon wrapper
tint. All 11 Complete.

## Data-Table (11/11 styles audited 2026-10-09)

Reports: `components/<style>/data-table-vs-default.md`. Matrix:
`components/data-table-MATRIX.md`. Own-style table imports verified in all 11;
hook/props/generics/selection/empty-state identical. Sole divergence: linear
bare-border wrapper. All 11 Complete.

## Card (11/11 styles audited 2026-10-09)

Reports: `components/<style>/card-vs-default.md`. Matrix:
`components/card-MATRIX.md`. Pure swaps: linear/catalyst/wedges/moon/lucid.
Rest: carbon `-md` tier; material unprefixed foreground (divergence);
spectrum/neon medium title; snow downsized title; libelle tight header +
restyled title. Structure/exports uniform. All 11 Complete.

## Badge (11/11 styles audited 2026-10-09)

Reports: `components/<style>/badge-vs-default.md`. Matrix:
`components/badge-MATRIX.md`. Full variant tables per style. Pure swap: moon.
`-md` tier in 7 styles. Translucent systems (carbon/linear/material/wedges),
outlined system (spectrum). Unprefixed tokens: linear secondary border, wedges
secondary ink, catalyst outline, libelle destructive border (divergences, joint
ruling). Carbon ring removal + dup border; snow offset removal (divergence).
All 11 Complete except snow (Needs verification).

## Alert (11/11 styles audited 2026-10-09)

Reports: `components/<style>/alert-vs-default.md`. Matrix:
`components/alert-MATRIX.md`. Structure/role/exports uniform (0/11 export
`alertVariants`). Pure swaps in 7 styles. Bare base borders in linear/material/
wedges/catalyst (divergence); catalyst fully-unprefixed destructive variant
(divergence). All 11 Complete.

## Skeleton (11/11 styles audited 2026-10-09)

Reports: `components/<style>/skeleton-vs-default.md`. Matrix:
`components/skeleton-MATRIX.md`. Uniform NO_DIFFERENCE beyond namespace in all
11 (animate-pulse retained everywhere). All 11 Complete.

## Open divergence / verification list (B2-C)

- Unprefixed-token joint ruling set now spans select (2) + popover (2) +
  hover-card (3) + tooltip (3) + sheet (3) + dropdown (3) + context-menu (5) +
  menubar (5) + navigation-menu (9) + command (3) — recommend one consolidated
  owner ruling after B2-C.
- Calendar typo canonical resolution (prefixed tier vs plain `md` vs verbatim) —
  single joint ruling; spectrum's missing selected wash ruled separately.
- Sheet/nav side-edge camps (width-only vs kept-color) — set-level rulings.
- Carbon Cancel→secondary; linear mirrored select layout; material/wedges
  menubar wrappers; libelle/material font pins — UNVERIFIED as documented.
- Snow offsets continue (dialog/sheet Close) — Needs-designer.

## Accordion (11/11 styles audited 2026-10-09)

Reports: `components/<style>/accordion-vs-default.md`. Matrix:
`components/accordion-MATRIX.md`. Full source reads; animations/exports uniform.
Byte-identical: moon/snow/libelle. Rest: filled-hover trigger rows (most);
carbon interactive row (ring/disabled/responsive); spectrum leading-ChevronRight
+ 90° + dead import (divergence); neon Plus/Minus toggle (exception candidate)
+ dead imports (divergence); lucid/neon item border colors. All 11 Complete.

## Aspect-Ratio (11/11 styles audited 2026-10-09)

Reports: `components/<style>/aspect-ratio-vs-default.md`. Matrix:
`components/aspect-ratio-MATRIX.md`. Byte-identical in all 12 (`diff -q`
clean): 7-line alias, no classes. No divergences, no exceptions. All 11 Complete.

## Avatar (11/11 styles audited 2026-10-09)

Reports: `components/<style>/avatar-vs-default.md`. Matrix:
`components/avatar-MATRIX.md`. Root + Fallback lines verified by grep per style.
36px Roots in material/spectrum/wedges/lucid/snow/neon (UNVERIFIED, set-level
ruling candidate); 40px + swap-only in carbon/linear/catalyst/moon/libelle.
Shape/Image/structure/exports uniform. All 11 Complete.

## Breadcrumb (11/11 styles audited 2026-10-09)

Reports: `components/<style>/breadcrumb-vs-default.md`. Matrix:
`components/breadcrumb-MATRIX.md`. Pure swaps in 7 styles. Carbon Slash
separator + unprefixed text (divergence); catalyst unprefixed text + `h-3` icons
(divergence); spectrum tinted glyph; snow text `/` separator + dead import
(divergence). `Elipssis` typo in all 12 (shared-baseline note). All 11 Complete.

## Carousel (11/11 styles audited 2026-10-09)

Reports: `components/<style>/carousel-vs-default.md`. Matrix:
`components/carousel-MATRIX.md`. Full-file diffs (2 changed lines each):
own-style Button imports in all 11, byte-identical otherwise. No dots,
geometry/keyboard/ARIA/prop changes. No divergences, no exceptions. All 11
Complete.

## Chart (11/11 styles audited 2026-10-09)

Reports: `components/<style>/chart-vs-default.md`. Matrix:
`components/chart-MATRIX.md`. No `chart-1..5` literals anywhere; theming via
config + THEMES uniform. Radial-selector map verified by grep: fixed-correct
(carbon/linear/material/catalyst/wedges) vs bug-preserved+prefix
(spectrum/moon/lucid/snow/neon/libelle) — single joint ruling requested.
Unprefixed containers (linear/material/wedges) + carbon/catalyst unprefixed
texts/borders (divergences, joint ruling). Collapsed-vs-kept tooltip borders
noted per file. All 11 Complete.

## Open divergence / verification list (B2-D)

- Table edge-color deletions (linear header, material/wedges/carbon footers) —
  Open drift check; baseline-carries-colors correction recorded.
- Badge `-md` tier (7 styles) + translucent/hoverless systems — set-level ruling
  candidate.
- Badge/asterisk unprefixed tokens (linear/catalyst/wedges/libelle) — joint ruling.
- Material card foreground; catalyst alert destructive set — Needs-designer.
- Libelle button+badge destructive border — joint ruling (shared instance).
- Spectrum calendar wash omission (prior batch) still open.

## Collapsible (11/11 styles audited 2026-10-09)

Reports: `components/<style>/collapsible-vs-default.md`. Matrix:
`components/collapsible-MATRIX.md`. Byte-identical in all 12 (`diff -q`
clean): 11-line pure Radix re-export, no classes. No divergences, no
exceptions. All 11 Complete.

## Pagination (11/11 styles audited 2026-10-09)

Reports: `components/<style>/pagination-vs-default.md`. Matrix:
`components/pagination-MATRIX.md`. Full-file diffs (2 changed lines each):
own-style `ButtonProps, buttonVariants` imports in all 11, byte-identical
otherwise (active mapping, sizes, chevrons, labels). No divergences, no
exceptions. All 11 Complete.

## Progress (11/11 styles audited 2026-10-09)

Reports: `components/<style>/progress-vs-default.md`. Matrix:
`components/progress-MATRIX.md`. Root lines verified by grep per style. Thinner
tracks in 9 styles (`h-1`–`h-3`), off-token tracks in material (`muted`) and
wedges (`input`), `-md` radius in carbon/neon; lucid/libelle pure swaps. Fill
math identical everywhere. All 11 Complete.

## Drawer (11/11 styles audited 2026-10-09)

Reports: `components/<style>/drawer-vs-default.md`. Matrix:
`components/drawer-MATRIX.md`. Bare Content borders in
carbon/linear/material/catalyst/wedges (divergence); lighter scrims in carbon
(+dark) and spectrum; spectrum `-md` popover Content; pure swaps in
moon/lucid/snow/neon/libelle. Scaling/direction/exports uniform. All 11 Complete.

## Form (11/11 styles audited 2026-10-09)

Reports: `components/<style>/form-vs-default.md`. Matrix:
`components/form-MATRIX.md`. Own-style Label imports verified in all 11;
logic/ids/ARIA/exports identical. Pure swaps in 9 styles; carbon + catalyst
unprefixed error tokens (divergence, joint ruling). All 11 Complete.

## Input-OTP (11/11 styles audited 2026-10-09)

Reports: `components/<style>/input-otp-vs-default.md`. Matrix:
`components/input-otp-MATRIX.md`. Carbon underline Group frame; compact slots
(spectrum/lucid/snow/neon, wedges wide); tints (material/catalyst/wedges);
catalyst plain radius (divergence); unprefixed caret in
linear/material/wedges/catalyst (divergence, joint ruling). Separator/imports/
exports uniform. All 11 Complete.

## Open divergence / verification list (B2-E)

- Neon accordion Plus/Minus toggle — DESIGN_EXCEPTION candidate (preserved
  behavior, as neon dots); dead icon imports Open.
- Spectrum accordion icon swap + unprefixed hover; snow `/` separator + dead
  import; carbon Slash separator — UNVERIFIED/divergence as documented.
- Chart radial canonical form — single joint ruling (fix vs preserve).
- Unprefixed-token joint set grows (breadcrumb/nav/carousel-adjacent texts,
  chart value/borders) — consolidated ruling recommended.
- Avatar 36px set; accordion filled-hover rows — set-level ruling candidates.

## Resizable (11/11 styles audited 2026-10-09)

Reports: `components/<style>/resizable-vs-default.md`. Matrix:
`components/resizable-MATRIX.md`. Bare grip borders (carbon/linear) and
unprefixed handle/grip tokens (material/wedges) are divergences; 7 pure swaps.
Group/direction/icons/exports uniform. All 11 Complete.

## Scroll-Area (11/11 styles audited 2026-10-09)

Reports: `components/<style>/scroll-area-vs-default.md`. Matrix:
`components/scroll-area-MATRIX.md`. Single-axis component: only the Thumb
token varies — unprefixed in carbon/material/catalyst/wedges (divergence,
joint ruling), swapped elsewhere. No width/shape/orientation differences.
All 11 Complete.

## Sidebar (11/11 styles audited 2026-10-09)

Reports: `components/<style>/sidebar-vs-default.md`. Matrix:
`components/sidebar-MATRIX.md`. All 66 internal imports resolve own-style.
Shifted menu ladders (carbon/material/catalyst/wedges/neon), framed variants
(material/neon), carbon 767-line dead region (divergence, remove), wedges
unprefixed ×2 (divergence). Constants/state/keyboard/mobile/exports uniform.
All 11 Complete.

## Sonner (11/11 styles audited 2026-10-09)

Reports: `components/<style>/sonner-vs-default.md`. Matrix:
`components/sonner-MATRIX.md`. Third-party config identical everywhere. Pure
swaps in 9 styles; carbon unprefixed trio (divergence, joint ruling);
catalyst elevated surface (UNVERIFIED). All 11 Complete.

## Tabs (11/11 styles audited 2026-10-09)

Reports: `components/<style>/tabs-vs-default.md`. Matrix:
`components/tabs-MATRIX.md`. No two styles share a tab system — every row
restyles list + trigger + active differently (all UNVERIFIED per style; no
set-level graduation available). Dead classes in carbon/material/snow (Open
drift); snow offsets (divergence). Structure/exports uniform. All 11 Complete.

## Typography (11/11 styles audited 2026-10-09)

Reports: `components/<style>/typography-vs-default.md`. Matrix:
`components/typography-MATRIX.md`. All 60 size/weight keys verbatim in all 12;
only line-29 base ink varies (unprefixed in carbon/catalyst — divergence,
joint ruling). Default-mismatch quirk shared by all 12 (not a divergence).
All 11 Complete.

## Open divergence / verification list (B2-F)

- Input-OTP caret unprefixing (linear/material/wedges/catalyst) — joint ruling
  with the unprefixed-token set.
- Form error unprefixing (carbon/catalyst) — joint ruling (catalyst has
  convention evidence).
- Drawer bare Content borders (5 styles) — set-level ruling.
- Catalyst input-OTP plain radius; wedges command/drawer border splits —
  Open drift checks.
- Aspect-ratio/collapsible/pagination byte-identity — no action; freely
  replaceable upstreams.

## Open divergence / verification list (B2-G, final batch)

- Unprefixed-token joint ruling now spans resizable/scroll-area/sonner/
  sidebar/typography (+ all prior sets) — recommend requesting the single
  consolidated owner ruling now that the set is complete.
- Carbon sidebar dead region (767 commented lines) — remove on migration.
- Neon accordion Plus/Minus toggle — DESIGN_EXCEPTION candidate (preserved
  behavior, as neon dots); register with the owner batch.
- Tabs per-style systems — all UNVERIFIED (no graduation available by design).
- All prior open lists (B2-A…B2-F) remain tracked above; nothing was reclassified.

## Audit completeness

All 48 components × 11 styles = **528/528 comparisons documented** (2026-10-09).
No unaudited components remain. Verification of the final count + gate below in
`AUDIT_PROGRESS.md`. (Prior "All other components (Not audited)" block retired —
its six entries are audited above.)
