import { PiGridNine, PiSealCheck, PiMapTrifold, PiHardDrives } from "react-icons/pi";

import { Grid } from "@/components/ui/grid";
import { H3 } from "@/components/ui/h3";
import { Section } from "@/components/ui/section";

export const MethodologyMethods = () => {
  return (
    <Section className="bg-lightblue-50">
      <div className="container space-y-10">
        <Grid>
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <H3>Methods for evaluating correspondence to the IUCN Global Ecosystem Typology</H3>
          </div>
        </Grid>

        <Grid>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-4 lg:col-span-5 lg:col-start-2 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <PiHardDrives className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Source Data Review</h4>
              <p className="text-sm text-navy-600">
                Each source dataset is thoroughly reviewed to understand its classification system
                and how it relates to the Global Ecosystem Typology. In most cases, the Atlas
                science team works with the team who developed the source map to understand the
                provenance and intent of the data. Only datasets that are conceptually aligned to
                the Global Ecosystem Typology (i.e. that were developed to represent ecosystems),
                either as a whole or in part, proceed to formal evaluation for inclusion in the
                gea_synthesis data product.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-4 lg:col-span-5 lg:col-start-7 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <PiMapTrifold className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Logical Mapping</h4>
              <p className="text-sm text-navy-600">
                Cross-referencing is typically conducted by the source map developer or by the Atlas
                science team with extensive input and review by the source map developer. Firstly,
                short and long descriptions of source map classes are recorded in the Global
                Ecosystems Atlas cross-reference tables. Each class is systematically assigned to an
                ecosystem functional group through the analysis of a range of properties of the
                data. Some source data classes correspond directly with one ecosystem functional
                group, while other source classes may only partially correspond to an ecosystem
                functional group. Partial mismatches, where one map class from a source dataset is
                evaluated as potentially corresponding to more than one ecosystem functional group,
                may occur. In these cases, the cross-reference protocol uses expert advice on the
                most likely match as the final assignment in the synthesis map (&gt;50% match). The
                cross-reference tables, one per source dataset, enable each class in a source
                dataset to be assigned to its corresponding ecosystem functional group and are used
                as input into the geospatial data processing pipeline.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-4 lg:col-span-5 lg:col-start-2 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <PiSealCheck className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Expert review</h4>
              <p className="text-sm text-navy-600">
                Each cross-reference decision is reviewed by a qualified expert from the Atlas
                science team and offered back to the source data developers for additional review
                and comment.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-4 lg:col-span-5 lg:col-start-7 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <PiGridNine className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Technical Approach</h4>
              <p className="text-sm text-navy-600">
                For each dataset, cross-reference tables are formatted by a scripted processing
                pipeline into the text inputs necessary for implementing geospatial reclassification
                tools, which are then implemented directly within the broader data synthesis
                pipeline. A numerical system that specifies{" "}
                <a
                  href="https://github.com/geo-global-ecosystem-atlas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  numeric values
                </a>{" "}
                of each ecosystem functional group enables the processing of both vector and image
                data into the gea_synthesis data product, where each pixel or vector element is
                assigned a pixel value that corresponds to a specific ecosystem functional group.
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
