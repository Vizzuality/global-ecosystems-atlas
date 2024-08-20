"use client";
import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const H1 = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  return (
    <h1
      className={cn({
        "text-5xl font-semibold sm:text-7xl": true,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </h1>
  );
};
