"use client";
import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const H3 = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  return (
    <h2
      className={cn({
        "text-2xl font-semibold sm:text-3xl": true,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </h2>
  );
};
