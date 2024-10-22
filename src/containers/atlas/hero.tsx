import Link from "next/link";

import { useSetAtom } from "jotai";

import { atlasMobileStateAtom } from "@/app/(atlas)/atlas/store";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const AtlasHero = () => {
  const setAtlasMobileState = useSetAtom(atlasMobileStateAtom);

  return (
    <Section hero className="min-h-0">
      <div className="container">
        <Grid className="lg:gap-y-9">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
            <H3 className="text-center">
              Atlas Unveiling: <br /> Desktop Experience First
            </H3>
          </div>
          <div className="col-span-12 space-y-10 lg:col-span-8 lg:col-start-3">
            <div className="space-y-2">
              <p className="text-center">
                This initial release of the Atlas is best viewed on a larger screen for an optimal
                experience.
              </p>
              {/* <p className="text-center">
                While we are actively working to enhance mobile support, you can get an exclusive
                preview by watching{" "}
                <Link
                  href="/resources/#global-ecosystem-atlas-screencast"
                  className="font-semibold underline"
                >
                  this video demonstration
                </Link>
                .
              </p> */}
            </div>
            <div className="col-span-12 space-y-2">
              <Button
                size="lg"
                variant="default"
                className="w-full"
                onClick={() => setAtlasMobileState("map")}
              >
                I understand, take me to the Atlas
              </Button>

              <Link
                href="/resources/#global-ecosystem-atlas-screencast"
                className="block w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full">
                  Watch the Atlas demonstration
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
