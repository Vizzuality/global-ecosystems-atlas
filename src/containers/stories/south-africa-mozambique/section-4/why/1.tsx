import Image from "next/image";

import { SAMLegendMobile } from "@/containers/stories/south-africa-mozambique/mobile-legend";
import { STEPS } from "@/containers/stories/south-africa-mozambique/section-4/map";

import { H2 } from "@/components/ui/h2";

export const SAMWhy1 = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <H2 size="sm">Why is harmonised ecosystem mapping important?</H2>
      <h3 className="text-lg font-bold uppercase">
        We Can&apos;t conserve what we don&apos;t know
      </h3>

      <div className="space-y-4">
        <p className="text-lg">
          We know nature is under threat, but to protect it, we need to know what we have.
          Fundamental questions about the state of our ecosystems remain unanswered because existing
          data is inconsistent.
        </p>
        <p className="text-lg">
          While some ecosystems have been mapped, these efforts vary in detail and aren&apos;t
          harmonised across countries. Even with global indicators for ecosystem monitoring, there
          is no consistent way to compile them worldwide.
        </p>
      </div>

      <div className="-mx-4 mt-5 block sm:mx-auto xl:hidden">
        <SAMLegendMobile legends={STEPS[0].legend} />
        <Image src="/sam/4.webp" alt="EFGs" width={1266} height={1300} />
      </div>
    </section>
  );
};
