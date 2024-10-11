"use client";

import { useState } from "react";

import { LngLatBoundsLike, Map } from "react-map-gl";

import { env } from "@/env.mjs";

import { FitBounds } from "@/containers/stories/south-africa-mozambique/section-1/map/fit-bounds";
import { LayerManager } from "@/containers/stories/south-africa-mozambique/section-1/map/layer-manager";
import { useBbox } from "@/containers/stories/south-africa-mozambique/section-1/map/utils";

export const STEPS = [
  {
    id: 0,
    bbox: [16.344976840698242, -34.83399963378906, 40.842735290527344, -10.317108154296875],
    layers: ["satellite"],
    locations: ["ZAF_224", "MOZ_167"],
  },
  {
    id: 1,
    bbox: [16.344976840698242, -34.83399963378906, 32.89236068725586, -22.126079559326172],
    layers: ["efgs"],
    locations: ["ZAF_224"],
  },
  {
    id: 2,
    bbox: [30.213, -26.907, 40.842, -10.317],
    layers: ["efgs"],
    locations: ["MOZ_167"],
  },
];

export const SAMSection1Map = () => {
  const [loaded, setLoaded] = useState(false);
  const BBOX = useBbox();

  return (
    <div className="h-full w-full">
      <Map
        id="section-1-map"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          bounds: BBOX as LngLatBoundsLike,
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
        onLoad={() => {
          setLoaded(true);
        }}
      >
        <FitBounds />

        {loaded && <LayerManager />}
      </Map>
    </div>
  );
};
