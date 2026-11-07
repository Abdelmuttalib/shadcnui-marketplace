# Snow Button vs Default

## 1. Audit Metadata

- Style: snow
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/snow/ui/button.tsx:1-61`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Needs verification
- Method: full source read of both files; consumer grep; token reads

## 2. Executive Summary

Snow is near-token-swap with compact sizes and mixed radius utilities
(`rounded-snow-sm` on sm, `rounded-snow-lg` on lg — unique in the system). The
base string carries the offset color but no offset-width class — the pilot's main
open accessibility question. `ButtonLink` absent (parity divergence). Inter inherited.

## 3. Base Classes

`snow:9` vs `default:9`: prefix swap, plus one subtraction (double space is a no-op):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `focus-visible:ring-offset-2` (+ `ring-offset-dft-background`) | `ring-offset-snow-background` only — no `ring-offset-N` width class in the string | Offset width dropped; color kept | Inferred: focus ring renders without offset gap | PARITY_DIVERGENCE, Needs-designer (concern FOCUS/ACCESSIBILITY) — upgraded from UNVERIFIED: unlike styling choices this removes baseline accessibility affordance with no counter-evidence, so it is tracked as divergence pending designer ruling, not neutral unknown |

## 4. Variants

All six (`snow:12-22`) prefix swaps only; outline keeps `bg-snow-background`.
TOKEN_DEPENDENCY, Corroborated.

## 5. Sizes

| Size | Default | Alternative (`snow:25-30`) | Change |
|---|---|---|---|
| default | `h-10 px-4 py-2` | `h-9 px-4 py-2` | Shorter only |
| sm | `h-9 rounded-dft-md px-3` | `h-8 rounded-snow-sm px-3` | Shorter; non-`md` radius utility (unique) |
| lg | `h-11 rounded-dft-md px-8` | `h-10 rounded-snow-lg px-8` | Shorter; non-`md` radius utility (unique) |
| icon / icon-sm / icon-lg | `h-10/9/11` squares | `h-9 w-9` / `h-8 w-8` / `h-10 w-10` | One step smaller |

Sizes: UNVERIFIED, Needs-designer (concern DIMENSION/SHAPE). Radius-utility note:
`--snow-radius: 0.75rem` in CSS vs `0.4rem` in `registry-styles.ts` (pre-existing
mismatch, still unresolved — determines what sm/lg actually render).

## 6. Interaction States

Hover and `disabled:` unchanged. Focus per §3. No dark-mode classes.

## 7. DOM and Component Structure

`Button` render identical incl. `asChild`/Slot. PARITY_EXPECTED (for `Button`).

## 8. Props, Exports, and API

Missing `ButtonLink`, `ButtonLinkProps`, `iconLeft`/`iconRight`, `next/link` import.
Consumers use `Button` only — no in-repo breakage. PARITY_DIVERGENCE, Open
(concern API), likely drift.

## 9. Behavior and Accessibility

Identical to baseline for `Button` except the §3 focus-offset question, which is
accessibility-relevant (no failure claimed — no contrast/geometry measurement made).

## 10. Imports and Dependencies

`next/link` absent (consistent with absent export). Otherwise identical.

## 11. Token Dependencies

`snow-*` namespace. Resolved: `--snow-primary: 0% 0 0` (black),
`--snow-ring: 89% 0.0602 258.65`, `--snow-radius: 0.75rem` (`app/globals.css:466-492`).

## 12. Typography and Global Styling

No component-level change. Family Inter via inherited `font-sans`.

## 13. Findings and Upgrade Preservation

Findings: (1) missing offset width — PARITY_DIVERGENCE/Needs-designer (resolve
before migrating: restore offset or record offset-less focus as intended);
(2) compact sizes + sm/lg radius steps — UNVERIFIED; (3) missing `ButtonLink` —
PARITY_DIVERGENCE. Do not carry the offset absence into a migration by default.

## 14. Verification

Both files read fully; consumer grep done. Effects inferred from source.

## 15. Unresolved Questions

1. Offset width: deliberate minimalism or editing slip?
2. Canonical snow radius (0.75 CSS vs 0.4 registry)?
3. Restore `ButtonLink`?
