"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { SAMTabs } from "@/containers/stories/south-africa-mozambique/section-3/tabs";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export const SAMSection3 = () => {
  const [, setStep] = useSyncStep();

  return (
    <>
      <Step id="decisions" offset={0.5} onEnter={() => setStep(4)}>
        <Section>
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-8 lg:col-start-2">
                <H2 size="sm" className="">
                  Turning data into decisions
                </H2>
                <p className="text-lg">
                  The Global Ecosystems Atlas equips countries to better monitor and conserve their
                  ecosystems. With its user-friendly tools, the Atlas{" "}
                  <strong>
                    helps track progress toward the Global Biodiversity Framework (GBF)
                  </strong>{" "}
                  goals and targets, allowing for easy reporting on headline indicators like natural
                  ecosystem extent, ecosystem risk status, and protected area coverage in the format
                  required by the Convention on Biological Diversity (CBD).
                </p>
                <p className="text-lg">
                  For instance, by comparing South Africa and Mozambique data, the Atlas can reveal
                  shared ecosystems like savannas and highlight areas most at risk. This information
                  is crucial not only for governments but also for businesses that depend or impact
                  on nature.
                </p>

                <SAMTabs />
              </div>
            </Grid>
          </div>
        </Section>
      </Step>
    </>
  );
};
