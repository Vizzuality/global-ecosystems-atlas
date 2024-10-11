"use client";

import { useMemo } from "react";

import { GeoJsonLayer } from "@deck.gl/layers";
import { useQueries } from "@tanstack/react-query";
import { GeoJSON, MultiPolygon, Polygon } from "geojson";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

import DeckLayer from "@/components/map/layers/deck-layer";

export type LocationProps = {
  beforeId?: string;
};

export const Location = ({ beforeId }: LocationProps) => {
  const [step] = useSyncStep();
  const s = Math.min(STEPS.length - 1, step);
  const STEP = STEPS[s];

  const locationsQueries = useQueries({
    queries: STEP.locations.map((location) => {
      return getApiLocationsLocationGetQueryOptions(location);
    }),
  });

  const GEOJSON = useMemo<GeoJSON>(() => {
    return {
      type: "FeatureCollection",
      features: locationsQueries.map((query) => {
        const { data } = query;
        return {
          type: "Feature",
          properties: {},
          geometry: data as Polygon | MultiPolygon,
        };
      }),
    };
  }, [locationsQueries]);

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
    });
  }, [beforeId, GEOJSON]);

  return <DeckLayer id="location-layer" config={m} />;
};
