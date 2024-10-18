"use client";
import { useMemo } from "react";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { Info } from "@/containers/atlas/info";
import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetLoader,
  WidgetNoData,
} from "@/containers/atlas/widgets/item";

import { H3 } from "@/components/ui/h3";

export const WidgetLocationStatus = ({ location }: { location: string }) => {
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
    <Widget className="flex grow flex-col">
      <WidgetContent className="mt-0 flex grow flex-col">
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="flex grow flex-col justify-between gap-3">
                <div className="relative grow rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.realms}</div>
                  <div className="text-sm font-medium leading-none">realms</div>
                  <div className="absolute right-4 top-4">
                    <Info>
                      <H3>Realms</H3>
                      <p>
                        Realms are major components of the biosphere that differ fundamentally in
                        ecosystem organisation and function: terrestrial, freshwater, marine,
                        subterranean and combinations of these (transitional realms).
                      </p>
                    </Info>
                  </div>
                </div>
                <div className="relative grow rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.biomes}</div>
                  <div className="text-sm font-medium leading-none">biomes</div>
                  <div className="absolute right-4 top-4">
                    <Info>
                      <H3>Biomes</H3>
                      <p>
                        A biome is a component of a realm united by broad features of ecosystem
                        structure and one or a few common major ecological drivers that regulate
                        major ecological functions. Biomes are nested within realms.
                      </p>
                    </Info>
                  </div>
                </div>
                <div className="relative grow rounded-lg border border-navy-50 p-4">
                  <div className="text-4xl font-semibold leading-none">{DATA?.efgs}</div>
                  <div className="text-sm font-medium leading-none">
                    ecosystem functional groups
                  </div>
                  <div className="absolute right-4 top-4">
                    <Info>
                      <H3 className="pr-6">Ecosystem functional groups</H3>
                      <p>
                        Ecosystem functional groups are groups of related ecosystem types that share
                        common ecological drivers, which in turn promote similar biotic traits that
                        characterise the ecosytems in the group. Ecosystem functional groups are
                        nested within biomes.
                      </p>
                    </Info>
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
