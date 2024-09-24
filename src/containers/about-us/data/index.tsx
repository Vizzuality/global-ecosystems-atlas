import Link from "next/link";

import { FiCheckCircle } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

export default function AboutUsData() {
  return (
    <Section className="bg-navy-700">
      <div className="container space-y-56">
        <Grid>
          <div className="col-span-12 lg:col-span-5 lg:col-start-2">
            <div className="space-y-6 lg:space-y-9">
              <H2 className="text-white">About the data and methods</H2>
              <div className="space-y-8">
                <p className="text-xl text-white">
                  The Global Ecosystems Atlas offers data on ecosystems that have been
                  scientifically validated and harmonised with the IUCN Global Ecosystem Typology -
                  a common international system for classifying ecosystems across terrestrial,
                  freshwater and marine realms. Explore the catalogue of carefully vetted datasets
                  behind the platform to gain deeper insights into the building blocks of the Atlas
                  and enhance your research and ecosystem mapping projects.
                </p>
              </div>
              <ul className="flex flex-col gap-5 pt-6 sm:flex-row">
                <li className="w-full sm:w-1/2">
                  <Link href="/data/sources-catalogue">
                    <Button className="w-full" size="lg" variant="outline">
                      Go to Dataset Catalogue
                    </Button>
                  </Link>
                </li>
                <li className="w-full sm:w-1/2">
                  <Link href="/data/methodology">
                    <Button className="w-full" size="lg" variant="primary">
                      Go to Methodology
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:col-span-3 lg:col-start-9 lg:flex">
            <ul className="w-full space-y-4 font-bold text-white">
              <li className="flex w-full items-center gap-4 rounded-2xl border border-white/20 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <FiCheckCircle className="h-8 w-8 text-green-500" />
                </div>
                Spatial Processing
              </li>
              <li className="flex w-full items-center gap-4 rounded-2xl border border-white/20 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <FiCheckCircle className="h-8 w-8 text-green-500" />
                </div>
                Reclassification
              </li>
              <li className="flex w-full items-center gap-4 rounded-2xl border border-white/20 p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                  <FiCheckCircle className="h-8 w-8 text-green-500" />
                </div>
                Quality Assurance
              </li>
            </ul>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
