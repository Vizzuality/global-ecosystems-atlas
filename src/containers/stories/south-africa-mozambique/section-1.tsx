"use client";

import { useState } from "react";

import { SAMHero } from "@/containers/stories/south-africa-mozambique/hero";
import { SAMInnovativeMozambique } from "@/containers/stories/south-africa-mozambique/innovative/mozambique";
import { SAMInnovativeSouthAfrica } from "@/containers/stories/south-africa-mozambique/innovative/south-africa";

import { DebugOffset } from "@/components/scroll/debug-offset";
import { Step } from "@/components/scroll/step";
import { Grid } from "@/components/ui/grid";

export const SAMSection1 = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      <DebugOffset offset={0.5} />

      <div className="container -mt-28">
        <Grid>
          <div className="col-span-5 lg:col-start-2">
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
