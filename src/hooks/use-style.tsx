"use client";

import * as React from "react";

const DEV_STYLES_PATH: Record<string, string> = {
  default: "http://localhost:3000",
  carbon: "http://localhost:3000",
  linear: "http://localhost:3001",
  catalyst: "http://localhost:3001",
  material: "http://localhost:3000",
};

const PROD_STYLES_PATH: Record<string, string> = {
  default: "https://shadcn-default.vercel.app",
  carbon: "https://shadcn-carbon.vercel.app",
  linear: "https://shadcn-linear.vercel.app",
  catalyst: "https://shadcn-catalyst.vercel.app",
  material: "https://shadcn-material.vercel.app",
};

// NEXT_PUBLIC_NODE_ENV
const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export function getStylesPath2(style: string) {
  if (NODE_ENV === "development") {
    return PROD_STYLES_PATH[style];
  }
  return PROD_STYLES_PATH[style];
}

export function getStylesPath(env: string) {
  if (env === "development") {
    return PROD_STYLES_PATH;
  }
  return PROD_STYLES_PATH;
}

const STYLES_PATH: Record<string, string> = getStylesPath(NODE_ENV!);

export type Style = keyof typeof STYLES_PATH;

export const STYLES: Style[] = Object.keys(STYLES_PATH);
export const STYLES_LENGTH = STYLES.length;

const STYLES_DIRECTORY_PATH = "example";

// react context for the current style

const StyleContext = React.createContext({
  style: STYLES[0],
  setStyle: (style: Style) => {},
  stylePath: STYLES_PATH.default,
  setStylePath: (stylePath: string) => {},
  styleCategory: "mail",
  setStyleCategory: (styleCategory: string) => {},
  styleUrl: STYLES_PATH.default,
  setStyleUrl: (styleUrl: string) => {},
});

export const STYLE_CATEGORIES = [
  "mail",
  "dashboard",
  "cards",
  "tasks",
  "playground",
  "forms",
  "music",
  "authentication",
];

type StyleCategory = (typeof STYLE_CATEGORIES)[number];

export const stylesInfo = {
  default: {
    title: "Default Style",
    description: "Default shadcn ui style",
  },
  carbon: {
    title: "Carbon",
    description: "Carbon IBM inspired design system style",
  },
  linear: {
    title: "Linear",
    description: "Linear Design System style",
  },
  material: {
    title: "Material",
    description: "Material Design style",
  },
  catalyst: {
    title: "Catalyst",
    description: "Catalyst Design System style",
  },
};

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = React.useState<Style>(STYLES[3]);

  const [styleUrl, setStyleUrl] = React.useState<string>(STYLES_PATH.default);

  const [stylePath, setStylePath] = React.useState<string>(STYLES_PATH.default);

  const [styleCategory, setStyleCategory] =
    React.useState<StyleCategory>("mail");

  const [fullPath, setFullPath] = React.useState<string>(
    `${stylePath}/${STYLES_DIRECTORY_PATH}/${styleCategory}`
  );

  // React.useEffect(() => {
  //   setStylePath(STYLES_PATH[style]);
  //   console.log(style);
  // }, [style]);

  React.useEffect(() => {
    setStylePath(
      `${STYLES_PATH[style]}/${STYLES_DIRECTORY_PATH}/${styleCategory}`
    );

    setStyleUrl(STYLES_PATH[style]);
  }, [style, styleCategory]);

  return (
    <StyleContext.Provider
      value={{
        style,
        setStyle,
        stylePath,
        setStylePath,
        styleCategory,
        setStyleCategory,
        styleUrl,
        setStyleUrl,
        // fullPath,
        // setFullPath,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const {
    style,
    setStyle,
    stylePath,
    setStylePath,
    styleCategory,
    setStyleCategory,
    styleUrl,
    setStyleUrl,
  } = React.useContext(StyleContext);

  return {
    style,
    setStyle,
    stylePath,
    setStylePath,
    styleCategory,
    setStyleCategory,
    styleUrl,
    setStyleUrl,
  };
}
