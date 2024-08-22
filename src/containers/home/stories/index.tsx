"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function HomeStories() {
  return (
    <Section className="overflow-hidden bg-lightblue-50">
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-6 lg:col-start-1">
            <div className="space-y-16">
              <header className="space-y-12">
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
        </Grid>
      </div>
    </Section>
  );
}
