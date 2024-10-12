"use client";

import { cloneElement, isValidElement } from "react";

import { Layer } from "@deck.gl/core";

import { parseConfig } from "@/lib/json-converter";
import { LAYERS } from "@/lib/layers";

import { LayerManagerProps } from "@/components/map/layer-manager";
import DeckLayer from "@/components/map/layers/deck-layer";

import { useBbox } from "./utils";

interface LayerManagerItemProps {
  beforeId?: string;
  settings: Record<string, unknown>;
  locations: LayerManagerProps["locations"];
  id: string;
}

const LayerManagerItem = ({ id, locations, settings }: LayerManagerItemProps) => {
  const LAYER = LAYERS.find((l) => l.id === id);

  const BBOX = useBbox({ locations });

  const { config, params_config } = LAYER ?? {};
  const c = parseConfig<Layer>({
    config: {
      ...(config ?? {}),
      id: `${id}-layer-deck`,
      slug: id,
      beforeId: `${id}-layer`,
    },
    params_config,
    settings: {
      ...settings,
      extent: BBOX,
    },
  });

  if (isValidElement(c)) {
    return cloneElement(c, { id: `${id}-layer`, key: `${id}-layer` });
  }

  return <DeckLayer key={`${id}-layer`} id={`${id}-layer`} config={c} beforeId={`${id}-layer`} />;
};

export default LayerManagerItem;
