import Image, { ImageProps } from "next/image";

import resolveConfig from "tailwindcss/resolveConfig";

import { TextReveal } from "@/components/animations/text-reveal";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";
import { Section } from "@/components/ui/section";

import tailwindConfig from "@/../tailwind.config";

const PartnerItem = ({ src, alt, width, height }: ImageProps) => (
  <li className="col-span-6 flex h-24 items-center justify-center md:col-span-4 lg:col-span-2">
    <Image src={src} alt={alt} width={width} height={height} />
  </li>
);

export default function AboutUsPartners() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <Section>
      <div className="container space-y-16">
        <Grid>
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6 lg:space-y-9">
              <H2>Our Partners</H2>
              <div className="space-y-8">
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.navy[700]}>
                    The Atlas thrives through collaboration with science-based conservation
                    organisations, academia, data and technology providers, and governmental bodies.
                    These partnerships are essential for gathering data, sharing expertise and
                    promoting the Atlas platform.
                  </TextReveal>
                </p>
              </div>
            </div>
          </div>
        </Grid>

        <div className="space-y-28">
          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase">Supported by</h3>
            <ul className="col-span-12 grid grid-cols-12 gap-x-8 gap-y-5 lg:grid-cols-10">
              <PartnerItem
                src="/partners/un-cbd.png"
                alt="Convention on Biological Diversity"
                width={158}
                height={61}
              />
              <PartnerItem src="/partners/ramsar.png" alt="Ramsar" width={82} height={110} />

              <PartnerItem
                src="/partners/resilience-frontiers.png"
                alt="Resilience frontiers"
                width={168}
                height={60}
              />

              <PartnerItem
                src="/partners/unccd.png"
                alt="United Nations - Convention to Combat Desertification"
                width={155}
                height={43}
              />

              <PartnerItem
                src="/partners/unfccc.png"
                alt="United Nations - Framework Convention on Climate Change"
                width={179}
                height={40}
              />
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase">FUNDED BY</h3>
            <ul className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-5 lg:grid-cols-10">
              <PartnerItem
                src="/partners/defra.png"
                alt="Department for Environment Food & Rural Affairs"
                width={143}
                height={74}
              />

              <PartnerItem
                src="/partners/unep.png"
                alt="United Nations - Environment programme"
                width={121}
                height={86}
              />
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase">In partnership with</h3>
            <ul className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-5 lg:grid-cols-10">
              <PartnerItem
                src="/partners/center-for-ecosystem-science.png"
                alt="Centre for Ecosystem Science"
                width={135}
                height={67}
              />

              <PartnerItem src="/partners/esri.png" alt="Esri" width={150} height={112} />

              <PartnerItem src="/partners/gbif.png" alt="GBIF" width={126} height={51} />

              <PartnerItem src="/partners/iucn.png" alt="IUCN" width={65} height={62} />

              <PartnerItem
                src="/partners/jcu.png"
                alt="James Cook University"
                width={131}
                height={59}
              />

              <PartnerItem src="/partners/planet.png" alt="Planet" width={127} height={63} />

              <PartnerItem
                src="/partners/unep-wcmc.png"
                alt="UNEP - WCMC"
                width={179}
                height={87}
              />

              <PartnerItem src="/partners/unsw.png" alt="UNSW" width={89} height={103} />

              <PartnerItem src="/partners/usgs.png" alt="USGS" width={104} height={104} />

              <PartnerItem
                src="/partners/villars-institute.png"
                alt="Villars institute"
                width={138}
                height={40}
              />
            </ul>
          </Grid>
        </div>
      </div>
    </Section>
  );
}
