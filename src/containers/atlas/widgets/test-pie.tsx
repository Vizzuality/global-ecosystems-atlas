"use client";

import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { PieChart } from "@/components/charts/pie";

export const TestPie = ({
  width,
  height,
  selected,
  onPieClick,
}: {
  width: number;
  height: number;
  selected?: string[];
  onPieClick?: (data: { id: string; label: string; value: number }) => void;
}) => {
  const DATA = useMemo(() => {
    return [
      {
        id: "1",
        label: "One",
        value: 10,
        color: "#C8190B",
      },
      {
        id: "2",
        label: "Two",
        value: 20,
        color: "#EB7A08",
      },
      {
        id: "3",
        label: "Three",
        value: 30,
        color: "#F3C045",
      },
    ];
  }, []);

  const { format: formatPercentage } = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  // SCALES
  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: DATA.map((e) => `${e.id}`),
      range: DATA.map((e) => e.color),
    });
  }, [DATA]);

  return (
    <PieChart
      width={width}
      height={height}
      data={DATA}
      colorScale={colorScale}
      format={formatPercentage}
      selected={selected}
      TooltipComponent={({ value, label }) => (
        <div>
          <div>{label}</div>
          <div>{formatPercentage(value || 0 / 100)}</div>
        </div>
      )}
      onPathMouseClick={onPieClick}
    />
  );
};

export default function TestPieParent(
  props: Omit<Parameters<typeof TestPie>[0], "width" | "height">,
) {
  return (
    <ParentSize>
      {({ width, height }) => <TestPie width={width} height={height} {...props} />}
    </ParentSize>
  );
}
