"use client";

import Map, { LngLatBoundsLike, useMap } from "react-map-gl";

import { env } from "@/env.mjs";

import { useSyncBbox } from "@/app/(atlas)/atlas/store";

export const AtlasMap = () => {
  const { atlasMap } = useMap();
  const [bbox, setBbox] = useSyncBbox();

  const handleMove = () => {
    if (atlasMap) {
      const b = atlasMap
        .getBounds()
        ?.toArray()
        ?.flat()
        ?.map((v: number) => {
          return parseFloat(v.toFixed(2));
        });

      if (b) setBbox(b);
      // setTmpBbox(undefined);
    }
  };

  return (
    <div className="relative left-[calc(theme(space.10)_+_theme(space.8))] h-full w-[calc(100%_-_theme(space.10)_-_theme(space.8))] overflow-hidden bg-lightblue-50">
      <div className="h-full w-full grow bg-lightblue-50">
        <Map
          id="atlasMap"
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            bounds: bbox as LngLatBoundsLike,
          }}
          onMove={handleMove}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  );
};
