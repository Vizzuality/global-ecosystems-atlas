import {
  _getURLFromTemplate,
  GeoBoundingBox,
  TileLayer,
  TileLayerProps,
} from "@deck.gl/geo-layers";
import { BitmapLayerProps } from "@deck.gl/layers";
// import GL from "@luma.gl/constants";
import { RasterTileSource } from "mapbox-gl";

import { LayerProps } from "@/types/layers";

import BitmapMaskedLayer from "@/components/map/layers/deck-layer/bitmap-masked";

export interface RasterMaskedLayerProps extends LayerProps, TileLayerProps {
  id: string;
  source: RasterTileSource;
  opacity: number;
  visibility: boolean;
  bitmapProps: BitmapLayerProps;
}

class RasterMaskedLayer {
  constructor({ id, source, visibility, opacity, bitmapProps, ...props }: RasterMaskedLayerProps) {
    return new TileLayer<unknown>({
      ...props,
      id,
      data: source.tiles,
      tileSize: source.tileSize ?? 256,
      minZoom: source.minzoom,
      maxZoom: source.maxzoom,
      visible: visibility ?? true,
      opacity: opacity ?? 1,
      getTileData: (tile): Promise<ImageBitmap[]> => {
        return Promise.all(
          source.tiles.map((t) => {
            const url = _getURLFromTemplate(t, tile);

            if (!url) {
              return Promise.reject(new Error("Invalid URL template"));
            }

            return fetch(url).then(async (response) => {
              return createImageBitmap(await response.blob());
            });
          }),
        );
      },
      // refinementStrategy: "never",
      renderSubLayers: (subLayer) => {
        const {
          id: subLayerId,
          data: subLayerData,
          tile: subLayerTile,
          visible: subLayerVisible,
          opacity: subLayerOpacity,
        } = subLayer;

        const { west, south, east, north } = subLayerTile.bbox as GeoBoundingBox;

        if (subLayerData) {
          return new BitmapMaskedLayer({
            ...bitmapProps,
            id: subLayerId,
            image: subLayerData[0],
            bounds: [west, south, east, north],
            visible: subLayerVisible,
            opacity: subLayerOpacity,
            terrainTexture: subLayerData[1],
          });
        }
        return null;
      },
    });
  }
}

export default RasterMaskedLayer;
