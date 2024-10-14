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
      <ul className="space-y-1.5">
        {DATA?.toSorted((a, b) => {
          return `${a.realm_code}${a.label}`.localeCompare(`${b.realm_code}${b.label}`);
        }).map((d) => {
          return (
            <div key={d.id} className="flex gap-2">
              <div
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full border border-navy-700"
                style={{
                  backgroundColor: d.color ?? "transparent",
                }}
              />
              <span className="mt-px text-xs font-medium leading-tight">
                {d.realm_code} {d.label}
              </span>
            </div>
          );
        })}
      </ul>
    </LegendLoader>
  );
};
