"use client";
import { useMemo } from "react";

import { useParams } from "next/navigation";

import { getEFGSortedFromEFGCode } from "@/lib/taxonomy";
import { cn, formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";

import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
  WidgetInfo,
  WidgetLoader,
  WidgetNoData,
  WidgetTitle,
} from "@/containers/atlas/widgets/item";

export const WidgetEcosystemsProtectedEfgs = () => {
  const { ecosystemId } = useParams();

  const { data, isFetched, isFetching, isError } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    getEFGSortedFromEFGCode(`${ecosystemId}`),
    "protected_efgs",
  );

  const DATA = useMemo(() => {
    return data?.data?.[0];
  }, [data]);

  const p = (DATA?.value ?? 0) / 100;

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Protection level</WidgetTitle>
        <WidgetInfo id="protected_efgs" />
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={!DATA}>
              <div className="space-y-1">
                <h4 className="text-xl font-medium">{formatPercentage(p)}</h4>
                <div className="w-full bg-navy-50">
                  <div
                    className={cn({
                      "h-1.5 w-full rounded-lg": true,
                    })}
                    style={{
                      width: `${p * 100}%`,
                      background: DATA?.color ?? "#08519C",
                    }}
                  />
                </div>
              </div>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
