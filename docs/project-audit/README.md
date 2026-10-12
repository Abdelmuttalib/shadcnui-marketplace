# Project Audit — Shadcn Marketplace

Investigation + documentation task. **Do not modify application source files.**
Only files under `docs/project-audit/` may be created/updated by this audit.

## Entry point

| Document | Contents |
|---|---|
| `PROJECT_OVERVIEW.md` | What the app does, stack, architecture, routing, state, styling, registry, fonts, themes, build workflow, constraints, debt |
| `REPOSITORY_STRUCTURE.md` | Annotated directory/file map with source references |
| `STYLE_INVENTORY.md` | All 12 verified styles: prefix, font, radius, dirs, status |
| `COMPONENT_INVENTORY.md` | 48-component × 12-style coverage matrix (Stage 1: presence verified, diffs not yet audited) |
| `AUDIT_PROGRESS.md` | Stage tracker; resume point for the next pass |
| `METHODOLOGY.md` | Binding audit process, architectural rule, validation gate |
| `FINDING_CLASSIFICATIONS.md` | Classification + status system (replaces §19 tags as verdicts) |
| `DESIGN_EXCEPTIONS.md` | Register of justified structural exceptions + candidate queue |
| `templates/` | Standard comparison report template |
| `COMPONENT_COMPARISON_INDEX.md` | Per-component audit index (Button complete, rest pending) |
| `components/button-MATRIX.md` | Consolidated Button cross-style matrix |
| `baselines/` | Versioned immutable snapshots of audited styles (see `baselines/README.md`) |

## Later stages (not yet written)

`DEFAULT_BASELINE.md`, `STYLING_ARCHITECTURE.md`, `DESIGN_TOKEN_INVENTORY.md`,
`STYLE_TOKEN_COMPARISON.md`, `TYPOGRAPHY_COMPARISON.md`,
`STYLE_REGISTRY_AND_ROUTING.md`, `PAGE_EXAMPLES_AND_SHOWCASES.md`,
`UPGRADE_PRESERVATION_GUIDE.md`, `KNOWN_ISSUES_AND_INCONSISTENCIES.md`,
`data/*`, `scripts/*`.

## Method rules (binding)

1. Default is the baseline: every comparison is `alternative → default`.
2. Inspect source before concluding; cite `path:line`.
3. Distinguish **verified fact** vs **inferred visual consequence** vs **hypothesis**.
4. Record small differences exactly (class-level); classify per
   `FINDING_CLASSIFICATIONS.md` (strict corroboration bar for intent).
5. Never mark "identical" without reading both files.
6. Structural/behavioral differences are `PARITY_DIVERGENCE` by default;
   only a justified, registered exception becomes `DESIGN_EXCEPTION`.
