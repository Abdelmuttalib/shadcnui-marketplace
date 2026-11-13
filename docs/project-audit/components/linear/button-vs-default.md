# Linear Button vs Default

## 1. Audit Metadata

- Style: linear
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/linear/ui/button.tsx:1-59`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Linear combines compact density (same reduced size table as neon) with a restyled
outline variant (shadow, muted hover, dark-mode accent fill) and a tighter focus
offset. `ButtonLink` absent (parity divergence). Inter inherited.

## 3. Base Classes

Prefix `dft` → `linear` plus one change (`linear:8` vs `default:9`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `focus-visible:ring-offset-2` | `focus-visible:ring-offset-1` | Offset width 2 → 1 | Inferred: tighter focus halo | UNVERIFIED, Needs-designer (concern FOCUS) |

## 4. Variants

| Variant | Default | Alternative (`linear:12-21`) | Change | Classification |
|---|---|---|---|---|
| default / destructive / secondary / ghost / link | baseline classes | `linear` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `border border-dft-input bg-dft-background hover:bg-dft-accent hover:text-dft-accent-foreground` | `border border-linear-input bg-linear-background hover:bg-linear-muted hover:text-linear-accent-foreground shadow-sm dark:bg-linear-accent/70 shadow-sm` | Hover fill accent → muted (accent-foreground text kept); `shadow-sm` added (written twice — duplicate class, single rendered effect); `dark:bg-linear-accent/70` added: filled dark-mode resting state | Hover/shadow/dark-fill: UNVERIFIED, Needs-designer (concern COLOR/SHADOW). Duplicated `shadow-sm`: PARITY_DIVERGENCE, Open (concern TECHNICAL) — harmless, likely accidental duplication |

## 5. Sizes

| Size | Default | Alternative (`linear:24-29`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-3.5` (no `py-2`) | Shorter, narrower, no vertical padding |
| sm | `h-9 rounded-dft-md px-3` | `h-8 px-2.5` | Shorter, narrower, no explicit radius |
| lg | `h-11 rounded-dft-md px-8` | `h-10 px-5` | Shorter, narrower, no explicit radius |
| icon / icon-sm / icon-lg | `h-10/9/11` squares | `h-9 w-9` / `h-8 w-8` / `h-10 w-10` | One step smaller |

Density: UNVERIFIED, Needs-designer (concern DIMENSION).

## 6. Interaction States

Hover opacities and `disabled:` unchanged. Focus offset per §3. Dark-mode resting
fill on outline (§4) is linear's only dark-specific button treatment.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumers (`registry/linear/examples/button-link.tsx`,
`internal/sink/components/button-link.tsx`) use `Button` only — no in-repo breakage.
PARITY_DIVERGENCE, Open (concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED.

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical.

## 11. Token Dependencies

`linear-*` namespace. Resolved: `--linear-primary: 55.93% 0.158 274.41` (also ring),
`--linear-radius: 0.5rem` (`app/globals.css:576-602`). Outline hover relies on the
`--linear-muted` vs `--linear-accent` distinction — preserve both.

## 12. Typography and Global Styling

No component-level change. Family Inter via inherited `font-sans`.

## 13. Findings and Upgrade Preservation

Findings: (1) offset-1 focus — UNVERIFIED; (2) outline restyle — UNVERIFIED;
(3) compact sizes — UNVERIFIED; (4) duplicated `shadow-sm` — PARITY_DIVERGENCE
(de-duplicate to one on migration); (5) missing `ButtonLink` — PARITY_DIVERGENCE.
Re-apply 1–3 deliberately; drop one `shadow-sm`.

## 14. Verification

Both files read fully; consumer grep done. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm outline treatment + density as intended linear language.
2. Restore `ButtonLink`?
