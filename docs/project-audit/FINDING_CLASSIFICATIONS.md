# Finding Classification System

Every finding carries **one classification** (what it is) and **one status**
(how resolved it is). Classification ≠ status: a `PARITY_DIVERGENCE` can be
`Accepted-risk`, and a `STYLE_INTENTIONAL` still passes through `Open` first.

## Classifications

| Label | Meaning | When to use |
|---|---|---|
| STYLE_INTENTIONAL | Deliberate visual customization | **Strict bar only**: corroborated by recurrence across ≥2 components in the style, token/palette-system coherence, or a style-wide convention verified by grep. Single-instance coherence is not enough — use UNVERIFIED. |
| PARITY_EXPECTED | Shared foundation property | Imports, primitives, behavior, defaults that correctly match the baseline. Also used for inspected-and-identical categories. |
| PARITY_DIVERGENCE | Unexpected API/behavior/structure drift | Missing exports, changed props, dropped defaults, altered primitives, a11y-affecting changes, unused imports, duplicated classes — anything breaking the shared-foundation rule without a justified exception. |
| DESIGN_EXCEPTION | Justified structural customization | Structural implementation necessary to reproduce the design system (e.g. checkbox/radio-group rework). Requires: (1) documented necessity with evidence beyond the style name, (2) verified public behavior + accessibility. Registered in `DESIGN_EXCEPTIONS.md`. |
| TOKEN_DEPENDENCY | Class-name swap resolved via tokens | A prefix/namespace swap. Not a visual finding until the underlying values are compared; link the definition and resolved value or mark values `unresolved`. |
| UNVERIFIED | Cannot be established from source | Effect or intent not determinable by inspection (needs designer input or browser check). Always paired with status `Needs-designer`. |
| NO_DIFFERENCE | Verified absence | Category inspected, alternative identical to baseline. Never assumed — only after reading both implementations. |

## Statuses

| Status | Meaning |
|---|---|
| Open | Recorded, not yet corroborated or decided |
| Corroborated | Evidence gathered (recurrence, grep, token resolution) |
| Accepted-risk | Known divergence deliberately left as-is (record who decided, when) |
| Needs-designer | Requires design intent confirmation or browser verification |

## Multiple classifications

One finding may carry a primary classification plus a concern tag from the
legacy set (`DIMENSION`, `SHAPE`, `COLOR`, `TYPOGRAPHY`, `BORDER`, `SHADOW`,
`FOCUS`, `INTERACTION`, `TRANSITION`, `STRUCTURE`, `API`, `ACCESSIBILITY`,
`GLOBAL_STYLE`, `TECHNICAL`). Concern tags describe *what area* changed;
the classification states *what the change means*. Example: carbon's missing
`ButtonLink` is `PARITY_DIVERGENCE` (classification) with concern `API`.

## Worked example (Button/carbon focus stack)

- Finding "inset 1px ring + transparent ring + offset halo": single-component
  coherence only → classification `UNVERIFIED` (suspected intentional),
  status `Needs-designer`, concern `FOCUS`. It graduates to `STYLE_INTENTIONAL`
  / `Corroborated` only if the pattern recurs in input/select/checkbox or a
  designer confirms. This rule applies retroactively to all Button reports.
