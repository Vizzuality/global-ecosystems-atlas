"use client";

import { useMemo } from "react";

// import { MVTLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import { GeoJSON } from "geojson";

import { useApiLocationsGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import DeckLayer from "@/components/map/layers/deck-layer";

export type MaskProps = {
  beforeId?: string;
};

export const Mask = ({ beforeId }: MaskProps) => {
  const { data: locationsData } = useApiLocationsGet();
  const [location] = useSyncLocation();

  const LOCATION = useMemo(() => {
    if (!locationsData) return null;
    return locationsData.data.find((l) => l.location_code === location);
  }, [location, locationsData]);

  const GEOJSON = useMemo<GeoJSON>(() => {
    return {
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
  }, [LOCATION]);

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
    // return new MVTLayer({
    //   id: "location-mask-layer-deck",
    //   data: "https://tiles.globalforestwatch.org/wdpa_protected_areas/v202308/default/{z}/{x}/{y}.pbf",
    //   binary: false,
    //   maxZoom: 10,
    //   beforeId,
    //   pickable: false,
    //   renderSubLayers: (props) => {
    //     if (!props.data) return null;

    //     // const d = props.data.filter(d1 => d1.properties.iso3 === 'PRT');
    //     return new GeoJsonLayer(props, {
    //       data: props.data,
    //       operation: "mask",
    //       pickable: false,
    //     });
    //   },
    // });
  }, [GEOJSON, beforeId]);

  return <DeckLayer id="location-mask-layer" config={m} />;
};
