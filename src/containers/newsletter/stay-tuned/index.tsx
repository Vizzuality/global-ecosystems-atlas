"use client";

import { useRef } from "react";

import { motion } from "framer-motion";
import { PiAsterisk } from "react-icons/pi";

export const NewsletterStayTuned = () => {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="bg-pistachio-200 py-14">
      <ul className="flex overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.li
            key={i}
            className="flex items-center gap-11 pl-11"
            variants={{
              hidden: { x: "0%" },
              visible: { x: "-100%" },
            }}
            initial="hidden"
            animate={"visible"}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
              <PiAsterisk className="h-10 w-10 text-6xl text-navy-700" />
            </div>
            <span className="text-nowrap text-6xl font-semibold uppercase">Stay tuned</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
