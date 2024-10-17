import Image, { ImageProps } from "next/image";

import { cn } from "@/lib/utils";

import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

const PartnerItem = ({
  src,
  alt,
  width,
  height,
  href,
  className,
}: ImageProps & { href: string }) => (
  <li
    className={cn({
      // "col-span-6 flex h-24 items-center justify-center md:col-span-4 lg:col-span-2": true,
      "flex h-24 w-full items-center justify-center": true,
      [`${className}`]: className,
    })}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt={alt} width={width} height={height} />
    </a>
  </li>
);

export default function AboutUsPartners() {
  return (
    <Section>
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-6 lg:col-start-2">
            <div className="space-y-6 lg:space-y-9">
              <H2>Our Partners</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  The Atlas thrives through collaboration with science-based conservation
                  organisations, academia, data and technology providers, and governmental bodies.
                  These partnerships are essential for gathering data, sharing expertise and
                  promoting the Atlas platform.
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <div className="space-y-28">
          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase lg:col-span-10 lg:col-start-2">
              Supported by
            </h3>
            <ul className="col-span-12 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-3 lg:col-span-10 lg:col-start-2 lg:grid-cols-4 xl:grid-cols-5">
              <PartnerItem
                src="/partners/un-cbd.webp"
                alt="Convention on Biological Diversity"
                width={158}
                height={61}
                href="https://www.cbd.int/"
              />
              <PartnerItem
                src="/partners/ramsar.webp"
                alt="Ramsar"
                width={82}
                height={110}
                href="https://www.ramsar.org/"
              />

              <PartnerItem
                src="/partners/resilience-frontiers.webp"
                alt="Resilience frontiers"
                width={168}
                height={60}
                href="https://resiliencefrontiers.org/"
              />

              <PartnerItem
                src="/partners/unccd.webp"
                alt="United Nations - Convention to Combat Desertification"
                width={155}
                height={43}
                href="https://www.unccd.int/"
              />

              <PartnerItem
                src="/partners/unfccc.webp"
                alt="United Nations - Framework Convention on Climate Change"
                width={179}
                height={40}
                href="https://unfccc.int/"
              />
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase lg:col-span-10 lg:col-start-2">
              FUNDED BY
            </h3>
            <ul className="col-span-12 grid grid-cols-2 gap-x-2 gap-y-5 md:grid-cols-3 lg:col-span-10 lg:col-start-2 lg:grid-cols-4 xl:grid-cols-5">
              <PartnerItem
                src="/partners/defra.webp"
                alt="Department for Environment Food & Rural Affairs"
                width={143}
                height={74}
                href="https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs"
              />

              <PartnerItem
                src="/partners/unep.webp"
                alt="United Nations - Environment programme"
                width={121}
                height={86}
                href="https://www.unep.org/"
              />
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase lg:col-span-10 lg:col-start-2">
              In partnership with
            </h3>
            <ul className="col-span-12 grid grid-cols-2 gap-x-2 gap-y-24 md:grid-cols-3 lg:col-span-10 lg:col-start-2 lg:grid-cols-4 xl:grid-cols-5">
              <div className="col-span-2 flex gap-x-4 divide-x">
                <PartnerItem
                  src="/partners/center-for-ecosystem-science.webp"
                  alt="Centre for Ecosystem Science"
                  width={135}
                  height={67}
                  href="https://www.unsw.edu.au/research/ecosystem"
                />
                <PartnerItem
                  src="/partners/unsw.webp"
                  alt="UNSW"
                  width={89}
                  height={103}
                  href="https://www.unsw.edu.au/"
                />
              </div>

              <PartnerItem
                src="/partners/esri.webp"
                alt="Esri"
                width={150}
                height={112}
                href="https://www.esri.com/en-us/home"
              />

              <PartnerItem
                src="/partners/gbif.webp"
                alt="GBIF"
                width={126}
                height={51}
                href="https://www.gbif.org/"
              />

              <PartnerItem
                src="/partners/iucn.webp"
                alt="IUCN"
                width={65}
                height={62}
                href="https://iucn.org/"
              />

              <div className="col-span-2 flex gap-x-4 divide-x">
                <PartnerItem
                  src="/partners/gel-jcu.webp"
                  alt="James Cook University"
                  width={5063}
                  height={1163}
                  href="https://www.jcu.edu.au/"
                />
              </div>

              <PartnerItem
                src="/partners/nature-positive-initiative.webp"
                alt="Nature positive initiative"
                width={153}
                height={84}
                href="https://www.naturepositive.org/"
              />

              <PartnerItem
                src="/partners/planet.webp"
                alt="Planet"
                width={127}
                height={63}
                href="https://www.planet.com/"
              />

              <PartnerItem
                src="/partners/seea.webp"
                alt="System of Environmental Economic Accounting"
                width={161}
                height={70}
                href="https://seea.un.org/"
              />

              <PartnerItem
                src="/partners/uom.webp"
                alt="The University of Melbourne"
                width={114}
                height={114}
                href="https://www.unimelb.edu.au/"
              />

              <PartnerItem
                src="/partners/tnfd.webp"
                alt="TNFD"
                width={103}
                height={102}
                href="https://tnfd.global/"
              />

              <PartnerItem
                src="/partners/unep-wcmc.webp"
                alt="UNEP - WCMC"
                width={179}
                height={87}
                href="https://www.unep-wcmc.org/en"
              />

              <PartnerItem
                src="/partners/usgs.webp"
                alt="USGS"
                width={104}
                height={104}
                href="https://www.usgs.gov/"
              />

              <PartnerItem
                src="/partners/villars-institute.webp"
                alt="Villars institute"
                width={138}
                height={40}
                href="https://villarsinstitute.org/"
              />

              <PartnerItem
                src="/partners/walderwyss.webp"
                alt="Walderwyss"
                width={170}
                height={32}
                href="https://www.walderwyss.com/en"
              />
            </ul>
          </Grid>
        </div>
      </div>
    </Section>
  );
}
