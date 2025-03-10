"use client";

import { StyleSelect } from "@/components/draft";
import { useStyle } from "@/hooks/use-style";

import { CarbonSinkPage } from "./components/carbon";
import { CatalystSinkPage } from "./components/catalyst";
import { DefaultSinkPage } from "./components/default";
import { LinearSinkPage } from "./components/linear";
import { MaterialSinkPage } from "./components/material";

export default function DemoPage() {
  const { style } = useStyle();

  function renderSinkPage(style: any) {
    switch (style) {
      case "carbon":
        return <CarbonSinkPage />;
      case "linear":
        return <LinearSinkPage />;
      case "material":
        return <MaterialSinkPage />;
      case "catalyst":
        return <CatalystSinkPage />;
      default:
        return <DefaultSinkPage />;
    }
  }

  return (
    <div className="grid p-4">
      {renderSinkPage(style)}
      <div className="fixed left-4 top-4 z-50">
        <StyleSelect />
      </div>
    </div>
  );
}
