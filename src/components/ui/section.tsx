import { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
  hero = false,
  ...rest
}: PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    hero?: boolean;
  }
>) => {
  return (
    <section
      className={cn({
        "-mt-24 min-h-svh pb-16 pt-32 lg:-mt-28 lg:pb-28 lg:pt-56": hero,
        "py-16 lg:py-28 2xl:py-32": !hero,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};
