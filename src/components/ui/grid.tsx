import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const Grid = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div
      className={cn({
        "grid grid-cols-12 gap-6": true,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
