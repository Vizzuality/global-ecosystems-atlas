"use client";

import { useMemo } from "react";

import { GeoJsonLayer } from "@deck.gl/layers";
import { GeoJSON } from "geojson";

import { useApiLocationsGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import DeckLayer from "@/components/map/layers/deck-layer";

export const Mask = () => {
  const { data: locationsData } = useApiLocationsGet();
  const [location] = useSyncLocation();

  const LOCATION = useMemo(() => {
    if (!locationsData) return null;
    return locationsData.data.find((l) => l.location_code === location);
  }, [location, locationsData]);

  const c = useMemo(() => {
    const data: GeoJSON = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [
              LOCATION?.bounds
                ? [
                    [LOCATION.bounds[0], LOCATION.bounds[1]],
                    [LOCATION.bounds[0], LOCATION.bounds[3]],
                    [LOCATION.bounds[2], LOCATION.bounds[3]],
                    [LOCATION.bounds[2], LOCATION.bounds[1]],
                    [LOCATION.bounds[0], LOCATION.bounds[1]],
                  ]
                : [
                    [-180, -90],
                    [-180, 90],
                    [180, 90],
                    [180, -90],
                    [-180, -90],
                  ],
            ],
          },
        },
      ],
    };

    return new GeoJsonLayer({
      id: "location-mask-layer-deck",
      data,
      getFillColor: [0, 0, 0],
      getLineColor: [0, 0, 0],
      getLineWidth: 0,
      operation: "mask",
    });
  }, [LOCATION]);

  return <DeckLayer id="location-mask-layer" config={c} />;
};
