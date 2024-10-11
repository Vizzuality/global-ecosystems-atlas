"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export const SAMSection5 = () => {
  const [, setStep] = useSyncStep();

  return (
    <>
      <Step id="most" offset={0.5} onEnter={() => setStep(7)}>
        <Section>
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-10 lg:col-start-2">
                <H2 size="sm" className="">
                  Make the most of the Global Ecosystems Atlas
                </H2>
                <Grid>
                  <div className="col-span-12 lg:col-span-6">
                    <p className="text-lg">
                      While South Africa and Mozambique are notable examples of national ecosystem
                      mapping, they don&apos;t stand alone. A range of countries are investing in
                      mapping and classifying their ecosystems to better understand and conserve
                      their natural environments to meet Global Biodiversity Framework (GBF)
                      targets. At the same time, companies are becoming more aware of their
                      responsibility to mitigate environmental impacts.
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <p className="text-lg">
                      The Global Ecosystems Atlas is designed to align these efforts globally,
                      ensuring that actions in one area support, biodiversity efforts elsewhere. By
                      closing knowledge gaps and providing a shared reference point, the Atlas
                      enables governments, businesses, and civil society to collaboratively deliver
                      on the intertwined goals of climate action and nature preservation.
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
          </div>
        </Section>
      </Step>
    </>
  );
};
