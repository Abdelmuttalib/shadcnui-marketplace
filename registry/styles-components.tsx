import { Style } from "@/hooks/use-style-store";
import { CarbonShowcaseComponents } from "@/registry/bases/base/carbon/carbon-showcase-components";
import { CatalystShowcaseComponents } from "@/registry/bases/base/catalyst/catalyst-showcase-components";
import { DefaultShowcaseComponents } from "@/registry/bases/base/default/default-showcase-components";
import { LibelleShowcaseComponents } from "@/registry/bases/base/libelle/libelle-showcase-components";
import { LinearShowcaseComponents } from "@/registry/bases/base/linear/linear-showcase-components";
import { LucidShowcaseComponents } from "@/registry/bases/base/lucid/lucid-showcase-components";
import { MaterialShowcaseComponents } from "@/registry/bases/base/material/material-showcase-components";
import { MoonShowcaseComponents } from "@/registry/bases/base/moon/moon-showcase-components";
import { NeonShowcaseComponents } from "@/registry/bases/base/neon/neon-showcase-components";
import { SnowShowcaseComponents } from "@/registry/bases/base/snow/snow-showcase-components";
import { SpectrumShowcaseComponents } from "@/registry/bases/base/spectrum/spectrum-showcase-components";
import { WedgesShowcaseComponents } from "@/registry/bases/base/wedges/wedges-showcase-components";
import { getStyleByName } from "@/lib/services/presets";
import { DEFAULT_STYLE, StyleName } from "./styles";

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

export function getStyleFontClassname(styleName: Style) {
  const style = getStyleByName(styleName);

  if (!style) return `font-${DEFAULT_STYLE.font}`;

  return `font-${style.font}`;
}

export function getStyleRadiusClassname(styleName: Style) {
  const style = getStyleByName(styleName);

  if (!style) return `rounded-[${DEFAULT_STYLE.defaultRadius}]`;

  return `rounded-[${style.defaultRadius}]`;
}

export function getStyleRadius(styleName: Style) {
  const style = getStyleByName(styleName);

  if (!style) return DEFAULT_STYLE.defaultRadius;

  return style.defaultRadius;
}

export function renderStyleCardShowcase(style: Style) {
  return (
    <ExampleRenderer style={style as ExampleStyle} name={"card-showcase"} />
  );
}

export function getStyleVariablesPrefix(styleName: Style) {
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

const PAGE_EXAMPLES: Record<string, ExampleName> = {
  authentication: "authentication",
  cards: "cards",
  dashboard: "dashboard",
  forms: "forms",
  mail: "mail",
  music: "music",
  playground: "playground",
  tasks: "tasks",
};

export function renderStylePageExample(style: Style, page: string) {
  const example = PAGE_EXAMPLES[page];

  if (!example) {
    return null;
  }

  return <ExampleRenderer style={style as ExampleStyle} name={example} />;
}

export function renderStyleHero(style: Style) {
  return <ExampleRenderer style={style as any} name={"hero"} />;
}

export function renderStyleShowcaseComponents(style: Style) {
  switch (style) {
    case "carbon":
      return <CarbonShowcaseComponents />;
    case "linear":
      return <LinearShowcaseComponents />;
    case "material":
      return <MaterialShowcaseComponents />;
    case "catalyst":
      return <CatalystShowcaseComponents />;
    case "default":
      return <DefaultShowcaseComponents />;
    case "spectrum":
      return <SpectrumShowcaseComponents />;
    case "wedges":
      return <WedgesShowcaseComponents />;
    case "moon":
      return <MoonShowcaseComponents />;
    case "lucid":
      return <LucidShowcaseComponents />;
    case "snow":
      return <SnowShowcaseComponents />;
    case "neon":
      return <NeonShowcaseComponents />;
    case "libelle":
      return <LibelleShowcaseComponents />;
    default:
      return <DefaultShowcaseComponents />;
  }
}
