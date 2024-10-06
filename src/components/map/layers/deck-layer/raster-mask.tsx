import { Layer, LayerContext, LayerExtension } from "@deck.gl/core";
import { GeoBoundingBox, TileLayer, TileLayerProps } from "@deck.gl/geo-layers";
import { BitmapLayer, BitmapLayerProps } from "@deck.gl/layers";
import { Texture } from "@luma.gl/core";
import { Model } from "@luma.gl/engine";
// import GL from "@luma.gl/constants";
import { RasterTileSource } from "mapbox-gl";

import { LayerProps } from "@/types/layers";

export interface RasterMaskLayerProps extends LayerProps, TileLayerProps {
  id: string;
  source: RasterTileSource;
  opacity: number;
  visibility: boolean;
  bitmapProps: BitmapLayerProps;
}

type DecodeExtensionType = Layer<{
  terrainTexture: ImageBitmap;
  terrainStart: number;
  terrainEnd: number;
}>;

export class DecodeExtension extends LayerExtension<BitmapLayerProps> {
  getShaders(this: DecodeExtensionType) {
    return {
      inject: {
        "fs:#decl": /*glsl*/ `
          uniform sampler2D terrainTexture;
          uniform float terrainStart;
          uniform float terrainEnd;
        `,

        "fs:#main-end": /* glsl */ `
          vec4 b = texture(bitmapTexture, uv);
          vec4 t = texture(terrainTexture, uv);

          float height = -10000.0 + (((t.r * 255.0) * 256.0 * 256.0 + (t.g * 255.0) * 256.0 + (t.b * 255.0)) * 0.1);
          float h = height / 8849.0;

          if (height < terrainStart || height > terrainEnd) {
            discard;
          }

          fragColor = b;
        `,
      },
    };
  }

  initializeState(this: DecodeExtensionType, context: LayerContext): void {
    const texture = context.device.createTexture({
      data: this.props.terrainTexture,
    });

    this.setState({
      tTexture: texture,
    });
  }

  draw(this: DecodeExtensionType) {
    const model = this.state.model as Model;

    model.setBindings({
      terrainTexture: this.state.tTexture as Texture,
    });

    model.setUniforms({
      terrainStart: this.props.terrainStart,
      terrainEnd: this.props.terrainEnd,
    });
  }
}

DecodeExtension.extensionName = "DecodeExtension";

class RasterMaskLayer {
  constructor({ id, source, visibility, opacity, bitmapProps, ...props }: RasterMaskLayerProps) {
    return new TileLayer<unknown>({
      ...props,
      id,
      data: source.tiles,
      tileSize: source.tileSize ?? 256,
      minZoom: source.minzoom,
      maxZoom: source.maxzoom,
      visible: visibility ?? true,
      opacity: opacity ?? 1,
      getTileData: (tile) => {
        const { x, y, z } = tile.index;

        return Promise.all(
          source.tiles.map((t) => {
            const url = t
              .replace("{x}", x.toString())
              .replace("{y}", y.toString())
              .replace("{z}", z.toString());

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
          return new BitmapLayer({
            ...bitmapProps,
            id: subLayerId,
            image: subLayerData[0],
            bounds: [west, south, east, north],
            visible: subLayerVisible,
            opacity: subLayerOpacity,
            terrainTexture: subLayerData[1],
            extensions: [new DecodeExtension()],
          });
        }
        return null;
      },
    });
  }
}

export default RasterMaskLayer;
