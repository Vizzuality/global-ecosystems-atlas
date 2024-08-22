import Image from "next/image";

import resolveConfig from "tailwindcss/resolveConfig";

import { TextReveal } from "@/components/animations/text-reveal";
import { TranslateY } from "@/components/animations/translateY";
import { Grid } from "@/components/ui/grid";
import { H1 } from "@/components/ui/h1";
import { Section } from "@/components/ui/section";

import tailwindConfig from "@/../tailwind.config";

export default function AboutUsHero() {
  const fullConfig = resolveConfig(tailwindConfig);

  return (
    <Section hero className="min-h-0 bg-navy-700 lg:pb-56">
      <div className="container">
        <Grid>
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="space-y-10 lg:space-y-16">
              <H1 className="text-white">What is the Global Ecosystems Atlas?</H1>
              <div className="space-y-8 text-white">
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.white}>
                    Convened by the Group on Earth Observations (GEO), the Global Ecosystems Atlas
                    is a <strong>cross-sector collaborative initiative</strong> to map and monitor
                    the world&apos;s ecosystems, providing dynamic visualisations of natural
                    environments.
                  </TextReveal>
                </p>
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.white}>
                    The Atlas will <strong>empower decision-makers</strong> with insights for
                    sustainable development and a deeper understanding of Earth&apos;s ecological
                    diversity. It will provide everything you need to know about the distribution,
                    change, condition and risks of ecosystems worldwide.
                  </TextReveal>
                </p>
                <p className="text-xl">
                  <TextReveal color={fullConfig.theme.colors.white}>
                    The Atlas will combine existing <strong>high-quality ecosystem maps</strong> and
                    new ecosystem maps to fill data gaps. By enabling collaboration across sectors
                    and countries, the Atlas will generate knowledge and insights on ecosystems,
                    help improve and scale existing initiatives, and enhance consistency and
                    coherence in stock-taking, reporting, and decision-making.
                  </TextReveal>
                </p>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="z-10 aspect-[896/1100] overflow-hidden lg:absolute lg:left-0 lg:top-24">
              <TranslateY
                className="scale-125"
                transformOptions={{
                  from: [0, 1],
                  to: ["0%", `-${(1 - 1100 / 1344) * 100}%`],
                }}
              >
                <Image
                  src="/about/hero.png"
                  alt="Global Ecosystems Atlas"
                  className="w-full max-w-none"
                  width={896}
                  height={1344}
                />
              </TranslateY>
            </div>
          </div>
        </Grid>
      </div>
    </Section>
  );
}
