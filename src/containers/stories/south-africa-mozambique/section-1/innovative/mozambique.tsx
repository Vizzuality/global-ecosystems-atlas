import Image from "next/image";

export const SAMInnovativeMozambique = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <p className="text-xl">
        <strong>Mozambique</strong>, more recently, has developed national ecosystem maps, building
        on initial work undertaken in the 1950s and 60s and involving a dedicated working group of
        Mozambican experts. Collaboration with South Africa was an added benefit. These maps are
        vital tools in determining the state of ecosystems and prioritizing areas for conservation
        and restoration.
      </p>
      <p className="text-xl">
        Until recently, there was no global framework to link these national efforts with the rest
        of the world. This changed in 2020 when the International Union for the Conservation of
        Nature (IUCN) adopted the Global Ecosystem Typology—the first global framework for
        classifying ecosystems across all realms: terrestrial, freshwater, and marine.
      </p>
      <div className="-mx-8 mt-5 block sm:mx-auto xl:hidden">
        <Image src="/sam/3.webp" alt="Mozambique" width={666} height={666} />
      </div>
    </section>
  );
};
