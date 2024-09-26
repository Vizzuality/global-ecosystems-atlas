"use client";

import { useRef } from "react";

import Image from "next/image";

// import { motion, useInView } from "framer-motion";

import { TranslateY } from "@/components/animations/translateY";

export const AboutHeroImage = () => {
  const ref = useRef(null);
  // const inView = useInView(ref, {
  //   amount: 0.5,
  //   // once: true,
  // });

  return (
    <div ref={ref} className="z-10 aspect-[896/1100] lg:absolute lg:left-0 lg:top-24">
      <div
        className="h-full w-full overflow-hidden"
        // initial="initial"
        // animate={inView ? "show" : "hide"}
        // transition={{ ease: "easeInOut", duration: 0.6 }}
        // variants={{
        //   initial: { x: 100 },
        //   hide: { x: 100 },
        //   show: { x: 0 },
        // }}
      >
        <TranslateY
          className="scale-125"
          transformOptions={{
            from: [0, 1],
            to: ["0%", `-${(1 - 1100 / 1344) * 100}%`],
          }}
        >
          <Image
            src="/about/hero.png"
            alt="Global Ecosystems Atlas"
            className="w-full max-w-none"
            width={896}
            height={1344}
            priority
          />
        </TranslateY>
      </div>
    </div>
  );
};
