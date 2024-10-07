"use client";

import { LAYERS } from "@/lib/layers";

import { useSyncLayers } from "@/app/(atlas)/atlas/store";

import { Info } from "@/containers/atlas/info";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const AtlasLayersAtlas = () => {
  const ATLAS_LAYERS = LAYERS.filter((layer) => layer.group === "atlas-data");

  const [layers, setLayers] = useSyncLayers();

  const value = ATLAS_LAYERS.find((layer) => layers.includes(layer.id))?.id;

  const handleAtlasLayerChange = (value: string) => {
    setLayers((prev) => {
      const filtered = prev.filter((layer) => !ATLAS_LAYERS.map((l) => l.id).includes(layer));

      return [...filtered, value];
    });
  };

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold">Global Ecosystems Atlas synthesis map</h2>

      <RadioGroup value={value} onValueChange={handleAtlasLayerChange}>
        {ATLAS_LAYERS.map((layer) => (
          <div key={layer.id} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem
                key={layer.id}
                value={layer.id}
                id={layer.id}
                className="cursor-pointer"
              />
              <Label htmlFor={layer.id} className="cursor-pointer text-sm">
                {layer.name}
              </Label>
            </div>

            <Info>{layer.name}</Info>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
