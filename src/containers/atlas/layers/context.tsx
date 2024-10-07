"use client";

import { LAYERS } from "@/lib/layers";

import { useSyncLayers } from "@/app/(atlas)/atlas/store";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const AtlasLayersContext = () => {
  const CONTEXT_LAYERS = LAYERS.filter((layer) => layer.group === "context-data");

  const [layers, setLayers] = useSyncLayers();

  const handleAtlasLayerChange = (value: string) => {
    setLayers((prev) => {
      if (prev.includes(value)) {
        return prev.filter((layer) => layer !== value);
      }

      return [...prev, value];
    });
  };

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-bold">Contextual</h2>

      {CONTEXT_LAYERS.map((layer) => (
        <div key={layer.id} className="flex items-center gap-2">
          <Switch
            key={layer.id}
            value={layer.id}
            id={layer.id}
            checked={layers.includes(layer.id)}
            onCheckedChange={() => handleAtlasLayerChange(layer.id)}
          />
          <Label htmlFor={layer.id} className="cursor-pointer text-sm">
            {layer.name}
          </Label>
        </div>
      ))}
    </div>
  );
};
