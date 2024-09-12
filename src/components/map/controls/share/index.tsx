"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { PopoverArrow } from "@radix-ui/react-popover";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { FiShare2 } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface ShareControlProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const ShareControl: FC<PropsWithChildren<ShareControlProps>> = ({
  className,
  children,
}: PropsWithChildren<ShareControlProps>) => {
  return (
    <div className={cn("flex flex-col space-y-0.5", className)}>
      <Popover>
        <Tooltip>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <button
                className={cn({
                  [CONTROL_BUTTON_STYLES.default]: true,
                  [CONTROL_BUTTON_STYLES.hover]: true,
                  [CONTROL_BUTTON_STYLES.active]: true,
                })}
                aria-label="Map settings"
                type="button"
              >
                <FiShare2 className="relative h-full w-full -translate-x-px" />
              </button>
            </TooltipTrigger>
          </PopoverTrigger>

          <TooltipPortal>
            <TooltipContent side="left" align="center">
              <div className="text-xxs">Share</div>
            </TooltipContent>
          </TooltipPortal>

          <PopoverContent side="left" align="start">
            {children}
            <PopoverArrow className="fill-white" width={10} height={5} />
          </PopoverContent>
        </Tooltip>
      </Popover>
    </div>
  );
};

export default ShareControl;
