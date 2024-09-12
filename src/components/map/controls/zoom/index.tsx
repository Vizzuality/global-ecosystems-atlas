"use client";

import { FC, useCallback, MouseEvent, HTMLAttributes } from "react";

import { useMap } from "react-map-gl";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface ZoomControlProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const ZoomControl: FC<ZoomControlProps> = ({ className }: ZoomControlProps) => {
  const { current: mapRef } = useMap();
  const zoom = mapRef?.getZoom();
  const minZoom = mapRef?.getMinZoom();
  const maxZoom = mapRef?.getMaxZoom();

  const increaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      mapRef?.zoomIn();
    },
    [mapRef],
  );

  const decreaseZoom = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      mapRef?.zoomOut();
    },
    [mapRef],
  );

  return (
    <div className={cn("flex flex-col", className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn({
              [CONTROL_BUTTON_STYLES.default]: true,
              "rounded-none rounded-t-lg": true,
              [CONTROL_BUTTON_STYLES.hover]: zoom !== maxZoom,
              [CONTROL_BUTTON_STYLES.active]: zoom !== maxZoom,
              [CONTROL_BUTTON_STYLES.disabled]: zoom === maxZoom,
            })}
            aria-label="Zoom in"
            type="button"
            disabled={zoom === maxZoom}
            onClick={increaseZoom}
          >
            <FiZoomIn className="h-full w-full" />
          </button>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent side="left" align="center">
            <div className="text-xxs">Zoom in</div>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn({
              [CONTROL_BUTTON_STYLES.default]: true,
              "rounded-none rounded-b-lg": true,
              [CONTROL_BUTTON_STYLES.hover]: zoom !== minZoom,
              [CONTROL_BUTTON_STYLES.active]: zoom !== minZoom,
              [CONTROL_BUTTON_STYLES.disabled]: zoom === minZoom,
            })}
            aria-label="Zoom out"
            type="button"
            disabled={zoom === minZoom}
            onClick={decreaseZoom}
          >
            <FiZoomOut className="h-full w-full" />
          </button>
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent side="left" align="center">
            <div className="text-xxs">Zoom out</div>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  );
};

export default ZoomControl;
