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
                <H2 className="text-white">Conservation Collaboration</H2>
                <p className="text-xl text-white">
                  Though they have independently developed ecosystem maps, South Africa and
                  Mozambique share many of the same ecosystem groups, like the savannas and sandy
                  shorelines, especially along their borders. The Global Ecosystems Atlas, by
                  showing national ecosystem maps aligned with the Global Ecosystem Typology, a
                  harmonized global picture emerges, revealing the similarities and connections
                  between ecosystems that cross their borders. This process also enables the
                  identification of discrepancies in data harmonization mapping between countries,
                  and promotes joint efforts to improve data accuracy beyond national level.
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
                  With this understanding, they can better conserve and manage these shared
                  environments, including through cross-border collaboration. This applies to
                  neighbouring countries and countries worldwide. A unified approach is essential
                  for effectively safeguarding ecosystems that span multiple countries.
                </p>
                <p className="text-xl text-white">
                  The Global Ecosystems Atlas harmonizes maps and facilitates cross-border
                  collaboration. This process enhances the national maps without replacing national
                  ecosystem classifications or losing any data.
                </p>
              </div>
            </Grid>
          </div>
        </Section>
      </Step>
    </>
  );
};
