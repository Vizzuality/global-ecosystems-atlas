import Image from "next/image";

import { H2 } from "@/components/ui/h2";

export const SAMHero = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <H2 size="sm">Mapping nature beyond borders: South Africa and Mozambique</H2>
      <p className="text-xl">
        South Africa and Mozambique, though neighbouring countries with shared ecosystems, have
        distinct histories, languages and conservation challenges.
      </p>
      <p className="text-xl">
        Both nations are home to a wide range of ecosystems, from savannas to coral reefs, featuring
        rich biodiversity, yet they face immense pressures from habitat loss, extraction of natural
        resources and climate change.
      </p>
      <p className="text-xl">
        This story explores how these countries are using ecosystem data to protect their natural
        heritage and how the Global Ecosystems Atlas is supporting that endeavour.
      </p>

      <div className="-mx-8 mt-5 block sm:mx-auto xl:hidden">
        <Image src="/sam/1.webp" alt="South Africa and Mozambique" width={666} height={666} />
      </div>
    </section>
  );
};
