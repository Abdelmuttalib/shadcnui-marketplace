import { describe, expect, it } from "vitest";

import {
  getWorkshopCatalog,
} from "@/lib/workshop-catalog";
import { FIXTURE_STYLES } from "@/components/workshop/fixtures/types";

describe("workshop catalog", () => {
  it("builds from the registry catalog and style list", async () => {
    const catalog = await getWorkshopCatalog();
    expect(catalog.styles.length).toBeGreaterThan(0);
    expect(catalog.components.length).toBeGreaterThan(0);
  });

  it("includes default and default-v4 styles", async () => {
    const catalog = await getWorkshopCatalog();
    const names = catalog.styles.map((s) => s.name);
    expect(names).toContain("default");
    expect(names).toContain("default-v4");
    expect([...FIXTURE_STYLES].sort()).toEqual(["default", "default-v4"]);
  });

  it("marks button available in both collections with a source path", async () => {
    const catalog = await getWorkshopCatalog();
    const button = catalog.components.find((c) => c.name === "button");
    expect(button).toBeDefined();
    expect(button?.styles).toContain("default");
    expect(button?.styles).toContain("default-v4");
    expect(button?.filePath).toBe("ui/button.tsx");
  });

  it("assigns every component a group and title", async () => {
    const catalog = await getWorkshopCatalog();
    for (const c of catalog.components) {
      expect(c.group.length).toBeGreaterThan(0);
      expect(c.title.length).toBeGreaterThan(0);
    }
  });
});
