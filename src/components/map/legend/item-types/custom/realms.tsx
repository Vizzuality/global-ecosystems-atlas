import { useMemo } from "react";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

import LegendTypeBasic from "@/components/map/legend/item-types/basic";
import { LegendLoader } from "@/components/map/legend/item-types/custom";

export const RealmsLegend = ({
  location,
  realms = [],
}: {
  location?: string;
  realms?: string[];
}) => {
  const { data, isFetching, isFetched } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const DATA = useMemo(() => {
    const d = data?.data as (WidgetData & { realm_code: string })[] | undefined;

    return d?.filter((b) => {
      if (realms.length === 0) return true;

      return realms.includes(b.realm_code);
    });
  }, [realms, data]);

  return (
    <LegendLoader isLoading={isFetching && !isFetched}>
      <LegendTypeBasic
        items={
          DATA?.toSorted((a, b) => {
            return `${a.realm_code}${a.label}`.localeCompare(`${b.realm_code}${b.label}`);
          }).map((d) => {
            return {
              label: `${d.realm_code} ${d.label}`,
              value: d.value ?? 0,
              color: d.color ?? "transparent",
            };
          }) ?? []
        }
      />
    </LegendLoader>
  );
};
