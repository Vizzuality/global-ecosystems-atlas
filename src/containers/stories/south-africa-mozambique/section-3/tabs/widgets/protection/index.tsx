"use client";
import { useEffect, useMemo, useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleOrdinal } from "@visx/scale";

import { formatPercentage } from "@/lib/utils";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

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

const DATUM = {
  ZAF_224: [
    {
      id: "protected",
      label: "is protected",
      value: 0.1277,
      color: "#D94801",
    },
    {
      id: "not-protected",
      label: "is not protected",
      value: 0.8723,
      color: "#e5e9ed",
    },
  ],
  MOZ_167: [
    {
      id: "protected",
      label: "is protected",
      value: 0.1788,
      color: "#D94801",
    },
    {
      id: "not-protected",
      label: "is not protected",
      value: 0.8212,
      color: "#e5e9ed",
    },
  ],
};

export const WidgetLocationProtection = ({ location }: { location: string }) => {
  const [selected, setSelected] = useState<string>();

  const { isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const DATA = useMemo(() => {
    return DATUM[location as keyof typeof DATUM];
  }, [location]);

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
    <Widget className="rounded-lg border border-navy-50 p-4">
      <WidgetHeader>
        <WidgetTitle>Protection level</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="m-auto aspect-square w-60">
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
                          pieProps={{
                            pieSort: (a, b) => {
                              return b.id.localeCompare(a.id);
                            },
                          }}
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
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
