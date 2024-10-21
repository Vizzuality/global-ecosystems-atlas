import { useCallback, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import { MapLegendItem } from "@/containers/atlas/map/legend/item";

import Legend from "@/components/map/legend";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const MapLegendDesktop = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="absolute bottom-10 right-4 z-10 w-full max-w-[calc(100%_-_theme(space.8))] shadow-lg lg:right-6 lg:max-w-sm">
      <Collapsible className="rounded-lg bg-white" onOpenChange={setExpanded}>
        <CollapsibleTrigger className="flex w-full items-center justify-between p-4">
          <span className="text-xs font-bold uppercase">Legend</span>
          <span className="text-xs font-medium">{expanded ? "Collapse" : "Expand"}</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <MapLegend />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export const MapLegendMobile = () => {
  return (
    <div className="flex grow flex-col overflow-hidden">
      <span className="p-4 text-sm font-bold uppercase leading-none">Legend</span>

      <MapLegend />
    </div>
  );
};

const MapLegend = ({ className = "" }) => {
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
    <Legend
      className={cn(
        "lg:max-h-[calc(100vh_-_theme(space.48)_-_theme(space.6)_-_theme(space.60))]",
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
  );
};

export default MapLegend;
