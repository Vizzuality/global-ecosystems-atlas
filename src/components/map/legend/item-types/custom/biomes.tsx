import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const BiomesLegend = ({ location }: { location?: string }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_biomes",
  );

  const DATA = data?.data as (WidgetData & { biome_code: string })[] | undefined;

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <ul className="space-y-1.5">
        {DATA?.toSorted((a, b) => {
          return `${a.biome_code}${a.label}`.localeCompare(`${b.biome_code}${b.label}`);
        }).map((d) => {
          return (
            <li key={d.id} className="flex gap-2">
              <div
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border border-navy-700"
                style={{
                  backgroundColor: d.color ?? "transparent",
                }}
              />
              <span className="mt-px text-xs font-medium leading-tight">
                {d.biome_code} {d.label}
              </span>
            </li>
          );
        })}
      </ul>
    </LegendLoader>
  );
};
