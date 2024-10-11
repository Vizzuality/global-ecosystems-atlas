import { useMemo } from "react";

import { useQueries } from "@tanstack/react-query";
import bbox from "@turf/bbox";
import { GeoJSON, MultiPolygon, Polygon } from "geojson";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

export const useGeojson = () => {
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
          geometry: (data as Polygon | MultiPolygon) ?? { type: "Polygon", coordinates: [] },
        };
      }),
    };
  }, [locationsQueries]);

  return GEOJSON;
};

export const useBbox = () => {
  const GEOJSON = useGeojson();
  if (!GEOJSON) {
    return null;
  }
  return bbox(GEOJSON);
};
