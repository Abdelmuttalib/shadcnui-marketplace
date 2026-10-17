import { afterEach, describe, expect, it } from "vitest";

import {
  STYLES,
  STYLES_DATA,
  useStyleStore,
} from "@/hooks/use-style-store";
import { useThemePaletteStore } from "@/lib/use-theme-palette-store";

// Canonical style registry. Must match registry/registry-styles.ts and the
// tailwind/globals namespaces. Deliberate additions belong here first.
const EXPECTED_STYLES = [
  "default",
  "default-v4",
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
] as const;

const initialStyleState = useStyleStore.getState();
const initialPaletteState = useThemePaletteStore.getState();

afterEach(() => {
  useStyleStore.setState(
    { style: initialStyleState.style, pageExampleType: initialStyleState.pageExampleType },
    false
  );
  useThemePaletteStore.setState(
    {
      activePalette: initialPaletteState.activePalette,
      activeRadius: initialPaletteState.activeRadius,
    },
    false
  );
});

describe("useStyleStore", () => {
  it("exposes the 13 supported styles", () => {
    expect([...STYLES].sort()).toEqual([...EXPECTED_STYLES].sort());
  });

  it("starts with a valid style and the cards example", () => {
    const { style, pageExampleType } = useStyleStore.getState();
    expect(STYLES).toContain(style);
    expect(pageExampleType).toBe("cards");
  });

  it("switches style and page example type", () => {
    const { setStyle, setPageExampleType } = useStyleStore.getState();
    setStyle("carbon");
    setPageExampleType("dashboard");
    const { style, pageExampleType } = useStyleStore.getState();
    expect(style).toBe("carbon");
    expect(pageExampleType).toBe("dashboard");
  });

  it("defines metadata for every supported style", () => {
    expect(Object.keys(STYLES_DATA).sort()).toEqual(
      [...EXPECTED_STYLES].sort()
    );
    for (const name of EXPECTED_STYLES) {
      const data = STYLES_DATA[name];
      expect(data.styleSitePath).toBe(`/styles/${name}`);
      expect(data.defaultRadius).toMatch(/^\d+(\.\d+)?rem$/);
      expect(typeof data.defaultPalette).toBe("string");
    }
  });

  it("leaves non-default styles without a default palette", () => {
    for (const name of EXPECTED_STYLES) {
      if (name === "default") continue;
      expect(STYLES_DATA[name].defaultPalette).toBe("");
    }
  });
});

describe("useThemePaletteStore", () => {
  it("starts with no active palette or radius", () => {
    const { activePalette, activeRadius } = useThemePaletteStore.getState();
    expect(activePalette).toBe("");
    expect(activeRadius).toBe("");
  });

  it("sets and resets the active palette", () => {
    const { setActivePalette, onResetPalette } =
      useThemePaletteStore.getState();
    setActivePalette("palette-1");
    expect(useThemePaletteStore.getState().activePalette).toBe("palette-1");
    onResetPalette();
    expect(useThemePaletteStore.getState().activePalette).toBe("");
  });

  it("sets and resets the active radius", () => {
    const { setActiveRadius, onResetRadius } =
      useThemePaletteStore.getState();
    setActiveRadius("0.5rem");
    expect(useThemePaletteStore.getState().activeRadius).toBe("0.5rem");
    onResetRadius();
    expect(useThemePaletteStore.getState().activeRadius).toBe("");
  });
});
