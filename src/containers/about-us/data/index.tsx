import Image from "next/image";
import Link from "next/link";

import resolveConfig from "tailwindcss/resolveConfig";

import { TextReveal } from "@/components/animations/text-reveal";
import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

import tailwindConfig from "@/../tailwind.config";

export default function AboutUsData() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <Section className="bg-navy-700">
      <div className="container space-y-56">
        <Grid>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6 lg:space-y-9">
              <H2 className="text-white">About the data and methods</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.white}>
                    The Global Ecosystems Atlas offers data on ecosystems that have been
                    scientifically validated and harmonised with the IUCN Global Ecosystem Typology
                    - a common international system for classifying ecosystems across terrestrial,
                    freshwater and marine realms. Explore the catalogue of carefully vetted datasets
                    behind the platform to gain deeper insights into the building blocks of the
                    Atlas and enhance your research and ecosystem mapping projects.
                  </TextReveal>
                </p>
              </div>
              <ul className="flex gap-5 pt-6">
                <li className="w-1/2">
                  <Link href="/datasets">
                    <Button className="w-full" size="lg" variant="outline">
                      Go to Dataset Catalogue
                    </Button>
                  </Link>
                </li>
                <li className="w-1/2">
                  <Link href="/methodology">
                    <Button className="w-full" size="lg" variant="primary">
                      Go to Methodology
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 flex items-center justify-center lg:col-span-5">
            <Image
              src="/about/data.png"
              alt="Global Ecosystems Atlas data"
              width={450}
              height={398}
            />
          </div>
        </Grid>
      </div>
    </Section>
  );
}
