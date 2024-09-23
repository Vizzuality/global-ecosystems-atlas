"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import {
  basemapParser,
  bboxParser,
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

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
  location: locationParser,
  realms: realmsParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();

  return serialize({
    bbox,
    basemap,
    location,
    realms,
  });
};

export const tmpBboxAtom = atom<number[]>();
