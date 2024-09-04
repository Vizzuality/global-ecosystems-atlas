"use client";

import Map, { useMap } from "react-map-gl";

import { motion } from "framer-motion";
import { useResizeObserverRef } from "rooks";

import { env } from "@/env.mjs";

export const AtlasMap = () => {
  const { atlasMap } = useMap();

  const handleResizeMap = () => {
    setTimeout(() => {
      const center = atlasMap?.getCenter();
      atlasMap?.flyTo({
        center,
        duration: 400,
      });
      atlasMap?.resize();
    }, 0);
  };
  const [ref] = useResizeObserverRef(handleResizeMap);

  return (
    <motion.div
      layout
      transition={{
        duration: 0.4,
      }}
      className="relative left-[calc(theme(space.10)_+_theme(space.8))] h-full w-[calc(100%_-_theme(space.10)_-_theme(space.8))] overflow-hidden bg-lightblue-50"
    >
      <div ref={ref} className="h-full w-full grow bg-lightblue-50">
        <Map
          id="atlasMap"
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </motion.div>
  );
};
