"use client";
import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";

import HorizontalStackedBar from "@/components/charts/horizontal-stacked-bar";

interface TestHorizontalBarParentProps {
  interactive?: boolean;
  selected?: (string | number)[];
}
interface TestHorizontalBarProps extends TestHorizontalBarParentProps {
  width: number;
  height: number;
}

const TestHorizontalBar = ({ width, height, interactive, selected }: TestHorizontalBarProps) => {
  // DATA
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

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);
  const TOTAL = DATA.reduce((acc, curr) => acc + curr.value, 0);

  // SCALES
  const xScale = useMemo(() => {
    return scaleLinear<number>({
      domain: [0, TOTAL],
      range: [0, width],
      round: true,
    });
  }, [width, TOTAL]);

  const yScale = useMemo(() => {
    return scaleBand<number>({
      domain: [],
      range: [0, height],
    });
  }, [height]);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: KEYS.map((key) => {
        return DATA.find((d) => d.id === key)?.color || "";
      }),
    });
  }, [DATA, KEYS]);

  return (
    <HorizontalStackedBar
      data={DATA}
      width={width}
      height={height}
      selected={selected}
      interactive={interactive}
      xScale={xScale}
      yScale={yScale}
      colorScale={colorScale}
      TooltipComponent={({ bar }) => (
        <>
          <h2>{DATA.find((d) => d.id === bar.key)?.id}</h2>
          <p>{DATA.find((d) => d.id === bar.key)?.value}</p>
          <p>{TOTAL}</p>
        </>
      )}
    />
  );
};

const TestHorizontalBarParent = (props: TestHorizontalBarParentProps) => {
  return (
    <ParentSize>
      {({ width, height }) => <TestHorizontalBar {...props} width={width} height={height} />}
    </ParentSize>
  );
};

export default TestHorizontalBarParent;
