"use client";
import { PropsWithChildren, useRef } from "react";

import { motion, useScroll, UseScrollOptions, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TranslateY = ({
  children,
  className,
  scrollOptions,
  transformOptions = {
    from: [0, 1],
    to: ["0%", "100%"],
  },
}: PropsWithChildren<{
  className?: string;
  scrollOptions?: UseScrollOptions;
  transformOptions?: {
    from: [number, number];
    to: [string, string];
  };
}>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.75", "1 0"],
    ...scrollOptions,
  });

  const y = useTransform<number, string>(
    scrollYProgress,
    transformOptions.from,
    transformOptions.to,
  );

  return (
    <motion.div
      style={{
        y,
      }}
      className={cn({
        "relative block": true,
        [`${className}`]: className,
      })}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
