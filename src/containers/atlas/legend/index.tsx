import { useCallback, useMemo } from "react";

import { cn } from "@/lib/utils";

import { useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import { MapLegendItem } from "@/containers/atlas/legend/item";

import Legend from "@/components/map/legend";

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

  const sortable = layers?.length > 1;

  const ITEMS = useMemo(() => {
    return layers.toReversed().map((layer) => {
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
            enabled: sortable,
            handle: layers.length > 1,
          }}
        />
      );
    });
  }, [layers, layersSettings, sortable, handleChangeOpacity, handleChangeVisibility]);

  return (
    <div className="absolute bottom-10 right-6 z-10 w-full max-w-xs">
      <Legend
        className={cn(
          "max-h-[calc(100vh_-_theme(space.16)_-_theme(space.6)_-_theme(space.48))]",
          className,
        )}
        sortable={{
          enabled: sortable,
          handle: true,
        }}
        onChangeOrder={handleChangeOrder}
      >
        {ITEMS}
      </Legend>
    </div>
  );
};

export default MapLegend;
