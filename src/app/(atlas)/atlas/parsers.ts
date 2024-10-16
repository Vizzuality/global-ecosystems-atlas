import {
  parseAsArrayOf,
  parseAsFloat,
  parseAsJson,
  parseAsString,
  parseAsStringLiteral,
  inferParserType,
} from "nuqs";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([
  -101.13, -49.37, 149.05, 71.19,
]);

export const basemapParser = parseAsStringLiteral(BASEMAPS.map((b) => b.value)).withDefault(
  "light",
);

export const locationParser = parseAsString;

export const realmsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const biomesParser = parseAsArrayOf(parseAsString).withDefault([]);
export const ecosystemsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const depthParser = parseAsArrayOf(parseAsFloat).withDefault([-10000, 8849]);

export const layersParser = parseAsArrayOf(parseAsString).withDefault(["efgs"]);
export const layersSettingsParser = parseAsJson<{
  [key: string]: Record<string, unknown>;
}>();

export type AtlasSearchParams = {
  location: inferParserType<typeof locationParser>;
  basemap: inferParserType<typeof basemapParser>;
  realms: inferParserType<typeof realmsParser>;
  biomes: inferParserType<typeof biomesParser>;
  ecosystems: inferParserType<typeof ecosystemsParser>;
  depth: inferParserType<typeof depthParser>;
  layers: inferParserType<typeof layersParser>;
  layersSettings: inferParserType<typeof layersSettingsParser>;
};
