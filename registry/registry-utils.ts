import { BASES, type BaseName, DEFAULT_BASE_NAME } from "./bases";
import { STYLES, type StyleName, DEFAULT_STYLE_NAME } from "./styles";

export type RegistrySelection = {
  base: BaseName;
  style: StyleName;
};

export const DEFAULT_REGISTRY_SELECTION: RegistrySelection = {
  base: DEFAULT_BASE_NAME,
  style: DEFAULT_STYLE_NAME,
};

export function getRegistryName(base: BaseName, style: StyleName) {
  return `${base}-${style}`;
}

export function getRegistryStylePath(base: BaseName, style: StyleName) {
  return `/r/styles/${getRegistryName(base, style)}/index.json`;
}

export function isValidBase(value: unknown): value is BaseName {
  return BASES.some((base) => base.name === value);
}

export function isValidStyle(value: unknown): value is StyleName {
  return STYLES.some((style) => style.name === value);
}
