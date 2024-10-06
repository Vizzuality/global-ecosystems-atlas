import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import CHROMA from "chroma-js";

import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import HorizontalStackedBar from "@/components/charts/horizontal-stacked-bar";
import RankingChart from "@/components/charts/ranking";

export const BiomesExtent = () => {
  return (
    <div className="space-y-4 pt-4">
      <div className="h-4">
        <ParentSize>
          {({ width, height }) => <BiomesExtentChart width={width} height={height} />}
        </ParentSize>
      </div>

      <BiomesExtentRanking />
    </div>
  );
};

export const BiomesExtentChart = ({ width, height }: { width: number; height: number }) => {
  const [location] = useSyncLocation();

  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data.map((d) => {
        return {
          id: d.id,
          label: d.label,
          value: d.value ?? 0,
          color: CHROMA.random().hex(),
        };
      }) ?? []
    );
  }, [data]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const TOTAL = DATA.reduce((acc, curr) => acc + (curr.value ?? 0), 0);

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
      // selected={selected}
      // interactive={interactive}
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

export const BiomesExtentRanking = () => {
  const [location] = useSyncLocation();

  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  const DATA = useMemo(() => {
    return (
      data?.data
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0))
        .slice(0, 5)
        .map((d) => {
          return {
            id: d.id,
            label: d.label,
            value: d.value ?? 0,
            color: CHROMA.random().hex(),
          };
        }) ?? []
    );
  }, [data]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const TOTAL = DATA.reduce((acc, curr) => acc + curr.value, 0);

  // SCALES
  const xScale = useMemo(() => {
    return scaleLinear<number>({
      domain: [0, TOTAL],
      range: [0, 100],
    });
  }, [TOTAL]);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: DATA.map((d) => d.color),
    });
  }, [DATA, KEYS]);

  return (
    <RankingChart
      data={DATA}
      xScale={xScale}
      colorScale={colorScale}
      format={(d) => formatPercentage(d.value / TOTAL)}
    />
  );
};
