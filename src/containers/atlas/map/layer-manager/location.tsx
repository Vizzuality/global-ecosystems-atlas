"use client";

import { useMemo } from "react";

import { GeoJsonLayer } from "@deck.gl/layers";
import { GeoJSON, Polygon } from "geojson";

import { useApiLocationsLocationGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import DeckLayer from "@/components/map/layers/deck-layer";

export type LocationProps = {
  beforeId?: string;
};

export const Location = ({ beforeId }: LocationProps) => {
  const [location] = useSyncLocation();

  const { data: locationData } = useApiLocationsLocationGet(location, {
    query: {
      enabled: !!location,
    },
  });

  const GEOJSON = useMemo<GeoJSON>(() => {
    return {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: locationData as Polygon,
        },
      ],
    };
  }, [locationData]);

  const m = useMemo(() => {
    return new GeoJsonLayer({
      id: "location-layer-deck",
      data: GEOJSON,
      stroked: true,
      getFillColor: [0, 0, 0, 0],
      getLineColor: [0, 0, 0, 255],
      getLineWidth: 2,
      beforeId,
      lineWidthUnits: "pixels",
      operation: "draw",
      visible: !!location,
    });
  }, [beforeId, location, GEOJSON]);

  return <DeckLayer id="location-layer" config={m} visible={!!location} />;
};
