import { useMemo, useState } from "react";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import { Group } from "@visx/group";
import { BarStackHorizontal } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { ScaleLinear, ScaleBand, ScaleOrdinal } from "@visx/vendor/d3-scale";
import { motion } from "framer-motion";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type DataProps = {
  id: string | number;
  value: number;
};
type ChartDataProps = Record<string, string | number>;

export type TooltipProps<T> = {
  id: string | number;
  total: number;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
  bar: SeriesPoint<T>;
  key: string | number;
};

interface HorizontalStackedBarProps<D extends DataProps> {
  data: D[];
  width: number;
  height: number;
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleBand<number>;
  colorScale: ScaleOrdinal<string, string, never>;
  interactive?: boolean;
  selected?: (string | number)[];
}

const HorizontalStackedBar = <D extends DataProps>({
  width,
  height,
  data,
  xScale,
  yScale,
  colorScale,
  interactive,
  selected,
}: HorizontalStackedBarProps<D>) => {
  const [hover, setHover] = useState<string | number | null>(null);

  // CONFIG
  const KEYS = useMemo(() => {
    return data.map((d) => d.id);
  }, [data]);

  const TOTAL = data.reduce((acc, curr) => acc + curr.value, 0);

  const DATA = useMemo<ChartDataProps[]>(() => {
    return [
      data.reduce((acc, curr) => {
        acc[curr.id] = curr.value;
        return acc;
      }, {} as ChartDataProps),
    ];
  }, [data]);

  if (width === 0 || height === 0) return null;

  return (
    <div className="relative overflow-hidden rounded">
      <svg width={width} height={height}>
        <Group>
          <TooltipProvider delayDuration={0} skipDelayDuration={500}>
            <BarStackHorizontal<ChartDataProps, string | number>
              data={DATA}
              keys={KEYS}
              width={Math.max(width - 2, 0)}
              height={Math.max(height - 2, 0)}
              y={() => height}
              xScale={xScale}
              yScale={yScale}
              color={(d) => {
                return colorScale(`${d}`) || colorScale.range()[0];
              }}
            >
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar) => {
                    const opacity = selected?.includes(bar.key) ? 1 : 0.5;

                    return (
                      <g key={`bar-stack-${barStack.index}-${bar.index}`}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.rect
                              x={bar.x}
                              y={bar.y}
                              width={bar.width}
                              height={bar.height}
                              fill={bar.color}
                              {...(interactive && {
                                onMouseEnter: () => {
                                  setHover(bar.key);
                                },
                                onMouseLeave: () => {
                                  setHover(null);
                                },
                              })}
                              cursor={interactive ? "pointer" : "default"}
                              pointerEvents={interactive ? "all" : "none"}
                              animate={{
                                fillOpacity: hover === bar.key || !hover ? 1 : opacity,
                              }}
                            />
                          </TooltipTrigger>

                          <TooltipPortal>
                            <TooltipContent sideOffset={2}>
                              <>
                                <h2>{data.find((d) => d.id === bar.key)?.id}</h2>
                                <p>{data.find((d) => d.id === bar.key)?.value}</p>
                                <p>{TOTAL}</p>
                              </>
                            </TooltipContent>
                          </TooltipPortal>
                        </Tooltip>
                      </g>
                    );
                  }),
                )
              }
            </BarStackHorizontal>
          </TooltipProvider>
        </Group>
      </svg>
    </div>
  );
};

export default HorizontalStackedBar;
