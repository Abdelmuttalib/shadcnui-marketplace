"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/snow/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "snow";

export function SnowAdapter({ children, palette }: { children: React.ReactNode; palette?: string; }) {
  return (
    <DesignSystemEnvironment style={style} palette={palette as any}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="snow-style" data-design-system="snow">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
