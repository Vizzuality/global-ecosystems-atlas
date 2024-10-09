import { env } from "@/env.mjs";

export const LAYERS = [
  {
    id: "realms",
    name: "Realms",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",

      data: [
        "https://s3.amazonaws.com/wri-tiles/global-landcover-2015/{z}/{x}/{y}.png",
        // `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 10,
      minZoom: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
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
        // "https://tiles.globalforestwatch.org/gfw_forest_carbon_net_flux/v20240402/tcd_30/6/32/22.png",
        "https://tiles.globalforestwatch.org/birdlife_biodiversity_intactness/v201909/default/{z}/{x}/{y}.png",
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 10,
      minZoom: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
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
        "https://tiles.globalforestwatch.org/gfw_forest_carbon_net_flux/v20240402/tcd_30/{z}/{x}/{y}.png",
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}@2x.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 10,
      minZoom: 0,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
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
