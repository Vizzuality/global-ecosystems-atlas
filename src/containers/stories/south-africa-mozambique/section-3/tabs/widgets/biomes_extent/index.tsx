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
    isFetched: biomesWidgetIsFetched,
    isFetching: biomesWidgetIsFetching,
    isError: biomesWidgetIsError,
  } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Biomes Extent</WidgetTitle>
        <Info>Hello</Info>
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={biomesWidgetIsFetching && !biomesWidgetIsFetched}>
          <WidgetError isError={biomesWidgetIsError}>
            <WidgetNoData isNoData={false}>
              <BiomesExtent location={location} />
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
