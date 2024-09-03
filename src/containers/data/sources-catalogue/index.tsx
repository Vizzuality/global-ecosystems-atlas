import DATASETS from "@/lib/datasets.json";

import { Dataset } from "@/types/dataset";

import { DatasetTable } from "@/containers/data/sources-catalogue/table";
import { columns } from "@/containers/data/sources-catalogue/table/columns";

import { Grid } from "@/components/ui/grid";
import { Section } from "@/components/ui/section";

export async function SourcesCatalogue() {
  const DATA = DATASETS as Dataset[];

  return (
    <Section>
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <DatasetTable data={DATA} columns={columns} />
          </div>
        </Grid>
      </div>
    </Section>
  );
}
