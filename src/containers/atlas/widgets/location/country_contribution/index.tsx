"use client";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

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

import { CountryContribution } from "./chart";

export const WidgetLocationCountryContribution = () => {
  const [location] = useSyncLocation();

  const { isFetching, isFetched, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    "GLOB",
    "country_con_stat",
  );

  if (location) return null;

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Contribution status</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={false}>
              <CountryContribution />
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
