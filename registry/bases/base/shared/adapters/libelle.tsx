"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/libelle/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "libelle";

export function LibelleAdapter({ children, palette }: { children: React.ReactNode; palette?: string; }) {
  return (
    <DesignSystemEnvironment style={style} palette={palette as any}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="libelle-style" data-design-system="libelle">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
