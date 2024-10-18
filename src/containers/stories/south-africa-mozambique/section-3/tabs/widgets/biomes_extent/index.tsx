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

import { H3 } from "@/components/ui/h3";

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
        <Info>
          <H3>Biomes Extent</H3>
          <p>
            A biome is a component of a realm united by broad features of ecosystem structure and
            one or a few common major ecological drivers that regulate major ecological functions.
          </p>
        </Info>
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
