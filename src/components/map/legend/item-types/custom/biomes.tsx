import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

export const BiomesLegend = ({ location }: { location?: string }) => {
  const { data } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  const DATA = data?.data as (WidgetData & { biome_code: string })[] | undefined;

  return DATA?.toSorted((a, b) => {
    return `${a.biome_code}${a.label}`.localeCompare(`${b.biome_code}${b.label}`);
  }).map((d) => {
    return (
      <div key={d.id} className="flex items-center gap-2">
        <div
          className="h-2 w-2 shrink-0 rounded-full border border-navy-700"
          style={{
            backgroundColor: d.color ?? "transparent",
          }}
        ></div>
        <span className="text-xs font-medium">
          {d.biome_code} {d.label}
        </span>
      </div>
    );
  });
};
