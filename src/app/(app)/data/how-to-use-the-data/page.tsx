import { Metadata } from "next";

import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "How to use the data | Global Ecosystems Atlas",
  description: "How to use the data Global Ecosystems Atlas description",
};

export default async function HowToUseTheData() {
  return (
    <Section>
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <h3 className="text-3xl font-semibold">Data product</h3>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The Global Ecosystems Atlas Basemap (gea_basemap) is a data product designed to
              support environmental initiatives by providing a{" "}
              <strong>consistent spatial dataset</strong> representing ecosystems worldwide. The
              development of the basemap involved the compilation and harmonization of existing,
              publicly available assets that are known to represent ecosystems and that meet
              stringent data quality standards. Key processes in the development of the basemap
              include data compilation, quality assurance, assigning map classes to their
              corresponding IUCN Global Ecosystem Typology class, and integration into a data
              product that can support a variety of use cases. 
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
