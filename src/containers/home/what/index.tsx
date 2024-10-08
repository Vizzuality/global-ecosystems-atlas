"use client";

import { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

import { Media } from "@/containers/media";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

const WHAT = [
  {
    title: "Track progress on the Global Biodiversity Framework",
    description:
      "The Global Biodiversity Framework (GBF) includes targets to achieve the mission of halting and reversing biodiversity loss. Countries can use the Atlas to access measurements and derive insights that support stock-taking, monitoring and reporting on indicators of progress toward achieving the ecosystem-focused GBF goals and targets.",
    image: "/what/1.jpg",
  },
  {
    title: "Develop national ecosystem maps where they don’t yet exist",
    description:
      "For countries that don’t yet have a national ecosystem classification and map, the Atlas will offer guidelines, resources, examples, map standards to assist countries in developing new maps to use for policy, planning, decision-making and action related to ecosystems and biodiversity.  ",
    image: "/what/2.jpg",
  },
  {
    title: "Contribute to Nature-based Solutions",
    description:
      "Knowledge about ecosystem distributions will help support a better understanding of nature-based climate solutions and help improve our knowledge of the essential ecosystem services provided by ecosystems around the world.",
    image: "/what/3.jpg",
  },
  {
    title: "Support natural capital accounting",
    description:
      "The System of Environmental-Economic Accounting (SEEA) is an internationally agreed statistical framework that measures stocks and flows of natural resources, including ecosystems. The Atlas will provide up-to-date data to support generation of SEEA ecosystem accounts.",
    image: "/what/4.jpg",
  },
  {
    title: "Inform financial disclosures",
    description:
      "Under some laws and voluntary frameworks, companies and financial institutions are required to make financial disclosures that describe risks and opportunities related to the climate and nature. The Atlas will offer consistent data to support the effective operation of laws and frameworks.",
    image: "/what/5.jpg",
  },
  {
    title: "Enhance financial structuring and risk insurance",
    description:
      "An increasing number of countries and communities invest in risk insurance to protect against climate- and nature-related loss and damage.  New ecosystems knowledge can lead to new opportunities in financial structuring based on the underlying value of ecosystem services.",
    image: "/what/6.jpg",
  },
];

const WhatItem = (what: {
  title: string;
  description: string;
  image: string;
  index: number;
  list: typeof WHAT;
  onPrevious: () => void;
  onNext: () => void;
}) => (
  <div className="flex flex-col gap-7 lg:flex-row lg:gap-16">
    <motion.div
      className="relative aspect-square shrink-0 origin-right shadow-2xl lg:w-1/2"
      initial={{ x: -10, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -10, opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      <Image
        priority
        src={what.image}
        alt={what.title}
        fill
        className="object-cover"
        sizes="50vw"
      />
    </motion.div>
    <div className="relative grow lg:w-1/2 lg:space-y-14">
      <div className="hidden w-full space-y-6 lg:block">
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute h-8 w-8 rounded-full",
              "group static h-16 w-16 translate-y-0 rounded-full border-2 border-white bg-transparent p-4 text-white disabled:border-navy-500 disabled:text-navy-500",
            )}
            disabled={what.index === 0}
            onClick={what.onPrevious}
          >
            <FiArrowLeft className="h-full w-full" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute h-8 w-8 rounded-full",
              "group static h-16 w-16 translate-y-0 rounded-full border-2 border-white bg-transparent p-4 text-white disabled:border-navy-500 disabled:text-navy-500",
            )}
            disabled={what.index === what.list.length - 1}
            onClick={what.onNext}
          >
            <FiArrowRight className="h-full w-full" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
      <div className="space-y-3">
        <motion.h3
          className="origin-left text-xl font-semibold text-white lg:text-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { ease: "easeInOut", duration: 0.3, delay: 0.2 },
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {what.title}
        </motion.h3>
        <motion.p
          className="origin-left text-base font-medium text-navy-100"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { ease: "easeInOut", duration: 0.3, delay: 0.2 },
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {what.description}
        </motion.p>
      </div>
    </div>
  </div>
);

export default function HomeWhat() {
  const [selected, setSelected] = useState(0);

  return (
    <Section className="overflow-hidden bg-navy-700">
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="space-y-16">
              <header className="space-y-8 lg:space-y-12">
                <H2 className="text-white lg:text-center">
                  What can you do with the Global Ecosystems Atlas?
                </H2>
                <p className="text-xl text-navy-100 lg:text-center lg:text-2xl">
                  The Global Ecosystems Atlas will be a versatile platform for identifying
                  distribution of different ecosystem types, supporting conservation and restoration
                  efforts, informing environmental management decisions, conducting research, and
                  aiding in environmental and corporate reporting.
                </p>
              </header>
            </div>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-12">
            <Media lessThan="lg">
              <div className="space-y-14">
                {WHAT.map((what, i) => (
                  <WhatItem
                    key={what.title}
                    {...what}
                    index={i}
                    list={WHAT}
                    onPrevious={() => setSelected(i - 1)}
                    onNext={() => setSelected(i + 1)}
                  />
                ))}
              </div>
            </Media>
            <Media greaterThanOrEqual="lg">
              <>
                <AnimatePresence mode="wait">
                  {WHAT.map((what, i) => {
                    if (i !== selected) return null;
                    return (
                      <WhatItem
                        key={what.title}
                        {...what}
                        index={i}
                        list={WHAT}
                        onPrevious={() => setSelected(i - 1)}
                        onNext={() => setSelected(i + 1)}
                      />
                    );
                  })}
                </AnimatePresence>

                {/* Dots */}
                <Grid>
                  <div className="col-span-6 col-start-7">
                    <ul className="ml-14 flex -translate-y-full gap-3">
                      {WHAT.map((w, i) => (
                        <li key={w.title} className="block">
                          <motion.button
                            layout
                            className={cn({
                              "h-2 w-2 rounded-3xl bg-white/40": true,
                              "w-14 bg-white": selected === i,
                            })}
                            style={{ borderRadius: 24 }}
                            onClick={() => setSelected(i)}
                            transition={{
                              ease: "easeInOut",
                              duration: 0.3,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Grid>
              </>
            </Media>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
