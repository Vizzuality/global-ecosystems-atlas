"use client";

import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { PieChart } from "@/components/charts/pie";

export const TestPieChild = ({
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
        label: "T6.1 Ice sheets, glaciers and perennial snowfields",
        value: 0.05,
        color: "#C8190B",
      },
      {
        id: "2",
        label: "T6.2 Polar/alpine cliffs, screes, outcrops and lava flows",
        value: 0.575,
        color: "#EB7A08",
      },
      {
        id: "3",
        label: "T1.1 Tropical/Subtropical lowland rainforests",
        value: 0.375,
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
      onPathMouseClick={onPieClick}
    />
  );
};

export default function TestPie(
  props: Omit<Parameters<typeof TestPieChild>[0], "width" | "height">,
) {
  return (
    <ParentSize>
      {({ width, height }) => <TestPieChild width={width} height={height} {...props} />}
    </ParentSize>
  );
}
