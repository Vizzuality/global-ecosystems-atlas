"use client";

import { useParams } from "next/navigation";

import { getEFGSortedFromEFGCode } from "@/lib/taxonomy";

import { useApiEcosystemsEcosystemIdWidgetsWidgetIdGet } from "@/types/generated/ecosystems";

import { ByCountryExtent } from "@/containers/atlas/widgets/efgs/extent/by-country";
import { GlobExtent } from "@/containers/atlas/widgets/efgs/extent/glob";
import { Info } from "@/containers/atlas/info";
import {
  Widget,
  WidgetContent,
  WidgetError,
  WidgetHeader,
  WidgetLoader,
  WidgetNoData,
  WidgetTitle,
} from "@/containers/atlas/widgets/item";

export const WidgetEcosystemsExtent = () => {
  const { ecosystemId } = useParams();

  const { isFetched, isFetching, isError } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    getEFGSortedFromEFGCode(`${ecosystemId}`),
    "extent_efgs",
  );

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Global Ecosystem group extent</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={false}>
              <>
                <GlobExtent />
                <ByCountryExtent />
              </>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
