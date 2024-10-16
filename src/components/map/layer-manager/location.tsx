"use client";

import { useMemo } from "react";

import { GeoJsonLayer } from "@deck.gl/layers";

import { LayerManagerProps } from "@/components/map/layer-manager";
import DeckLayer from "@/components/map/layers/deck-layer";

import { useGeojson } from "./utils";

export type LocationProps = {
  beforeId?: string;
  locations: LayerManagerProps["locations"];
};

export const Location = ({ beforeId, locations }: LocationProps) => {
  const GEOJSON = useGeojson({ locations });

  const m = useMemo(() => {
    return new GeoJsonLayer({
      id: "location-layer-deck",
      data: GEOJSON,
      stroked: true,
      getFillColor: [0, 0, 0, 0],
      getLineColor: [125, 125, 125, 255],
      getLineWidth: 2,
      beforeId,
      lineWidthUnits: "pixels",
      operation: "draw",
      visible: !!locations.length,
    });
  }, [beforeId, locations, GEOJSON]);

  return <DeckLayer id="location-layer" config={m} />;
};
