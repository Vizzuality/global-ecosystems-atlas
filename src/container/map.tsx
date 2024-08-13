"use client";
import React from "react";

import StaticMap from "react-map-gl";

import { BASEMAP } from "@deck.gl/carto";
import { TerrainLayer } from "@deck.gl/geo-layers";
import DeckGL from "@deck.gl/react";

function Map() {
  const layer = new TerrainLayer({
    elevationDecoder: {
      rScaler: 6553.6,
      gScaler: 25.6,
      bScaler: 0.1,
      offset: -10000,
    },
    // Digital elevation model from https://www.usgs.gov/
    elevationData: "/elevation_data.png",
    texture:
      "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/[148.35,-67.08,171.38,-50.03]/1280x1280?access_token=pk.eyJ1IjoiYWZpbGF0b3JlOTAiLCJhIjoiY2lqcml0bHoyMDBhZHZwbHhzM2Q1bnRwNSJ9.Zm2C1hNemolKnIAAWquGYg",
    // "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/158.8,-54.65,10/1280x1280?access_token=pk.eyJ1IjoiYWZpbGF0b3JlOTAiLCJhIjoiY2lqcml0bHoyMDBhZHZwbHhzM2Q1bnRwNSJ9.Zm2C1hNemolKnIAAWquGYg",
    bounds: [148.35833333333318, -67.08333333333327, 171.38749999999985, -50.033333333333275],
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: 158.8,
        latitude: -54.65,
        zoom: 10,
        pitch: 45,
      }}
      controller
      layers={[layer]}
    >
      <StaticMap
        mapStyle={BASEMAP.POSITRON}
        mapboxAccessToken="pk.eyJ1IjoiYWZpbGF0b3JlOTAiLCJhIjoiY2lqcml0bHoyMDBhZHZwbHhzM2Q1bnRwNSJ9.Zm2C1hNemolKnIAAWquGYg"
      />
    </DeckGL>
  );
}

export default Map;
