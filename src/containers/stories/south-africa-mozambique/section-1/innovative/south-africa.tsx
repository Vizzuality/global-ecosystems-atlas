import Image from "next/image";

import { SAMLegendMobile } from "@/containers/stories/south-africa-mozambique/mobile-legend";
import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

import { H2 } from "@/components/ui/h2";

export const SAMInnovativeSouthAfrica = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <H2 size="sm">Innovative ecosystem mapping</H2>
      <p className="text-xl">
        Both South Africa and Mozambique have made significant strides in mapping and classifying
        their ecosystems.
      </p>
      <p className="text-xl">
        <strong>South Africa&apos;s</strong> mapping efforts date back several decades, involving
        many ecologists and using a wide range of data sources, resulting in maps of around 1,000
        ecosystem types across all realms. This provides a wealth of data that has guided
        conservation action, spatial planning, environmental impact assessments and more.
      </p>
      <div className="relative -mx-4 mt-5 block space-y-1 sm:mx-auto xl:hidden">
        <SAMLegendMobile legends={STEPS[1].legend} />
        <Image src="/sam/2.webp" alt="South Africa" width={666} height={666} />
      </div>
    </section>
  );
};
