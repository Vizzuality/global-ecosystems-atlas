"use client";

import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import CHROMA from "chroma-js";

import { cn, formatNumber } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import HorizontalStackedBar from "@/components/charts/horizontal-stacked-bar";

const SORT = [
  "National map included",
  "Subnational map(s) included",
  "Engagement underway",
  "Unknown / no Map",
];

export const CountryContribution = () => {
  return (
    <div className="space-y-4">
      <CountryContributionNumber />

      <div className="h-4">
        <ParentSize>
          {({ width, height }) => <CountryContributionChart width={width} height={height} />}
        </ParentSize>
      </div>

      <CountryContributionRanking />
    </div>
  );
};

export const CountryContributionNumber = () => {
  const [location] = useSyncLocation();

  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "country_con_stat",
  );

  console.log(data?.data);

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data.map((d) => {
        return {
          id: d.id,
          label: d.label,
          value: d.value ?? 0,
          color: d.color ?? CHROMA.random().hex(),
        };
      }) ?? []
    );
  }, [data]);

  const CURRENT = DATA.filter((d) => d.label !== "Unknown / no Map").reduce(
    (acc, curr) => acc + (curr.value ?? 0),
    0,
  );
  const TOTAL = DATA.reduce((acc, curr) => acc + (curr.value ?? 0), 0);

  return (
    <div className="leading-none">
      <span className="text-4xl font-semibold leading-none">{CURRENT}</span>
      <span className="text-lg leading-none"> / {TOTAL} </span>
      <span className="text-xs font-medium leading-none"> have contributed their data</span>
    </div>
  );
};

export const CountryContributionChart = ({ width, height }: { width: number; height: number }) => {
  const [location] = useSyncLocation();

  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "country_con_stat",
  );

  // DATA
  const DATA = useMemo(() => {
    return (
      data?.data
        .map((d) => {
          return {
            id: d.id,
            label: d.label,
            value: d.value ?? 0,
            color: d.color ?? CHROMA.random().hex(),
          };
        })
        ?.toSorted((a, b) => {
          return SORT.indexOf(a.label) - SORT.indexOf(b.label);
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
        return DATA.find((d) => d.id === key)?.color ?? CHROMA.random().hex();
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

export const CountryContributionRanking = () => {
  const [location] = useSyncLocation();

  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "country_con_stat",
  );

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
            color: d.color ?? CHROMA.random().hex(),
          };
        })
        .toSorted((a, b) => {
          return SORT.indexOf(a.label) - SORT.indexOf(b.label);
        }) ?? []
    );
  }, [data]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: DATA.map((d) => d.color),
    });
  }, [DATA, KEYS]);

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
                  <span className="w-full">{label}</span>
                </div>
                <div className="align-bottom">
                  <div className="shrink-0 whitespace-nowrap text-right text-xs font-medium text-navy-700">
                    {formatNumber(value)}
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
