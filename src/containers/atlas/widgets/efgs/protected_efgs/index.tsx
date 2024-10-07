"use client";
import { useMemo } from "react";

import { useParams } from "next/navigation";

import { getEFGSortedFromEFGCode } from "@/lib/taxonomy";
import { cn, formatPercentage } from "@/lib/utils";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";

import { WidgetInfo } from "@/containers/atlas/widgets/info";
import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
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
    return data?.data.find((d) => d.id === ecosystemId);
  }, [data, ecosystemId]);

  const p = (DATA?.value ?? 0) / 100;

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Protection level</WidgetTitle>
        <WidgetInfo>Hello</WidgetInfo>
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
                      background: "#08519C",
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
