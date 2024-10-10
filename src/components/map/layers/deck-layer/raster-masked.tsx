import {
  _getURLFromTemplate,
  _Tile2DHeader,
  _TileLoadProps,
  GeoBoundingBox,
  TileLayer,
} from "@deck.gl/geo-layers";
import { BitmapLayerProps } from "@deck.gl/layers";
// import GL from "@luma.gl/constants";

import BitmapMaskedLayer from "@/components/map/layers/deck-layer/bitmap-masked";

export interface RasterMaskedLayerExtraProps {
  id: string;
  beforeId?: string;
  bitmapProps: BitmapLayerProps;
}

class RasterMaskedLayer extends TileLayer<
  PromiseSettledResult<ImageBitmap>[],
  RasterMaskedLayerExtraProps
> {
  getTileData(tile: _TileLoadProps): Promise<PromiseSettledResult<ImageBitmap>[]> {
    if (Array.isArray(this.props.data)) {
      return Promise.allSettled(
        this.props.data.map((t) => {
          const url = _getURLFromTemplate(t, tile);

          if (!url) {
            return Promise.reject(new Error("Invalid URL template"));
          }

          return fetch(url).then(async (response) => {
            return createImageBitmap(await response.blob());
          });
        }),
      );
    }
    return Promise.reject(new Error("Invalid tile data"));
  }

  _onTileError(): void {}

  renderSubLayers(
    sublayer: TileLayer["props"] & {
      id: string;
      data: PromiseSettledResult<ImageBitmap>[];
      _offset: number;
      tile: _Tile2DHeader<PromiseSettledResult<ImageBitmap>[]>;
    },
  ): BitmapMaskedLayer | null {
    const {
      id: subLayerId,
      data: subLayerData,
      tile: subLayerTile,
      visible: subLayerVisible,
      opacity: subLayerOpacity,
    } = sublayer;

    const { west, south, east, north } = subLayerTile.bbox as GeoBoundingBox;

    if (subLayerData) {
      return new BitmapMaskedLayer({
        ...this.props.bitmapProps,
        id: subLayerId,
        image: subLayerData[0].status === "fulfilled" ? subLayerData[0].value : null,
        bounds: [west, south, east, north],
        visible: subLayerVisible ?? true,
        opacity: subLayerOpacity ?? 1,
        depthTexture: subLayerData[1].status === "fulfilled" ? subLayerData[1].value : null,
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
        },
      });
    }
    return null;
  }
}

RasterMaskedLayer.layerName = "RasterMaskedLayer";

export default RasterMaskedLayer;
