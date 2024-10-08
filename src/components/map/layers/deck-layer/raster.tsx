import { GeoBoundingBox, TileLayer, TileLayerProps } from "@deck.gl/geo-layers";
import { BitmapLayer, BitmapLayerProps } from "@deck.gl/layers";
// import GL from "@luma.gl/constants";
import { RasterTileSource } from "mapbox-gl";

import { LayerProps } from "@/types/layers";

export interface RasterLayerProps extends LayerProps {
  id: string;
  beforeId?: string;
  source: RasterTileSource;
  opacity: number;
  visibility: boolean;
  tileProps: TileLayerProps;
  bitmapProps: BitmapLayerProps;
}

class RasterLayer {
  constructor({
    id,
    beforeId,
    source,
    visibility,
    opacity,
    tileProps,
    bitmapProps,
  }: RasterLayerProps) {
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
      // refinementStrategy: "never",
      renderSubLayers: (subLayer) => {
        const {
          id: subLayerId,
          data: subLayerData,
          tile: subLayerTile,
          visible: subLayerVisible,
          opacity: subLayerOpacity,
        } = subLayer;

        const { zoom } = subLayerTile;
        const { west, south, east, north } = subLayerTile.bbox as GeoBoundingBox;

        if (subLayerData) {
          return new BitmapLayer({
            ...bitmapProps,
            id: subLayerId,
            image: subLayerData,
            bounds: [west, south, east, north],
            // textureParameters: {
            //   [GL.TEXTURE_MIN_FILTER]: GL.NEAREST,
            //   [GL.TEXTURE_MAG_FILTER]: GL.NEAREST,
            //   [GL.TEXTURE_WRAP_S]: GL.CLAMP_TO_EDGE,
            //   [GL.TEXTURE_WRAP_T]: GL.CLAMP_TO_EDGE,
            // },
            zoom,
            visible: subLayerVisible,
            opacity: subLayerOpacity,
          });
        }
        return null;
      },
    });
  }
}

export default RasterLayer;
