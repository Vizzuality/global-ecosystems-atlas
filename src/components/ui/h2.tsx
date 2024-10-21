"use client";
import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const H2 = ({
  children,
  className,
  size,
  ...rest
}: PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> & {
    size?: "sm" | "base";
  }
>) => {
  return (
    <h2
      className={cn({
        "text-4xl font-semibold leading-snug sm:text-5xl": true,
        "text-3xl sm:text-4xl": size === "sm",
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </h2>
  );
};
