import { useCallback, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import { MapLegendItem } from "@/containers/atlas/map/legend/item";

import Legend from "@/components/map/legend";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const MapLegend = ({ className = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const [layers, setLayers] = useSyncLayers();
  const [layersSettings, setLayersSettings] = useSyncLayersSettings();

  const handleChangeOrder = useCallback(
    (order: string[]) => {
      const newLayers: string[] = order.toReversed().reduce((prev: string[], curr) => {
        const id = layers.find((layer) => layer === curr);
        return !!id ? [...prev, id] : prev;
      }, []);

      setLayers(newLayers);
    },
    [layers, setLayers],
  );

  const handleChangeOpacity = useCallback(
    (id: string, opacity: number) =>
      setLayersSettings((prev) => ({
        ...prev,
        [id]: {
          ...(prev && prev[id]),
          opacity,
        },
      })),
    [setLayersSettings],
  );

  const handleChangeVisibility = useCallback(
    (id: string, visibility: boolean) =>
      setLayersSettings((prev) => ({
        ...prev,
        [id]: {
          ...(prev && prev[id]),
          visibility,
        },
      })),
    [setLayersSettings],
  );

  const LAYERS = useMemo(() => {
    return layers.toReversed();
  }, [layers]);

  const ITEMS = useMemo(() => {
    return LAYERS.map((layer) => {
      const settings = (layersSettings && layersSettings[layer]) ?? {
        opacity: 1,
        visibility: true,
      };

      return (
        <MapLegendItem
          id={layer}
          key={layer}
          settings={settings}
          onChangeOpacity={(opacity: number) => {
            handleChangeOpacity(layer, opacity);
          }}
          onChangeVisibility={(visibility: boolean) => {
            handleChangeVisibility(layer, visibility);
          }}
          sortable={{
            enabled: true,
            handle: LAYERS.length > 1,
          }}
        />
      );
    });
  }, [LAYERS, layersSettings, handleChangeOpacity, handleChangeVisibility]);

  return (
    <div className="absolute bottom-10 right-6 z-10 w-full max-w-sm shadow-lg">
      <Collapsible className="rounded-lg bg-white" onOpenChange={setExpanded}>
        <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
          <span className="text-xs font-bold uppercase">Layers</span>
          <span className="text-xs font-medium">{expanded ? "Collapse all" : "Expand all"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Legend
            className={cn(
              "max-h-[calc(100vh_-_theme(space.48)_-_theme(space.6)_-_theme(space.48))]",
              className,
            )}
            sortable={{
              enabled: true,
              handle: true,
            }}
            onChangeOrder={handleChangeOrder}
          >
            {ITEMS}
          </Legend>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default MapLegend;
