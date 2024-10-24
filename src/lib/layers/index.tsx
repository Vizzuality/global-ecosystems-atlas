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
        {
          "@@function": "setQueryParams",
          url: `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png`,
          query: {
            asset: "realms",
            classes: "@@#params.realms",
          },
        },
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
      {
        key: "realms",
        default: [],
      },
    ],
    legend_config: {
      "@@type": "RealmsLegend",
    },
    interaction_config: {},
    metadata: "gea_realms",
  },
  {
    id: "biomes",
    name: "Biomes",
    type: "deckgl",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        {
          "@@function": "setQueryParams",
          url: `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png`,
          query: {
            asset: "biomes",
            classes: "@@#params.biomes",
          },
        },
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
      {
        key: "biomes",
        default: [],
      },
    ],
    legend_config: {
      "@@type": "BiomesLegend",
    },
    interaction_config: {},
    metadata: "gea_biomes",
  },
  {
    id: "efgs",
    name: "Ecosystem functional groups",
    type: "deckgl",
    group: "atlas-data",
    config: {
      "@@type": "RasterMaskedLayer",
      data: [
        {
          "@@function": "setQueryParams",
          url: `${env.NEXT_PUBLIC_API_URL}/custom/tiler/tiles/{z}/{x}/{y}.png`,
          query: {
            asset: "efgs",
            classes: "@@#params.efgs",
          },
        },
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
      {
        key: "efgs",
        default: [],
      },
    ],
    legend_config: {
      "@@type": "EfgsLegend",
    },
    metadata: "gea_efgs",
  },
  {
    id: "overlap-index",
    name: "Dataset count",
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
          label: "Overlap",
          value: 0,
          color: "#BADDBD",
        },
      ],
    },
    metadata: "gea_qa_oi",
  },
  {
    id: "country-contribution",
    name: "Contribution status",
    type: "deckgl",
    group: "status-data",
    config: {
      "@@type": "MVTLayer",
      data: `https://api.mapbox.com/v4/vizzgea.0kkwfp3y/{z}/{x}/{y}.mvt?access_token=${env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
      filled: true,
      stroked: true,
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      getLineColor: [255, 255, 255, 255],
      getLineWidth: 1,
      lineWidthUnits: "pixels",
      getFillColor: (d: { properties: { PoC_Status: string } }) => {
        switch (d.properties.PoC_Status) {
          case "National map included":
            return [134, 239, 172, 200];
          case "Subnational map(s) included":
            return [240, 171, 252, 200];
          case "Engagement underway":
            return [165, 180, 252, 200];
          default:
            return [226, 232, 240, 200];
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
          label: "National map included",
          value: 0,
          color: "#86efac",
        },
        {
          label: "Subnational map(s) included",
          value: 0,
          color: "#f0abfc",
        },
        {
          label: "Engagement underway",
          value: 0,
          color: "#a5b4fc",
        },
      ],
    },
    metadata: "gea_qa_cs",
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
          label: "Protected areas",
          value: 0,
          color: "#ef4444",
        },
      ],
    },
    metadata: "wdpa",
  },
  {
    id: "human-population",
    name: "Human population",
    type: "deckgl",
    group: undefined,
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
    metadata: "ciesin_pop_dens",
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
      extent: "@@#params.extent",
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
    metadata: "satellite",
  },
  {
    id: "story_sa",
    name: "South Africa",
    type: "deckgl",
    group: undefined,
    config: {
      "@@type": "RasterLayer",
      data: `${env.NEXT_PUBLIC_API_URL}/tiler/tiles/WebMercatorQuad/{z}/{x}/{y}.png?asset=indiv_sa_gea_current_cog&resampling=mode&colormap_type=linear&colormap_name=tab20&rescale=0,2945&nodata=0`,
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      extent: "@@#params.extent",
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
    metadata: "story_sa",
  },
  {
    id: "story_mozambique",
    name: "South Africa",
    type: "deckgl",
    group: undefined,
    config: {
      "@@type": "RasterLayer",
      data: `${env.NEXT_PUBLIC_API_URL}/tiler/tiles/WebMercatorQuad/{z}/{x}/{y}.png?asset=indiv_current_vegetation_map_of_mozambique_cog&resampling=mode&colormap_type=linear&colormap_name=tab20&rescale=1,255&nodata=0`,
      maxZoom: 20,
      minZoom: 0,
      zoomOffset: 1,
      refinementStrategy: "no-overlap",
      opacity: "@@#params.opacity",
      visible: "@@#params.visibility",
      extent: "@@#params.extent",
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
    metadata: "story_mozambique",
  },
] as const;

// https://api.mapbox.com/v4/mapbox.satellite/3/7/5.webp?sku=101tW7TDV0XEA&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA

export type LayerIds = (typeof LAYERS)[number]["id"];
export type LayerMetadataIds = (typeof LAYERS)[number]["metadata"];
