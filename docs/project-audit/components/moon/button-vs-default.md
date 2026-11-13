# Moon Button vs Default

## 1. Audit Metadata

- Style: moon
- Component: button
- Baseline source: `registry/default/ui/button.tsx:1-106`
- Alternative source: `registry/moon/ui/button.tsx:1-106`
- Audit date: 2026-10-09 (revised to standard template)
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Moon Button is a pure token-namespace swap of Default. No class added, removed,
or reordered beyond `dft` → `moon`; full API parity including `ButtonLink`. All
visual identity comes from global token values and the inherited font.

## 3. Base Classes

| Default (`default:9`) | Alternative (`moon:9`) | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| Full base string | Identical with `moon` prefix | `dft` → `moon` on `rounded-dft-md`, `ring-offset-dft-background`, `focus-visible:ring-dft-ring` | None at component level; rendered look follows token values (§11) | TOKEN_DEPENDENCY, Corroborated |

## 4. Variants

| Variant | Default (`default:13-22`) | Alternative (`moon:13-22`) | Change | Classification |
|---|---|---|---|---|
| default | `bg-dft-primary text-dft-primary-foreground hover:bg-dft-primary/90` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |
| destructive | `bg-dft-destructive …` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |
| outline | `border border-dft-input bg-dft-background hover:bg-dft-accent hover:text-dft-accent-foreground` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |
| secondary | `bg-dft-secondary …` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |
| ghost | `hover:bg-dft-accent …` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |
| link | `text-dft-primary …` | `moon` equivalents | Prefix swap only | TOKEN_DEPENDENCY, Corroborated |

## 5. Sizes

All six size keys (`default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`;
`moon:25-30` vs `default:25-30`) identical modulo prefix, including per-size
`rounded-moon-md` on sm/lg. NO_DIFFERENCE.

## 6. Interaction States

Hover (`/90`, `/80`, underline), focus (`ring-2`, `offset-2`), disabled
(`pointer-events-none`, `opacity-50`) — all identical modulo prefix.
NO_DIFFERENCE. No dark-mode-specific classes in either file.

## 7. DOM and Component Structure

`Button` render (`moon:46-57` vs `default:46-57`) and `ButtonLink` render
(`moon:71-103` vs `default:71-103`) identical, including `asChild`/Slot
branching and `iconLeft`/`iconRight` slots. PARITY_EXPECTED.

## 8. Props, Exports, and API

`Button`, `ButtonLink`, `buttonVariants`, `ButtonProps`, `ButtonLinkProps`
(all props incl. `iconLeft`/`iconRight`) retained. No new or removed API.
PARITY_EXPECTED.

## 9. Behavior and Accessibility

`asChild`, ref forwarding, `displayName`s, disabled semantics identical.
PARITY_EXPECTED. No ARIA attributes in either file.

## 10. Imports and Dependencies

Identical import set (`@radix-ui/react-slot`, `class-variance-authority`,
`next/link`, `react`, `@/lib/utils`). PARITY_EXPECTED.

## 11. Token Dependencies

Every `dft-*` reference maps to `moon-*`. Resolved: `--moon-primary: 46%
0.1683 280.94` vs `--dft-primary: var(--dft-color-primary-600)` (= `0.511 0.262
276.966`); `--moon-radius: 0.6rem` vs `--dft-radius: 0.4rem` (`app/globals.css`).
Inferred effect (from source): moon buttons render more rounded than default.

## 12. Typography and Global Styling

No component-level typography (`text-sm font-medium` retained). Family Inter via
inherited `font-sans` (`registry/styles.tsx:243-244`; loader `lib/fonts.ts`).

## 13. Findings and Upgrade Preservation

Findings: (1) namespace swap — TOKEN_DEPENDENCY, Corroborated. No divergences,
no exceptions. Migration: re-apply the `dft` → `moon` prefix mapping onto the new
default; nothing bespoke to preserve. Lowest migration risk of all styles.

## 14. Verification

Both files read in full. All effects inferred from source; no browser check.
Assumptions: none.

## 15. Unresolved Questions

None.
