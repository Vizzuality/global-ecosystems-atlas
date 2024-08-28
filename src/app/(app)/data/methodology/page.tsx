import { Metadata } from "next";

import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Methodology | Global Ecosystems Atlas",
  description: "Methodology Global Ecosystems Atlas description",
};

export default async function Methodology() {
  return (
    <Section>
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <h3 className="text-3xl font-semibold">Data Compilation</h3>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The gea_basemap was created by searching for and compiling existing spatial data
              products that were intended to represent ecosystems Searches focused on publicly
              available data repositories, the scientific literature, and through a coordinated
              program of targeted outreach focused primarily on national ecosystem mapping
              organisations. Each dataset was subjected to a <strong>rigorous evaluation</strong>{" "}
              and quality assessment protocol that included formal assessment of license conditions,
              class definitions, validations and accuracy assessment, data freshness, and spatial
              resolution. The evaluation protocol ensured the inclusion of only the highest-quality
              data into the gea_basemap. 
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
