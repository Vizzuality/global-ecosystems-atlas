"use client";

import { useQueryState } from "nuqs";

import { stepParser } from "@/app/(app)/stories/south-africa-mozambique/parsers";

export const useSyncStep = () => {
  return useQueryState("step", stepParser);
};
