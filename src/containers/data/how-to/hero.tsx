import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="text-2xl font-light italic text-navy-600 lg:text-4xl">
              The development of the basemap involved the compilation and harmonization of existing,
              publicly available geospatial data products that are known to represent ecosystems and
              that meet stringent data quality standards.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 space-y-10 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The Global Ecosystems Atlas Basemap is not static; it is{" "}
              <strong>designed for continuous</strong> updates to maintain relevance and accuracy. A
              versioning system allows for the continuous integration of new ecosystem spatial
              datasets, enabling the continuous submission of newly developed datasets from
              ecosystem mapping teams around the world.
            </p>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Spatial Resolution</TableCell>
                    <TableCell>100 meters per pixel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Coordinate System</TableCell>
                    <TableCell>WGS 1984 (EPSG:4326)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Classification System</TableCell>
                    <TableCell>IUCN Global Ecosystem Typology</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Input Data Sources</TableCell>
                    <TableCell>
                      Existing publicly available ecosystem datasets developed at national, global
                      and regional extents that meet the GEO Ecosystems Atlas data quality standards
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Input Data Types</TableCell>
                    <TableCell>
                      The Global Ecosystem Atlas ingests both raster and vector formats
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Output Format</TableCell>
                    <TableCell>
                      The Global Ecosystems Atlas basemap is a set of Cloud Optimised GeoTIFFs
                      consisting of 119 individual data layers that represent levels 1, 2, and 3 of
                      the IUCN Global Ecosystem Typology (synthesis products), 110 individual
                      ecosystem functional groups (binary products), a set of data masks
                      representing mapping effort (data masks) and quality assurance layers (QA
                      layers) representing aspects of data quality and provenance.{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Validation Methods</TableCell>
                    <TableCell>
                      Expert review, comparison with reference data, spatial accuracy checks, and
                      agreement metrics.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="lg:text-nowrap">Update Frequency</TableCell>
                    <TableCell>Continuous, with a versioning system.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
