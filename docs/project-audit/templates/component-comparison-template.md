# Component Comparison Report Template

One file per alternative style per component:
`docs/project-audit/components/<style>/<component>-vs-default.md`
(11 files per component; 517 total at completion).
Plus one matrix per component: `docs/project-audit/components/<component>-MATRIX.md`.

Copy this template verbatim. Keep all section headings, in order. If a category
genuinely does not apply, write `Not applicable — <reason>`. If inspected and
identical, write `PARITY_EXPECTED — no difference found after source inspection`.
Never delete a section to hide a finding. Do not invent findings to fill sections.

---

# <Style> <Component> vs Default

## 1. Audit Metadata

- Style:
- Component:
- Baseline source: `registry/default/ui/<file>.tsx:<lines>`
- Alternative source: `registry/<style>/ui/<file>.tsx:<lines>`
- Audit date:
- Status: Complete | Needs verification
- Method: full source read of both files (+ greps listed in §14)

## 2. Executive Summary

≤5 lines. No new facts — only findings detailed below.

## 3. Base Classes

Compare the base `cva` string (or equivalent) class by class.
Table columns: `Default` | `Alternative` | `Exact change` | `Inferred effect` |
`Classification`. Prefix-only swaps (`dft` → style prefix) go here once as a
single TOKEN_DEPENDENCY row, not repeated per class.

## 4. Variants

One subsection per variant key in the baseline file, in baseline order.
Per variant record: default classes, alternative classes, added / removed /
replaced (exact strings), token references, resulting difference or
`PARITY_EXPECTED`. New variant keys in the alternative get their own subsection.

## 5. Sizes

Same row format as §4, one subsection per size key. Record exact height, width,
padding, gap, radius-utility, and icon-dimension values. Never infer identity
from equal labels.

## 6. Interaction States

Hover, focus, focus-visible, active, disabled, selected/checked/open (as
applicable), dark-mode classes. State the exact classes and the inferred effect.
Label every effect `inferred from source` unless browser-verified (none is
planned; do not claim it).

## 7. DOM and Component Structure

Rendered elements, wrappers, conditional rendering, Slot/`asChild` handling,
composition order. `PARITY_EXPECTED` or a PARITY_DIVERGENCE / DESIGN_EXCEPTION
finding with justification.

## 8. Props, Exports, and API

Exports added/removed, prop/type changes, new or removed variants/sizes in the
public API, default-variant changes. Missing baseline exports (e.g. helper
components) are PARITY_DIVERGENCE unless a DESIGN_EXCEPTION is justified —
never assume intent. Cite consumer-grep evidence for impact.

## 9. Behavior and Accessibility

Focus visibility, keyboard behavior, ARIA/semantics, disabled behavior,
contrast-relevant tokens (no pass/fail claims without measured colors),
ref forwarding, display names. Source-level facts only.

## 10. Imports and Dependencies

Added/removed/changed imports and their consequence (e.g. dropped `next/link`
follows a dropped export; unused imports are flagged TECHNICAL drift).
Do not list unchanged imports beyond a one-line parity statement.

## 11. Token Dependencies

Every style-specific token referenced, its definition location
(`app/globals.css:<line>` or `app/themes.css:<line>`), raw value, resolved
value or `unresolved`, and which finding(s) depend on it. A prefix swap is
not a visual difference until values are compared.

## 12. Typography and Global Styling

Component-level font/weight/size/leading/tracking changes vs inherited
family from `getStyleFontClassname` (`registry/styles.tsx:225-254`, loader in
`lib/fonts.ts`). Cite which level each difference comes from.

## 13. Findings and Upgrade Preservation

Numbered finding list; each finding carries classification + status
(see `../FINDING_CLASSIFICATIONS.md`). Then: exact items a migration must
re-apply, items safe to drop (e.g. no-op args, duplicated classes), and open
decisions flagged for a designer.

## 14. Verification

What was read, what greps/searches were run, what was inferred vs verified,
assumptions made. All visual effects labeled inferred unless stated otherwise.

## 15. Unresolved Questions

Numbered list, or `None.` An intent verdict without corroborating evidence
belongs here, not in the findings.
