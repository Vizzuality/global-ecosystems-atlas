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

export interface RasterMaskedLayerProps extends LayerProps {
  id: string;
  beforeId?: string;
  source: RasterTileSource;
  opacity: number;
  visibility: boolean;
  tileProps: TileLayerProps;
  bitmapProps: BitmapLayerProps;
}

class RasterMaskedLayer {
  constructor({
    id,
    beforeId,
    source,
    visibility,
    opacity,
    bitmapProps,
    tileProps,
  }: RasterMaskedLayerProps) {
    return new TileLayer<unknown>({
      ...tileProps,
      id,
      data: source.tiles,
      tileSize: source.tileSize ?? 256,
      minZoom: source.minzoom,
      maxZoom: source.maxzoom,
      visible: visibility ?? true,
      opacity: opacity ?? 1,
      // @ts-expect-error - `beforeId` is not a valid prop
      beforeId,
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
      onTileError: () => {},
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
            visible: subLayerVisible ?? true,
            opacity: subLayerOpacity ?? 1,
            terrainTexture: subLayerData[1],
          });
        }
        return null;
      },
    });
  }
}

export default RasterMaskedLayer;
