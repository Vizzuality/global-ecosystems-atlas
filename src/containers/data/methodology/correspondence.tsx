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
              Cross-referencing map classes from the source datasets to the ecosystem functional
              groups defined by the{" "}
              <a
                href="www.global-ecosystems.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Global Ecosystem Typology
              </a>{" "}
              is a critical process that enables the development of the gea_synthesis data product.
              This process involves an evaluation of the membership relationship of every map class
              in each source dataset to ecosystem functional groups defined and described by the
              Global Ecosystem Typology. Ecosystem functional groups represent level 3 of the Global
              Ecosystem Typology and are nested within biomes (level 2), which in turn are nested
              within realms (level 1).
            </p>
            <p className="text-lg">
              A systematic membership analysis is conducted for each class in a source dataset,
              according to cross-referencing guidelines developed by the IUCN Global Ecosystem
              Typology working group. The analysis focuses on a comparison of properties of a given
              map class with each ecosystem functional group, including class definitions, spatial
              relationships, and through the incorporation of expert advice. Map classes in the
              source dataset that are estimated to have little or no membership to an ecosystem
              functional group because of fundamentally different classification schemes, or those
              that are unresolved due to partial mismatch in class definitions or uncertainty, are
              excluded from the gea_synthesis data product. The data mask layer indicates,
              per-pixel, where class memberships remain unresolved. Unresolved classes typically
              require further expert input, more data to estimate memberships, and are therefore
              recorded in the Global Ecosystem Atlas issues tracker (see below).
            </p>
            <p className="text-lg">
              For each source dataset, the Global Ecosystems Atlas maintains a set of formatted
              classification cross-reference tables that are accessible on{" "}
              <a
                href="https://github.com/geo-global-ecosystem-atlas"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
