"use client";

import { useParams } from "next/navigation";

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

import { SourceSynthesisContribution } from "./chart";

export const WidgetEcosystemsSourceSynthesis = () => {
  const { ecosystemId } = useParams();

  const { isFetched, isFetching, isError } = useApiEcosystemsEcosystemIdWidgetsWidgetIdGet(
    `${ecosystemId}`,
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
