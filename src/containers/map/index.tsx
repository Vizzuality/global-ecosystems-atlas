"use client";

import React from "react";

import { Tile3DLayer } from "@deck.gl/geo-layers";
import DeckGL from "@deck.gl/react";

import { env } from "@/env.mjs";

function Map() {
  const layer = new Tile3DLayer({
    id: "tile-3d-layer",
    data: "https://tile.googleapis.com/v1/3dtiles/root.json",
    loadOptions: {
      // https://developers.google.com/maps/documentation/tile/3d-tiles
      fetch: { headers: { "X-GOOG-API-KEY": env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } },
    },
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: 10,
        latitude: 50,
        zoom: 2,
      }}
      controller
      layers={[layer]}
    />
  );
}

export default Map;
