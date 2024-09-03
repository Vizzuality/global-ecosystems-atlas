import Markdown from "react-markdown";

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

export const HowToUsetheData = () => {
  return (
    <Section>
      <div className="container space-y-10">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <H3>Use the Data</H3>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-5">
            <p className="text-lg">
              The Global Ecosystems Atlas Basemap is designed to be a versatile resource for a wide
              range of applications like Environmental Monitoring, Conservation Planning, Academic
              Research, Policy Development.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 space-y-10 lg:col-span-7 lg:col-start-5">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Data specification</h4>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Attribute</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Data format</TableCell>
                      <TableCell>Raster</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Data format detail</TableCell>
                      <TableCell>Cloud-optimised GeoTIFF</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Data resolution (visual)</TableCell>
                      <TableCell>
                        Source resolution (varying resolution while zooming around the map)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">
                        Data resolution (for analysis)
                      </TableCell>
                      <TableCell>Resampled to a standard resolution (likely 100-m)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Spatial extent</TableCell>
                      <TableCell>Global</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Pyramid type</TableCell>
                      <TableCell>Mode</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Projection</TableCell>
                      <TableCell>Advice from ESRI - probably WGS 84</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Minimum mapping unit</TableCell>
                      <TableCell>
                        Depends on source data - we serve source data with no MMU processing
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Minimum mapping unit</TableCell>
                      <TableCell>
                        <Markdown className="prose prose-sm">
                          {`Potentially 1 to 6/7, minimum likely 3:
  - efg_type (integer, pixel 1-110)
  - biome (integer, pixel 1-xxx)
  - realm (integer, pixel 1-10)
  - map_date (integer, 1900-2024) *
  - data_richness (integer, pixel 1-n)
  - qa_layer (not sure yet)
  - crosswalk_confidence (not sure yet)
  - input_scale (integer, 1-300; e.g. to allow a global heat map of the resolution of input data)

  Additional data served as different datasets:
  - Possible: 110 binary occurrence maps
  - Possible: 25 binary biome maps
  - Possible: 10 binary realm maps
  - Possible: Raw input data in native classification and resolution`}
                        </Markdown>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Band names</TableCell>
                      <TableCell>
                        <Markdown className="prose prose-sm">
                          {`- Synthesis product: ['efg_type', 'biome_type', 'realm_type', 'qa_data_date',
                          'qa_data_richness', 'qa_disagreement', 'qa_input_scale',
                          'crosswalk_confidence']

- Binary product: ['t1_1', 't1_2', 't1_3',..., 'tf_1_7']`}
                        </Markdown>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Minimum mapping unit</TableCell>
                      <TableCell>
                        <Markdown className="prose prose-sm">
                          {`
  - Title
  - Description
  - Version
  - Provider
  - Licence details (e.g CC-BY-NC)
  - EFG Class Names (list, 1-110)
  - EFG Class Palette (list, 1-110)
  - EFG Class values (list: Code Schema)
  - Biome Class Names
  - Biome Class Palette
  - Biome Class Values
  - Realm Class Names
  - Realm Class Palette
  - Realm Class Values
  - Date_range
  - Last_updated`}
                        </Markdown>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Tags</TableCell>
                      <TableCell>Ecosystems, Land Cover, Global Ecosystem Typology.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Data specification</h4>
              <p className="text-lg">Data can be accessed here.</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">More info</h4>
              <p className="text-lg">Document</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Caution notes</h4>
              <p className="text-lg">
                While the gea_basemap is a powerful data product for depicting the distribution of
                ecosystems worldwide, users should be aware of the following issues:
              </p>
              <Markdown className="prose prose-lg">
                {`-   **Data Updates**: The basemap is continuously updated. Users should always verify that they are working with the latest version to ensure currency.

-   **Ecosystem Classifications**: The crosswalking process involves expert interpretation of different map classification schemes. While a variety of controls are included in the development approach to minimise classification errors, users should familiarise themselves with source data classes and the IUCN Globale Ecosystem Typology classes. We recommend propagating source class descriptions in any downstream use of the geo_basemap data.

-   **Use in Specific Contexts**: The gea_basemap is designed for global and regional analyses. For highly localized studies, the use of source datasets might be required.

-   **Resolution Limitations**: The data is provided at a 100-meter per pixel resolution. For applications requiring finer spatial detail, we recommend using the source datasets.

-   **Temporal Issues**. Any spatial dataset that integrates multiple inputs is likely to represent features over different time periods. The geo_basemap development approach limits this by rejecting datasets that represent changing ecosystems (such as those subject to deforestation or ongoing losses and gains) developed more than 2 decades ago. The data specification includes a data layer depicting the integer year that a source dataset was mapped, and we recommend the use of this layer to mask out areas where the data freshness of source data does not meet the needs of an intended analysis.

-   **Standalone Ecosystem Functional Groups**. The specification of the geo_basemap aims to develop a single raster layer representing ecosystem functional groups worldwide. However, several ecosystem functional groups in the IUCN Global Ecosystem Typology are able to co-occur in a single location on Earth, when mapped in 2 dimensions from above. To address this issue, the geo_basemap depicts ecosystems that are on the ground or seafloor. A set of standalone layers for ecosystems which can co-occur with those on the ground or seafloor are provided and should be analysed together with the geo_basemap layer. Examples of these are cave systems, which can occur underneath terrestrial or marine ecosystems, or pelagic systems, which occur in layers above seafloor ecosystems.`}
              </Markdown>
              <p className="text-lg">A detailed list of known issues can be found [link]</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">How to Cite the Data</h4>
              <p className="text-lg">
                When using the Global Ecosystems Atlas Basemap in any publication, report, or
                project, please cite it as follows:
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Citation Format</h4>
              <p className="text-lg">
                Global Ecosystem Atlas Basemap. Version [Version Number]. [Year]. Developed by
                [Developer Name or Organization]. Available from: [URL]. Accessed on [Date].
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
