"use client";
import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const H2 = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) => {
  return (
    <h2
      className={cn({
        "text-4xl font-semibold sm:text-5xl": true,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </h2>
  );
};
