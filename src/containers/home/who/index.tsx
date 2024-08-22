"use client";
import { useState } from "react";

import { FiArrowLeft, FiArrowRight, FiPlus } from "react-icons/fi";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

const WHO = [
  {
    title: "Policy makers",
    description:
      "Policymakers will have access to high-quality data on ecosystem extent, condition and risks, enabling informed decision-making and effective policy development for conservation, restoration and environmental management.",
  },
  {
    title: "National focal points for international conventions",
    description:
      "Focal points and signatories will have access to robust tools and datasets to streamline and enhance reporting processes, ensuring accurate, coherent and consistent compliance with international environmental frameworks.",
  },
  {
    title: "Development banks and lending institutions",
    description:
      "Development banks and lending institutions will be able to use the Atlas to assess environmental risks and guide sustainable investments, ensuring projects align with conservation goals.",
  },
  {
    title: "Private sector",
    description:
      "Companies will be able to integrate the Atlas into business strategies to manage environmental risks, support sustainability goals, and enhance corporate social responsibility practices and reporting. For auditors, the Atlas will be an essential tool to verify and validate a company’s environmental claims and sustainability practices.",
  },
  {
    title: "Local and indigenous communities",
    description:
      "Local and indigenous communities will be able to use the Atlas to inform actions to conserve and manage their land by accessing detailed data on local ecosystems, combining traditional knowledge with scientific insights.",
  },
  {
    title: "Civil society",
    description:
      "Civil society groups will be able to use reliable data and visual tools to support efforts to advocate for environmental protection and sustainable development.",
  },
  {
    title: "Academics and researchers",
    description:
      "Researchers will be able to use the Atlas and its underlying open-access data products as a comprehensive resource to support the study of ecosystems, contributing to advancement in global ecological knowledge.",
  },
  {
    title: "Individuals",
    description:
      "Anyone will be able to use the Atlas to explore and learn more about ecosystems that interest them. An informed public will be empowered to contribute to conservation efforts and join the global movement to protect nature.",
  },
];

export default function HomeWho() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <Section className="overflow-hidden bg-lightblue-50">
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <H2>Who is the Global Ecosystems Atlas for?</H2>
          </div>
          <div className="col-span-12 space-y-6 lg:col-span-4 lg:col-start-8">
            <div className="flex justify-end space-x-4">
              <button
                className="h-16 w-16 rounded-full border-2 border-navy-700 p-4"
                onClick={() => api?.scrollPrev()}
              >
                <FiArrowLeft className="text-primary-500 h-full w-full" />
              </button>
              <button
                className="h-16 w-16 rounded-full border-2 border-navy-700 p-4"
                onClick={() => api?.scrollNext()}
              >
                <FiArrowRight className="text-primary-500 h-full w-full" />
              </button>
            </div>
          </div>
        </Grid>
        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <Carousel
              setApi={setApi}
              opts={{
                skipSnaps: true,
                watchDrag: false,
              }}
            >
              <CarouselContent overflow="visible">
                {WHO.map((who) => (
                  <CarouselItem key={who.title} className="flex flex-col md:basis-1/2 xl:basis-1/3">
                    <div className="group relative grow rounded-2xl bg-lightblue-100 transition-colors duration-500 hover:bg-navy-700">
                      <div className="space-y-3 p-8">
                        <h3 className="text-xl font-semibold transition-colors duration-500 group-hover:text-white lg:text-2xl">
                          {who.title}
                        </h3>
                        <p className="font-medium text-navy-100 opacity-0 transition-all duration-500 group-hover:opacity-100">
                          {who.description}
                        </p>
                      </div>

                      <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-white p-4 transition-opacity duration-300 group-hover:opacity-0">
                        <FiPlus className="h-full w-full text-navy-700" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
