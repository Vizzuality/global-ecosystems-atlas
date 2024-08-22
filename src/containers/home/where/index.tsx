"use client";

import Image from "next/image";
import Link from "next/link";

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
              <Image src="/graphic.svg" alt="Where our data comes from" fill />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <div className="space-y-16">
              <header className="space-y-12">
                <H2>Where our data comes from?</H2>
                <p className="text-xl lg:text-2xl">
                  The Global Ecosystems Atlas offers data on ecosystems that have been
                  scientifically validated and harmonised with the IUCN Global Ecosystem Typology -
                  a common international system for classifying ecosystems across terrestrial,
                  freshwater and marine realms.
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
