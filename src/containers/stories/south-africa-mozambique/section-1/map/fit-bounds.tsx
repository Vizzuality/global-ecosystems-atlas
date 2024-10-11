import { useEffect, useMemo } from "react";

import { LngLatBoundsLike, useMap } from "react-map-gl";

import { useQueries } from "@tanstack/react-query";
import turfBbox from "@turf/bbox";
import { GeoJSON, MultiPolygon, Polygon } from "geojson";
import { usePreviousDifferent } from "rooks";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

export const FitBounds = () => {
  const [step] = useSyncStep();
  const { current } = useMap();

  const s = Math.min(STEPS.length - 1, step);
  const prevStep = usePreviousDifferent(s);

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

  useEffect(() => {
    if (current && GEOJSON && prevStep !== s) {
      const bbox = turfBbox(GEOJSON);
      current.fitBounds(bbox as LngLatBoundsLike, {
        padding: 50,
      });
    }
  }, [current, s, prevStep, GEOJSON]);

  return null;
};
