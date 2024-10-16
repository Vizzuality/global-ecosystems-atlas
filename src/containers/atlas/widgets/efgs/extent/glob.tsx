import { useMemo } from "react";

import { useParams } from "next/navigation";

import { cn, formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";
import { WidgetData } from "@/types/generated/strapi.schemas";

export const GlobExtent = () => {
  const { ecosystemId } = useParams();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(`${ecosystemId}`, "extent_efgs");

  const DATA = useMemo(() => {
    const d1 = data?.data as (WidgetData & { location_code: string })[];
    return d1?.find((d) => d.location_code === "GLOB");
  }, [data]);

  const p = (DATA?.value ?? 0) / 100;

  return (
    <div className="space-y-1">
      <h4 className="text-xl font-medium">{formatPercentage(p)}</h4>
      <div className="w-full bg-navy-50">
        <div
          className={cn({
            "h-1.5 w-full rounded-lg": true,
          })}
          style={{
            width: `${p * 100}%`,
            background: "#08519C",
          }}
        />
      </div>
    </div>
  );
};
