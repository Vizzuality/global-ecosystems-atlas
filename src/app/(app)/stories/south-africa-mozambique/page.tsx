import { Metadata } from "next";

import { SAMHero } from "@/containers/stories/south-africa-mozambique/hero";
import { SAMInnovativeMozambique } from "@/containers/stories/south-africa-mozambique/innovative/mozambique";
import { SAMInnovativeSouthAfrica } from "@/containers/stories/south-africa-mozambique/innovative/south-africa";

import { Grid } from "@/components/ui/grid";

export const metadata: Metadata = {
  title: "Stories: South Africa and Mozambique | Global Ecosystems Atlas",
  description: "Stories: South Africa and Mozambique description",
};

export default async function StoriesSouthAfricaMozambiquePage() {
  return (
    <>
      <div className="container -mt-28">
        <Grid>
          <div className="col-span-5 lg:col-start-2">
            <SAMHero />
            <SAMInnovativeSouthAfrica />
            <SAMInnovativeMozambique />
          </div>
          <div className="col-span-6">
            <div className="sticky top-0 flex h-screen w-[50vw] items-center justify-center bg-lightblue-50 text-4xl">
              Map
            </div>
          </div>
        </Grid>
      </div>
    </>
  );
}
