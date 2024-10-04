"use client";

import { useEffect } from "react";

import { Layer } from "@deck.gl/core";

import { LayerProps } from "@/types/layers";

import { useDeckMapboxOverlayContext } from "@/components/map/provider";

export type DeckLayerProps<T> = LayerProps &
  Partial<T> & {
    config: Layer | null;
  };

const DeckJsonLayer = <T,>({ id, config }: DeckLayerProps<T>) => {
  const i = `${id}-deck`;
  const { addLayer, removeLayer } = useDeckMapboxOverlayContext();

  useEffect(() => {
    if (!config) return;
    // Give the map a chance to load the background layer before adding the Deck layer
    setTimeout(() => {
      // https://github.com/visgl/deck.gl/blob/c2ba79b08b0ea807c6779d8fe1aaa307ebc22f91/modules/mapbox/src/resolve-layers.ts#L66

      addLayer(config);
    }, 10);
  }, [i, id, config, addLayer]);

  useEffect(() => {
    if (!config) return;
    return () => {
      removeLayer(i);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default DeckJsonLayer;
