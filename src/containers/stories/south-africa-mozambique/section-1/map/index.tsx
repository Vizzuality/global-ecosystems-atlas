"use client";

import { useMemo } from "react";

import { LngLatBoundsLike, Map } from "react-map-gl";

import { env } from "@/env.mjs";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { FitBounds } from "@/containers/stories/south-africa-mozambique/section-1/map/fit-bounds";
import { LayerManager } from "@/containers/stories/south-africa-mozambique/section-1/map/layer-manager";

export const STEPS = [
  {
    id: 0,
    bbox: [16.344976840698242, -34.83399963378906, 40.842735290527344, -10.317108154296875],
    layers: ["efgs"],
  },
  {
    id: 1,
    bbox: [16.344976840698242, -34.83399963378906, 32.89236068725586, -22.126079559326172],
    layers: ["efgs"],
  },
  {
    id: 2,
    bbox: [30.213, -26.907, 40.842, -10.317],
    layers: ["efgs"],
  },
];

export const SAMSection1Map = () => {
  const [step] = useSyncStep();

  const s = Math.min(STEPS.length - 1, step);

  const STEP = useMemo(() => {
    return STEPS.find((s1) => s1.id === s);
  }, [s]);

  return (
    <div className="h-full w-full">
      <Map
        id="section-1-map"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          bounds: STEP?.bbox as LngLatBoundsLike,
          fitBoundsOptions: {
            padding: {
              top: 50,
              bottom: 50,
              left: 50,
              right: 50,
            },
          },
        }}
        style={{ width: "100%", height: "100%" }}
        projection={{
          name: "mercator",
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        scrollZoom={false}
      >
        <FitBounds />

        <LayerManager />
      </Map>
    </div>
  );
};
