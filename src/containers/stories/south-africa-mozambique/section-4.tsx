"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { SAMHero } from "@/containers/stories/south-africa-mozambique/hero";
import { SAMInnovativeSouthAfrica } from "@/containers/stories/south-africa-mozambique/innovative/south-africa";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";

export const SAMSection4 = () => {
  const [step, setStep] = useSyncStep();

  return (
    <>
      <div className="container -mt-28">
        <Grid>
          <div className="col-span-5 lg:col-start-2">
            <Step id="hero" offset={0.5} onEnter={() => setStep(5)}>
              <SAMHero />
            </Step>
            <Step id="sa" offset={0.5} onEnter={() => setStep(6)}>
              <SAMInnovativeSouthAfrica />
            </Step>
          </div>
          <div className="col-span-6">
            <div className="sticky top-0 flex h-screen w-[50vw] items-center justify-center bg-lightblue-50 text-4xl">
              Map {step}
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
};
