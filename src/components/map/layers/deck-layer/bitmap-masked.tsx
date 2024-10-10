import { BitmapLayer } from "@deck.gl/layers";
import { Texture } from "@luma.gl/core";
import { Model } from "@luma.gl/engine";
import { ShaderModule } from "@luma.gl/shadertools";

class BitmapMaskedLayer extends BitmapLayer<{
  depthTexture: ImageBitmap | null;
  depthStart: number;
  depthEnd: number;
}> {
  state!: {
    disablePicking?: boolean;
    model?: Model;
    mesh?: unknown;
    coordinateConversion: number;
    bounds: number[];
    tTexture?: Texture;
    tTextureEnabled: boolean;
  };

  getShaders() {
    const shaders = super.getShaders();
    const m = {
      name: "depth",
      vs: /* glsl */ `
        uniform sampler2D depthTexture;

        uniform depthUniforms {
          float start;
          float end;
          bool enabled;
        } depth;
      `,
      fs: /* glsl */ `
        uniform sampler2D depthTexture;
        uniform depthUniforms {
          float start;
          float end;
          bool enabled;
        } depth;
      `,
      uniformTypes: {
        start: "f32",
        end: "f32",
        enabled: "i32",
      },
      inject: {
        "fs:#main-end": /* glsl */ `
          if (depth.enabled) {
            vec4 t = texture(depthTexture, uv);
            float height = -10000.0 + (((t.r * 255.0) * 256.0 * 256.0 + (t.g * 255.0) * 256.0 + (t.b * 255.0)) * 0.1);
            float h = height / 8849.0;

            if (height < depth.start || height > depth.end) {
              discard;
            }
          }
        `,
      },
    } as const satisfies ShaderModule<{
      depthTexture: string;
      start: number;
      end: number;
      enabled: number;
    }>;

    if (!shaders.modules.find((m: ShaderModule) => m.name === "depth")) {
      shaders.modules.push(m);
    }

    return shaders;
  }

  initializeState(): void {
    super.initializeState();
    const texture = this.context.device.createTexture({
      data: this.props.depthTexture,
    });

    this.setState({
      tTextureEnabled: !!this.props.depthTexture ? 1 : 0,
      tTexture: texture,
    });
  }

  draw(this: BitmapMaskedLayer, opts: unknown) {
    const model = this.state.model as Model;
    if (this.state.tTexture) {
      model.setBindings({
        depthTexture: this.state.tTexture,
      });
    }

    model.shaderInputs.setProps({
      depth: {
        start: this.props.depthStart,
        end: this.props.depthEnd,
        enabled: this.state.tTextureEnabled,
      },
    });
    super.draw(opts);
  }
}

BitmapMaskedLayer.layerName = "BitmapMaskedLayer";

export default BitmapMaskedLayer;
