"use client";

import { useMemo } from "react";

import { atom } from "jotai";
import { LngLat } from "mapbox-gl";
import { createSerializer, useQueryState } from "nuqs";

import {
  basemapParser,
  bboxParser,
  biomesParser,
  depthParser,
  ecosystemsParser,
  layersParser,
  layersSettingsParser,
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

// LAYERS
export const useSyncLayers = () => {
  return useQueryState("layers", layersParser);
};

export const useSyncLayersSettings = () => {
  return useQueryState("layers-settings", layersSettingsParser);
};

// FILTERS
export const useSyncRealms = () => {
  return useQueryState("realms", realmsParser);
};

export const useSyncBiomes = () => {
  return useQueryState("biomes", biomesParser);
};

export const useSyncEcosystems = () => {
  return useQueryState("ecosystems", ecosystemsParser);
};

export const useSyncDepth = () => {
  return useQueryState("depth", depthParser);
};

export const useSyncSearchParams = () => {
  const serialize = useMemo(() => {
    return createSerializer({
      bbox: bboxParser,
      basemap: basemapParser,
      location: locationParser,
      realms: realmsParser,
      biomes: biomesParser,
      ecosystems: ecosystemsParser,
      depth: depthParser,
      layers: layersParser,
      layersSettings: layersSettingsParser,
    });
  }, []);

  const [bbox] = useSyncBbox();
  const [basemap] = useSyncBasemap();
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems] = useSyncEcosystems();
  const [depth] = useSyncDepth();
  const [layers] = useSyncLayers();
  const [layersSettings] = useSyncLayersSettings();

  return serialize({
    bbox,
    basemap,
    location,
    realms,
    biomes,
    ecosystems,
    depth,
    layers,
    layersSettings,
  });
};

export const useSyncFilters = () => {
  const [realms, setRealms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const [depth, setDepth] = useSyncDepth();

  const reset = useMemo(() => {
    return () => {
      setRealms([]);
      setBiomes([]);
      setEcosystems([]);
      setDepth(depthParser.defaultValue);
    };
  }, [setRealms, setBiomes, setEcosystems, setDepth]);

  return {
    realms,
    biomes,
    ecosystems,
    depth,
    reset,
  };
};

export const tmpBboxAtom = atom<number[]>();
export const popupAtom = atom<LngLat | null>(null);
export const tourAtom = atom<boolean>();

// mobile
export const mobileStateAtom = atom<"hero" | "map" | "sidebar">("hero");
