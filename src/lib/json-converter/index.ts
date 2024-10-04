/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

import * as AggregationLayers from "@deck.gl/aggregation-layers";
import { MaskExtension, DataFilterExtension } from "@deck.gl/extensions";
import * as GeoLayers from "@deck.gl/geo-layers";
import { JSONConfiguration, JSONConverter } from "@deck.gl/json";
import * as Layers from "@deck.gl/layers";

import { ParamsConfig } from "@/types/layers";

import RasterLayer from "@/components/map/layers/deck-layer/raster";
import RasterMaskLayer from "@/components/map/layers/deck-layer/raster-mask";

import FUNCTIONS from "./utils";

export const JSON_CONFIGURATION = new JSONConfiguration({
  React,
  classes: Object.assign({}, Layers, GeoLayers, AggregationLayers, {
    MaskExtension,
    DataFilterExtension,
    RasterLayer,
    RasterMaskLayer,
  }),
  functions: FUNCTIONS,
  constants: {},
  enumerations: {},
  reactComponents: {},
});

/**
 * *`getParams`*
 * Get params from params_config
 * @param {Object} params_config
 * @returns {Object} params
 *
 */
export interface GetParamsProps {
  settings: Record<string, unknown>;
  params_config: ParamsConfig;
}
export const getParams = ({ params_config, settings = {} }: GetParamsProps) => {
  if (!params_config) {
    return {};
  }
  return params_config.reduce(
    (acc, p) => {
      return {
        ...acc,
        [`${p.key}`]: settings[`${p.key}`] ?? p.default,
      };
    },
    {} as Record<string, unknown>,
  );
};

/**
 * *`parseConfig`*
 * Parse config with params_config
 * @param {Object} config
 * @param {Object} params_config
 * @returns {Object} config
 *
 */
interface ParseConfigurationProps {
  config: unknown;
  params_config: unknown;
  settings: Record<string, unknown>;
}
export const parseConfig = <T>({
  config,
  params_config,
  settings,
}: ParseConfigurationProps): T | null => {
  if (!config || !params_config) {
    return null;
  }

  const JSON_CONVERTER = new JSONConverter({
    configuration: JSON_CONFIGURATION,
  });

  const pc = params_config as ParamsConfig;
  const params = getParams({ params_config: pc, settings });
  // Merge enumerations with config
  JSON_CONVERTER.mergeConfiguration({
    enumerations: {
      params,
    },
  });
  return JSON_CONVERTER.convert(config);
};
