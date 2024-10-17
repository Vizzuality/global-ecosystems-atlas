import { useMemo } from "react";

import { getBiomeFromEFGCode, getRealmFromEFGCode, REALM_ORDER } from "@/lib/taxonomy";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const BiomesLegend = ({ location, biomes }: { location?: string; biomes: string[] }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_biomes",
  );

  const DATA = useMemo(() => {
    return data?.data
      ?.filter((b) => {
        if (biomes.length === 0) return true;

        return biomes.includes(b.id);
      })
      ?.map((b) => {
        return {
          id: getBiomeFromEFGCode(b.id),
          label: b.label,
          value: b.value,
          color: b.color,
          realm: getRealmFromEFGCode(b.id),
        };
      })
      ?.toSorted((a, b) => {
        const aRealm = REALM_ORDER.indexOf(a.realm);
        const bRealm = REALM_ORDER.indexOf(b.realm);

        if (aRealm === bRealm) {
          return a.id.localeCompare(b.id);
        }

        return aRealm - bRealm;
      });
  }, [biomes, data]);

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
