"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import { basemapParser, bboxParser, countryParser } from "@/app/(atlas)/atlas/parsers";

export const navOpenAtom = atom(false);
export const sidebarOpenAtom = atom(true);

export const useSyncBbox = () => {
  return useQueryState("bbox", bboxParser);
};

export const useSyncBasemap = () => {
  return useQueryState("basemap", basemapParser);
};

export const useSyncCountry = () => {
  return useQueryState("country", countryParser);
};

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
  country: countryParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [country] = useSyncCountry();

  return serialize({
    bbox,
    basemap,
    country,
  });
};
