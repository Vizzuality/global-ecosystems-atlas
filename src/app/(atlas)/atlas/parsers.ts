import {
  parseAsArrayOf,
  parseAsFloat,
  parseAsJson,
  parseAsString,
  parseAsStringLiteral,
} from "nuqs";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([-144.3, -63.28, 171.76, 77.94]);

export const basemapParser = parseAsStringLiteral(BASEMAPS.map((b) => b.value)).withDefault(
  "light",
);

export const locationParser = parseAsString;

export const realmsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const biomesParser = parseAsArrayOf(parseAsString).withDefault([]);
export const ecosystemsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const depthParser = parseAsArrayOf(parseAsFloat).withDefault([-10000, 8849]);

export const layersParser = parseAsArrayOf(parseAsString).withDefault(["terrain"]);
export const layersSettingsParser = parseAsJson<{
  [key: string]: Record<string, unknown>;
}>();
