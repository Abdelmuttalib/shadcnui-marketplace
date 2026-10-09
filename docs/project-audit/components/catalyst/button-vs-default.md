# Catalyst Button vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/catalyst/ui/button.tsx:1-60`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; `text-foreground` convention grep across
  `registry/catalyst/ui/`; consumer grep; token reads

## 2. Executive Summary

Catalyst pairs semibold type with compact density, a shadowed secondary-toned
outline, and a tighter focus offset. Its `link` variant uses the unprefixed legacy
`text-foreground` — the one finding meeting the strict corroboration bar (recurs
across 7+ catalyst files). A `cn(…, "")` no-op arg is recorded drift.
`ButtonLink` absent (parity divergence). Inter inherited.

## 3. Base Classes

`catalyst:8` vs `default:9`; prefix swap plus:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `font-medium` | `font-semibold` | Weight up (only style changing button weight) | Inferred: heavier button text | UNVERIFIED, Needs-designer (concern TYPOGRAPHY) |
| `focus-visible:ring-offset-2` | `focus-visible:ring-offset-1` | Offset width 2 → 1 | Inferred: tighter halo | UNVERIFIED, Needs-designer (concern FOCUS) |

## 4. Variants

| Variant | Default | Alternative (`catalyst:12-21`) | Change | Classification |
|---|---|---|---|---|
| default / destructive / secondary / ghost | baseline | `catalyst` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `border border-dft-input bg-dft-background hover:bg-dft-accent …` | `border border-catalyst-input hover:bg-catalyst-secondary hover:text-catalyst-secondary-foreground shadow-sm` (no background assertion) | Secondary-filled hover + shadow; transparent until hover | UNVERIFIED, Needs-designer (concern COLOR/SHADOW) |
| link | `text-dft-primary underline-offset-4 hover:underline` | `text-foreground underline-offset-4 hover:underline` | Legacy unprefixed token replaces namespaced primary. Convention evidence: `text-foreground` recurs in `alert.tsx:7,11`, `badge.tsx:17`, `typography.tsx:29`, `breadcrumb.tsx:53,69`, `sheet.tsx:111`, `context-menu.tsx:147`. Inferred: link color follows the global legacy theme, not the catalyst namespace | STYLE_INTENTIONAL, Corroborated (concern COLOR/GLOBAL_STYLE). Migration must preserve the legacy token — do not "correct" it without designer sign-off |

## 5. Sizes

| Size | Default | Alternative (`catalyst:24-29`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-3 py-2` | Shorter, narrower |
| sm | `h-9 rounded-dft-md px-3` | `h-8 rounded-catalyst-md px-2` | Shorter, notably tight padding |
| lg | `h-11 rounded-dft-md px-8` | `h-10 rounded-catalyst-md px-7` | Shorter, narrower |
| icon / icon-sm / icon-lg | `h-10/9/11` squares | `h-9 w-9` / `h-8 w-8` / `h-10 w-10` | One step smaller |

Density: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover per §4; focus offset per §3; `disabled:` unchanged. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render matches baseline except `cn(buttonVariants({ variant, size,
className }), "")` (`catalyst:50`): the empty-string argument is a no-op.
PARITY_EXPECTED for structure; the `""` is PARITY_DIVERGENCE, Open (concern
TECHNICAL) — harmless, likely accidental; drop on migration.

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumers use `Button` only — no in-repo breakage. PARITY_DIVERGENCE, Open
(concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED.

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical.

## 11. Token Dependencies

`catalyst-*` namespace. Resolved: `--catalyst-primary: 0.274 0.006 286.033`
(near-black), `--catalyst-radius: 0.6rem`; plus legacy `--foreground` via the link
variant (definition lives in the unprefixed `:root`/`.dark` blocks).

## 12. Typography and Global Styling

Weight change is component-level (§3). Family Inter via inherited `font-sans`.

## 13. Findings and Upgrade Preservation

Findings: (1) semibold — UNVERIFIED; (2) offset-1 — UNVERIFIED; (3) outline
restyle — UNVERIFIED; (4) compact sizes — UNVERIFIED; (5) legacy link token —
STYLE_INTENTIONAL/Corroborated (preserve); (6) `cn(,"")` — PARITY_DIVERGENCE
(drop); (7) missing `ButtonLink` — PARITY_DIVERGENCE (decide parity).

## 14. Verification

Both files read fully; convention grep performed (7+ files); consumer grep done.
Effects inferred from source.

## 15. Unresolved Questions

1. Confirm findings 1–4 as intended catalyst language.
2. Restore `ButtonLink`?
