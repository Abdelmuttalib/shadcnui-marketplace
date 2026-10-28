# Baseline Archive Index

Immutable-in-practice snapshots of audited style implementations, for future
upgrade diffing and regression analysis. **Never modify, regenerate, or
overwrite an existing baseline directory.** New captures get new directories.

## Versions

| Baseline ID | Style | Git commit | Captured (UTC) | Contents | Status |
|---|---|---|---|---|---|
| `default-a8d26cf-20261010` | default | `a8d26cfbf4758bb8964e8f2730cdec54fc5154b3` | 2026-10-10 | 48 sources + 48 docs + manifest + checksums + 9 context files | Complete, verified |

## Layout per version

- `sources/ui/*.tsx` — verbatim component copies (byte-verified against originals).
- `docs/<component>.md` — per-component documentation (14-section template).
- `docs/cross-references.md` — shared utilities, dependency graph, token map.
- `MANIFEST.json` — ID, commit, timestamp, versions, inventory, hashes.
- `CHECKSUMS.sha256` — verify with `sha256sum -c CHECKSUMS.sha256` from the
  version directory.
- `context/` — verbatim `package.json`, `pnpm-lock.yaml`, `tailwind.config.ts`,
  `tsconfig.json`, `components.json`, `globals.css`, `themes.css`, `fonts.ts`,
  `utils.ts`.

## Upgrade workflow

1. Capture the upgraded implementation as a new versioned directory (the
   capture aborts if the target ID already exists).
2. `diff -r <old>/sources/ui <new>/sources/ui` for the change inventory.
3. Triage each change against `../../components/<style>/<component>-vs-default.md`
   (re-apply / retire-with-note / designer-decision per `METHODOLOGY.md`).
4. Record rulings; amend comparison docs with revision history — never edit
   archived versions.

## Correction history

- 2026-10-10 — quality-review corrections (25 documentation-only edits, no
  source changes): Batch A — chart ChartConfig verbatim type, chart Sizes noise
  removal, dialog `data-[side]` removal, form guard/deref order, sheet side
  scoping, navigation "arbitrary values" terminology, sidebar Trigger focus
  scope, sonner spread-precedence inversion. Batch B — `"use client";` rows
  (8 files), sheet Header/Footer displayNames, menubar Content/SubContent
  animation asymmetry, navigation Content base string, pagination displayNames,
  progress `value`/aria consequence, input-otp `<Dot/>` default size, skeleton
  react-import correction, command Empty spread-replace semantics, dropdown
  Portal asymmetry, typography responsive tokens. Batch C — §9 header relabels
  (toggle-group, tabs, switch, tooltip, toggle). Sources, manifest, and
  checksums untouched; `sha256sum -c` still passes 48/48.
