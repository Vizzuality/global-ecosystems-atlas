"use client";
import { useEffect, useMemo, useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { RealmsIds } from "@/lib/colors";
import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { Info } from "@/containers/atlas/info";
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

export const WidgetLocationEcosystemAssesment = () => {
  const [selected, setSelected] = useState<RealmsIds>();
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
      .map((d) => {
        return {
          id: d.id as RealmsIds,
          label: d.label,
          value: (d.value ?? 0) / (TOTAL ?? 1),
          color: d.color,
        };
      })
      .toSorted((a, b) => b.value - a.value);
  }, [data, TOTAL]);

  const SELECTED = useMemo(() => {
    const s = DATA?.find((d) => d.id === selected);

    return s ?? DATA?.[0];
  }, [DATA, selected]);

  // SCALES
  const colorScale = useMemo(() => {
    return scaleOrdinal<string, string>({
      domain: DATA?.map((e) => `${e.id}`),
      range: DATA?.map((e) => `${e.color}`),
    });
  }, [DATA]);

  useEffect(() => {
    setSelected(DATA?.[0]?.id);
  }, [DATA]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>
          Ecosystems Risk status <span className="font-medium normal-case">(Type level)</span>
        </WidgetTitle>
        <Info>
          This widget shows the proportion of national ecosystem types assessed under each risk
          category in the Red List of Ecosystems. Ecosystem types are sub-units within the ecosystem
          functional groups displayed on the Atlas, and represent the level at which risk status is
          assessed. More information on https://www.iucnrle.org/
        </Info>
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
                            interactive
                            onPathMouseEnter={(d) => {
                              setSelected(d.id);
                            }}
                          />
                          <div className="pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-8">
                            <div className="space-x-1">
                              <span className="text-4xl font-semibold leading-none">
                                {formatPercentage(SELECTED?.value ?? 0, {}, false)}
                              </span>
                              <span className="text-lg leading-none">%</span>
                            </div>
                            <div className="text-center leading-none">
                              <span className="text-center text-xs font-medium leading-none">
                                {SELECTED?.label}
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
                    <li
                      key={d.id}
                      className="flex items-start gap-2.5"
                      onMouseEnter={() => setSelected(d.id)}
                    >
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
