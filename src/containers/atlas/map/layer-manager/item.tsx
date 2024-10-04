"use client";

import { cloneElement, isValidElement } from "react";

import { Layer } from "@deck.gl/core";

import { parseConfig } from "@/lib/json-converter";

import { LayerTyped } from "@/types/layers";

import DeckLayer from "@/components/map/layers/deck-layer";

interface LayerManagerItemProps {
  beforeId?: string;
  settings: Record<string, unknown>;
  id: string;
}

const LayerManagerItem = ({ id, beforeId, settings }: LayerManagerItemProps) => {
  const data: LayerTyped = {
    id: 1,
    type: "test",
    config: {
      "@@type": "RasterLayer",
      source: {
        tiles:
          "https://tiles.globalforestwatch.org/umd_tree_cover_gain_from_height/v202206/mode/{z}/{x}/{y}.png",
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          value: "Test",
          color: "#000",
        },
      ],
    },
    interaction_config: {
      event: "click",
      type: "test",
      values: [
        {
          key: "test",
          value: "test",
        },
      ],
    },
    metadata: {},
  };
  const { config, params_config } = data;
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
    },
  });

  if (isValidElement(c)) {
    return cloneElement(c, { id: `${id}-layer`, key: `${id}-layer` });
  }

  return <DeckLayer key={`${id}-layer`} id={`${id}-layer`} beforeId={beforeId} config={c} />;
};

export default LayerManagerItem;
