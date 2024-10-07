import { Metadata } from "next";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Disclaimer | Global Ecosystems Atlas",
  description: "Global Ecosystems Atlas Disclaimer",
};

export default async function DisclaimerPage() {
  return (
    <>
      <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <header className="space-y-2">
                  <H1 className="text-white">Disclaimer</H1>
                </header>
                <div className="space-y-8 text-white">
                  <p className="text-xl text-white">
                    The designations employed and the presentation of material on this map and
                    website do not imply the expression of any opinion whatsoever on the part of the
                    Secretariat of the World Meteorological Organization or the Secretariat of the
                    United Nations concerning the legal status of any country, area or territory or
                    of its authorities, or concerning the delimitation of its borders.
                  </p>
                  <p className="text-xl text-white">
                    The depiction and use of boundaries, geographic names and related data shown on
                    maps and included in lists, tables, documents, and databases on this map and
                    website are not warranted to be error -free nor do they necessarily imply
                    official endorsement or acceptance by WMO or the United Nations.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  );
}
