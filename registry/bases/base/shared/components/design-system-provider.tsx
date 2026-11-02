"use client";

import * as React from "react";

export type DesignSystemComponents = Record<string, React.ComponentType<any>>;

interface DesignSystemContextValue {
  components: DesignSystemComponents;
}

const DesignSystemContext =
  React.createContext<DesignSystemContextValue | null>(null);

interface DesignSystemProviderProps {
  components: DesignSystemComponents;
  children: React.ReactNode;
}

export function DesignSystemProvider({
  components,
  children,
}: DesignSystemProviderProps) {
  const value = React.useMemo(() => ({ components }), [components]);

  return (
    <DesignSystemContext.Provider value={value}>
      {children}
    </DesignSystemContext.Provider>
  );
}

export function useDesignSystem() {
  const context = React.useContext(DesignSystemContext);

  if (!context) {
    throw new Error("useDesignSystem must be used inside DesignSystemProvider");
  }

  return context.components;
}
