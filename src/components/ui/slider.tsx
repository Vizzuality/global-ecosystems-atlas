"use client";

import * as React from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn, formatNumber } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue, onValueChange, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue ?? [props.min ?? 0, props.max ?? 100]);
  const [changing, setChanging] = React.useState(false);
  const changingTimeout = React.useRef<NodeJS.Timeout>();

  const handleValueChange = React.useCallback(
    (v: number[]) => {
      if (changingTimeout.current) {
        clearTimeout(changingTimeout.current);
      }
      setValue(v);
      setChanging(true);
      onValueChange?.(v);

      changingTimeout.current = setTimeout(() => {
        setChanging(false);
      }, 1000);
    },
    [onValueChange],
  );

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-navy-100">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>

      {/* Create as many thumbs as the defaultValueLenght */}
      {Array.isArray(defaultValue) &&
        defaultValue.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="relative block h-4 w-4 cursor-pointer rounded-full border-4 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <div
              className={cn({
                "pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md border border-navy-200 bg-white p-1 text-2xs font-medium opacity-0":
                  true,
                "transition-opacity duration-500": true,
                "opacity-100": changing,
              })}
            >
              {formatNumber(value[index])}
            </div>
          </SliderPrimitive.Thumb>
        ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
