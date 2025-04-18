import { PageContainer } from "@/components/common/page-container";
import { Component as ChartAreaAxes } from "@/registry/moon/charts/chart-area-axes";
import { Component as ChartAreaGradient } from "@/registry/moon/charts/chart-area-gradient";
import { Component as ChartAreaInteractive } from "@/registry/moon/charts/chart-area-interactive";
import { Component as ChartAreaLegend } from "@/registry/moon/charts/chart-area-legend";
import { Component as ChartAreaLinear } from "@/registry/moon/charts/chart-area-linear";
import { Component as ChartAreaStackedExpand } from "@/registry/moon/charts/chart-area-stacked-expand";
import { Component as ChartAreaStep } from "@/registry/moon/charts/chart-area-step";
import { Component as ChartBarActive } from "@/registry/moon/charts/chart-bar-active";
import { Component as ChartBarDefault } from "@/registry/moon/charts/chart-bar-default";
import { Component as ChartBarHorizontal } from "@/registry/moon/charts/chart-bar-horizontal";
import { Component as ChartBarInteractive } from "@/registry/moon/charts/chart-bar-interactive";
import { Component as ChartBarLabel } from "@/registry/moon/charts/chart-bar-label";
import { Component as ChartBarLabelCustom } from "@/registry/moon/charts/chart-bar-label-custom";
import { Component as ChartBarMixed } from "@/registry/moon/charts/chart-bar-mixed";
import { Component as ChartBarMultiple } from "@/registry/moon/charts/chart-bar-multiple";
import { Component as ChartBarNegative } from "@/registry/moon/charts/chart-bar-negative";
import { Component as ChartBarStacked } from "@/registry/moon/charts/chart-bar-stacked";
import { Component as ChartLineDefault } from "@/registry/moon/charts/chart-line-default";
import { Component as ChartLineInteractive } from "@/registry/moon/charts/chart-line-interactive";
import { Component as ChartLineLabel } from "@/registry/moon/charts/chart-line-label";
import { Component as ChartPieDonutText } from "@/registry/moon/charts/chart-pie-donut-text";
import { Component as ChartPieInteractive } from "@/registry/moon/charts/chart-pie-interactive";
import { Component as ChartRadarGridCircleFill } from "@/registry/moon/charts/chart-radar-grid-circle-fill";
import { Component as ChartRadarLegend } from "@/registry/moon/charts/chart-radar-legend";
import { Component as ChartRadarLinesOnly } from "@/registry/moon/charts/chart-radar-lines-only";
import { Component as ChartRadialGrid } from "@/registry/moon/charts/chart-radial-grid";
import { Component as ChartRadialStacked } from "@/registry/moon/charts/chart-radial-stacked";
import { Component as ChartRadialText } from "@/registry/moon/charts/chart-radial-text";
import { Component as ChartTooltipAdvanced } from "@/registry/moon/charts/chart-tooltip-advanced";

export function ChartsPage() {
  return (
    <div>
      <PageContainer size={"full"} className="lg:p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <ChartAreaDefault /> */}
          <ChartAreaAxes />
          <ChartAreaGradient />
          <ChartAreaLegend />
          <ChartAreaStackedExpand />
          <div className="h-full sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <ChartAreaInteractive />
          </div>
          <ChartAreaLinear />
          <ChartAreaStep />
          <ChartBarActive />
          <ChartBarDefault />
          <ChartBarHorizontal />
          <ChartBarLabel />

          <div className="h-full sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <ChartBarInteractive />
          </div>
          <ChartBarLabelCustom />
          <ChartBarMixed />
          <ChartBarMultiple />
          <ChartBarNegative />
          <ChartBarStacked />
          <ChartLineDefault />
          <div className="h-full sm:col-span-2 lg:col-span-2 xl:col-span-2">
            <ChartLineInteractive />
          </div>
          <ChartLineLabel />
          <ChartPieDonutText />
          <ChartPieInteractive />
          <ChartRadarGridCircleFill />
          <ChartRadarLegend />
          <ChartRadarLinesOnly />
          <ChartRadialGrid />
          <ChartRadialStacked />
          <ChartRadialText />
          <ChartTooltipAdvanced />
        </div>
      </PageContainer>
    </div>
  );
}

export function Charts() {
  return (
    <div>
      <ChartAreaAxes />
      <ChartAreaGradient />
      <ChartAreaLegend />
      <ChartAreaStackedExpand />
      <ChartAreaInteractive />
      <ChartAreaLinear />
      <ChartAreaStep />
      <ChartBarActive />
      <ChartBarDefault />
      <ChartBarHorizontal />
      <ChartBarLabel />
      <ChartBarInteractive />
      <ChartBarLabelCustom />
      <ChartBarMixed />
      <ChartBarMultiple />
      <ChartBarNegative />
      <ChartBarStacked />
      <ChartLineDefault />
      <ChartLineInteractive />
      <ChartLineLabel />
      <ChartPieDonutText />
      <ChartPieInteractive />
      <ChartRadarGridCircleFill />
      <ChartRadarLegend />
      <ChartRadarLinesOnly />
      <ChartRadialGrid />
      <ChartRadialStacked />
      <ChartRadialText />
      <ChartTooltipAdvanced />
    </div>
  );
}
