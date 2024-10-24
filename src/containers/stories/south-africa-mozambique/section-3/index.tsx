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
        <Section className="space-y-9">
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-8 lg:col-start-2">
                <H2 size="sm" className="">
                  Turning data into decisions
                </H2>
                <p className="text-lg">
                  The Global Ecosystems Atlas equips countries to better monitor and conserve their
                  ecosystems. With user-friendly tools, the Atlas{" "}
                  <strong>
                    helps track progress toward the{" "}
                    <a
                      href="https://www.cbd.int/gbf"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Global Biodiversity Framework (GBF)
                    </a>
                  </strong>{" "}
                  goals and targets, allowing for easy reporting on headline indicators like extent
                  of natural ecosystems, ecosystem risk status and protected area coverage in the
                  format required by the{" "}
                  <a
                    href="https://www.cbd.int/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Convention on Biological Diversity (CBD)
                  </a>
                  .
                </p>
                <p className="text-lg">
                  For instance, by comparing South Africa and Mozambique data, the Atlas can reveal
                  shared ecosystems like savannas and highlight areas most at risk. This information
                  is crucial not only for governments but also for businesses that depend or impact
                  on nature.
                </p>
              </div>
            </Grid>
          </div>
          <div className="container">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-10 lg:col-start-2">
                <SAMTabs />
              </div>
            </Grid>
          </div>
          <div className="container pt-20">
            <Grid>
              <div className="col-span-12 space-y-9 lg:col-span-8 lg:col-start-4">
                <p className="text-xl">
                  The Atlas serves as a valuable resource for both government reporting on GBF
                  indicators and companies nature-related disclosure needs. It summarises key
                  metrics and indicators needed by governments for consistent reporting on global
                  commitments while while guiding the private sector in making informed conservation
                  investments that align with regulations and contribute to global sustainability.
                </p>
              </div>
            </Grid>
          </div>
        </Section>
      </Step>
    </>
  );
};
