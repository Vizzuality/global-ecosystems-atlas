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
  },
  {
    id: "protected-areas",
    name: "Protected areas",
    group: "context-data",
  },
  {
    id: "human-population",
    name: "Human population",
    group: "context-data",
  },
];
