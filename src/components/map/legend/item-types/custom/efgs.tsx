import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const EfgsLegend = ({ location }: { location?: string }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      {data?.data
        .toSorted((a, b) => {
          return a.label.localeCompare(b.label);
        })
        .map((d) => {
          return (
            <div key={d.id} className="flex items-center gap-2">
              <div
                className="h-2 w-2 shrink-0 rounded-full border border-navy-700"
                style={{
                  backgroundColor: d.color ?? "transparent",
                }}
              ></div>
              <span className="text-xs font-medium">{d.label}</span>
            </div>
          );
        })}
    </LegendLoader>
  );
};
