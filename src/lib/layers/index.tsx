import { env } from "@/env.mjs";

export const LAYERS = [
  {
    id: "realms",
    name: "Realms",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",

      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=realms`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
        },
        depthStart: "@@#params.depth0",
        depthEnd: "@@#params.depth1",
        extensions: [{ "@@type": "MaskExtension" }],
        maskId: "location-mask-layer-deck",
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
      {
        key: "depth0",
        default: -10000,
      },
      {
        key: "depth1",
        default: 8849,
      },
      {
        key: "extent",
        default: null,
      },
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          value: "Test",
          color: "#000",
        },
      ],
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "biomes",
    name: "Biomes",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=biomes`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
        },
        depthStart: "@@#params.depth0",
        depthEnd: "@@#params.depth1",
        extensions: [{ "@@type": "MaskExtension" }],
        maskId: "location-mask-layer-deck",
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
      {
        key: "depth0",
        default: -10000,
      },
      {
        key: "depth1",
        default: 8849,
      },
      {
        key: "extent",
        default: null,
      },
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          value: "Test",
          color: "#000",
        },
      ],
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "efgs",
    name: "Ecosystem Functional Groups",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=efgs`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
        },
        depthStart: "@@#params.depth0",
        depthEnd: "@@#params.depth1",
        extensions: [{ "@@type": "MaskExtension" }],
        maskId: "location-mask-layer-deck",
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
      {
        key: "depth0",
        default: -10000,
      },
      {
        key: "depth1",
        default: 8849,
      },
      {
        key: "extent",
        default: null,
      },
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          value: "Test",
          color: "#000",
        },
      ],
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "overlap-index",
    name: "Overlap Index",
    group: "status-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/tiler/tiles/WebMercatorQuad/{z}/{x}/{y}.png?asset=qa_efg_disagreement&resampling=mode&colormap_name=overlap`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
        },
        depthStart: "@@#params.depth0",
        depthEnd: "@@#params.depth1",
        extensions: [{ "@@type": "MaskExtension" }],
        maskId: "location-mask-layer-deck",
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
      {
        key: "depth0",
        default: -10000,
      },
      {
        key: "depth1",
        default: 8849,
      },
      {
        key: "extent",
        default: null,
      },
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          value: "Test",
          color: "#000",
        },
      ],
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "country-contribution",
    name: "Country contribution",
    group: "status-data",
    config: {
      "@@type": "MVTLayer",
      data: `https://api.mapbox.com/v4/vizzgea.0kkwfp3y/{z}/{x}/{y}.mvt?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      filled: true,
      getFillColor: (d: { properties: { PoC_Status: string } }) => {
        switch (d.properties.PoC_Status) {
          case "National map included":
            return [134, 239, 172, 255];
          case "Subnational map(s) included":
            return [240, 171, 252, 255];
          case "Engagement underway":
            return [165, 180, 252, 255];
          default:
            return [0, 0, 0, 0];
        }
      },
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
    ],
    //
  },
  {
    id: "protected-areas",
    name: "Protected areas",
    group: "context-data",
    config: {
      "@@type": "MVTLayer",
      data: `https://api.mapbox.com/v4/vizzgea.wdpa_preprocessed_simple/{z}/{x}/{y}.mvt?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      stroked: true,
      filled: true,
      getFillColor: [239, 68, 68, 180],
      getLineColor: [239, 68, 68, 255],
      lineWidthUnits: "pixels",
    },
    params_config: [
      {
        key: "opacity",
        default: 1,
      },
      {
        key: "visibility",
        default: true,
      },
    ],
  },
  {
    id: "human-population",
    name: "Human population",
    group: "context-data",
  },
];
