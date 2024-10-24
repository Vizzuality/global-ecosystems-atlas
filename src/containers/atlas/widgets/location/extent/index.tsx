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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BiomesExtent } from "./biomes";
import { EFGSExtent } from "./efgs";

export const WidgetLocationExtent = () => {
  const [location] = useSyncLocation();

  const {
    data: biomesData,
    isFetched: biomesWidgetIsFetched,
    isFetching: biomesWidgetIsFetching,
    isError: biomesWidgetIsError,
  } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_biomes");

  const {
    data: efgsData,
    isFetched: efgsWidgetIsFetched,
    isFetching: efgsWidgetIsFetching,
    isError: efgsWidgetIsError,
  } = useApiLocationsLocationWidgetsWidgetIdGet(location ?? "GLOB", "extent_efgs");

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Extent</WidgetTitle>
        <WidgetInfo id="extent_efgs" />
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader
          isLoading={
            (biomesWidgetIsFetching || efgsWidgetIsFetching) &&
            (!biomesWidgetIsFetched || !efgsWidgetIsFetched)
          }
        >
          <WidgetError isError={biomesWidgetIsError || efgsWidgetIsError}>
            <WidgetNoData isNoData={!biomesData?.data && !efgsData?.data}>
              <Tabs defaultValue="efgs">
                <TabsList className="w-full">
                  <TabsTrigger className="w-full" value="biomes">
                    Biomes
                  </TabsTrigger>
                  <TabsTrigger className="w-full" value="efgs">
                    Ecosystem functional groups
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="biomes">
                  <BiomesExtent />
                </TabsContent>

                <TabsContent value="efgs">
                  <EFGSExtent />
                </TabsContent>
              </Tabs>
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
