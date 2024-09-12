"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import { basemapParser, bboxParser } from "@/app/(atlas)/atlas/parsers";

export const navOpenAtom = atom(false);
export const sidebarOpenAtom = atom(true);

export const useSyncBbox = () => {
  return useQueryState("bbox", bboxParser);
};

export const useSyncBasemap = () => {
  return useQueryState("basemap", basemapParser);
};

const serialize = createSerializer({
  bbox: bboxParser,
  basemap: basemapParser,
});

export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  return serialize({
    bbox,
    basemap,
  });
};
