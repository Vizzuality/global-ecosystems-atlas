import { FiCheckCircle } from "react-icons/fi";

import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

const QAs = [
  {
    title: "Spatial Processing",
    description:
      "The geo_basemap is developed with a fully scripted processing pipeline that ingests source data, transforms them into a common coordinate system (WGS 1984), aligns to a common spatial origin, and is downsampled to the required 100-meter pixel resolution of the geo_basemap data specification.",
  },
  {
    title: "Reclassification",
    description:
      "Each source dataset is reclassified using the correspondence tables described above (see Logical Mapping) and processed into the multiple data layers that represent 3 upper levels of the hierarchical IUCN Global Ecosystem Typology, resulting in a final set of GeoTIFFs where each pixel value corresponds to a specific ecosystem, biome and realm type.",
  },
  {
    title: "Quality Assurance",
    description:
      "Multiple layers of quality control are applied, including spatial accuracy checks, logical consistency tests, expert reviews and comparison with reference data. A set of QA data layers propogate information about the spatial resolution and period that the source data was produced, areas where there are data overlaps and processing steps of the geo_basemap processing pipeline.",
  },
];

export const MethodologyQA = () => {
  return (
    <Section>
      <div className="container space-y-20">
        <Grid>
          <div className="col-span-12 lg:col-span-3 lg:col-start-2">
            <H3>Data Processing and Quality Control</H3>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-6">
            <ul className="space-y-6">
              {QAs.map((qa) => (
                <li key={qa.title} className="flex gap-8 rounded-2xl border border-navy-700/10 p-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-50">
                    <FiCheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-navy-600">{qa.title}</h4>
                    <p className="text-sm font-medium text-navy-600">{qa.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
