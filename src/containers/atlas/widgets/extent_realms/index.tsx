"use client";
import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { REALMS, RealmsIds } from "@/lib/colors";
import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
  WidgetLoader,
  WidgetNoData,
  WidgetTitle,
} from "@/containers/atlas/widgets/item";

import { PieChart } from "@/components/charts/pie";

export const WidgetExtentRealms = () => {
  const [location] = useSyncLocation();

  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const TOTAL = useMemo(() => {
    return data?.data?.reduce((acc, item) => acc + (item.value ?? 0), 0);
  }, [data]);

  const DATA = useMemo(() => {
    return data?.data.map((d) => {
      return {
        id: d.id,
        label: d.label,
        value: (d.value ?? 0) / (TOTAL ?? 1),
        color: REALMS[d.id as RealmsIds]?.color ?? "#000",
      };
    });
  }, [data, TOTAL]);

  // SCALES
  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: DATA?.map((e) => `${e.id}`),
      range: DATA?.map((e) => `${e.color}`),
    });
  }, [DATA]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Ecosystem functional groups</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="grid grid-cols-2 items-center gap-6">
                <div className="col-span-1 aspect-square">
                  {!!DATA && (
                    <ParentSize>
                      {({ width, height }) => (
                        <PieChart
                          width={width}
                          height={height}
                          data={DATA ?? []}
                          colorScale={colorScale}
                          format={formatPercentage}
                          // selected={selected}
                          // onPathMouseClick={onPieClick}
                        />
                      )}
                    </ParentSize>
                  )}
                </div>
                <ul className="col-span-1 space-y-2">
                  {DATA?.map((d) => (
                    <li key={d.id} className="flex items-start gap-2.5">
                      <div
                        className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background: d.color,
                        }}
                      />
                      <div className="text-xs font-medium leading-none">
                        {d.label} ({formatPercentage(d.value)})
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
