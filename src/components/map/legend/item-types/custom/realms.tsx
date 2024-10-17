import { useMemo } from "react";

import { REALM_ORDER } from "@/lib/taxonomy";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const RealmsLegend = ({
  location,
  realms = [],
}: {
  location?: string;
  realms?: string[];
}) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const DATA = useMemo(() => {
    return data?.data
      ?.filter((b) => {
        if (realms.length === 0) return true;

        return realms.includes(b.id);
      })
      ?.toSorted((a, b) => {
        const aRealm = REALM_ORDER.indexOf(a.id);
        const bRealm = REALM_ORDER.indexOf(b.id);

        if (aRealm === bRealm) {
          return a.id.localeCompare(b.id);
        }

        return aRealm - bRealm;
      });
  }, [realms, data]);

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          DATA?.map((d) => {
            return {
              label: `${d.id} ${d.label}`,
              value: d.value ?? 0,
              color: d.color ?? "transparent",
            };
          }) ?? []
        }
      />
    </LegendLoader>
  );
};
