# Catalyst Radio-Group vs Default

## 1. Audit Metadata

- Style: catalyst
- Component: radio-group
- Baseline source: `registry/default/ui/radio-group.tsx:1-44`
- Alternative source: `registry/catalyst/ui/radio-group.tsx:1-44`
- Audit date: 2026-10-09
- Status: Complete
- Method: full source read of both files

## 2. Executive Summary

Catalyst gives items a 19px box with a muted resting fill and the richest
checked treatment in the set: five `checked:` classes (border, accent fill,
background-ink dot, inset shadow, dark-mode border override) behind a smaller
hardcoded-white dot. Focus stack retained.

## 3. Base Classes

Root identical. Item (`catalyst:31` vs `default:31`):

| Default | Alternative | Exact change | Inferred effect | Classification |
|---|---|---|---|---|
| `h-4 w-4` | `size-[1.1875rem]` + `shrink-0` | 16px → ~19px | Largest radio item | UNVERIFIED (concern DIMENSION) |
| `border-dft-primary` | `border-catalyst-input` | Primary → input | Neutral edge | UNVERIFIED (concern COLOR) |
| `text-dft-primary` | (removed — no resting text color) | Resting text color dropped | Unchecked dot area inherits surrounding text until checked sets its own | UNVERIFIED (concern COLOR) |
| (none) | `bg-catalyst-muted` | Added resting fill | Muted face | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:border-catalyst-primary` | Added | Checked border | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:bg-catalyst-accent` | Added (accent, not primary) | Checked fill from accent token | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:text-catalyst-background` | Added | Dot ink = background token | UNVERIFIED (concern COLOR) |
| (none) | `data-[state=checked]:shadow-[inset_0_1px_oklch(var(--color-gray-500))]` | Added arbitrary inset shadow referencing `--color-gray-500` directly | Inferred: subtle inner top shading on checked items; raw-var reference bypasses the namespace | UNVERIFIED (concern SHADOW/COLOR) |
| (none) | `data-[state=checked]:dark:border-catalyst-input` | Added dark override | Checked border reverts in dark mode | UNVERIFIED (concern COLOR) |
| ring-2/offset-2, disabled | retained | — | Focus fully present | PARITY_EXPECTED |

## 4. Variants

Not applicable.

## 5. Sizes

No size scale. Single dimension change in §3.

## 6. Interaction States

Hover: none. Focus: identical. Checked: five-class treatment (§3). Disabled
identical. Only radio with dark-mode item classes.

## 7. DOM and Component Structure

Tree identical. Indicator `flex items-center justify-center` unchanged; dot
`Circle h-2 w-2 fill-white text-white` (`catalyst:37`) vs `h-2.5 … text-current`:
smaller dot, hardcoded white (both fill and text set — fully opaque regardless of
context). UNVERIFIED (concern DIMENSION/COLOR).

## 8. Props, Exports, and API

Identical. PARITY_EXPECTED.

## 9. Behavior and Accessibility

Radix behavior unchanged. Hardcoded white dot + accent fill contrast unmeasured —
no claim. PARITY_EXPECTED with §3 notes.

## 10. Imports and Dependencies

Identical set. PARITY_EXPECTED.

## 11. Token Dependencies

`catalyst-*` (primary/input/muted/accent/background/ring) plus a raw
`var(--color-gray-500)` reference in the inset shadow — the unprefixed root
palette, not the catalyst namespace. Flag for token-hygiene review alongside the
checked treatment.

## 12. Typography and Global Styling

No text. Dot downsized per §7.

## 13. Findings and Upgrade Preservation

Findings: (1) 19px + muted/input resting set — UNVERIFIED; (2) five-class checked
treatment incl. inset shadow + dark override — UNVERIFIED as a set (preserve
exactly; the five classes act as one system); (3) hardcoded white dot —
UNVERIFIED; (4) raw `--color-gray-500` reference — UNVERIFIED (confirm or
re-tokenize on migration).

## 14. Verification

Both files read fully. All classes quoted from source. Effects inferred.

## 15. Unresolved Questions

1. Confirm the full checked treatment + raw gray reference as intended.
