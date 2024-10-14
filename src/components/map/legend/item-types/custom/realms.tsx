import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const RealmsLegend = ({ location }: { location?: string }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const DATA = data?.data as (WidgetData & { realm_code: string })[] | undefined;

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      {DATA?.toSorted((a, b) => {
        return `${a.realm_code}${a.label}`.localeCompare(`${b.realm_code}${b.label}`);
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
              {d.realm_code} {d.label}
            </span>
          </div>
        );
      })}
    </LegendLoader>
  );
};
