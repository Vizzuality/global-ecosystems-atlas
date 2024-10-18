import { Metadata } from "next";

import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Resources | Global Ecosystems Atlas",
  description: "Global Ecosystems Atlas Resources",
};

export default async function ResourcesPage() {
  return (
    <>
      <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
        <div className="container">
          <Grid>
            <div className="col-span-12 lg:col-span-6 lg:col-start-2">
              <div className="space-y-10 lg:space-y-16">
                <header className="space-y-2">
                  <H1 className="text-white">Resources</H1>
                </header>
                <div className="space-y-8 text-white">
                  <p className="text-xl">
                    Here you can find a range of resources to help you understand and use the Atlas.
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
      <Section>
        <div className="container space-y-16">
          <Grid>
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <div className="space-y-6 lg:space-y-9">
                <div className="space-y-16">
                  <div className="space-y-4">
                    <H3>Global ecosystem atlas overview</H3>
                    <div className="relative aspect-video">
                      <video controls className="h-full w-full" poster="/poster.webp">
                        <source
                          src="https://global-ecosystem-atlas-staging-assets-bucket.s3.eu-west-3.amazonaws.com/app/teaser-video/GEA_teaser_Final_v2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <H3>Global ecosystem atlas screencast</H3>
                    <div className="relative aspect-video">
                      <video controls className="h-full w-full" poster="/poster.webp">
                        <source
                          src="https://global-ecosystem-atlas-production-assets-bucket.s3.eu-west-3.amazonaws.com/app/screencast/GEA_screencast_00.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Section>
    </>
  );
}
