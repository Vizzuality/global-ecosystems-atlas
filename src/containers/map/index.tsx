"use client";

import React from "react";

import { _TerrainExtension as TerrainExtension } from "@deck.gl/extensions";
import { GeoBoundingBox, Tile3DLayer, TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer } from "@deck.gl/layers";
import DeckGL from "@deck.gl/react";

import { env } from "@/env.mjs";

function Map() {
  const tileLayer3D = new Tile3DLayer({
    id: "tile-3d-layer",
    data: "https://tile.googleapis.com/v1/3dtiles/root.json",
    loadOptions: {
      // https://developers.google.com/maps/documentation/tile/3d-tiles
      fetch: { headers: { "X-GOOG-API-KEY": env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } },
    },
    operation: "terrain+draw",
  });

  const tileLayer2D = new TileLayer({
    id: "tile-2d-layer",
    data: "https://tiles.globalforestwatch.org/umd_tree_cover_gain_from_height/v202206/mode/{z}/{x}/{y}.png",
    extensions: [new TerrainExtension()],
    renderSubLayers: (props) => {
      const { west, south, east, north } = props.tile.bbox as GeoBoundingBox;

      return new BitmapLayer(props, {
        id: props.id,
        data: undefined,
        image: props.tile.data,
        bounds: [west, south, east, north],
      });
    },
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: -82,
        latitude: 30,
        zoom: 8,
      }}
      controller
      layers={[tileLayer2D, tileLayer3D]}
    />
  );
}

export default Map;
