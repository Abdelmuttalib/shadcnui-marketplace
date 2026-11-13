"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/default/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "default";

export function DefaultAdapter({ children, palette }: { children: React.ReactNode; palette?: string; }) {
  return (
    <DesignSystemEnvironment style={style} palette={palette as any}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="default-style" data-design-system="default">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
