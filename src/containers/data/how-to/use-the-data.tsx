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
              The <strong>Global Ecosystems Atlas synthesis map</strong> is designed to be a
              versatile data resource for a wide range of applications, including ecosystem
              monitoring, conservation planning, policy development, and academic research. The
              synthesis data enables the development of ecosystem extent accounts using the System
              of Environmental-Economic Accounting (SEEA) Ecosystem Accounting standard, and serves
              as a fundamental basis from which change in extent can be measured. The data can be
              used to compile ecosystem-related indicators, including for the Global Biodiversity
              Framework. In some cases this requires analysing the gea_synthesis data product in
              relation to other relevant data, such as the World Database on Protected Areas or the
              IUCN Red List of Ecosystems database.
            </p>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 space-y-10 lg:col-span-7 lg:col-start-5">
            <div className="space-y-6">
              <h4 className="text-xl font-semibold">
                Data specification for the gea_synthesis data product
              </h4>

              <p className="text-lg">
                The gea_synthesis data product consists of 119 data layers, including synthesis
                layers, a data mask layer, binary layers and quality assurance layers. These are
                defined below:
              </p>

              <div className="prose prose-lg">
                <p className="text-lg">Synthesis layers:</p>

                <ul>
                  <li>
                    <strong>EFG_Type:</strong> a cloud-optimised geotiff where each pixel represents
                    occurrences of ecosystem functional groups (level 3) of the Global Ecosystem
                    Typology.
                  </li>
                  <li>
                    <strong>Biome_Type:</strong> a cloud-optimised geotiff where each pixel
                    represents occurrences of biomes (level 2) of the Global Ecosystem Typology.
                  </li>
                  <li>
                    <strong>Realm_Type:</strong> a cloud-optimised geotiff where each pixel
                    represents occurrences of realms (level 1) of the Global Ecosystem Typology.
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg">
                <p className="text-lg">Data masks:</p>

                <ul>
                  <li>
                    <strong>Data_Mask:</strong> a cloud-optimised geotiff that depicts pixels of the
                    gea_synthesis with valid data, no data (where data has yet to be obtained for
                    the synthesis product), and unresolved cross-references (pixels that were either
                    partially matched or not able to be cross-referenced to an ecosystem functional
                    group).
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg">
                <p className="text-lg">Quality assurance layers:</p>

                <ul>
                  <li>
                    <strong>Dataset_CellSize:</strong> a cloud-optimised geotiff where each pixel
                    represents the spatial resolution of the source datasets in metres.
                  </li>
                  <li>
                    <strong>Dataset_Year:</strong> a cloud-optimised geotiff where each pixel
                    represents the year that the source dataset served in the synthesis data was
                    produced.
                  </li>
                  <li>
                    <strong>Dataset_Count:</strong> a cloud-optimised geotiff where each pixel
                    represents the number of input source datasets for that location.
                  </li>
                  <li>
                    <strong>Dataset_ID:</strong> a cloud-optimised geotiff where each pixel
                    represents the corresponding input source dataset of each cell in the synthesis
                    layer.
                  </li>
                  <li>
                    <strong>EFG_Disagreement:</strong> a cloud-optimised geotiff where each pixel
                    represents the number of different ecosystem functional groups mapped in the
                    same cell by different source datasets.
                  </li>
                </ul>
              </div>

              <div className="prose prose-lg">
                <p className="text-lg">Binary data layers:</p>

                <ul>
                  <li>
                    <strong>
                      110 binary data layers representing each ecosystem functional group
                    </strong>{" "}
                    of the Global Ecosystem Typology. These include standalone layers, which are
                    ecosystem functional groups that naturally co-occur in the same coordinates as
                    other ecosystems but are not present in the Global_EFG_Type layer, such as
                    pelagic and subterranean ecosystems.
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                Further information regarding the full gea_synthesis data product is provided in the
                table below.
              </p>

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
                      <TableCell>Cloud-optimised GeoTIFF</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Spatial resolution</TableCell>
                      <TableCell>100m</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Spatial extent</TableCell>
                      <TableCell>Global</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Projection</TableCell>
                      <TableCell>WGS 84</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Minimum mapping unit</TableCell>
                      <TableCell>Variable, depending on source data</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Number of data layers</TableCell>
                      <TableCell>119</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Layer names</TableCell>
                      <TableCell>
                        <Markdown className="prose prose-sm">
                          {`
The gea_synthesis data product includes 119 layers that represent different aspects of the world's ecosystems and the information used to map them.

Synthesis layers:

-   Global_EFG_Type_100m_8bit_wgs84.tif (integer, 0-170)

-   Global_Biome_Type_100m_8bit_wgs84.tif (integer, 0-25)

-   Global_Realm_Type_100m_8bit_wgs84.tif (integer, 0-10)

Data masks:

-   Global_Data_Mask_100m_8bit_wgs84.tif (integer, 0-2)

Quality assurance layers:

-   Global_Dataset_CellSize_100m_8bit_wgs84.tif (numeric, 0-n)

-   Global_Dataset_Year_100m_8bit_wgs84.tif (integer, 1900-2024)

-   Global_Dataset_Count_100m_8bit_wgs84.tif (integer, 0-n)

-   Global_Dataset_ID_100m_8bit_wgs84.tif (integer, 0-n)

-   Global_EFG_Disagreement_100m_8bit_wgs84.tif (integer, 0-n)

Binary data layers:

-   110 binary data layers representing each ecosystem functional group of the Global Ecosystem Typology. Naming scheme following the convention Exxx.tif where xxx is the Global Ecosystems Atlas numeric code for each ecosystem functional group. Example 'E001.tif', 'E002.tif', 'E003.tif'..., 'E170.tif''. (integer, 0-1)
                          `}
                        </Markdown>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lg:text-nowrap">Tags</TableCell>
                      <TableCell>Ecosystems, Land Cover, Global Ecosystem Typology</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Data access</h4>
              <Markdown className="prose prose-lg">
                {`
The gea_synthesis data product will be made available from a variety of outlets. Data download functionality will be coming soon.
                `}
              </Markdown>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Notes of caution</h4>
              <Markdown className="prose prose-lg">
                {`
While the gea_synthesis is a powerful data product for depicting the distribution of ecosystems worldwide, users should be aware of the following issues:

-   **Data Updates**: The gea_synthesis data product will be regularly updated to reflect increasing coverage of the data. Users should always verify that they are working with the latest version and report which version was used for any analyses.

-   **Ecosystem classifications**: The cross-referencing process includes expert interpretation of different map classification schemes. While a variety of controls are included to minimise cross-referencing errors, users should familiarise themselves with descriptions of source data classes and the descriptions of the Global Ecosystem Typology.

-   **Use in specific contexts**: The gea_synthesis data product is designed for global, regional and national analyses. For localised applications, the use of the source data layer(s) may be more appropriate, which are frequently developed at higher levels (e.g. level 5 or 6) of the Global Ecosystem Typology. The Dataset_ID layer provides information about which data source(s) were used for each pixel’s assignment to an ecosystem functional group and should be used to locate the source data layer(s) for local applications.

-   **Resolution**: The synthesis data product is provided at a 100m pixel resolution. For applications requiring finer spatial detail, we recommend using the source datasets.

-   **Temporal issues**. Any spatial dataset that integrates multiple inputs is likely to represent features over different time periods. The development of the synthesis data product limits this by incorporating the most recent data available for ecosystems that may be subject to increases or decreases in extent over relatively short time periods. Furthermore, the gea_synthesis data specification includes a per-pixel data layer depicting the year that a source dataset represents. We recommend users make use of this data layer to mask areas where the data freshness of source data does not meet the needs of an intended analysis.

-   **Standalone data layers for ecosystem functional groups**. The specification of the gea_synthesis data product is a single raster layer representing ecosystem functional groups. However, several ecosystem functional groups in the Global Ecosystem Typology can legitimately co-occur in a single location on Earth. Examples of these ecosystem functional groups are cave systems, which can occur underneath terrestrial or marine ecosystems; or pelagic systems, which occur in the water column above seafloor ecosystems. To address this issue, the multi-class synthesis layers (EFG_Type, Biome_Type, Realm_Type) were designed to represent ecosystems that occur on the surface of the earth, on the ground in terrestrial environments or the sea floor in marine environments. To ensure representation of these layers the gea_synthesis data also includes 110 binary layers that separately map the distribution of the 110 ecosystem functional groups in the Global Ecosystem Typology. A subset of these (18 ecosystem functional groups) are those ecosystems that can co-occur with the synthesis map. We recommend for purposes of mapping and reporting ecosystem extent that these 18 layers are simultaneously analysed with the synthesis data layers. The list of standalone ecosystem functional groups is available on [GitHub](https://github.com/geo-global-ecosystem-atlas).`}
              </Markdown>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">Known issues</h4>
              <Markdown className="prose prose-lg">
                {`
Notwithstanding the rigorous development of the gea_synthesis data product, some
issues related to cross-references or processing remain. If you have any comments or
suggestions please fill out our [feedback form](https://forms.office.com/e/xCnX7HyVgy).
                `}
              </Markdown>
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-semibold">How to cite the data</h4>
              <Markdown className="prose prose-lg">
                {`
When using the **Global Ecosystems Atlas Synthesis Map** in any publication, report or project, please cite it as follows:

*Group on Earth Observations [Year] Global Ecosystems Atlas Synthesis Map version [Version Number]. Available from: https://globalecosystemsatlas.org/. Accessed on [Date].*

When citing the **Global Ecosystems Atlas Initiative**, please cite it as follows:

*Global Ecosystems Atlas [Year] Group on Earth Observations. Available from: https://globalecosystemsatlas.org/. Accessed on [Date].*

`}
              </Markdown>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
