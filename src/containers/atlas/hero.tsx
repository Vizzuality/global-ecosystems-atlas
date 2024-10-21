import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export const AtlasHero = () => {
  return (
    <Section hero className="min-h-0">
      <div className="container">
        <Grid className="lg:gap-y-9">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
            <H2>Atlas Unveiling: Desktop Experience First</H2>
          </div>
          <div className="col-span-12 space-y-10 lg:col-span-8 lg:col-start-3">
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl">
                This initial release of the Atlas is best viewed on desktop for an optimal
                experience due to its complexity and size.
              </p>
              <p className="text-xl lg:text-2xl">
                While we are actively working to enhance mobile support, you can get an exclusive
                preview by watching{" "}
                <Link
                  href="/resources/#global-ecosystem-atlas-screencast"
                  className="font-semibold underline"
                >
                  this video demonstration
                </Link>
                .
              </p>
            </div>
            <div className="col-span-12 space-y-2">
              <Button
                size="lg"
                variant="default"
                className="w-full"
                // onClick={() => setMobileState("map")}
              >
                See Atlas
              </Button>

              <Link href="/" className="block w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">
                  See Homepage
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
