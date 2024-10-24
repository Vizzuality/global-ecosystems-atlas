"use client";
import { useMemo } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
  WidgetInfo,
  WidgetLoader,
  WidgetNoData,
  WidgetTitle,
} from "@/containers/atlas/widgets/item";

import { PieChart } from "@/components/charts/pie";

export const WidgetLocationEcosystemAssesment = () => {
  const [location] = useSyncLocation();

  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "ecosystem_assesment",
  );

  const TOTAL = useMemo(() => {
    return data?.data?.reduce((acc, item) => acc + (item.value ?? 0), 0);
  }, [data]);

  const DATA = useMemo(() => {
    return data?.data
      ?.map((d) => {
        return {
          id: d.id,
          label: d.label,
          value: (d.value ?? 0) / (TOTAL ?? 1),
          color: d.color ?? "transparent",
        };
      })
      ?.toSorted((a, b) => {
        return +a.id - +b.id;
      });
  }, [data, TOTAL]);

  const SELECTED = useMemo(() => {
    // sum values
    return DATA?.filter((d) => d.label !== "Least concern")?.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }, [DATA]);

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
        <WidgetTitle>
          Ecosystem risk status{" "}
          <span className="font-medium normal-case">(Red List of Ecosystems)</span>
        </WidgetTitle>
        <WidgetInfo id="ecosystem_assesment" />
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA?.length}>
              <div className="grid grid-cols-2 items-center gap-6">
                <div className="col-span-1 aspect-square">
                  {!!DATA && (
                    <ParentSize className="relative">
                      {({ width, height }) => (
                        <>
                          <PieChart
                            width={width}
                            height={height}
                            data={DATA ?? []}
                            colorScale={colorScale}
                            format={formatPercentage}
                          />
                          <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-8">
                            <div className="space-x-1">
                              <span className="text-2xl font-semibold leading-none lg:text-4xl">
                                {formatPercentage(SELECTED ?? 0, {}, false)}
                              </span>
                              <span className="text-lg leading-none">%</span>
                            </div>
                            <div className="text-center leading-none">
                              <span className="text-center text-xs font-medium leading-none">
                                threatened ecosystem types
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </ParentSize>
                  )}
                </div>

                {/* Legend */}
                <ul className="col-span-1 space-y-2">
                  {DATA?.map((d) => (
                    <li key={d.id} className="flex items-start gap-2.5">
                      <div
                        className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background: d.color ?? "transparent",
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
