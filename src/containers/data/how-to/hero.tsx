import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const HowToHero = () => {
  return (
    <Section>
      <div className="container space-y-10 lg:space-y-20">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <H3>Data product</H3>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The Global Ecosystems Atlas Basemap (gea_basemap) is a data product designed to
              support environmental initiatives by providing a{" "}
              <strong>consistent spatial dataset</strong>
              representing ecosystems worldwide. The development of the basemap involved the
              compilation and harmonization of existing, publicly available assets that are known to
              represent ecosystems and that meet stringent data quality standards. Key processes in
              the development of the basemap include data compilation, quality assurance, assigning
              map classes to their corresponding IUCN Global Ecosystem Typology class, and
              integration into a data product that can support a variety of use cases. 
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="text-2xl font-light italic text-navy-600 lg:text-4xl">
              The development of the basemap involved the compilation and harmonization of existing,
              publicly available assets that are known to represent ecosystems and that meet
              stringent data quality standards.
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
