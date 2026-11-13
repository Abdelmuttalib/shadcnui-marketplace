"use client";

import { createContext, useContext } from "react";

export const DesignSystemPortalContext = createContext<
  HTMLElement | null | undefined
>(undefined);

export function useDesignSystemPortalContainer() {
  return useContext(DesignSystemPortalContext);
}
