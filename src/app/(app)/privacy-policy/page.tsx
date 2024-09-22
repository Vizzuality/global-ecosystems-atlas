import { Metadata } from "next";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Ecosystems Atlas",
  description: "Privacy Policy Global Ecosystems Atlas description",
};

export default async function PrivacyPolicy() {
  return (
    <>
      <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <header className="space-y-2">
                  <H1 className="text-white">Privacy Policy</H1>
                </header>
                <div className="space-y-8 text-white">
                  <p className="text-xl text-white">
                    The Global Ecosystems Atlas is a project of the Group on Earth Observations
                    (GEO), which is hosted by the World Meteorological Organization. GEO conforms to
                    the privacy policy established by the WMO, available{" "}
                    <a
                      href="https://wmo.int/privacy-policy"
                      target="_blank"
                      rel="noopener noreferer"
                    >
                      <strong>here</strong>
                    </a>{" "}
                    .
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
