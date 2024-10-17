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

import { SourceSynthesisContribution } from "./chart";

export const WidgetLocationSourceSynthesis = () => {
  const [location] = useSyncLocation();

  const { isFetching, isFetched, isError } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "source_synth",
  );

  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Source synthesis</WidgetTitle>
        <WidgetInfo id="source_synth" />
      </WidgetHeader>
      <WidgetContent>
        <WidgetLoader isLoading={isFetching && !isFetched}>
          <WidgetError isError={isError}>
            <WidgetNoData isNoData={false}>
              <SourceSynthesisContribution />
            </WidgetNoData>
          </WidgetError>
        </WidgetLoader>
      </WidgetContent>
    </Widget>
  );
};
