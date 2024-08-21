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
        "-mt-28 pb-16 pt-32 lg:py-56": hero,
        "py-16 lg:py-32": !hero,
        [`${className}`]: className,
      })}
      {...rest}
    >
      {children}
    </section>
  );
};
