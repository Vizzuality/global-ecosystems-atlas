import Link from "next/link";

import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const MethodologyHero = () => {
  return (
    <Section>
      <div className="container space-y-10 lg:space-y-20">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <H3>Data Compilation</H3>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The Global Ecosystems Atlas synthesis map is developed by searching for, and
              compiling, existing spatial data products that are intended to represent ecosystems
              (&apos;source datasets&apos;). Searches focus on publicly available data repositories,
              datasets associated with the scientific literature, and through a program of
              coordinated outreach to national environment agencies and ecosystem map developers.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="text-2xl font-light italic text-navy-600 lg:text-4xl">
              Each source dataset is subject to a rigorous evaluation and quality assessment that
              includes assessment of class definitions, validation protocols, accuracy assessments,
              data currency, spatial resolution and licensing conditions.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The evaluation protocol ensures the inclusion of data that is suitable for
              representing ecosystems and meets consistent data quality and metadata reporting
              standards. The results of the data compilation phase, prior to the application of the
              evaluation protocol, are included in the{" "}
              <Link href="/data/sources-catalogue#tabs" className="underline">
                Sources Catalogue
              </Link>
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
