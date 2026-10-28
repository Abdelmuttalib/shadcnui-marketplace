import { describe, expect, it } from "vitest";

import type { Style } from "@/hooks/use-style-store";
import { PAGE_EXAMPLE_TYPES } from "@/hooks/use-style-store";
import { CarbonMailPage } from "@/registry/carbon/page-examples";
import { CatalystPlaygroundPage } from "@/registry/catalyst/page-examples";
import { DefaultCardsPage, DefaultMailPage } from "@/registry/default/page-examples";
import { LibelleBoardPage } from "@/registry/libelle/page-examples";
import { LucidMusicPage } from "@/registry/lucid/page-examples";
import {
  MaterialAuthenticationPage,
  MaterialBoardPage,
} from "@/registry/material/page-examples";
import { MoonChartsPage } from "@/registry/moon/page-examples";
import { NeonBoardPage, NeonTaskPage } from "@/registry/neon/page-examples";
import { SnowSettingsProfilePage } from "@/registry/snow/page-examples";
import { renderStylePageExample } from "@/registry/styles";
import { WedgesDashboardPage } from "@/registry/wedges/page-examples";

describe("renderStylePageExample", () => {
  it.each([
    ["carbon", "mail", CarbonMailPage],
    ["default", "cards", DefaultCardsPage],
    ["wedges", "dashboard", WedgesDashboardPage],
    ["neon", "tasks", NeonTaskPage],
    ["material", "authentication", MaterialAuthenticationPage],
    ["snow", "forms", SnowSettingsProfilePage],
    ["lucid", "music", LucidMusicPage],
    ["catalyst", "playground", CatalystPlaygroundPage],
  ] as Array<[Style, string, React.ComponentType]>)(
    "renders the %s %s page",
    (style, page, expected) => {
      expect(renderStylePageExample(style, page)).toMatchObject({
        type: expected,
      });
    }
  );

  it("falls back to the default mail page for unknown styles", () => {
    expect(
      renderStylePageExample("unknown-style" as Style, "mail")
    ).toMatchObject({ type: DefaultMailPage });
  });

  it("falls back to the default mail page for unknown page types", () => {
    expect(renderStylePageExample("default", "unknown-page")).toMatchObject({
      type: DefaultMailPage,
    });
  });

  // Compatibility-sensitive: "charts" is not a selectable page-example type
  // (see PAGE_EXAMPLE_TYPES) yet always resolves instead of crashing.
  // Pinned as no-crash behavior, not as an endorsed mapping.
  it("resolves charts to the moon charts page for every style", () => {
    expect(renderStylePageExample("moon", "charts")).toMatchObject({
      type: MoonChartsPage,
    });
    expect(renderStylePageExample("carbon", "charts")).toMatchObject({
      type: MoonChartsPage,
    });
  });

  // Compatibility-sensitive: "board" is not a selectable page-example type
  // yet resolves per style instead of crashing. Pinned as no-crash behavior.
  it("resolves board pages per style with a neon fallback", () => {
    expect(renderStylePageExample("material", "board")).toMatchObject({
      type: MaterialBoardPage,
    });
    expect(renderStylePageExample("libelle", "board")).toMatchObject({
      type: LibelleBoardPage,
    });
    expect(renderStylePageExample("carbon", "board")).toMatchObject({
      type: NeonBoardPage,
    });
    expect(
      renderStylePageExample("unknown-style" as Style, "board")
    ).toMatchObject({ type: NeonBoardPage });
  });

  it("never returns null for any supported style and page type", () => {
    const styles: Array<Style> = [
      "default",
      "carbon",
      "catalyst",
      "material",
      "linear",
      "spectrum",
      "wedges",
      "moon",
      "lucid",
      "snow",
      "neon",
      "libelle",
    ];
    for (const style of styles) {
      for (const page of PAGE_EXAMPLE_TYPES) {
        expect(renderStylePageExample(style, page)).not.toBeNull();
      }
    }
  });
});
