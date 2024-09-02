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
                        <Markdown className="prose prose-p:text-sm prose-li:text-sm">
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
                        <Markdown className="prose prose-p:text-sm prose-li:text-sm">
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
                        <Markdown className="prose prose-p:text-sm prose-li:text-sm">
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
          </div>
        </Grid>
      </div>
    </Section>
  );
};
