import { BitmapLayer } from "@deck.gl/layers";
import { Texture } from "@luma.gl/core";
import { Model } from "@luma.gl/engine";
import { ShaderModule } from "@luma.gl/shadertools";

class BitmapMaskedLayer extends BitmapLayer<{
  terrainTexture: string;
  terrainStart: number;
  terrainEnd: number;
}> {
  state!: {
    disablePicking?: boolean;
    model?: Model;
    mesh?: unknown;
    coordinateConversion: number;
    bounds: number[];
    tTexture?: Texture;
  };

  getShaders() {
    const shaders = super.getShaders();
    const m = {
      name: "bitmap-masked",
      vs: /* glsl */ `
        uniform sampler2D terrainTexture;
        uniform float terrainStart;
        uniform float terrainEnd;
    `,
      fs: /* glsl */ `
        uniform sampler2D terrainTexture;
        uniform float terrainStart;
        uniform float terrainEnd;
      `,
      inject: {
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

    if (!shaders.modules.find((m: ShaderModule) => m.name === "bitmap-masked")) {
      shaders.modules.push(m);
    }

    return shaders;
  }

  initializeState(): void {
    super.initializeState();
    const texture = this.context.device.createTexture({
      data: this.props.terrainTexture,
    });
    this.setState({
      tTexture: texture,
    });
  }

  draw(this: BitmapMaskedLayer, opts: unknown) {
    const model = this.state.model as Model;
    model.setBindings({
      terrainTexture: this.state.tTexture as Texture,
    });
    model.setUniforms({
      terrainStart: this.props.terrainStart,
      terrainEnd: this.props.terrainEnd,
    });
    super.draw(opts);
  }
}

BitmapMaskedLayer.layerName = "BitmapMaskedLayer";

export default BitmapMaskedLayer;
