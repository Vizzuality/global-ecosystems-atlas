"use client";

import Image from "next/image";

import { Media } from "@/containers/media";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
    image: "/what/1.jpg",
  },
  {
    title: "Contribute to Nature-based Solutions",
    description:
      "Knowledge about ecosystem distributions will help support a better understanding of nature-based climate solutions and help improve our knowledge of the essential ecosystem services provided by ecosystems around the world.",
    image: "/what/1.jpg",
  },
  {
    title: "Support natural capital accounting",
    description:
      "The System of Environmental-Economic Accounting (SEEA) is an internationally agreed statistical framework that measures stocks and flows of natural resources, including ecosystems. The Atlas will provide up-to-date data to support generation of SEEA ecosystem accounts.",
    image: "/what/1.jpg",
  },
  {
    title: "Inform financial disclosures",
    description:
      "Under some laws and voluntary frameworks, companies and financial institutions are required to make financial disclosures that describe risks and opportunities related to the climate and nature. The Atlas will offer consistent data to support the effective operation of laws and frameworks.",
    image: "/what/1.jpg",
  },
  {
    title: "Enhance financial structuring and risk insurance",
    description:
      "An increasing number of countries and communities invest in risk insurance to protect against climate- and nature-related loss and damage.  New ecosystems knowledge can lead to new opportunities in financial structuring based on the underlying value of ecosystem services.",
    image: "/what/1.jpg",
  },
];

const WhatItem = (what: { title: string; description: string; image: string }) => (
  <div className="flex flex-col gap-7 md:flex-row md:gap-16">
    <div className="relative aspect-square shrink-0 md:w-1/2">
      <Image src={what.image} alt={what.title} fill className="object-cover" sizes="50vw" />
    </div>
    <div className="relative grow md:w-1/2 md:space-y-14">
      <div className="hidden w-full space-y-6 md:block">
        <div className="flex space-x-4">
          <CarouselPrevious className="group static h-16 w-16 translate-y-0 rounded-full border-2 border-white bg-transparent p-4 text-white disabled:border-navy-500 disabled:text-navy-500" />
          <CarouselNext className="group static h-16 w-16 translate-y-0 rounded-full border-2 border-white bg-transparent p-4 text-white disabled:border-navy-500 disabled:text-navy-500" />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white lg:text-2xl">{what.title}</h3>
        <p className="text-base font-medium text-navy-100">{what.description}</p>
      </div>
    </div>
  </div>
);

export default function HomeWhat() {
  return (
    <Section className="overflow-hidden bg-navy-700">
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="space-y-16">
              <header className="space-y-8 lg:space-y-12">
                <H2 className="text-white md:text-center">
                  What can you do with Global Ecosystems Atlas?
                </H2>
                <p className="text-xl text-navy-100 md:text-center lg:text-2xl">
                  The Global Ecosystems Atlas will be a versatile tool for identifying distribution
                  of different ecosystem types, supporting conservation and restoration efforts,
                  informing environmental management decisions, conducting research, and aiding in
                  environmental and corporate reporting.
                </p>
              </header>
            </div>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-12">
            <Carousel>
              <Media lessThan="md">
                <div className="space-y-14">
                  {WHAT.map((what) => (
                    <WhatItem key={what.title} {...what} />
                  ))}
                </div>
              </Media>
              <Media greaterThanOrEqual="md">
                <CarouselContent>
                  {WHAT.map((what) => (
                    <CarouselItem key={what.title} className="basis-full">
                      <WhatItem {...what} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Media>
            </Carousel>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
