"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { TooltipPortal } from "@radix-ui/react-tooltip";
import { FiLayers } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface LegendControlProps {
  id?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onClick?: () => void;
}

export const LegendControl: FC<PropsWithChildren<LegendControlProps>> = ({
  id,
  className,
  onClick,
}: PropsWithChildren<LegendControlProps>) => {
  return (
    <div className={cn("flex flex-col space-y-0.5", className)}>
      {/* <Popover> */}
      <Tooltip>
        {/* <PopoverTrigger asChild> */}
        <TooltipTrigger asChild>
          <button
            id={id}
            className={cn({
              [CONTROL_BUTTON_STYLES.default]: true,
              [CONTROL_BUTTON_STYLES.hover]: true,
              [CONTROL_BUTTON_STYLES.active]: true,
            })}
            aria-label="Map settings"
            type="button"
            onClick={onClick}
          >
            <FiLayers className="h-6 w-6" />
          </button>
        </TooltipTrigger>
        {/* </PopoverTrigger> */}

        <TooltipPortal>
          <TooltipContent side="left" align="center">
            <div className="text-xxs">Legend</div>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  );
};

export default LegendControl;
