"use client";

import { cloneElement, isValidElement } from "react";

import { Layer } from "@deck.gl/core";

import { parseConfig } from "@/lib/json-converter";
import { LAYERS } from "@/lib/layers";
import { useLocationId } from "@/lib/locations";

import { useSyncDepth, useSyncLocation, useSyncRealms } from "@/app/(atlas)/atlas/store";

import DeckLayer from "@/components/map/layers/deck-layer";

interface LayerManagerItemProps {
  beforeId?: string;
  settings: Record<string, unknown>;
  id: string;
}

const LayerManagerItem = ({ id, settings }: LayerManagerItemProps) => {
  const LAYER = LAYERS.find((l) => l.id === id);
  const [location] = useSyncLocation();
  const [depth] = useSyncDepth();
  const [realms] = useSyncRealms();

  const LOCATION = useLocationId(location);

  const { config, params_config } = LAYER ?? {};

  if (!config) return null;

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
      extent: LOCATION?.bounds || null,
      depth0: depth[0],
      depth1: depth[1],
      realms,
    },
  });

  if (isValidElement(c)) {
    return cloneElement(c, { id: `${id}-layer`, key: `${id}-layer` });
  }

  return <DeckLayer key={`${id}-layer`} id={`${id}-layer`} config={c} beforeId={`${id}-layer`} />;
};

export default LayerManagerItem;
