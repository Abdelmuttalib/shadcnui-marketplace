# Form — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; Label imports + error lines verified by
direct grep per style. Baseline `registry/default/ui/form.tsx` (RHF logic/ids/
ARIA, `space-y-2` items, destructive label/message, muted description, 8
exports). Logic/ids/ARIA/exports uniform everywhere. Reports:
`components/<style>/form-vs-default.md`.

| Style | Label import | Error states | Description | Divergences | Doc |
|---|---|---|---|---|---|
| carbon | own ✓ | unprefixed ×2 (DIVERGENCE) | swap | 1 | `carbon/form-vs-default.md` |
| linear | own ✓ | swap | swap | — | `linear/form-vs-default.md` |
| material | own ✓ | swap | swap | — | `material/form-vs-default.md` |
| catalyst | own ✓ | unprefixed ×2 (DIVERGENCE) | swap | 1 | `catalyst/form-vs-default.md` |
| spectrum | own ✓ | swap (`spctm`) | swap | — | `spectrum/form-vs-default.md` |
| wedges | own ✓ | swap | swap | — | `wedges/form-vs-default.md` |
| moon | own ✓ | swap | swap | — | `moon/form-vs-default.md` |
| lucid | own ✓ | swap | swap | — | `lucid/form-vs-default.md` |
| snow | own ✓ | swap | swap | — | `snow/form-vs-default.md` |
| neon | own ✓ | swap | swap | — | `neon/form-vs-default.md` |
| libelle | own ✓ | swap | swap | — | `libelle/form-vs-default.md` |

## Corroborated patterns

- **Uniform own-style wiring**: all 11 import their own label (no cross-style
  imports — toggle-group/command/calendar/data-table/pagination precedent holds).
- **Unprefixed error tokens** (carbon/catalyst): joint ruling set (catalyst has
  convention evidence; carbon does not).
- **Pure swaps** (other 9): no component-level difference.
