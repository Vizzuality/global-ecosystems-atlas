"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { SAMCollaborativeMap } from "@/containers/stories/south-africa-mozambique/section-2/map";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export const SAMSection2 = () => {
  const [, setStep] = useSyncStep();

  return (
    <>
      <Step id="compare" offset={0.5} onEnter={() => setStep(3)} className="bg-navy-700">
        <Section>
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-10 lg:col-start-2">
                <H2 size="sm" className="text-white">
                  Conservation Collaboration
                </H2>
                <p className="text-xl text-white">
                  Though they have independently developed ecosystem maps, South Africa and
                  Mozambique share many of the same ecosystem groups, like the savannas and sandy
                  shorelines. By using the Global Ecosystems Atlas to show national ecosystem maps
                  aligned with the Global Ecosystem Typology, a harmonised picture emerges,
                  revealing similarities and connections between ecosystems in the two countries.
                  This process also enables the identification of discrepancies in mapping between
                  countries, especially along their borders, and promotes joint efforts to improve
                  data accuracy and harmonization beyond national level.
                </p>
              </div>
            </Grid>
          </div>
        </Section>

        <div className="aspect-square max-h-[800px] w-full lg:aspect-video">
          <SAMCollaborativeMap />
        </div>

        <Section>
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-8 lg:col-start-4">
                <p className="text-xl text-white">
                  With this understanding, Mozambique and South Africa can better conserve and
                  manage these shared environments, including through cross-border collaboration.
                  This applies to neighbouring nations and countries worldwide. A unified approach
                  is essential for effectively safeguarding ecosystem groups that span multiple
                  countries.
                </p>
                <p className="text-xl text-white">
                  The Global Ecosystems Atlas harmonises maps and facilitates collaboration between
                  countries. This process enhances national ecosystem maps without replacing
                  national ecosystem classifications or losing any data on national ecosystem types.
                </p>
              </div>
            </Grid>
          </div>
        </Section>
      </Step>
    </>
  );
};
