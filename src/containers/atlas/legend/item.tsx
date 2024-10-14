"use-client";
import { ReactElement, cloneElement, createElement, isValidElement, useMemo } from "react";

import { parseConfig } from "@/lib/json-converter";
import { LAYERS } from "@/lib/layers";

import { LegendConfig, ParamsConfig } from "@/types/layers";

import { useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import LegendItem from "@/components/map/legend/item";
import {
  LegendTypeBasic,
  LegendTypeChoropleth,
  LegendTypeGradient,
} from "@/components/map/legend/item-types";
import { LegendItemProps, LegendTypeProps, SettingsManager } from "@/components/map/legend/types";

const LEGEND_TYPES: Record<"basic" | "choropleth" | "gradient", React.FC<LegendTypeProps>> = {
  basic: LegendTypeBasic,
  choropleth: LegendTypeChoropleth,
  gradient: LegendTypeGradient,
};

type MapLegendItemProps = LegendItemProps;

type ConfigType =
  | LegendConfig
  | ReactElement<{
      paramsConfig: ParamsConfig;
      onChangeSettings: (settings: Record<string, unknown>) => unknown;
    }>
  | null;

export const MapLegendItem = ({ id, ...props }: MapLegendItemProps) => {
  const [, setLayers] = useSyncLayers();
  const [layersSettings, setLayersSettings] = useSyncLayersSettings();

  const LAYER = LAYERS.find((layer) => layer.id === id);

  const legend_config = LAYER?.legend_config;
  const params_config = LAYER?.params_config;

  const config = useMemo(() => {
    const settings = (layersSettings && layersSettings[`${id}`]) ?? {};

    return parseConfig<ConfigType>({
      config: legend_config,
      params_config,
      settings,
    });
  }, [id, layersSettings, legend_config, params_config]);

  const LEGEND_COMPONENT = useMemo(() => {
    const l = config;
    if (!l) return null;

    if (isValidElement(l)) {
      return cloneElement(l, {
        paramsConfig: params_config,
        onChangeSettings: (settings: Record<string, unknown>) => {
          setLayersSettings((prev) => ({
            ...prev,
            [`${id}`]: {
              ...((prev ?? {})[`${id}`] ?? {}),
              ...settings,
            },
          }));
        },
      });
    }

    if (!isValidElement(l) && "items" in l) {
      const { type, ...props } = l;
      return createElement(LEGEND_TYPES[type], props);
    }

    return null;
  }, [config, params_config, setLayersSettings, id]);

  return (
    <LegendItem
      id={id}
      name={LAYER?.name}
      settingsManager={
        {
          opacity: true,
          visibility: true,
          info: true,
          remove: !(id === "realms" || id === "biomes" || id === "efgs"),
        } as SettingsManager
      }
      onRemove={() => {
        setLayers((prev) => {
          const current = [...prev];
          const index = current.indexOf(id);
          if (index > -1) {
            current.splice(index, 1);
          }
          return current;
        });
      }}
      {...props}
    >
      {LEGEND_COMPONENT}
    </LegendItem>
  );
};
