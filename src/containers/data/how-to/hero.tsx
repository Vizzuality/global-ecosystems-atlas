import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

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
              The <strong>Global Ecosystems Atlas synthesis map</strong> is a data product designed
              to support a range of environmental initiatives through the provision of a spatially
              and thematically consistent geospatial data product that represents the distribution
              of the world&apos;s ecosystems. The data product is a set of 119 Cloud-optimised
              Geotiffs that include three synthesis, which represent the ecosystem functional group,
              biomes and realms of the IUCN Global Ecosystem Typology, 110 binary layers that
              represent the 110 individual ecosystem functional groups of the Global Ecosystem
              Typology, a data mask, and a set of quality assurance data layers that indicate the
              data provenance, development year and other relevant aspects of data quality.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="text-2xl font-light italic text-navy-600 lg:text-4xl">
              The development of the synthesis map data product involved compiling and harmonising
              existing, publicly available datasets that are known to represent ecosystems and that
              meet rigorous data quality standards.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 space-y-10 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              Key processes in the development of the gea_synthesis data product include
              wide-ranging data searches, data catalogue, quality assurance, cross-referencing map
              classes from source datasets to IUCN Global Ecosystem Typology ecosystem functional
              groups, and geospatial data processing into a data product that can support a variety
              of use cases.
            </p>
            <p className="text-lg">
              The specification of the synthesis map data product was designed to enable both
              estimates of ecosystem extent and distribution and to support ecosystem extent
              monitoring over time. The <strong>Global Ecosystems Atlas synthesis map</strong> is
              not a static data publication; it is designed for regular updates to maintain
              relevance and accuracy. A versioning system allows for the ongoing integration of new
              submissions of spatial datasets that represent ecosystems, enabling regular updates
              that reflect new ecosystem mapping efforts by mapping teams worldwide.
            </p>

            {/* <div className="rounded-md border">
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
            </div> */}
          </div>
        </Grid>
      </div>
    </Section>
  );
};
