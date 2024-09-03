import { FiCheckCircle, FiDatabase, FiGrid, FiMap } from "react-icons/fi";

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
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-6 lg:col-span-5 lg:col-start-2 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <FiDatabase className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Source Data Review</h4>
              <p className="text-sm text-navy-600">
                Each dataset is thoroughly reviewed to understand its classification system and how
                it relates to the IUCN Global Ecosystem Typology. In most cases, the GEO Ecosystem
                Atlas science team works with mapping teams to understand the provenance and intent
                of the data.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-6 lg:col-span-5 lg:col-start-7 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <FiMap className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Logical Mapping</h4>
              <p className="text-sm text-navy-600">
                Both short and long class descriptions of input datasets are recorded in GEO Atlas
                correspondence tables, and a logical mapping is developed to assign source data
                classifications into the corresponding Ecosystem Functional Groups (EFGs) of the
                IUCN framework. This may involve matching similar classes or creating composite
                classes from multiple source data categories. This process is typically conducted by
                the GEO Atlas science team with input from the authors of the IUCN Global Ecosystem
                Typology, or directly by the map developers themselves with guidance by the GEO
                Atlas and IUCN Global Ecosystem Typology science teams.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-6 lg:col-span-5 lg:col-start-2 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <FiCheckCircle className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Expert review</h4>
              <p className="text-sm text-navy-600">
                Each class correspondence decision is reviewed by a qualified expert from the GEO
                Atlas scientific committee and offered back to the source data developers for
                additional review and comment. The reclassified data is then validated to ensure
                that the crosswalking process accurately reflects the ecological characteristics
                intended by the IUCN Typology. This step may involve expert review and comparison
                with known ecosystem distributions.
              </p>
            </div>
          </div>
          <div className="col-span-12 space-y-8 rounded-lg bg-white p-6 lg:col-span-5 lg:col-start-7 lg:p-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-lightblue-100">
              <FiGrid className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-semibold">Technical Approach</h4>
              <p className="text-sm text-navy-600">
                The logical mapping is technically applied to the data using GIS tools within a
                broader data synthesis pipeline. The ecosystem data is reclassified, with each pixel
                or vector element assigned a value corresponding to a specific EFG.
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
};
