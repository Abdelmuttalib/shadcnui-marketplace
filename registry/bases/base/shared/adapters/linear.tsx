"use client";

import * as React from "react";

import * as Components from "@/registry/bases/base/styles/linear/components";

import {
  DesignSystemProvider,
  type DesignSystemComponents,
} from "../components/design-system-provider";

import { DesignSystemEnvironment } from "../design-system/design-system-environment";

const style = "linear";

export function LinearAdapter({ children }: { children: React.ReactNode }) {
  return (
    <DesignSystemEnvironment style={style}>
      <DesignSystemProvider
        components={Components as unknown as DesignSystemComponents}
      >
        <div className="linear-style" data-design-system="linear">
          {children}
        </div>
      </DesignSystemProvider>
    </DesignSystemEnvironment>
  );
}
