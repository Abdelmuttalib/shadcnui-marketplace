# Carbon Button vs Default

## 1. Audit Metadata

- Style: carbon
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/carbon/ui/button.tsx:1-59`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; `ButtonLink` consumer grep across
  `registry/` and `components/`; token reads in `app/globals.css`

## 2. Executive Summary

Carbon keeps Default's 6 variants, 6 sizes, and dimensions, but reworks the focus
system (inset 1px ring, transparent visible-ring with offset-carried color,
dark-mode offsets) and restyles outline (border-only) and secondary (bordered).
The `ButtonLink` export is absent — recorded as parity divergence (drift), since no
in-repo consumer needs it but no design justification exists.

## 3. Base Classes

Default base (`default:9`) vs carbon base (`carbon:8`); prefix `dft` → `cb`
throughout plus:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| (none) | `ring-inset` | Added | Focus ring renders inside the edge | UNVERIFIED, Needs-designer (concern FOCUS; single-instance coherence — suspected intentional, not corroborated) |
| `transition-colors` (retained) | + `transition-all duration-100 ease-in-out` | Added alongside retained class | Inferred: both classes reach `cn()`/`twMerge` at render (`carbon:50`), which treats the transition-property utilities as conflicting and keeps the later one — effectively a fast all-property transition. Mechanism inferred from source, not runtime-verified | UNVERIFIED, Needs-designer (concern TRANSITION) |
| `focus-visible:ring-dft-ring` | `focus-visible:ring-transparent` + `focus:ring-cb-background` / `focus-visible:ring-cb-background` + `focus:ring-offset-cb-ring` / `focus-visible:ring-offset-cb-ring` | Replaced solid ring color with transparent ring; color moved to ring + offset | Inferred: "offset halo" instead of solid ring | UNVERIFIED, Needs-designer (concern FOCUS/COLOR) |
| (ring-2 only) | + `focus:ring-1` / `focus-visible:ring-1` | Added 1px widths | Inferred: thinner focus ring than default 2px | UNVERIFIED, Needs-designer (concern FOCUS) |
| (none) | `dark:focus:ring-offset-1` / `dark:focus-visible:ring-offset-1` | Added | Inferred: tighter dark-mode offset | UNVERIFIED, Needs-designer (concern FOCUS) |

## 4. Variants

| Variant | Default (`default:13-22`) | Alternative (`carbon:12-21`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-dft-primary …` | `bg-cb-primary …` | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| destructive | `bg-dft-destructive …` | `bg-cb-destructive …` | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| outline | `border border-dft-input bg-dft-background hover:bg-dft-accent hover:text-dft-accent-foreground` | `border border-cb-border hover:bg-cb-accent hover:text-cb-accent-foreground [&_svg]:hover:text-cb-accent-foreground` | Background assertion dropped (transparent until hover); border token `input` → `border`; svg-hover color added. Inferred: flatter edge-only resting state, icon follows text on hover | UNVERIFIED, Needs-designer (concern BORDER/COLOR) |
| secondary | `bg-dft-secondary …` (borderless) | `border border-cb-border bg-cb-secondary …` | Border added | UNVERIFIED, Needs-designer (concern BORDER) |
| ghost | hover accent | hover accent | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| link | `text-dft-primary …` | `text-cb-primary …` | Prefix swap | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

All six keys (`carbon:24-29` vs `default:25-30`) identical: `h-10 px-4 py-2`,
`h-9 rounded-cb-md px-3`, `h-11 rounded-cb-md px-8`, icons `h-10/9/11` squares.
NO_DIFFERENCE at component level; rendered corners square via `--cb-radius: 0rem`
(§11).

## 6. Interaction States

Hover opacities (`/90`, `/80`, underline) and `disabled:` handling identical.
Focus system differs per §3. No active-state classes in either file.

## 7. DOM and Component Structure

`Button` render identical (`carbon:45-56` vs `default:46-57`) incl.
`asChild`/Slot. PARITY_EXPECTED for `Button`; `ButtonLink` structure absent (§8).

## 8. Props, Exports, and API

Missing vs baseline: `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`.
Consumer evidence: no file imports `ButtonLink` from any style's `ui/button`;
`registry/carbon/internal/sink/components/button-link.tsx:1-5` and
`registry/carbon/examples/button-link.tsx:1-5` define local demos using `Button`
+ `link` variant only. No in-repo breakage. Classification: PARITY_DIVERGENCE,
Open (concern API) — likely copy drift; a link-with-icons helper is not
Carbon-specific, and no exception is justified. External registry consumers
expecting `ButtonLink` from carbon would break.

## 9. Behavior and Accessibility

`Button` behavior identical. Accessibility notes: the 1px inset transparent-ring
design reduces focus-ring prominence vs default 2px — inferred concern only, no
contrast measurement made; recorded as an accessibility-relevant UNVERIFIED item,
not a failure claim.

## 10. Imports and Dependencies

`next/link` import absent (follows the absent export — consistent, not separate
drift). Remaining imports identical. No dependency changes.

## 11. Token Dependencies

`cb-*` throughout. Resolved: `--cb-primary: 55.65% 0.24 261.95` (blue),
`--cb-ring: 55.65% 0.24 261.95`, `--cb-radius: 0rem` (`app/globals.css:159-185`).
The focus design depends on `--cb-background` (ring color) + `--cb-ring` (offset)
interplay — both must survive migration.

## 12. Typography and Global Styling

No component-level type change (`text-sm font-medium` retained). Family IBM Plex
Sans via inherited `font-carbon` (`registry/styles.tsx:229-230`; `lib/fonts.ts:29-33`).

## 13. Findings and Upgrade Preservation

Findings: (1–5) §3 focus stack — UNVERIFIED/Needs-designer; (6) outline restyle —
UNVERIFIED/Needs-designer; (7) bordered secondary — UNVERIFIED/Needs-designer;
(8) missing `ButtonLink` — PARITY_DIVERGENCE/Open. Migration: re-apply findings
1–7 deliberately (do not silently drop — the focus system is carbon's most
distinctive button trait); decide `ButtonLink` parity instead of copying the absence.

## 14. Verification

Both files read fully; consumer grep performed; token values read. All effects
inferred from source. Prior revision's "intentional" verdicts downgraded per the
strict corroboration bar; prior "tailwind-merge keeps both… last-in-CSS-wins"
wording corrected to the twMerge-conflict mechanism above (still inferred).

## 15. Unresolved Questions

1. Are focus findings 1–5 / outline / secondary deliberate Carbon language or
   accumulated edits? (Needs designer; cross-component recurrence check pending —
   if the pattern recurs in input/select/checkbox, graduate to STYLE_INTENTIONAL.)
2. Should `ButtonLink` be restored for parity?
