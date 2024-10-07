"use client";

import Image from "next/image";
import Link from "next/link";

import { PiHardDrives, PiMapTrifold, PiStack } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function HomeWhere() {
  return (
    <Section className="overflow-hidden">
      <div className="container space-y-16">
        <Grid>
          <div className="relative col-span-3 hidden lg:block">
            <div className="absolute -top-16 right-0 aspect-[745/831] h-[calc(100%_+_theme(space.64))]">
              <Image priority src="/graphic.svg" alt="Where our data comes from" fill />

              <div className="absolute right-48 top-0 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex">
                <PiMapTrifold className="h-8 w-8" />
              </div>

              <div className="absolute right-0 top-1/3 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex">
                <PiHardDrives className="h-8 w-8" />
              </div>

              <div className="absolute right-24 top-2/3 z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg xl:flex">
                <PiStack className="h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <div className="space-y-16">
              <header className="space-y-8 lg:space-y-12">
                <H2>Where our data comes from?</H2>
                <p className="text-xl lg:text-2xl">
                  The Global Ecosystems Atlas was created by compiling existing spatial data
                  products developed to represent ecosystems. These maps come from high-quality
                  national, regional, and global repositories. Each dataset has been subjected to a
                  rigorous evaluation process, including validation and harmonization with the{" "}
                  <a
                    href="https://iucn.org/resources/conservation-tool/iucn-global-ecosystem-typology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    IUCN Global Ecosystem Typology
                  </a>{" "}
                  - an internationally recognized system for classifying ecosystems across
                  terrestrial, freshwater and marine realms.
                </p>
              </header>

              <Link href="/about-us" className="inline-block">
                <Button size="lg">Go to About us</Button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
