"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function HomeStories() {
  return (
    <Section className="overflow-hidden bg-lightblue-50">
      <div className="container">
        <Grid className="items-end gap-y-16">
          <div className="col-span-12 lg:col-span-6 lg:col-start-1">
            <div className="space-y-8 lg:space-y-16">
              <header className="space-y-8 lg:space-y-12">
                <H2>South Africa & Mozambique, an inspirational story</H2>
                <p className="text-xl lg:text-2xl">
                  Both countries have so much diversity and limited resources. They have invested
                  lots of effort in mapping their ecosystem types as tool to support effective
                  management and conservation.
                </p>
              </header>

              <Link href="/stories/south-africa-and-mozambique" className="inline-block">
                <Button size="lg">Read full story</Button>
              </Link>
            </div>
          </div>

          <div className="col-span-12 space-y-8 lg:col-span-4 lg:col-start-8 lg:space-y-10">
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-6xl font-semibold leading-none">16</span>
                  <span className="text-2xl leading-none"> / 24</span>
                </div>

                <p className="text-sx relative -top-1 font-semibold leading-none">
                  ecosystems mapped
                </p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded bg-white">
                <div className="h-full w-1/2 bg-navy-700"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-6xl font-semibold leading-none">77,5</span>
                  <span className="text-2xl leading-none"> / %</span>
                </div>

                <p className="text-sx relative -top-1 font-semibold leading-none">surface mapped</p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded bg-white">
                <div className="h-full w-1/2 bg-navy-700"></div>
              </div>

              <div className="flex gap-2">
                <p className="text-sx font-bold">
                  66% <span className="font-medium">marine</span>
                </p>
                <p>·</p>
                <p className="text-sx font-semibold">
                  89% <span className="font-medium">land</span>
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
