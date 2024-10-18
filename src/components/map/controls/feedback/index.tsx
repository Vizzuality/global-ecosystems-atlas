"use client";

import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { TooltipPortal } from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

import { FeedbackIcon } from "@/components/ui/icons/feedback";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { CONTROL_BUTTON_STYLES } from "../constants";

interface FeedbackControlProps {
  id?: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const FeedbackControl: FC<PropsWithChildren<FeedbackControlProps>> = ({
  id,
  className,
}: PropsWithChildren<FeedbackControlProps>) => {
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
          >
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=yA7859y2M0-hdLo1Xg--6zzUvHLjRP5NlSTxlkHhpdJUMExINlExQlg2Wjk1QTM4T002QVlYNk8yWS4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full w-full"
            >
              <FeedbackIcon className="relative h-full w-full" />
            </a>
          </button>
        </TooltipTrigger>
        {/* </PopoverTrigger> */}

        <TooltipPortal>
          <TooltipContent side="left" align="center">
            <div className="text-xxs">Feedback</div>
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

export default FeedbackControl;
