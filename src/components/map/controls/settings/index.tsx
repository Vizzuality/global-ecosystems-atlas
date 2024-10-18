"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { PopoverArrow } from "@radix-ui/react-popover";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { FiSettings } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface SettingsControlProps {
  id?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const SettingsControl: FC<PropsWithChildren<SettingsControlProps>> = ({
  id,
  className,
  children,
}: PropsWithChildren<SettingsControlProps>) => {
  return (
    <div className={cn("flex flex-col space-y-0.5", className)}>
      <Popover>
        <Tooltip>
          <PopoverTrigger asChild>
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
              >
                <FiSettings className="h-full w-full" />
              </button>
            </TooltipTrigger>
          </PopoverTrigger>

          <TooltipPortal>
            <TooltipContent side="left" align="center">
              <div className="text-xxs">Map settings</div>
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

export default SettingsControl;
