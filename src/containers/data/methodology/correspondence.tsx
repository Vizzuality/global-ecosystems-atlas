import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const MethodologyCorrespondence = () => {
  return (
    <Section>
      <div className="container">
        <Grid>
          <div className="col-span-12 space-y-4 lg:col-span-6 lg:col-start-4">
            <H3>Correspondence to the IUCN Global Ecosystem Typology Methodology</H3>
            <p className="text-lg">
              Evaluating the correspondence between map classes in existing spatial datasets and the
              IUCN Global Ecosystem Typology is a critical process that enables{" "}
              <strong>harmonization of datasets</strong> into the gea_basemap data product. This
              process involves evaluating every map class in the different source datasets and
              assigning them to the Ecosystem Functional Group level (Level 3) of IUCN Global
              Ecosystem Typology.{" "}
            </p>
            <p className="text-lg">
              Each evaluation is conducted according to IUCN Map classes that do not correspond to
              Level 3 of the Global Ecosystem Typology are set to no data and identified by the
              geo_basemap data masks. The correspondence analysis process ensures that diverse
              ecosystem data, which are often mapped to represent different classification systems,
              is harmonized into a consistent, globally recognized framework.
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
