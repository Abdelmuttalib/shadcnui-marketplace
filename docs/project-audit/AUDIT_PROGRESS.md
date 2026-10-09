# AUDIT_PROGRESS

Status legend: Not started / In progress / Complete / Blocked / Needs verification / Not applicable.

## Stage 1 — Repository discovery (Complete)

| Area | Status | Notes |
|---|---|---|
| Root configs, versions, scripts | Complete | package.json, tailwind.config.ts, next.config.mjs, components.json, registry.json read |
| Registry + style-selection logic | Complete | registry/styles.tsx, hooks/use-style-store.tsx, registry/registry-styles.ts, registry-ui.ts |
| Default + carbon + neon button | Complete | Baseline + 2 spot-checks read; other 9 styles' buttons not yet read |
| Global CSS + tokens (skim) | Complete | globals.css (1903 lines) skimmed; full token extraction pending Stage 4 |
| Fonts + tailwind mapping | Complete | lib/fonts.ts, font switch, tailwind fontFamily; unverified loaders noted |
| Routing + page examples (index) | Complete | Route groups + renderStylePageExample fallback quirks recorded |
| Git history (read-only) | Complete | 15-commit skim; no changes made |
| Initial docs (6 files) | Complete | README, PROJECT_OVERVIEW, REPOSITORY_STRUCTURE, STYLE_INVENTORY, COMPONENT_INVENTORY, this file |

## Per-style / per-component auditing

| Area | Style | Component | Status | Notes |
|---|---|---|---|---|
| Baseline | default | button | Complete | registry/default/ui/button.tsx:1-106 read; ButtonLink API noted |
| Pilot audit | carbon | button | Complete | components/carbon/button-vs-default.md; inset/halo focus, bordered secondary, ButtonLink absent (drift) |
| Pilot audit | linear | button | Complete | components/linear/button-vs-default.md; compact sizes, shadowed outline, offset-1 |
| Pilot audit | material | button | Complete | components/material/button-vs-default.md; pill shape, wide padding, secondary ghost |
| Pilot audit | catalyst | button | Complete | components/catalyst/button-vs-default.md; semibold, legacy-token link (convention), cn("") quirk |
| Pilot audit | spectrum | button | Complete | components/spectrum/button-vs-default.md; densest pill, vestigial next/link import |
| Pilot audit | wedges | button | Complete | components/wedges/button-vs-default.md; /50 translucent hovers, offset-1 |
| Pilot audit | moon | button | Complete | components/moon/button-vs-default.md; token-swap only, full ButtonLink parity |
| Pilot audit | lucid | button | Complete | components/lucid/button-vs-default.md; universal border system, ButtonLink parity |
| Pilot audit | snow | button | Needs verification | components/snow/button-vs-default.md; offset-width absence + radius mismatch unresolved |
| Pilot audit | neon | button | Complete | components/neon/button-vs-default.md; compact sizes, token swap |
| Pilot audit | libelle | button | Needs verification | components/libelle/button-vs-default.md; text-base, tinted destructive; unprefixed border token unresolved |
| Pilot matrix + index | all | button | Complete | components/button-MATRIX.md, COMPONENT_COMPARISON_INDEX.md |
| Batch 1 audit | all styles | checkbox (11 docs + matrix) | Complete | components/<style>/checkbox-vs-default.md; snow Needs verification (offset) |
| Batch 1 audit | all styles | radio-group (11 docs + matrix) | Complete | components/<style>/radio-group-vs-default.md; snow Needs verification (offset) |
| Batch 1 audit | all styles | switch (11 docs + matrix) | Complete | components/<style>/switch-vs-default.md; catalyst/libelle/snow Need verification |
| Batch 1 audit | all styles | toggle (11 docs + matrix) | Complete | components/<style>/toggle-vs-default.md; snow Needs verification (on-state+offset) |
| Batch 1 audit | all styles | toggle-group (11 docs + matrix) | Complete | Own-style imports verified by diff; uniform parity, no divergences |
| B2-A audit | all styles | input/textarea/label/select/slider/separator (66 docs + 6 matrices) | Complete | components/<style>/{input,textarea,label,select,slider,separator}-vs-default.md; wedges input/textarea + material/catalyst select Need verification |
| B2-B audit | all styles | dialog/alert-dialog/popover/hover-card/tooltip/sheet (66 docs + 6 matrices) | Complete | components/<style>/{dialog,alert-dialog,popover,hover-card,tooltip,sheet}-vs-default.md; snow dialog+sheet Need verification |
| B2-C audit | all styles | dropdown-menu/context-menu/menubar/navigation-menu/command/calendar (66 docs + 6 matrices) | Complete | components/<style>/{dropdown-menu,context-menu,menubar,navigation-menu,command,calendar}-vs-default.md; all Needs-verification items tracked in index |
| B2-D audit | all styles | table/data-table/card/badge/alert/skeleton (66 docs + 6 matrices) | Complete | components/<style>/{table,data-table,card,badge,alert,skeleton}-vs-default.md; snow badge Need verification |
| B2-E audit | all styles | accordion/aspect-ratio/avatar/breadcrumb/carousel/chart (66 docs + 6 matrices) | Complete | components/<style>/{accordion,aspect-ratio,avatar,breadcrumb,carousel,chart}-vs-default.md; aspect-ratio byte-identical, carousel import-verified |
| B2-F audit | all styles | collapsible/drawer/form/input-otp/pagination/progress (66 docs + 6 matrices) | Complete | components/<style>/{collapsible,drawer,form,input-otp,pagination,progress}-vs-default.md; collapsible byte-identical, pagination import-verified |
| B2-G audit | all styles | resizable/scroll-area/sidebar/sonner/tabs/typography (66 docs + 6 matrices) | Complete | components/<style>/{resizable,scroll-area,sidebar,sonner,tabs,typography}-vs-default.md; typography 60-key parity, sidebar import-verified |
| Component audit | all styles | other 0 components | Complete | All 48 components audited — see closeout below |
| Token audit | all | global tokens | Not started | STYLING_ARCHITECTURE, DESIGN_TOKEN_INVENTORY, STYLE_TOKEN_COMPARISON, TYPOGRAPHY_COMPARISON pending |
| Registry/routing audit | all | pages/showcases | Not started | STYLE_REGISTRY_AND_ROUTING, PAGE_EXAMPLES_AND_SHOWCASES pending |
| Index + upgrade guide | all | all | Not started | COMPONENT_COMPARISON_INDEX, UPGRADE_PRESERVATION_GUIDE, KNOWN_ISSUES pending |

## Blockers / open questions

1. Radius mismatches (default, snow) — Needs verification.
2. Per-style dark-mode coverage (globals vs themes.css) — Needs verification.
3. charts/board fallback intent (shared vs accidental) — Needs verification.
4. Unverified font families in tailwind config — Needs verification.
5. `components/ui` baseline provenance — Needs verification.
6. `utils/`, `code/`, `pages/`, `__registry__/` vs `public/r` — Not started.

## Resume point

Stage 1 complete; Button pilot complete and revised to the standard template
(11 reports + matrix + index, 2026-10-09). Methodology standardized: `templates/`,
`FINDING_CLASSIFICATIONS.md`, `METHODOLOGY.md`, `DESIGN_EXCEPTIONS.md` created; strict
corroboration bar applied (only catalyst/link is STYLE_INTENTIONAL).
Open: snow offset-width divergence + snow radius value; libelle border-token intent;
material offset-scope generality; ButtonLink parity (8 styles); intent corroboration
for all UNVERIFIED styling pending cross-component recurrence.
Batch 1 done 2026-10-09: 55 comparison docs (11 each for checkbox, radio-group, switch,
toggle, toggle-group) + 5 matrices; index/inventory updated. (Superseded: 132/528 after B2-A.)
Owner decisions applied: material ring removal = STYLE_INTENTIONAL (checkbox/radio/switch);
neon dot indicators = approved DESIGN_EXCEPTIONs (checkbox/radio only, per DESIGN_EXCEPTIONS.md).
Open from Batch 1: switch travel inferences (5 styles, rendered check needed); catalyst
switch dark collision; snow/linear/material/wedges offset removals; dead-code cleanup list;
token-hygiene review (hardcoded/unprefixed tokens); exception registration (neon dots,
material halos, libelle CheckIcon).
B2-A done 2026-10-09: 66 comparison docs + 6 matrices (input, textarea, label, select,
slider, separator); index/inventory updated. (Superseded: 198/528 after B2-B.)
B2-B done 2026-10-09: 66 comparison docs + 6 matrices (dialog, alert-dialog,
popover, hover-card, tooltip, sheet); index/inventory updated. (Superseded: 264/528 after B2-C.)
B2-C done 2026-10-09: 66 comparison docs + 6 matrices (dropdown-menu, context-menu,
menubar, navigation-menu, command, calendar); index/inventory updated. 264/528
comparisons complete. Full-file diffs run per file; own-style command→dialog,
calendar→button, alert-dialog→button imports verified; menubar displayname bug
shared by all 12 (not a divergence). Notable: calendar dfs-typo map (fixed/plain/
preserved — single joint ruling requested); unprefixed-token set grows to ~15 files
(consolidated ruling recommended); spectrum calendar wash missing. (Superseded:
330/528 after B2-D.)
B2-D done 2026-10-09: 66 comparison docs + 6 matrices (table, data-table, card,
badge, alert, skeleton); index/inventory updated. 330/528 comparisons complete.
Full-file diffs run per file; own-style data-table→table imports verified in all
11; baseline-carries-border-colors correction landed for table (prefix swaps, not
additions). Notable: badge variant tables per style (translucent/outlined systems,
unprefixed tokens — joint ruling); catalyst alert unprefixed set; skeleton uniform
swap; card title restyles. (Superseded: 396/528 after B2-E.)
B2-E done 2026-10-09: 66 comparison docs + 6 matrices (accordion, aspect-ratio,
avatar, breadcrumb, carousel, chart); index/inventory updated. 396/528 comparisons
complete. Aspect-ratio byte-identical in all 12 (diff-verified); carousel
own-style Button imports verified with 2-line diffs; chart radial-selector map
verified by grep (fixed vs bug-preserved); Elipssis typo in all 12 (shared note).
Notable: neon accordion Plus/Minus toggle (exception candidate); spectrum
accordion icon swap; snow text separator; carbon Slash separator.
B2-F done 2026-10-09: 66 comparison docs + 6 matrices (collapsible, drawer, form,
input-otp, pagination, progress); index/inventory updated. 462/528 comparisons
complete. Collapsible byte-identical in all 12 (diff-verified); pagination
own-style Button imports verified with 2-line diffs; form own-style Label imports
verified; drawer bare Content borders in 5 styles; input-OTP caret unprefixing in
4 styles (joint ruling); progress thinner tracks in 9 styles.
B2-G done 2026-10-09: 66 comparison docs + 6 matrices (resizable, scroll-area,
sidebar, sonner, tabs, typography); index/inventory updated. 528/528 comparisons
complete. Grip/handle + Thumb + sidebar import/size + sonner classNames + tabs
trigger/list + typography line-29/key-parity lines verified by direct grep.
Notable: carbon sidebar dead region (remove); tabs per-style systems (no
graduation); chart/calendar typo + radial rulings still open.

## Audit closeout

Component audit complete 2026-10-09: 48 components × 11 styles = 528/528
comparison documents + 48 matrices on disk. Remaining owner work (out of audit
scope): consolidated unprefixed-token ruling, typo/selector canonical rulings,
exception registrations (neon dots approved; Plus/Minus, halos, CheckIcon
pending), travel-geometry rendered checks, ButtonLink parity. No application
files modified in any batch (only `docs/project-audit/` changed).
