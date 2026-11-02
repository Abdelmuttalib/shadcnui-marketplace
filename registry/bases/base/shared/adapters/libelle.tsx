"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/libelle/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "@/registry/bases/base/shared/components/design-system-provider";

export function LibelleAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemProvider
      components={Components as unknown as DesignSystemComponents}
    >
      <div className="libelle-style" data-design-system="libelle">
        {children}
      </div>
    </DesignSystemProvider>
  );
}
