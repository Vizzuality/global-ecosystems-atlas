import { ReactElement } from "react";

import { useApiLayersGet } from "@/types/generated/layers";

import { Info } from "@/containers/atlas/info";

import { H3 } from "@/components/ui/h3";
import { Markdown } from "@/components/ui/markdown";

export const LayersInfo = ({ metadata }: { metadata?: string }): ReactElement | null => {
  const { data: layersData } = useApiLayersGet();

  // @ts-expect-error id is a string
  const LAYER = layersData?.data?.find((l) => l.id === metadata);
  if (!LAYER) return null;

  const { metadata: lMetadata } = LAYER;
  if (!lMetadata) return null;

  const m = lMetadata as unknown as {
    abstract: string;
  };

  const markdown = m.abstract;

  if (!markdown) return null;

  return (
    <Info>
      <H3>{LAYER.name}</H3>
      <Markdown className="prose">{markdown}</Markdown>
    </Info>
  );
};
