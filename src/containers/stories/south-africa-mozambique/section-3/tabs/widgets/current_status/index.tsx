"use client";
import { useMemo } from "react";

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

export const WidgetLocationStatus = ({ location }: { location: string }) => {
  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "current_status",
  );

  const DATA = useMemo(() => {
    return data?.data.reduce(
      (acc, item) => {
        acc[item.label] = item.value ?? 0;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [data]);

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Current status</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="flex flex-col gap-3">
                <div className="rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.realms}</div>
                  <div className="text-sm font-medium leading-none">realms</div>
                </div>
                <div className="rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.biomes}</div>
                  <div className="text-sm font-medium leading-none">biomes</div>
                </div>
                <div className="rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.efgs}</div>
                  <div className="text-sm font-medium leading-none">
                    ecosystem functional groups
                  </div>
                </div>
              </div>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
