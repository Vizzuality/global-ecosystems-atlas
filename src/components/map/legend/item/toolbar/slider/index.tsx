"use client";

import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipArrow } from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-slate-800/50" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb>
        <Tooltip open={tooltipOpen}>
          <TooltipTrigger
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
          >
            <div className="block h-4 w-4 translate-y-0.5 rounded-full border-2 border-slate-800 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></div>
          </TooltipTrigger>
          <TooltipContent
            align="center"
            side="bottom"
            className="z-50 w-10 bg-secondary p-1 text-center text-xs text-slate-800 drop-shadow-lg"
          >
            {(Number(props.value) * 100).toFixed(0)}%
            <TooltipArrow className="z-50 fill-secondary" width={10} height={5} />
          </TooltipContent>
        </Tooltip>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
