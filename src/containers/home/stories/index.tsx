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
                  <span className="text-6xl font-semibold leading-none">78</span>
                  <span className="text-2xl leading-none"> %</span>
                </div>

                <p className="relative -top-1 text-xs font-semibold leading-none">map coverage</p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded bg-white">
                <div
                  className="h-full bg-navy-700"
                  style={{
                    width: "78%",
                  }}
                />
              </div>

              <div className="flex gap-2">
                <p className="text-xs font-bold">
                  <span className="font-bold">terrestial surface</span>
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-6xl font-semibold leading-none">13</span>
                  <span className="text-2xl leading-none"> %</span>
                </div>

                <p className="relative -top-1 text-xs font-semibold leading-none">protected area</p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded bg-white">
                <div
                  className="h-full bg-navy-700"
                  style={{
                    width: "13%",
                  }}
                />
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
