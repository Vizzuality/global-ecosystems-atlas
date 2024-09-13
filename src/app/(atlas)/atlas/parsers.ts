import { parseAsArrayOf, parseAsFloat, parseAsStringLiteral } from "nuqs";

import { COUNTRIES } from "@/lib/countries";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";

export const bboxParser = parseAsArrayOf(parseAsFloat).withDefault([-227.18, -53.92, 88.88, 71.99]);

export const basemapParser = parseAsStringLiteral(BASEMAPS.map((b) => b.value)).withDefault(
  "light",
);

export const countryParser = parseAsStringLiteral(COUNTRIES.map((c) => c.iso3));
