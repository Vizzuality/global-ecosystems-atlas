"use client";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

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

import { BiomesExtent } from "./biomes";

export const WidgetLocationExtent = ({ location }: { location: string }) => {
  const {
    data,
    isFetched: biomesWidgetIsFetched,
    isFetching: biomesWidgetIsFetching,
    isError: biomesWidgetIsError,
  } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  return (
    <Widget className="grow rounded-lg border border-navy-50 p-4">
      <WidgetHeader>
        <WidgetTitle>Biomes Extent</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={biomesWidgetIsFetching && !biomesWidgetIsFetched}>
          <WidgetError isError={biomesWidgetIsError}>
            <WidgetNoData isNoData={!data?.data}>
              <BiomesExtent location={location} />
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
