"use client";

import { useMemo } from "react";

// import { MVTLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";

import { LayerManagerProps } from "@/components/map/layer-manager";
import DeckLayer from "@/components/map/layers/deck-layer";

import { useGeojson } from "./utils";

export type MaskProps = {
  beforeId?: string;
  locations: LayerManagerProps["locations"];
};

export const Mask = ({ beforeId, locations }: MaskProps) => {
  const GEOJSON = useGeojson({ locations });

  const m = useMemo(() => {
    return new GeoJsonLayer({
      id: "location-mask-layer-deck",
      data: GEOJSON,
      stroked: false,
      filled: true,
      getFillColor: [0, 0, 0, 25],
      beforeId,
      operation: "mask",
    });
  }, [GEOJSON, beforeId]);

  return <DeckLayer id="location-mask-layer" config={m} />;
};
