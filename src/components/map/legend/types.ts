import { PropsWithChildren, ReactNode } from "react";

import { IconType } from "react-icons";

import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListeners } from "@dnd-kit/core/dist/hooks/utilities";

type Sortable = {
  enabled: boolean;
  handle?: boolean;
  handleIcon?: React.ReactNode;
};

type OnChangeOrder = (id: string[]) => void;
type OnChangeOpacity = (opacity: number) => void;
type OnChangeVisibility = (visibility: boolean) => void;
type OnChangeColumn = (column: string) => void;
type OnRemove = () => void;

export type Settings = Record<string, unknown> & {
  opacity?: number;
  visibility?: boolean;
};

export type SettingsManager = {
  opacity?: boolean;
  visibility?: boolean;
  info?: boolean;
  remove?: boolean;
};

export type LegendItemEvents = {
  onChangeOpacity?: OnChangeOpacity;
  onChangeVisibility?: OnChangeVisibility;
  onChangeColumn?: OnChangeColumn;
  onRemove?: OnRemove;
};
/*
 * Legend
 */
export interface LegendProps extends PropsWithChildren {
  className?: string;
  sortable: Sortable;
  onChangeOrder?: OnChangeOrder;
}

export interface LegendItemProps extends LegendItemEvents {
  id: string;
  name?: string;
  className?: string;

  // components
  InfoContent?: ReactNode;

  // sortable
  sortable: Sortable;
  listeners?: SyntheticListeners;
  attributes?: DraggableAttributes;

  // settings
  // I extends Dataset['id'] so you can get the correct setting depending on the dataset id
  settings?: Settings;
  settingsManager?: SettingsManager;
}

export interface LegendItemToolbarProps extends LegendItemEvents {
  className?: string;
  // components
  InfoContent?: ReactNode;
  // settings
  settings?: Settings;
  settingsManager?: SettingsManager;
}

export interface LegendItemButtonProps {
  Icon: IconType;
  selected?: boolean;
  className?: string;
  value?: number;
}

/*
 * Sortable
 */
export interface SortableListProps extends PropsWithChildren {
  className?: string;
  sortable: Sortable;
  onChangeOrder: OnChangeOrder;
}

export interface SortableItemProps extends PropsWithChildren {
  id: string;
  sortable: Sortable;
}

export interface LegendTypeProps {
  className?: string;
  items: Array<{
    label: string;
    value: number;
    color: string;
  }>;
}

export interface LegendMatrixIntersectionsProps {
  intersections: Array<{
    id: number;
    color: string;
  }>;
}
