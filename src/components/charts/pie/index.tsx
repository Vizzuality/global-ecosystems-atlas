"use client";
import { FC, useCallback, useState } from "react";

import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { PieArcDatum, PieProps } from "@visx/shape/lib/shapes/Pie";
import { Accessor } from "@visx/shape/lib/types";
import { ScaleOrdinal } from "@visx/vendor/d3-scale";

import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

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
  TooltipComponent: FC<{
    value?: number;
    label?: string;
  }>;
  onPathMouseClick?: (data: T) => void;
  onPathMouseEnter?: (data: T) => void;
  onPathMouseLeave?: (data: T) => void;
}

export const PieChart = <T extends PieChartData>({
  data,
  colorScale,
  selected,
  width = 300,
  height = 300,
  margin = defaultMargin,
  onPathMouseClick,
  onPathMouseEnter,
  onPathMouseLeave,
  pieProps,
  TooltipComponent,
}: PieChartProps<T>) => {
  // SIZES
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const thickness = 20;

  const [tPos, setTPos] = useState<{ x: number; y: number; value: number; label: string } | null>(
    null,
  );

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
                      strokeWidth={selected?.includes(arc.data.id) ? 2 : 1}
                      onClick={() => {
                        if (onPathMouseClick) onPathMouseClick(arc.data);
                      }}
                      onMouseEnter={(e) => {
                        setTPos({
                          x: e.clientX,
                          y: e.clientY,
                          value: arc.data.value,
                          label: arc.data.label,
                        });
                        if (onPathMouseEnter) onPathMouseEnter(arc.data);
                      }}
                      onMouseMove={(e) => {
                        setTPos({
                          x: e.clientX,
                          y: e.clientY,
                          value: arc.data.value,
                          label: arc.data.label,
                        });
                      }}
                      onMouseLeave={() => {
                        setTPos(null);
                        if (onPathMouseLeave) onPathMouseLeave(arc.data);
                      }}
                      className={cn({
                        "cursor-pointer stroke-white": true,
                        "hover:stroke-black": true,
                      })}
                    />
                  </Group>
                );
              });
            }}
          </Pie>
        </Group>
      </svg>

      <TooltipProvider delayDuration={0} skipDelayDuration={500}>
        <Tooltip open={!!tPos}>
          <TooltipTrigger asChild>
            <div
              className="pointer-events-none fixed h-0 w-0"
              style={{
                top: (tPos?.y ?? -9999) - 10,
                left: (tPos?.x ?? -9999) + 10,
              }}
            />
          </TooltipTrigger>

          <TooltipContent
            align="start"
            alignOffset={-(tPos?.x ?? -9999) + 10}
            sideOffset={-(tPos?.y ?? -9999) + 10}
            hideWhenDetached
            className="pointer-events-none"
          >
            <TooltipComponent value={tPos?.value} label={tPos?.label} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
