"use client";

import Map from "react-map-gl";

import { motion } from "framer-motion";

import { env } from "@/env.mjs";

export const AtlasMap = () => {
  return (
    <motion.div
      layout
      transition={{
        duration: 0.4,
      }}
      className="h-full w-full grow bg-lightblue-50"
    >
      <motion.div
        layout
        transition={{
          duration: 0.4,
        }}
        className="h-full w-full"
      >
        <Map
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </motion.div>
    </motion.div>
  );
};
