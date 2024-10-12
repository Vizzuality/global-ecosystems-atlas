"use client";

import { useMemo } from "react";

// import { MVTLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";

import { useGeojson } from "@/containers/stories/south-africa-mozambique/utils";

import DeckLayer from "@/components/map/layers/deck-layer";

export type MaskProps = {
  beforeId?: string;
};

export const Mask = ({ beforeId }: MaskProps) => {
  const GEOJSON = useGeojson({ locations: ["ZAF_224", "MOZ_167"] });

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
