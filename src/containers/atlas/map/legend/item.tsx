"use-client";
import { ReactElement, cloneElement, createElement, isValidElement, useMemo } from "react";

import { useParams } from "next/navigation";

import { parseConfig } from "@/lib/json-converter";
import { LAYERS } from "@/lib/layers";
import { useBiomesIds, useEcosystemsIds } from "@/lib/taxonomy";

import { useApiLayersGet } from "@/types/generated/layers";
import { LegendConfig, ParamsConfig } from "@/types/layers";

import {
  useSyncBiomes,
  useSyncEcosystems,
  useSyncLayers,
  useSyncLayersSettings,
  useSyncLocation,
  useSyncRealms,
} from "@/app/(atlas)/atlas/store";

import LegendItem from "@/components/map/legend/item";
import {
  LegendTypeBasic,
  LegendTypeChoropleth,
  LegendTypeGradient,
} from "@/components/map/legend/item-types";
import { LegendItemProps, LegendTypeProps, SettingsManager } from "@/components/map/legend/types";
import { H3 } from "@/components/ui/h3";
import { Markdown } from "@/components/ui/markdown";

const LEGEND_TYPES: Record<"basic" | "choropleth" | "gradient", React.FC<LegendTypeProps>> = {
  basic: LegendTypeBasic,
  choropleth: LegendTypeChoropleth,
  gradient: LegendTypeGradient,
};

type MapLegendItemProps = LegendItemProps;

type ConfigType =
  | LegendConfig
  | ReactElement<{
      location: string | null;
      realms: string[];
      biomes: string[];
      ecosystems: string[];
      paramsConfig: ParamsConfig;
      onChangeSettings: (settings: Record<string, unknown>) => unknown;
    }>
  | null;

export const MapLegendItem = ({ id, ...props }: MapLegendItemProps) => {
  const { ecosystemId } = useParams();

  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems] = useSyncEcosystems();

  const BIOMES_IDS = useBiomesIds({ location, realms, biomes });
  const ECOSYSTEMS_IDS = useEcosystemsIds({
    location,
    realms,
    biomes,
    ecosystems: ecosystemId ? [`${ecosystemId}`] : ecosystems,
  });

  const [, setLayers] = useSyncLayers();
  const [layersSettings, setLayersSettings] = useSyncLayersSettings();

  const LAYER = useMemo(() => {
    if (ecosystemId && (id === "realms" || id === "biomes")) {
      return LAYERS.find((l) => l.id === "efgs");
    }
    return LAYERS.find((l) => l.id === id);
  }, [id, ecosystemId]);

  const legend_config = LAYER?.legend_config;
  const params_config = LAYER?.params_config;
  const metadata = LAYER?.metadata;

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
        location,
        realms,
        biomes: BIOMES_IDS,
        ecosystems: ECOSYSTEMS_IDS,
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
  }, [id, location, realms, config, params_config, ECOSYSTEMS_IDS, BIOMES_IDS, setLayersSettings]);

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
      InfoContent={<LegendInfo metadata={metadata} />}
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

export const LegendInfo = ({ metadata }: { metadata?: string }): ReactElement | null => {
  const { data: layersData } = useApiLayersGet();

  // @ts-expect-error id is a string
  const LAYER = layersData?.data?.find((l) => l.id === metadata);
  if (!LAYER) return null;

  const { metadata: lMetadata } = LAYER;
  if (!lMetadata) return null;

  const m = lMetadata as unknown as {
    abstract: string;
  };

  const markdown = m.abstract;

  if (!markdown) return null;

  return (
    <>
      <H3>{LAYER.name}</H3>
      <Markdown className="prose">{markdown}</Markdown>
    </>
  );
};
