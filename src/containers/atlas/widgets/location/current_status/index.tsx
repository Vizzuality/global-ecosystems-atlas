"use client";
import { useMemo } from "react";

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

export const WidgetLocationStatus = () => {
  const [location] = useSyncLocation();

  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "current_status",
  );

  const DATA = useMemo(() => {
    return data?.data?.reduce(
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
        <WidgetInfo id="current_status" />
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="flex flex-col gap-3">
                <div className="space-y-2 rounded-md bg-navy-700 p-4 text-white">
                  <div className="flex items-start justify-between">
                    <div className="space-x-2">
                      <span className="space-x-1">
                        <span className="text-2xl font-semibold leading-none lg:text-4xl">
                          {formatPercentage((DATA?.mapped_coverage ?? 0) / 100, {}, false)}
                        </span>
                        <span className="text-lg leading-none">%</span>
                      </span>
                      <span className="text-xs font-medium leading-none">
                        {!location && "global"} coverage
                      </span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-sm bg-white/20">
                    <div
                      className="h-full rounded-sm"
                      style={{
                        width: `${DATA?.mapped_coverage}%`,
                        background: "#C3DF09",
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 pb-0">
                    <div className="text-2xl font-semibold leading-none lg:text-4xl">
                      {DATA?.realms}
                    </div>
                    <div className="text-sm font-medium leading-none">realms</div>
                  </div>
                  <div className="p-4 pb-0">
                    <div className="text-2xl font-semibold leading-none lg:text-4xl">
                      {DATA?.biomes}
                    </div>
                    <div className="text-sm font-medium leading-none">biomes</div>
                  </div>
                  <div className="p-4 pb-0">
                    <div className="text-2xl font-semibold leading-none lg:text-4xl">
                      {DATA?.efgs}
                    </div>
                    <div className="text-sm font-medium leading-none">
                      ecosystem functional groups
                    </div>
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
