import Image from "next/image";

import { SAMLegendMobile } from "@/containers/stories/south-africa-mozambique/mobile-legend";
import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

export const SAMInnovativeMozambique = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <p className="text-xl">
        <strong>Mozambique</strong>, more recently, has developed national ecosystem maps, building
        on initial work undertaken in the 1950s and 60s and involving a dedicated working group of
        Mozambican experts. Collaboration with South Africa enhanced these efforts. The maps are
        vital tools in determining the state of ecosystems and prioritising areas for conservation
        and restoration.
      </p>
      <p className="text-xl">
        Until recently, there was no global framework to link these national efforts with the rest
        of the world. This changed in 2020 when the International Union for the Conservation of
        Nature (IUCN) adopted the{" "}
        <a
          href="https://global-ecosystems.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Global Ecosystem Typology
        </a>
        —the first global framework for classifying ecosystems across all realms: terrestrial,
        freshwater and marine.
      </p>
      <div className="relative -mx-4 mt-5 block space-y-1 sm:mx-auto xl:hidden">
        <SAMLegendMobile legends={STEPS[2].legend} />
        <Image src="/sam/3.webp" alt="Mozambique" width={666} height={666} />
      </div>
    </section>
  );
};
