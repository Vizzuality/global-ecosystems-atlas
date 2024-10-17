import { useMemo } from "react";

import { getBiomeFromEFGCode, getRealmFromEFGCode, REALM_ORDER } from "@/lib/taxonomy";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const EfgsLegend = ({
  location,
  ecosystems = [],
}: {
  location?: string;
  ecosystems: string[];
}) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  const DATA = useMemo(() => {
    return data?.data
      ?.filter((b) => {
        if (ecosystems.length === 0) return true;

        return ecosystems.includes(b.id);
      })
      ?.map((d) => ({
        label: d.label,
        value: d.value,
        color: d.color,
        realm: getRealmFromEFGCode(d.id),
        biome: getBiomeFromEFGCode(d.id),
      }))
      ?.toSorted((a, b) => {
        const aRealm = REALM_ORDER.indexOf(a.realm);
        const bRealm = REALM_ORDER.indexOf(b.realm);

        if (aRealm === bRealm) {
          return a.label.localeCompare(b.label);
        }

        return aRealm - bRealm;
      });
  }, [ecosystems, data]);

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          DATA?.map((d) => ({
            label: d.label,
            color: d.color ?? "transparent",
            value: d.value ?? 0,
          })) ?? []
        }
      />
    </LegendLoader>
  );
};
