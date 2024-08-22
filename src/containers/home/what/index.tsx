"use client";

import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function HomeWhat() {
  return (
    <Section className="overflow-hidden bg-navy-700">
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="space-y-16">
              <header className="space-y-12">
                <H2 className="text-center text-white">
                  What can you do with Global Ecosystems Atlas?
                </H2>
                <p className="text-center text-xl text-navy-100 lg:text-2xl">
                  The Global Ecosystems Atlas will be a versatile tool for identifying distribution
                  of different ecosystem types, supporting conservation and restoration efforts,
                  informing environmental management decisions, conducting research, and aiding in
                  environmental and corporate reporting.
                </p>
              </header>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
