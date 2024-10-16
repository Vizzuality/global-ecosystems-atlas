import Image from "next/image";

import { H2 } from "@/components/ui/h2";

export const SAMWhy1 = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <H2 size="sm">Why is harmonized ecosystem mapping important? </H2>
      <h3 className="text-lg font-bold uppercase">
        We Can&apos;t Conserve What We Don&apos;t Know
      </h3>

      <div className="space-y-4">
        <p className="text-lg">
          We know nature is under threat, but to protect it, we need to know what is where.
          Fundamental questions about the state of our ecosystems remain unanswered because existing
          data is inconsistent.
        </p>
        <p className="text-lg">
          While some ecosystems have been mapped, these efforts vary in detail and aren&apos;t
          harmonized across countries. Even with global indicators for ecosystem monitoring,
          there&apos;s no consistent way to apply them worldwide.
        </p>
      </div>

      <div className="-mx-8 mt-5 block sm:mx-auto xl:hidden">
        <Image src="/sam/3.webp" alt="Mozambique" width={666} height={666} />
      </div>
    </section>
  );
};
