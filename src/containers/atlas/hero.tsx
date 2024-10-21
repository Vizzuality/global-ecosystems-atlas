import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export const AtlasHero = () => {
  return (
    <Section hero className="min-h-0">
      <div className="container">
        <Grid className="lg:gap-y-9">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
            <H1>We’re sorry {`;(`}</H1>
          </div>
          <div className="col-span-12 space-y-10 lg:col-span-8 lg:col-start-3">
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl">
                The Atlas cannot be visualized on any mobile device due to its large size and
                complexity.
              </p>
              <p className="text-xl lg:text-2xl">
                Please visit the Atlas on the desktop version for a full experience.
              </p>
            </div>
            <div className="col-span-12 flex">
              <Link href="/" className="block w-full sm:w-auto">
                <Button size="lg" variant="default" className="w-full">
                  Go to the Homepage
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
