"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { SAMWhy1 } from "@/containers/stories/south-africa-mozambique/why/1";
import { SAMWhy2 } from "@/containers/stories/south-africa-mozambique/why/2";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";

export const SAMSection4 = () => {
  const [step, setStep] = useSyncStep();

  return (
    <>
      <div className="container">
        <Grid>
          <div className="col-span-5 lg:col-start-2">
            <Step id="why-1" offset={0.5} onEnter={() => setStep(5)}>
              <SAMWhy1 />
            </Step>
            <Step id="why-2" offset={0.5} onEnter={() => setStep(6)}>
              <SAMWhy2 />
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
