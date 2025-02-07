"use client";

import * as React from "react";

const STYLES_PATH: Record<string, string> = {
  default: "https://shadcn-default.vercel.app",
  carbon: "https://shadcn-carbon.vercel.app",
  linear: "https://shadcn-linear.vercel.app",
  material: "https://shadcn-material.vercel.app",
};

export type Style = keyof typeof STYLES_PATH;

export const STYLES: Style[] = Object.keys(STYLES_PATH);

const STYLES_DIRECTORY_PATH = "example";

// react context for the current style

const StyleContext = React.createContext({
  style: "default",
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

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = React.useState<Style>(STYLES[0]);

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
