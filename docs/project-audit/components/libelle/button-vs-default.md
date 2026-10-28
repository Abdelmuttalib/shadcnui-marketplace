# Libelle Button vs Default

## 1. Audit Metadata

- Style: libelle
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/libelle/ui/button.tsx:1-106`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Needs verification
- Method: full source read of both files; token reads

## 2. Executive Summary

Libelle keeps full API parity (`ButtonLink` included) and default dimensions, but
makes the boldest variant moves: base type steps to `text-base`, destructive
becomes a tint, outline becomes primary-colored. The tint's border token
(`border-destructive/30`, unprefixed legacy) is unresolved. Outfit inherited;
square corners.

## 3. Base Classes

`libelle:9` vs `default:9`: prefix swap plus:

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `text-sm` | `text-base` | Font size up (only style changing button size) | Inferred: larger button text at all sizes | UNVERIFIED, Needs-designer (concern TYPOGRAPHY) |

## 4. Variants

| Variant | Default | Alternative (`libelle:12-22`) | Change | Classification |
|---|---|---|---|---|
| default / secondary / ghost / link | baseline | `libelle` equivalents | Prefix swap | TOKEN_DEPENDENCY, Corroborated |
| destructive | `bg-dft-destructive text-dft-destructive-foreground hover:bg-dft-destructive/90` (opaque solid) | `border border-destructive/30 bg-libelle-destructive/15 text-libelle-destructive hover:bg-libelle-destructive/35` | Solid → translucent tint (`/15` resting, `/35` hover) with border. Note `border-destructive/30` references the **unprefixed legacy** `--destructive` token while every other class is `libelle-*` | Tint design: UNVERIFIED, Needs-designer (concern COLOR). Unprefixed border token: PARITY_DIVERGENCE, Needs-designer — catalyst uses unprefixed tokens as verified convention, but no such convention is established for libelle (single instance), so this stays divergence pending ruling, not assumed convention |
| outline | `border border-dft-input bg-dft-background …` (neutral) | `border border-libelle-primary text-libelle-primary hover:bg-libelle-accent hover:text-libelle-accent-foreground` (no bg assertion) | Primary-colored edge + text | UNVERIFIED, Needs-designer (concern COLOR) |

## 5. Sizes

All six keys (`libelle:25-30`) identical to default (`h-10/9/11`, same paddings,
same radius utilities). NO_DIFFERENCE at component level; square via
`--libelle-radius: 0rem`.

## 6. Interaction States

Hover opacities per §4 (tint `/35` vs solid `/90` on destructive); focus
(`ring-2`, `offset-2`) and `disabled:` unchanged. No dark-mode classes.

## 7. DOM and Component Structure

`Button` and `ButtonLink` renders match baseline; `Button` uses `<Comp …></Comp>`
instead of self-closing (`libelle:54`) — no behavioral effect. PARITY_EXPECTED;
the tag style is a no-op, not recorded as divergence.

## 8. Props, Exports, and API

Full parity: `Button`, `ButtonLink`, `buttonVariants`, both prop interfaces incl.
`iconLeft`/`iconRight`, `next/link` import. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Identical to baseline. PARITY_EXPECTED. Tint-on-light contrast noted for future
measurement, not claimed.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`libelle-*` namespace. Resolved: `--libelle-primary: 0.3 0.205674 264.052` (deep
blue), `--libelle-destructive: 0.54 0.218255 29.4805`, `--libelle-radius: 0rem`
(`app/globals.css:230-258`); plus legacy `--destructive` via the tint border (§4).

## 12. Typography and Global Styling

`text-base` is component-level (§3). Family Outfit via inherited `font-outfit`
(`registry/styles.tsx:249-250`; `lib/fonts.ts:48-52`).

## 13. Findings and Upgrade Preservation

Findings: (1) `text-base` — UNVERIFIED; (2) tinted destructive — UNVERIFIED;
(3) unprefixed tint border — PARITY_DIVERGENCE/Needs-designer (confirm prefix
intent: `border-destructive/30` vs `border-libelle-destructive/30`); (4) primary
outline — UNVERIFIED. Re-apply 1, 2, 4 deliberately; resolve 3 first. Keep `ButtonLink`.

## 14. Verification

Both files read fully. Prior "intentional design" wording for the tint downgraded
per the strict bar. Effects inferred from source.

## 15. Unresolved Questions

1. Tint + `text-base` + primary outline: confirm as intended libelle language.
2. Unprefixed `border-destructive/30`: convention or slip?
