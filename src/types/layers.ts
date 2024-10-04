import { FormatProps } from "@/lib/json-converter/utils/formats";

export type ParamsConfigValue = {
  key: string;
  default: unknown;
};

export type ParamsConfig = ParamsConfigValue[];

export type LegendConfig = {
  type: "basic" | "gradient" | "choropleth";
  items: {
    value: string;
    color: string;
  }[];
};

export type InteractionConfig = {
  event: "click" | "hover";
  type: string;
  values: {
    key: string;
    value: string;
    format?: FormatProps;
  }[];
};

export type LayerProps = {
  slug?: string;
  id?: string;
  zIndex?: number;
  onAdd?: (props: unknown) => void;
  onRemove?: (props: unknown) => void;
};

export type LayerTyped = {
  id: string | number;
  type: string;
  config: unknown;
  params_config: ParamsConfig;
  legend_config: LegendConfig;
  interaction_config: InteractionConfig;
  metadata: Record<string, unknown>;
};
