# Audit Methodology

Binding for all component comparisons. Supplements `README.md` method rules and
`FINDING_CLASSIFICATIONS.md`.

## Architectural rule

All styles share the same component API, behavior, accessibility, and dependency
foundation unless a justified component-specific exception is necessary. Visual
styling, variants, sizes, tokens, and interaction appearance may differ when they
implement the intended style. **A structural or behavioral difference requires
explicit justification** — it is recorded as `PARITY_DIVERGENCE` by default and
only becomes `DESIGN_EXCEPTION` via the protocol in `DESIGN_EXCEPTIONS.md`.

## Baseline

Default (`registry/default/ui/`) is the baseline for all 11 alternatives.
Direction is always alternative → default. Never compare alternatives against
each other as primary evidence (shared patterns may be noted secondarily).

## Process per component

1. Read the default file fully; record the parity baseline (exports, props,
   defaults, primitives, a11y attributes, variant/size keys).
2. Read all 11 alternative files fully. Script-extracted diffs
   (`scripts/`, read-only) are inputs, never findings.
3. Write 11 reports per the template plus the component matrix; re-check intent
   verdicts in a cross-style pass (corroboration often appears only then).
4. Run the validation gate (below) before marking Complete.

## Token discipline

A class-name (prefix) change is `TOKEN_DEPENDENCY`, not a visual difference.
Every color/radius claim cites the definition (`app/globals.css:<line>`) and the
resolved value, or is marked values-`unresolved`. Never equate color formats
without verifying equivalence.

## Effect discipline

Source-level facts, inferred effects, and browser-verified effects are labeled
as such. No browser verification is planned; do not claim it.

## Validation gate (per component, before Complete)

1. All 11 reports exist and follow the template (all 15 sections present).
2. Every `path:line` resolves; quoted classes match source.
3. Every baseline variant/size key appears in each report.
4. No browser language; no invented intent (strict corroboration bar).
5. Matrix claims ⊆ report claims; index agrees with reports; progress agrees
   with files on disk (script-counted: 48 × 11 = 528 docs + 48 matrices).
6. `git status` shows only `docs/project-audit/`.

## Scope control

528 comparison docs + 48 matrices is the complete audit. No placeholder reports:
a file exists only when its audit is done. No application-code changes, ever.
