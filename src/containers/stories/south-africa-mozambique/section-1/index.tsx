"use client";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { Media } from "@/containers/media";
import { SAMHero } from "@/containers/stories/south-africa-mozambique/section-1/hero";
import { SAMInnovativeMozambique } from "@/containers/stories/south-africa-mozambique/section-1/innovative/mozambique";
import { SAMInnovativeSouthAfrica } from "@/containers/stories/south-africa-mozambique/section-1/innovative/south-africa";
import { SAMSection1Map } from "@/containers/stories/south-africa-mozambique/section-1/map";

import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";

export const SAMSection1 = () => {
  const [, setStep] = useSyncStep();

  return (
    <div className="container -mt-12 pt-16 sm:py-16 xl:-mt-28 xl:py-0">
      <Grid>
        <div className="col-span-12 space-y-16 xl:col-span-5 xl:col-start-2 xl:pr-10">
          <Step id="hero" offset={0.5} onEnter={() => setStep(0)}>
            <SAMHero />
          </Step>
          <Step id="sa" offset={0.5} onEnter={() => setStep(1)}>
            <SAMInnovativeSouthAfrica />
          </Step>
          <Step id="m" offset={0.5} onEnter={() => setStep(2)}>
            <SAMInnovativeMozambique />
          </Step>
        </div>

        <Media greaterThanOrEqual="xl" className="col-span-6">
          <div className="sticky top-0 flex h-dvh w-[50vw] items-center justify-center bg-lightblue-50 text-4xl">
            <SAMSection1Map />
          </div>
        </Media>
      </Grid>
    </div>
  );
};
