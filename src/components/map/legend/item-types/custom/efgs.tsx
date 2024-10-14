import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const EfgsLegend = ({ location }: { location?: string }) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          data?.data
            .toSorted((a, b) => {
              return a.label.localeCompare(b.label);
            })
            .map((d) => ({
              label: d.label,
              color: d.color ?? "transparent",
              value: d.value ?? 0,
            })) ?? []
        }
      />
    </LegendLoader>
  );
};
