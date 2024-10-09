import { _Tile2DHeader, GeoBoundingBox, TileLayer } from "@deck.gl/geo-layers";
import { BitmapLayer, BitmapLayerProps } from "@deck.gl/layers";
// import GL from "@luma.gl/constants";
export interface RasterLayerExtraProps {
  id: string;
  beforeId?: string;
  bitmapProps: BitmapLayerProps;
}

class RasterLayer extends TileLayer<ImageBitmap, RasterLayerExtraProps> {
  renderSubLayers(
    sublayer: TileLayer["props"] & {
      id: string;
      data: ImageBitmap;
      _offset: number;
      tile: _Tile2DHeader<ImageBitmap>;
    },
  ): BitmapLayer | null {
    const {
      id: subLayerId,
      data: subLayerData,
      tile: subLayerTile,
      visible: subLayerVisible,
      opacity: subLayerOpacity,
    } = sublayer;

    const { west, south, east, north } = subLayerTile.bbox as GeoBoundingBox;

    if (subLayerData) {
      return new BitmapLayer({
        ...this.props.bitmapProps,
        id: subLayerId,
        image: subLayerData,
        bounds: [west, south, east, north],
        visible: subLayerVisible ?? true,
        opacity: subLayerOpacity ?? 1,
      });
    }
    return null;
  }
}

RasterLayer.layerName = "RasterLayer";

export default RasterLayer;
