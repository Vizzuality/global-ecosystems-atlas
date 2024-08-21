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
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["0 0.6", "1 0.6"],
  });

  const backgroundPositionX = useTransform(scrollYProgress, [0, 1], ["200%", "100%"]);

  const rgb = CHROMA(color).rgb().join(",");

  return (
    <span
      className={cn({
        "relative block": true,
        [`${className}`]: className,
      })}
      ref={textRef}
    >
      <motion.span
        className={"relative bg-transparent bg-clip-text bg-no-repeat text-transparent"}
        style={{
          backgroundImage: `linear-gradient(90deg,${color},${color}),linear-gradient(90deg,rgba(${rgb},.5),rgba(${rgb},.5))`,
          backgroundPositionX,
          backgroundPositionY: "100%",
          backgroundSize: "200% 100%, 100% 100%",
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
