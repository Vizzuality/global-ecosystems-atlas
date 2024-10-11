"use client";

import { useMemo } from "react";

// import { MVTLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import { useQueries } from "@tanstack/react-query";
import { GeoJSON, MultiPolygon, Polygon } from "geojson";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

import DeckLayer from "@/components/map/layers/deck-layer";

export type MaskProps = {
  beforeId?: string;
};

export const Mask = ({ beforeId }: MaskProps) => {
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
