"use client";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

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

import { CountryContribution } from "./chart";

export const WidgetLocationCountryContribution = () => {
  const [location] = useSyncLocation();

  const { isFetching, isFetched, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "country_con_stat",
  );

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Contribution status</WidgetTitle>
        <WidgetInfo id="country_con_stat" />
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
