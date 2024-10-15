import { useMemo } from "react";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const BiomesLegend = ({ location, biomes }: { location?: string; biomes: string[] }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_biomes",
  );

  const DATA = useMemo(() => {
    const d = data?.data as (WidgetData & { biome_code: string })[] | undefined;

    return d?.filter((b) => {
      if (biomes.length === 0) return true;

      return biomes.includes(b.biome_code);
    });
  }, [biomes, data]);

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          DATA?.toSorted((a, b) => {
            return `${a.biome_code}${a.label}`.localeCompare(`${b.biome_code}${b.label}`);
          })?.map((d) => {
            return {
              label: `${d.biome_code} ${d.label}`,
              value: d.value ?? 0,
              color: d.color ?? "transparent",
            };
          }) ?? []
        }
      />
    </LegendLoader>
  );
};
