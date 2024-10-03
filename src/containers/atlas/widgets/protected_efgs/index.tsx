"use client";
import { useMemo } from "react";

import { scaleLinear, scaleOrdinal } from "@visx/scale";
import CHROMA from "chroma-js";

import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { WidgetInfo } from "@/containers/atlas/widgets/info";
import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
  WidgetLoader,
  WidgetNoData,
  WidgetTitle,
} from "@/containers/atlas/widgets/item";

import RankingChart from "@/components/charts/ranking";

export const WidgetProtectedEfgs = () => {
  const [location] = useSyncLocation();

  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "protected_efgs",
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
        }) ?? []
    );
  }, [data]);

  // CONFIG
  const KEYS = useMemo(() => {
    return DATA.map((d) => d.id);
  }, [DATA]);

  // SCALES
  const xScale = useMemo(() => {
    return scaleLinear<number>({
      domain: [0, 100],
      range: [0, 100],
      round: true,
    });
  }, []);

  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: KEYS.map((key) => key.toString()),
      range: DATA.map((d) => d.color),
    });
  }, [DATA, KEYS]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Top 5 protected ecosystem groups</WidgetTitle>
        <WidgetInfo>Hello</WidgetInfo>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <RankingChart
                data={DATA ?? []}
                xScale={xScale}
                colorScale={colorScale}
                interactive={false}
                format={(d) => `${formatPercentage(d.value / 100)}`}
              />
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
