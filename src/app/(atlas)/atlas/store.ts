"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import { basemapParser, bboxParser, locationParser } from "@/app/(atlas)/atlas/parsers";

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

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
  location: locationParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [location] = useSyncLocation();

  return serialize({
    bbox,
    basemap,
    location,
  });
};

export const tmpBboxAtom = atom<number[]>();
