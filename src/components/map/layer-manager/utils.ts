import { useMemo } from "react";

import { useQueries } from "@tanstack/react-query";
import bbox from "@turf/bbox";
import { GeoJSON, MultiPolygon, Polygon } from "geojson";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

export const useGeojson = ({ locations }: { locations: string[] }) => {
  const locationsQueries = useQueries({
    queries: locations.map((location) => {
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

export const useBbox = ({ locations }: { locations: string[] }) => {
  const GEOJSON = useGeojson({ locations });
  if (!GEOJSON) {
    return null;
  }
  return bbox(GEOJSON);
};
