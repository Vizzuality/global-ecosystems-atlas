"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { Media } from "@/containers/media";
import { SAMSection4Map } from "@/containers/stories/south-africa-mozambique/section-4/map";
import { SAMWhy1 } from "@/containers/stories/south-africa-mozambique/section-4/why/1";
import { SAMWhy2 } from "@/containers/stories/south-africa-mozambique/section-4/why/2";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";

export const SAMSection4 = () => {
  const [, setStep] = useSyncStep();

  return (
    <div className="bg-lightblue-100 pt-16 sm:py-16 xl:pt-0">
      <div className="container">
        <Grid>
          <div className="col-span-12 space-y-16 xl:col-span-5 xl:col-start-2 xl:pr-10">
            <Step id="why-1" offset={0.5} onEnter={() => setStep(5)}>
              <SAMWhy1 />
            </Step>
            <Step id="why-2" offset={0.5} onEnter={() => setStep(6)}>
              <SAMWhy2 />
            </Step>
          </div>
          <Media greaterThanOrEqual="xl" className="col-span-6">
            <div className="sticky top-0 flex h-dvh w-[50vw] items-center justify-center bg-lightblue-50 text-4xl">
              <SAMSection4Map />
            </div>
          </Media>
        </Grid>
      </div>
    </div>
  );
};
