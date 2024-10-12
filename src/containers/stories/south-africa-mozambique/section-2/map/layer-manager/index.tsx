"use client";

import { useMemo } from "react";

import { Layer, useMap } from "react-map-gl";

import { Location } from "@/containers/stories/south-africa-mozambique/section-2/map/layer-manager/location";
import { Mask } from "@/containers/stories/south-africa-mozambique/section-2/map/layer-manager/mask";

import { DeckMapboxOverlayProvider } from "@/components/map/provider";

import LayerManagerItem from "./item";

export const LayerManager = ({ layers }: { layers: string[] }) => {
  const { current: map } = useMap();

  const baseLayer = useMemo(() => {
    if (map && map.isStyleLoaded()) {
      const lys = map!.getStyle()!.layers;
      // Find the custom layer to be able to sort the layers
      const customLayer = lys?.find((l) => l.id.includes("custom-layer"));
      // Find the first label layer to be able to sort the lys if there is no custom layer
      const labelLayer = lys?.find((l) => l.id.includes("label"));
      return customLayer ? customLayer.id : labelLayer?.id;
    }
  }, [map]);

  const LAYERS = useMemo(() => {
    return ["location", ...layers.toReversed(), "mask"]; // SUPER IMPORTANT: mask should always be the last one, otherwise you won't see anything
  }, [layers]);

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
          if (l === "mask") return <Mask key={l} beforeId={`${l}-layer`} />;
          if (l === "location") return <Location key={l} beforeId={`${l}-layer`} />;

          return (
            <LayerManagerItem
              key={l}
              id={l}
              settings={{
                opacity: 1,
                visibility: true,
              }}
            />
          );
        })}
      </>
    </DeckMapboxOverlayProvider>
  );
};
