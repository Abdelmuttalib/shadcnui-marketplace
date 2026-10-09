# Neon Button vs Default

## 1. Audit Metadata

- Style: neon
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/neon/ui/button.tsx:1-60`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Neon is a token swap plus a uniform density reduction: every size shrinks one step
with tighter padding, and sm/lg drop the explicit radius utility. Variants are
prefix-only swaps. `ButtonLink` absent (parity divergence, drift). Poppins inherited;
square corners via tokens.

## 3. Base Classes

Prefix `dft` → `neon` only (`neon:8` vs `default:9`). Focus (`ring-2`,
`offset-2`), transitions, disabled, `gap-2`, `[&_svg]:size-4` unchanged.
TOKEN_DEPENDENCY, Corroborated.

## 4. Variants

All six variants (`neon:12-21`) prefix swaps only — including outline keeping
`bg-neon-background`. No variant restyling. TOKEN_DEPENDENCY, Corroborated.

## 5. Sizes

| Size | Default (`default:25-30`) | Alternative (`neon:24-29`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-3.5 py-2` | Shorter, narrower |
| sm | `h-9 rounded-dft-md px-3` | `h-8 px-2.5` | Shorter, narrower, no explicit radius class (inherits base `rounded-neon-md`) |
| lg | `h-11 rounded-dft-md px-8` | `h-10 px-6` | Shorter, narrower, no explicit radius class |
| icon | `h-10 w-10` | `h-9 w-9` | One step smaller |
| icon-sm | `h-9 w-9` | `h-8 w-8` | One step smaller |
| icon-lg | `h-11 w-11` | `h-10 w-10` | One step smaller |

Density: UNVERIFIED, Needs-designer (concern DIMENSION) — coherent compact identity
shared with linear, but intent corroboration across components not yet established.

## 6. Interaction States

Hover, focus, disabled identical to baseline. NO_DIFFERENCE. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumer evidence: `registry/neon/examples/button-link.tsx` uses `Button` + `link`
variant only — no in-repo breakage. PARITY_DIVERGENCE, Open (concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button`. PARITY_EXPECTED. No ARIA in either file.

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical. No
dependency changes.

## 11. Token Dependencies

`neon-*` throughout. Resolved: `--neon-primary: 63.01% 0.1238 162.83` (green),
`--neon-ring: 75.01% 0.1238 162.83`, `--neon-radius: 0rem` (`app/globals.css:538-564`).

## 12. Typography and Global Styling

No component-level change (`text-sm font-medium` retained). Family Poppins via
inherited `font-poppins` (`registry/styles.tsx:247-248`; `lib/fonts.ts:11-15`).

## 13. Findings and Upgrade Preservation

Findings: (1) compact size table — UNVERIFIED/Needs-designer; (2) missing
`ButtonLink` — PARITY_DIVERGENCE/Open. Migration: re-apply all six sizes and the
`neon` namespace; decide `ButtonLink` parity.

## 14. Verification

Both files read fully; consumer grep done. Effects inferred from source.

## 15. Unresolved Questions

1. Confirm compact density as intended neon language (cross-component check pending).
2. Restore `ButtonLink`?
