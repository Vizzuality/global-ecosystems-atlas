import Image from "next/image";

import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function AboutUsVision() {
  return (
    <Section className="relative z-0 overflow-hidden bg-lightblue-50">
      <div className="container space-y-16 lg:space-y-56">
        <Grid>
          <div className="col-span-12 lg:col-span-5 lg:col-start-2">
            <div className="space-y-6 lg:space-y-9">
              <H2>What is GEO?</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  GEO was born from the simple idea that Earth observation data should be
                  universally accessible to support evidence-based decision-making regardless of
                  location or capacity.
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="relative col-span-3 hidden lg:block">
            <div className="absolute -top-6 right-0 aspect-[745/831] h-[calc(100%_+_theme(space.64))]">
              <Image priority src="/about/graphic.svg" alt="Where our data comes from" fill />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <div className="space-y-6 lg:space-y-9">
              <H2>Our vision</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  This vision translates into real-world impact through accessible Earth Observation
                  tools and initiatives like the Global Ecosystems Atlas.
                </p>
                <p className="text-xl">
                  The stakes are high in our efforts to restore our fragile balance with nature by
                  deepening our understanding of ecosystems and expanding collective action to
                  protect our shared environment. Now is the time to include all ecosystems in our
                  planet&rsquo;s story. GEO works to unify us through the power of Earth
                  intelligence.
                </p>
                <p className="text-xl">
                  Find out more about GEO:{" "}
                  <a
                    href="https://earthobservations.org/mission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    earthobservations.org/mission
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
