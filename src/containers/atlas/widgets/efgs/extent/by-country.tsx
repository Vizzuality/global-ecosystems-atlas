import { useMemo } from "react";

import { useParams } from "next/navigation";

import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import CHROMA from "chroma-js";

import { getEFGSortedFromEFGCode } from "@/lib/taxonomy";
import { formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";
import { useApiLocationsGet } from "@/types/generated/locations";

import HorizontalStackedBar from "@/components/charts/horizontal-stacked-bar";

export const ByCountryExtent = () => {
  return (
    <div className="space-y-4 pt-4">
      <div className="space-y-3">
        <h4 className="text-2xs font-bold uppercase tracking-wide">Ecosystem group presence</h4>
        <div className="h-4">
          <ParentSize>
            {({ width, height }) => <ByCountryExtentChart width={width} height={height} />}
          </ParentSize>
        </div>
      </div>

      <div className="space-y-2.5">
        <h4 className="text-xs font-semibold">Proportion of country</h4>
        <ByCountryExtentRanking />
      </div>
    </div>
  );
};

export const ByCountryExtentChart = ({ width, height }: { width: number; height: number }) => {
  const { ecosystemId } = useParams();

  const { data: locationsData } = useApiLocationsGet();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    getEFGSortedFromEFGCode(`${ecosystemId}`),
    "extent_efgs",
  );

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data
        .map((d) => {
          const l = locationsData?.data.find((l) => l.location_code === d.id);

          return {
            id: d.id,
            label: l?.gis_name ?? "-",
            value: d.value ?? 0,
            color: CHROMA.random().hex(),
          };
        })
        .filter((d) => d.value && d.id !== "GLOB")
        .sort((a, b) => b.value - a.value) ?? []
    );
  }, [data, locationsData]);

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
    const COLORS = CHROMA.scale(["#08519C", "#DEEBF7"]).colors(KEYS.length);

    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: COLORS,
    });
  }, [KEYS]);

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

export const ByCountryExtentRanking = () => {
  const { ecosystemId } = useParams();

  const { data: locationsData } = useApiLocationsGet();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    getEFGSortedFromEFGCode(`${ecosystemId}`),
    "extent_efgs",
  );

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data
        .map((d) => {
          const l = locationsData?.data.find((l) => l.location_code === d.id);

          return {
            id: d.id,
            label: l?.gis_name ?? "-",
            value: d.value ?? 0,
            color: CHROMA.random().hex(),
          };
        })
        .filter((d) => d.value && d.id !== "GLOB")
        .sort((a, b) => b.value - a.value) ?? []
    );
  }, [data, locationsData]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const colorScale = useMemo(() => {
    const COLORS = CHROMA.scale(["#08519C", "#DEEBF7"]).colors(KEYS.length);

    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: COLORS,
    });
  }, [KEYS]);

  return (
    <ul className="space-y-1">
      {DATA.map((d) => (
        <li key={d.id} className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2.5">
            <span
              className="h-2 w-2 rounded-full bg-blue-500"
              style={{ backgroundColor: colorScale(d.id) }}
            />
            <span className="text-xs font-medium">{d.label}</span>
          </div>
          <span className="text-xs font-medium">{formatPercentage((d.value ?? 0) / 100)}</span>
        </li>
      ))}
    </ul>
  );
};
