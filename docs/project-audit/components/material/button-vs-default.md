# Material Button vs Default

## 1. Audit Metadata

- Style: material
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/material/ui/button.tsx:1-60`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Material's identity is pill shape (`rounded-full`, no per-size radii) with
secondary-toned outline/ghost hovers and wider padding. The focus-offset width
moved from base into the `default` variant only — generality unresolved.
`ButtonLink` absent (parity divergence). Roboto inherited.

## 3. Base Classes

`material:8` vs `default:9`; prefix swap plus:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `rounded-dft-md` | `rounded-full` | Radius utility → pill; per-size radius utilities removed everywhere (§5) | Inferred: fully rounded buttons at all sizes | UNVERIFIED, Needs-designer (concern SHAPE) — visually dominant but still single-component evidence |
| `focus-visible:ring-offset-2` | (absent from base) | Offset width removed from base; `ring-offset-1 ring-offset-material-background` appears in `default` variant only (`material:13`) | Inferred: visible focus offset primarily on primary buttons; other variants render offset color at default (0) width | UNVERIFIED, Needs-designer (concern FOCUS) — placement recorded; generality unresolved |

## 4. Variants

| Variant | Default | Alternative (`material:12-22`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-dft-primary …` | `bg-material-primary …` + `ring-offset-1 ring-offset-material-background` | Prefix swap + variant-scoped offset (see §3) | Offset: UNVERIFIED (above); rest TOKEN_DEPENDENCY |
| destructive | baseline | `material` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `… hover:bg-dft-accent hover:text-dft-accent-foreground` | `border border-material-border hover:bg-material-secondary hover:text-material-secondary-foreground [&_svg]:hover:text-material-secondary-foreground` | Hover accent → secondary; svg-hover follows text | UNVERIFIED, Needs-designer (concern COLOR) |
| secondary | baseline | `material` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| ghost | `hover:bg-dft-accent …` | `hover:bg-material-secondary hover:text-material-secondary-foreground` | Hover accent → secondary | UNVERIFIED, Needs-designer (concern COLOR) |
| link | baseline | `material` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

| Size | Default | Alternative (`material:25-30`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-10 px-5 py-2` | Same height, wider |
| sm | `h-9 rounded-dft-md px-3` | `h-9 px-4` | Same height, wider, no radius utility |
| lg | `h-11 rounded-dft-md px-8` | `h-11 px-8` | Same height/padding, no radius utility |
| icon / icon-sm / icon-lg | `h-10/9/11` squares | Same dimensions | NO_DIFFERENCE (modulo pill shape) |

Padding: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover per §4; `disabled:` unchanged. Focus per §3. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumers use `Button` only — no in-repo breakage. PARITY_DIVERGENCE, Open
(concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED. Note: if variant-scoped offset
is accidental, non-primary buttons lose their focus offset — accessibility-relevant
reason to resolve §15.1 (no failure claimed).

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical.

## 11. Token Dependencies

`material-*` namespace. Resolved: `--material-primary: 0.49 0.1992 260.6` (blue),
`--material-secondary: 0.962 0 255.585`, `--material-radius: 0.75rem` (largely
superseded by `rounded-full` at component level) (`app/globals.css:969-991`).

## 12. Typography and Global Styling

No component-level change. Family Roboto via inherited `font-material`
(`registry/styles.tsx:233-234`; `lib/fonts.ts:35-39`).

## 13. Findings and Upgrade Preservation

Findings: (1) pill shape — UNVERIFIED; (2) variant-scoped offset — UNVERIFIED;
(3) secondary-toned outline/ghost — UNVERIFIED; (4) wider padding — UNVERIFIED;
(5) missing `ButtonLink` — PARITY_DIVERGENCE. Migration: re-apply 1–4 deliberately;
flag offset scope for designer; decide `ButtonLink` parity.

## 14. Verification

Both files read fully; consumer grep done. Prior "intentional" labels downgraded
per the strict bar. Effects inferred from source.

## 15. Unresolved Questions

1. Is variant-scoped `ring-offset-1` deliberate Material behavior or an editing slip?
2. Confirm pill/padding/hover treatments as intended language.
3. Restore `ButtonLink`?
