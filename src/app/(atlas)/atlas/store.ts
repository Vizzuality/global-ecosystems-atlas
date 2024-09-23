"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import {
  basemapParser,
  bboxParser,
  biomesParser,
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

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
  location: locationParser,
  realms: realmsParser,
  biomes: biomesParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();

  return serialize({
    bbox,
    basemap,
    location,
    realms,
    biomes,
  });
};

export const tmpBboxAtom = atom<number[]>();
