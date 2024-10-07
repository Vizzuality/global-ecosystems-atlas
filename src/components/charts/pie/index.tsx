"use client";

import { MouseEvent, useCallback } from "react";

import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { PieArcDatum, PieProps } from "@visx/shape/lib/shapes/Pie";
import { Accessor } from "@visx/shape/lib/types";
import { ScaleOrdinal } from "@visx/vendor/d3-scale";

// import { cn } from "@/lib/utils";

const defaultMargin = { top: 1, right: 1, bottom: 1, left: 1 };

type PieChartData = {
  id: string;
  label: string;
  value: number;
};

export type TooltipProps<T> = {
  position: { x: number; y: number } | undefined;
  value: number;
  label: string;
} & T;

export interface PieChartProps<T> {
  data: T[];
  selected?: PieChartData["id"][];
  interactive?: boolean;
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  colorScale: ScaleOrdinal<string, string, never>;
  pieProps?: PieProps<T>;
  format: Intl.NumberFormat["format"];
  onPathMouseClick?: (data: T) => void;
  onPathMouseEnter?: (data: T) => void;
  onPathMouseLeave?: (data: T) => void;
}

export const PieChart = <T extends PieChartData>({
  data,
  colorScale,
  // selected,
  interactive = false,
  width = 300,
  height = 300,
  margin = defaultMargin,
  onPathMouseClick,
  onPathMouseEnter,
  onPathMouseLeave,
  pieProps,
}: PieChartProps<T>) => {
  // SIZES
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const thickness = 18;

  // Getters
  const getValue: Accessor<T, number> = useCallback((d) => d.value, []);
  const getColor: Accessor<PieArcDatum<T>, string> = useCallback(
    (d) => {
      return colorScale(`${d.data.id}`) || colorScale.range()[0];
    },
    [colorScale],
  );

  const getInnerRadius = useCallback(() => {
    return radius - thickness;
  }, [radius, thickness]);

  const getOuterRadius = useCallback(() => {
    return radius;
  }, [radius]);

  const handleMouseClick = useCallback(
    (e: MouseEvent<SVGPathElement>, arc: PieArcDatum<T>) => {
      if (onPathMouseClick) onPathMouseClick(arc.data);
    },
    [onPathMouseClick],
  );

  const handleMouseEnter = useCallback(
    (e: MouseEvent<SVGPathElement>, arc: PieArcDatum<T>) => {
      // setTPos({
      //   x: e.clientX,
      //   y: e.clientY,
      //   value: arc.data.value,
      //   label: arc.data.label,
      // });
      if (onPathMouseEnter) onPathMouseEnter(arc.data);
    },
    [onPathMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<SVGPathElement>, arc: PieArcDatum<T>) => {
      // setTPos(null);
      if (onPathMouseLeave) onPathMouseLeave(arc.data);
    },
    [onPathMouseLeave],
  );

  return (
    <>
      <svg width={width} height={height}>
        <Group top={centerY + margin.top} left={centerX + margin.left}>
          <Pie
            data={data}
            pieValue={getValue}
            innerRadius={getInnerRadius}
            outerRadius={getOuterRadius}
            cornerRadius={0}
            startAngle={0}
            {...pieProps}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <Group key={arc.data.id}>
                    <path
                      d={pie.path(arc) || undefined}
                      fill={getColor(arc)}
                      // strokeWidth={selected?.includes(arc.data.id) ? 2 : 1}
                      // className={cn({
                      //   "stroke-white": true,
                      // })}
                      {...(interactive && {
                        onClick: (e) => handleMouseClick(e, arc),
                        onMouseEnter: (e) => handleMouseEnter(e, arc),
                        onMouseLeave: (e) => handleMouseLeave(e, arc),
                      })}
                    />
                  </Group>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>
    </>
  );
};
