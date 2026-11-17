import { getStyleByName } from "@/lib/services/presets";
import { DEFAULT_STYLE, StyleName } from "@/registry/styles";

import {
  ExampleRenderer,
  type ExampleName,
  type ExampleStyle,
} from "@/registry/bases/base/shared/example-renderer";

export function getStyleBackgroundClassname(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return `bg-${DEFAULT_STYLE.cssPrefix}-background`;

  return `bg-${style.cssPrefix}-background`;
}

export function getStyleForegroundClassname(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return `text-${DEFAULT_STYLE.cssPrefix}-foreground`;

  return `text-${style.cssPrefix}-foreground`;
}

export function getStyleFontClassname(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return `font-${DEFAULT_STYLE.font}`;

  return `font-${style.font}`;
}

export function getStyleRadiusClassname(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return `rounded-[${DEFAULT_STYLE.defaultRadius}]`;

  return `rounded-[${style.defaultRadius}]`;
}

export function getStyleRadius(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return DEFAULT_STYLE.defaultRadius;

  return style.defaultRadius;
}

export function renderStyleCardShowcase(style: StyleName) {
  return (
    <ExampleRenderer style={style as ExampleStyle} name={"card-showcase"} />
  );
}

export function getStyleVariablesPrefix(styleName: StyleName) {
  const style = getStyleByName(styleName);

  if (!style) return DEFAULT_STYLE.cssPrefix;

  return style.cssPrefix;
}

export function prefixCssVariable(cssVariable: string, prefix: string) {
  // --background => --dft-background

  if (!cssVariable || !cssVariable.startsWith("--")) {
    return cssVariable;
  }

  return cssVariable.replace(/^--/, `--${prefix}-`);
}

export function renderStylePageExample(style: StyleName, page: ExampleName) {
  return <ExampleRenderer style={style as ExampleStyle} name={page} />;
}

export function renderStyleHero(style: StyleName) {
  return <ExampleRenderer style={style as any} name={"hero"} />;
}

export function renderStyleShowcaseComponents(style: StyleName) {
  return <ExampleRenderer style={style as any} name={"card-showcase"} />;
}
