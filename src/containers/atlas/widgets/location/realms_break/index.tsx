"use client";
import { useMemo } from "react";

import {
  getBiomeFromEFGCode,
  getRealmsFromEFGCode,
  useBiomes,
  useGetGroups,
  useRealms,
} from "@/lib/taxonomy";

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

export const WidgetLocationRealmsBreak = () => {
  const [location] = useSyncLocation();

  const realmsData = useRealms({ location });
  const biomesData = useBiomes({ location });

  const { data, isFetched, isFetching, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  const DATA = useMemo(() => {
    return (
      data?.data.map((d) => {
        const realms = getRealmsFromEFGCode(d.id);
        const biome = getBiomeFromEFGCode(d.id);

        const r = realmsData?.find((r) => {
          return r.realms.sort().join("") === realms.sort().join("");
        });
        const b = biomesData?.find((r) => {
          return r.id === biome;
        });

        return {
          id: d.id,
          realm: r,
          biome: b,
          label: d.label,
        };
      }) ?? []
    );
  }, [data, realmsData, biomesData]);

  const CORE_REALMS = useGetGroups(DATA?.filter((r) => (r.realm?.realms.length ?? 0) === 1));
  const TRANSACTIONAL_REALMS = useGetGroups(DATA?.filter((r) => (r.realm?.realms.length ?? 0) > 1));

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Realms breakdown</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="space-y-7">
                <div className="space-y-4">
                  <h4 className="text-2xs font-bold uppercase">Core realms</h4>
                  <ul className="space-y-4">
                    {CORE_REALMS?.map((realm) => {
                      return (
                        <li key={realm.id}>
                          <h5 className="border-b border-navy-50 py-1 text-xs font-bold">
                            {realm.id} {realm.name}
                          </h5>
                          <ul>
                            {realm.items.map((biome) => {
                              return (
                                <li
                                  key={biome.id}
                                  className="flex items-center justify-between border-b border-navy-50"
                                >
                                  <h6 className="py-1 text-xs font-medium">
                                    {biome.id} {biome.name}
                                  </h6>
                                  <span className="text-xs font-bold">{biome.items.length}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xs font-bold uppercase">Transitional realms</h4>
                  <ul className="space-y-4">
                    {TRANSACTIONAL_REALMS?.map((realm) => {
                      return (
                        <li key={realm.id}>
                          <h5 className="border-b border-navy-50 py-1 text-xs font-bold">
                            {realm.id} {realm.name}
                          </h5>
                          <ul>
                            {realm.items.map((biome) => {
                              return (
                                <li
                                  key={biome.id}
                                  className="flex items-center justify-between border-b border-navy-50"
                                >
                                  <h6 className="py-1 text-xs font-medium">
                                    {biome.id} {biome.name}
                                  </h6>
                                  <span className="text-xs font-bold">{biome.items.length}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
