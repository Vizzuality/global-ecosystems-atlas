"use client";

import { atom } from "jotai";
import { createSerializer, useQueryState } from "nuqs";

import { bboxParser } from "@/app/(atlas)/atlas/parsers";

export const navOpenAtom = atom(false);
export const sidebarOpenAtom = atom(true);

export const useSyncBbox = () => {
  return useQueryState("bbox", bboxParser);
};

const serialize = createSerializer({
  bbox: bboxParser,
});
export const useSyncSearchParams = () => {
  const [bbox] = useSyncBbox();
  return serialize({
    bbox,
  });
};
