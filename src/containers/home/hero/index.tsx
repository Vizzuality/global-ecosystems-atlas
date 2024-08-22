import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export default function HomeHero() {
  return (
    <Section hero className="min-h-0">
      <div className="container">
        <Grid className="lg:gap-y-9">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 2xl:col-span-8 2xl:col-start-3">
            <H1 className="text-center">Mapping the world&apos;s ecosystems for action</H1>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="text-center text-xl lg:text-2xl">
              The Global Ecosystems Atlas will be the first comprehensive harmonised open resource
              on the extent and change of all the world&rsquo;s ecosystems.
            </p>
          </div>
          <div className="col-span-12 flex justify-center">
            <Link href="/atlas" className="block w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full">
                Explore the Atlas
              </Button>
            </Link>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
