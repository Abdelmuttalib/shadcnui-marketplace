# Sonner — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; token lines verified by grep per style.
Baseline `registry/default/ui/sonner.tsx` (next-themes passthrough, `toaster
group` class, 4 `classNames` keys, ts-expect-error, sole export). Third-party
config (position/colors/duration/swipe) identical everywhere — no overrides in
any file. Reports: `components/<style>/sonner-vs-default.md`.

| Style | Toast surface | Text/border tokens | Divergences | Doc |
|---|---|---|---|---|
| carbon | `bg-cb-background` (swap) | 3 unprefixed (DIVERGENCE) | 1 | `carbon/sonner-vs-default.md` |
| linear | swap | swap | — | `linear/sonner-vs-default.md` |
| material | swap | swap | — | `material/sonner-vs-default.md` |
| catalyst | popover bg + input border (UNVERIFIED) | swap | — | `catalyst/sonner-vs-default.md` |
| spectrum | swap (`spctm`) | swap | — | `spectrum/sonner-vs-default.md` |
| wedges | swap | swap | — | `wedges/sonner-vs-default.md` |
| moon | swap | swap | — | `moon/sonner-vs-default.md` |
| lucid | swap | swap | — | `lucid/sonner-vs-default.md` |
| snow | swap | swap | — | `snow/sonner-vs-default.md` |
| neon | swap | swap | — | `neon/sonner-vs-default.md` |
| libelle | swap | swap | — | `libelle/sonner-vs-default.md` |

## Corroborated patterns

- **Pure swaps** (9 styles): no component-level difference.
- **Carbon unprefixed trio** (`text-foreground`, `border-border`,
  `text-primary-foreground`): joint ruling set.
- **Catalyst elevated surface** (popover bg + input border): UNVERIFIED, sole
  instance.
