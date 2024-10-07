import { useMemo } from "react";

import { useParams } from "next/navigation";

import { getEFGSortedFromEFGCode } from "@/lib/taxonomy";
import { cn, formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";

export const GlobExtent = () => {
  const { ecosystemId } = useParams();

  const { data } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    getEFGSortedFromEFGCode(`${ecosystemId}`),
    "extent_efgs",
  );

  const DATA = useMemo(() => {
    return data?.data.find((d) => d.id === "GLOB");
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
