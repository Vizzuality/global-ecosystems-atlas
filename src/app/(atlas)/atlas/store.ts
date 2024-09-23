"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import {
  basemapParser,
  bboxParser,
  biomesParser,
  ecosystemsParser,
  locationParser,
  realmsParser,
} from "@/app/(atlas)/atlas/parsers";

export const navOpenAtom = atom(false);
export const sidebarOpenAtom = atom(true);

export const useSyncBbox = () => {
  return useQueryState("bbox", bboxParser);
};

export const useSyncBasemap = () => {
  return useQueryState("basemap", basemapParser);
};

export const useSyncLocation = () => {
  return useQueryState("location", locationParser);
};

export const useSyncRealms = () => {
  return useQueryState("realms", realmsParser);
};

export const useSyncBiomes = () => {
  return useQueryState("biomes", biomesParser);
};

export const useSyncEcosystems = () => {
  return useQueryState("ecosystems", ecosystemsParser);
};

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
  location: locationParser,
  realms: realmsParser,
  biomes: biomesParser,
  ecosystems: ecosystemsParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems] = useSyncEcosystems();

  return serialize({
    bbox,
    basemap,
    location,
    realms,
    biomes,
    ecosystems,
  });
};

export const tmpBboxAtom = atom<number[]>();
