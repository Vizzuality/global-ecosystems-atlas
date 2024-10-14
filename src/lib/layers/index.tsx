import { env } from "@/env.mjs";

export const LAYERS = [
  {
    id: "realms",
    name: "Realms",
    type: "deckgl",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",

      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=realms`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
          addressModeU: "clamp-to-edge",
          addressModeV: "clamp-to-edge",
          addressModeW: "clamp-to-edge",
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
      "@@type": "RealmsLegend",
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "biomes",
    name: "Biomes",
    type: "deckgl",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=biomes`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
          addressModeU: "clamp-to-edge",
          addressModeV: "clamp-to-edge",
          addressModeW: "clamp-to-edge",
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
      "@@type": "BiomesLegend",
    },
    interaction_config: {},
    metadata: {},
  },
  {
    id: "efgs",
    name: "Ecosystem Functional Groups",
    type: "deckgl",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png?asset=efgs`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
          addressModeU: "clamp-to-edge",
          addressModeV: "clamp-to-edge",
          addressModeW: "clamp-to-edge",
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
      "@@type": "EfgsLegend",
    },
  },
  {
    id: "overlap-index",
    name: "Overlap Index",
    type: "deckgl",
    group: "status-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        `${env.NEXT_PUBLIC_API_URL}/tiler/tiles/WebMercatorQuad/{z}/{x}/{y}.png?asset=qa_efg_disagreement&resampling=mode&colormap_name=overlap`,
        `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      ],
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      depthStart: "@@#params.depth0",
      depthEnd: "@@#params.depth1",
      extent: "@@#params.extent",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      bitmapProps: {
        textureParameters: {
          minFilter: "nearest",
          magFilter: "nearest",
          addressModeU: "clamp-to-edge",
          addressModeV: "clamp-to-edge",
          addressModeW: "clamp-to-edge",
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
          label: "Test",
          value: 0,
          color: "#000",
        },
      ],
    },
  },
  {
    id: "country-contribution",
    name: "Country contribution",
    type: "deckgl",
    group: "status-data",
    config: {
      "@@type": "MVTLayer",
      data: `https://api.mapbox.com/v4/vizzgea.0kkwfp3y/{z}/{x}/{y}.mvt?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      filled: true,
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
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
    legend_config: {
      type: "basic",
      items: [
        {
          label: "Test",
          value: 0,
          color: "#000",
        },
      ],
    },
  },
  {
    id: "protected-areas",
    name: "Protected areas",
    type: "deckgl",
    group: "context-data",
    config: {
      "@@type": "MVTLayer",
      data: `https://api.mapbox.com/v4/vizzgea.wdpa_preprocessed_simple/{z}/{x}/{y}.mvt?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      stroked: true,
      filled: true,
      binary: true,
      getFillColor: [239, 68, 68, 180],
      getLineColor: [239, 68, 68, 255],
      lineWidthUnits: "pixels",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      extensions: [{ "@@type": "MaskExtension" }],
      maskId: "location-mask-layer-deck",
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
    legend_config: {
      type: "basic",
      items: [
        {
          label: "Test",
          value: 0,
          color: "#000",
        },
      ],
    },
  },
  {
    id: "human-population",
    name: "Human population",
    type: "deckgl",
    group: "context-data",
    config: null,
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
    legend_config: {
      type: "basic",
      items: [
        {
          label: "Test",
          value: 0,
          color: "#000",
        },
      ],
    },
  },
  {
    id: "satellite",
    name: "Satellite",
    type: "deckgl",
    group: undefined,
    config: {
      "@@type": "RasterLayer",
      data: `https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101tW7TDV0XEA&access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      bitmapProps: {
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
    ],
    legend_config: {
      type: "basic",
      items: [
        {
          label: "Test",
          value: 0,
          color: "#000",
        },
      ],
    },
  },
] as const;

// https://api.mapbox.com/v4/mapbox.satellite/3/7/5.webp?sku=101tW7TDV0XEA&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA

export type LayerIds = (typeof LAYERS)[number]["id"];
