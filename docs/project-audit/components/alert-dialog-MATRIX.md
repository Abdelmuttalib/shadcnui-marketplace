# Alert-Dialog — Cross-Style Matrix (vs Default)

All 12 implementations read 2026-10-09; full-file diffs run (3–5 changed lines
each). Baseline `registry/default/ui/alert-dialog.tsx` (overlay, bordered
`max-w-lg` content, Action=default + Cancel=outline via default `buttonVariants`,
10 exports). Own-style `buttonVariants` imports verified in all 11 (no
cross-style imports). Reports:
`components/<style>/alert-dialog-vs-default.md`.

| Style | Import | Overlay | Content | Action/Cancel | Divergences | Doc |
|---|---|---|---|---|---|---|
| carbon | own ✓ | `black/60` + dark (UNVERIFIED) | borderless + popover bg (UNVERIFIED) | Cancel→secondary (UNVERIFIED) | — | `carbon/alert-dialog-vs-default.md` |
| linear | own ✓ | swap | borderless (UNVERIFIED) | = | — | `linear/alert-dialog-vs-default.md` |
| material | own ✓ | swap | borderless (UNVERIFIED) | = | — | `material/alert-dialog-vs-default.md` |
| catalyst | own ✓ | `black/30` + dark (UNVERIFIED) | width-only border (UNVERIFIED) | = | — | `catalyst/alert-dialog-vs-default.md` |
| spectrum | own ✓ | `black/60`, no dark (UNVERIFIED) | swap | = | — | `spectrum/alert-dialog-vs-default.md` |
| wedges | own ✓ | swap | borderless (UNVERIFIED) | = | — | `wedges/alert-dialog-vs-default.md` |
| moon | own ✓ | swap | swap | = | — | `moon/alert-dialog-vs-default.md` |
| lucid | own ✓ | swap | swap | = | — | `lucid/alert-dialog-vs-default.md` |
| snow | own ✓ | swap | swap | = | — | `snow/alert-dialog-vs-default.md` |
| neon | own ✓ | swap | swap | = | — | `neon/alert-dialog-vs-default.md` |
| libelle | own ✓ | swap | swap | = | — | `libelle/alert-dialog-vs-default.md` |

## Corroborated patterns

- **Own-style wiring uniform**: all 11 import their own button module; Action
  (default) and Cancel (outline) mappings identical except carbon.
- **Borderless panels** (carbon/linear/material/wedges): UNVERIFIED; catalyst's
  width-only border is distinct.
- **Cancel→secondary** (carbon only): sole Action/Cancel remap, UNVERIFIED.
- **Pure swaps** (moon/lucid/snow/neon/libelle): no component-level difference.
