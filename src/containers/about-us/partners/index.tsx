import Image from "next/image";

import resolveConfig from "tailwindcss/resolveConfig";

import { TextReveal } from "@/components/animations/text-reveal";
import { Grid } from "@/components/ui/grid";
import { H2 } from "@/components/ui/h2";

import tailwindConfig from "@/../tailwind.config";

export default function AboutUsPartners() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <section className="py-36">
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
            <ul className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-5 lg:grid-cols-10">
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/un-cbd.png"
                  alt="Convention on Biological Diversity"
                  width={158}
                  height={61}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/ramsar.png" alt="Ramsar" width={82} height={110} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/resilience-frontiers.png"
                  alt="Resilience frontiers"
                  width={283}
                  height={156}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/unccd.png"
                  alt="United Nations - Convention to Combat Desertification"
                  width={155}
                  height={43}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/unfccc.png"
                  alt="United Nations - Framework Convention on Climate Change"
                  width={179}
                  height={40}
                />
              </li>
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase">FUNDED BY</h3>
            <ul className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-5 lg:grid-cols-10">
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/defra.png"
                  alt="Department for Environment Food & Rural Affairs"
                  width={143}
                  height={74}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/unep.png"
                  alt="United Nations - Environment programme"
                  width={121}
                  height={86}
                />
              </li>
            </ul>
          </Grid>

          <Grid>
            <h3 className="col-span-12 text-xs font-semibold uppercase">In partnership with</h3>
            <ul className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-5 lg:grid-cols-10">
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/center-for-ecosystem-science.png"
                  alt="Centre for Ecosystem Science"
                  width={135}
                  height={67}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/esri.png" alt="Esri" width={150} height={112} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/gbif.png" alt="GBIF" width={126} height={51} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/iucn.png" alt="IUCN" width={65} height={62} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/jcu.png"
                  alt="James Cook University"
                  width={131}
                  height={59}
                />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/planet.png" alt="Planet" width={127} height={63} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/unep-wcmc.png" alt="UNEP - WCMC" width={179} height={87} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/unsw.png" alt="UNSW" width={89} height={103} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image src="/partners/usgs.png" alt="USGS" width={104} height={104} />
              </li>
              <li className="col-span-6 flex items-center justify-center md:col-span-4 lg:col-span-2">
                <Image
                  src="/partners/villars-institute.png"
                  alt="Villars institute"
                  width={138}
                  height={40}
                />
              </li>
            </ul>
          </Grid>
        </div>
      </div>
    </section>
  );
}
