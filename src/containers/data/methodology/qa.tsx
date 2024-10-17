import { FiCheckCircle } from "react-icons/fi";

import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

const QAs = [
  {
    title: "Spatial Processing",
    description:
      "The gea_synthesis data product is developed with a fully scripted processing pipeline that ingests source data, projects to a common coordinate system, transforms to a common spatial data format (Cloud-Optimised Geotiff) and aligns to a common spatial origin. All source datasets are resampled to the 100m pixel resolution of the gea_synthesis data product.",
  },
  {
    title: "Reclassification",
    description:
      "Each source dataset is reclassified using the cross-reference tables described above (see logical mapping) and processed into the multiple data layers that represent the three upper levels of the hierarchical Global Ecosystem Typology (realms, biomes and ecosystem functional groups). The result is the set of data layers that make up the synthesis data product: a set of cloud-optimised GeoTIFFs where each pixel value corresponds to a specific ecosystem functional group, biome and realm.",
  },
  {
    title: "Quality Assurance",
    description:
      "Multiple layers of quality control are applied, including spatial accuracy checks, logical consistency tests, and expert reviews. A set of quality assurance data layers propagate per-pixel information about the source data, including the spatial resolution, time period of source data production, and areas where there are overlaps and/or disagreement among independently developed source datasets. A data mask depicts pixels with valid data, which are pixels where an ecosystem functional group has been identified and served in the synthesis product; no data, where data has yet to be obtained for the synthesis product; and unresolved cross-referencing outcomes, which are pixels that could only be partially matched (<50% membership analysis), were not able to be cross-referenced to an ecosystem functional group, or where further work is required to resolve uncertainties about their membership to an ecosystem functional group.",
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
                <li
                  key={qa.title}
                  className="flex flex-col gap-8 rounded-2xl border border-navy-700/10 p-6 lg:flex-row"
                >
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
