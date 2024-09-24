import { parseAsArrayOf, parseAsFloat, parseAsString, parseAsStringLiteral } from "nuqs";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([-227.18, -53.92, 88.88, 71.99]);

export const basemapParser = parseAsStringLiteral(BASEMAPS.map((b) => b.value)).withDefault(
  "light",
);

export const locationParser = parseAsString;

export const realmsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const biomesParser = parseAsArrayOf(parseAsString).withDefault([]);
export const ecosystemsParser = parseAsArrayOf(parseAsString).withDefault([]);
export const depthParser = parseAsArrayOf(parseAsFloat).withDefault([-10000, 10000]);
