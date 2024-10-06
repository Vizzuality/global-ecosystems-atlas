"use client";

import { useMemo } from "react";

import { Layer, useMap } from "react-map-gl";

import { useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import { DeckMapboxOverlayProvider } from "@/components/map/provider";

import LayerManagerItem from "./item";

export const LayerManager = () => {
  const { current: map } = useMap();

  const baseLayer = useMemo(() => {
    if (map && map.isStyleLoaded()) {
      const layers = map!.getStyle()!.layers;
      // Find the custom layer to be able to sort the layers
      const customLayer = layers?.find((l) => l.id.includes("custom-layer"));
      // Find the first label layer to be able to sort the layers if there is no custom layer
      const labelLayer = layers?.find((l) => l.id.includes("label"));
      return customLayer ? customLayer.id : labelLayer?.id;
    }
  }, [map]);

  const [layers] = useSyncLayers();
  const [layersSettings, setLayersSettings] = useSyncLayersSettings();

  // Sync layers settings with layers
  useMemo(() => {
    if (!layers?.length && !layersSettings) return;

    if (!layers?.length && layersSettings) {
      setTimeout(() => {
        setLayersSettings(null);
      }, 0);
      return;
    }

    const lSettingsKeys = Object.keys(layersSettings || {});

    lSettingsKeys.forEach((key) => {
      if (layers.includes(key)) return;

      setTimeout(() => {
        setLayersSettings((prev) => {
          const current = { ...prev };
          delete current[key];
          return current;
        });
      }, 0);
    });
  }, [layers, layersSettings, setLayersSettings]);

  const LAYERS = layers;

  return (
    <DeckMapboxOverlayProvider>
      <>
        {/*
          Generate all transparent backgrounds to be able to sort by layers without an error
          - https://github.com/visgl/react-map-gl/issues/939#issuecomment-625290200
        */}
        {LAYERS.map((l, i) => {
          const beforeId = i === 0 ? baseLayer : `${LAYERS[i - 1]}-layer`;

          return (
            <Layer
              id={`${l}-layer`}
              key={l}
              type="background"
              layout={{ visibility: "none" }}
              beforeId={beforeId}
            />
          );
        })}

        {/*
          Loop through active layers. The id is gonna be used to fetch the current layer and know how to order the layers.
          The first item will always be at the top of the layers stack
        */}
        {LAYERS.map((l) => {
          return (
            <LayerManagerItem
              key={l}
              id={l}
              settings={{
                // ...{ opacity: 1, visibility: true },
                ...(!!layersSettings && layersSettings[l]),
              }}
            />
          );
        })}
      </>
    </DeckMapboxOverlayProvider>
  );
};
