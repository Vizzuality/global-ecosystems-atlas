"use client";
import { PropsWithChildren, useRef } from "react";

import CHROMA from "chroma-js";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextReveal = ({
  children,
  className,
  color,
}: PropsWithChildren<{
  color: string;
  className?: string;
}>) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["0px 0.65", "100px 0.65"],
  });

  const backgroundPositionX = useTransform(scrollYProgress, [0, 1], ["200%", "100%"]);

  const rgb = CHROMA(color).rgb().join(",");

  return (
    <motion.span
      ref={textRef}
      className={cn({
        "relative bg-transparent bg-clip-text bg-no-repeat text-transparent": true,
        [`${className}`]: className,
      })}
      style={{
        backgroundImage: `linear-gradient(90deg,${color},${color}),linear-gradient(90deg,rgba(${rgb},.5),rgba(${rgb},.5))`,
        backgroundPositionX,
        backgroundPositionY: "100%",
        backgroundSize: "200% 100%, 100% 100%",
      }}
    >
      {children}
    </motion.span>
  );
};
