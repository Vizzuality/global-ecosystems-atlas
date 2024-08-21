import resolveConfig from "tailwindcss/resolveConfig";

import { TextReveal } from "@/components/animations/text-reveal";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

import tailwindConfig from "@/../tailwind.config";

export default function AboutUsVision() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <Section className="bg-blue-100">
      <div className="container space-y-56">
        <Grid>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6 lg:space-y-9">
              <H2>What is GEO?</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.navy[700]}>
                    GEO was born from the simple idea that Earth observation data should be
                    universally accessible to support evidence-based decision-making regardless of
                    location or capacity.
                  </TextReveal>
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="space-y-6 lg:space-y-9">
              <H2>Our vision</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.navy[700]}>
                    This vision translates into real-world impact through accessible Earth
                    Observation tools and initiatives like the Global Ecosystems Atlas.
                  </TextReveal>
                </p>
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.navy[700]}>
                    The stakes are high in our efforts to restore our fragile balance with nature by
                    deepening our understanding of ecosystems and expanding collective action to
                    protect our shared environment. Now is the time to include all ecosystems in our
                    planet&rsquo;s story. GEO works to unify us through the power of Earth
                    intelligence.
                  </TextReveal>
                </p>
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.navy[700]}>
                    Find out more about GEO:{" "}
                    <a
                      href="https://earthobservations.org/mission"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      earthobservations.org/mission
                    </a>
                  </TextReveal>
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
