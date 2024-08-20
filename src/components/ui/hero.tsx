import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const Hero = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return (
    <section
      className={cn({
        "-mt-28 py-56": true,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};
