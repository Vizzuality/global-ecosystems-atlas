"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { TooltipPortal } from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

import { CollapseSidebarIcon } from "@/components/ui/icons/collapse-sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface DataControlProps {
  id?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onClick?: () => void;
}

export const DataControl: FC<PropsWithChildren<DataControlProps>> = ({
  id,
  className,
  onClick,
}: PropsWithChildren<DataControlProps>) => {
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
            <CollapseSidebarIcon className="relative h-full w-full" />
          </button>
        </TooltipTrigger>
        {/* </PopoverTrigger> */}

        <TooltipPortal>
          <TooltipContent side="left" align="center">
            <div className="text-xxs">Data</div>
          </TooltipContent>
        </TooltipPortal>

        {/* <PopoverContent side="left" align="start">
          {children}
          <PopoverArrow className="fill-white" width={10} height={5} />
        </PopoverContent> */}
      </Tooltip>
      {/* </Popover> */}
    </div>
  );
};

export default DataControl;
