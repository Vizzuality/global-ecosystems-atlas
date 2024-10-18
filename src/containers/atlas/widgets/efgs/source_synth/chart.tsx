"use client";

import { useMemo } from "react";

import { useParams } from "next/navigation";

import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import CHROMA from "chroma-js";

import { cn, formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import HorizontalStackedBar from "@/components/charts/horizontal-stacked-bar";

const COLORS = ["#CCEBC5", "#98D3B8", "#62BAB1", "#249FAE", "#0082A8", "#00649B"];
const COLORS_SCALE = CHROMA.scale(COLORS.toReversed());

export const SourceSynthesisContribution = () => {
  return (
    <div className="space-y-4">
      <div className="h-4">
        <ParentSize>
          {({ width, height }) => (
            <SourceSynthesisContributionChart width={width} height={height} />
          )}
        </ParentSize>
      </div>

      <SourceSynthesisContributionRanking />
    </div>
  );
};

export const SourceSynthesisContributionChart = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const [location] = useSyncLocation();
  const { ecosystemId } = useParams();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(`${ecosystemId}`, "source_synth");

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data
        ?.filter((d) => d.id === (location ?? "GLOB"))
        ?.map((d) => {
          return {
            id: `${d.id}-${d.label}`,
            label: d.label,
            value: d.value ?? 0,
            color: d.color ?? CHROMA.random().hex(),
          };
        })
        ?.toSorted((a, b) => {
          return b.value - a.value;
        }) ?? []
    );
  }, [data, location]);

  const TOTAL = useMemo(() => {
    return DATA.reduce((acc, curr) => acc + (curr.value ?? 0), 0);
  }, [DATA]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

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
      range: COLORS_SCALE.colors(KEYS.length).map((color) => {
        return color;
      }),
    });
  }, [KEYS]);

  return (
    <HorizontalStackedBar
      data={DATA}
      width={width}
      height={height}
      // selected={selected}
      // interactive={true}
      xScale={xScale}
      yScale={yScale}
      colorScale={colorScale}
      TooltipComponent={({ bar }) => (
        <>
          <h2>{DATA.find((d) => d.id === bar.key)?.label}</h2>
          <p>{DATA.find((d) => d.id === bar.key)?.value}</p>
          <p>{TOTAL}</p>
        </>
      )}
    />
  );
};

export const SourceSynthesisContributionRanking = () => {
  const [location] = useSyncLocation();
  const { ecosystemId } = useParams();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(`${ecosystemId}`, "source_synth");

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data
        ?.filter((d) => d.id === (location ?? "GLOB"))
        ?.map((d) => {
          return {
            id: `${d.id}${d.label}`,
            label: d.label,
            value: d.value ?? 0,
            color: d.color ?? CHROMA.random().hex(),
          };
        })
        ?.toSorted((a, b) => {
          return b.value - a.value;
        }) ?? []
    );
  }, [data, location]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: COLORS_SCALE.colors(KEYS.length).map((color) => {
        return color;
      }),
    });
  }, [KEYS]);

  return (
    <div className="relative z-0">
      <ul className="w-full space-y-1.5 divide-y divide-navy-50">
        {DATA.map((d, i) => {
          const { id, label, value } = d;
          return (
            <li
              key={label + i}
              className={cn({
                "group w-full": true,
                "pt-1.5": i !== 0,
              })}
            >
              <div className="flex items-center gap-2">
                <div className="line-clamp-1 flex grow items-center text-xs font-semibold text-navy-700">
                  <div
                    className="mr-2 inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{
                      background: colorScale(id.toString()) ?? "#000",
                    }}
                  />
                  <span className="w-full leading-snug">{label}</span>
                </div>
                <div className="align-bottom">
                  <div className="shrink-0 whitespace-nowrap text-right text-xs font-medium text-navy-700">
                    {!!value &&
                      typeof value === "number" &&
                      formatPercentage(value / 100, { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
