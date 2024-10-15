import { useMemo } from "react";

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
    return data?.data?.filter((b) => {
      if (ecosystems.length === 0) return true;

      return ecosystems.includes(b.id);
    });
  }, [ecosystems, data]);

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          DATA?.toSorted((a, b) => {
            return a.label.localeCompare(b.label);
          })?.map((d) => ({
            label: d.label,
            color: d.color ?? "transparent",
            value: d.value ?? 0,
          })) ?? []
        }
      />
    </LegendLoader>
  );
};
