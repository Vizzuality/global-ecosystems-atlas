import { H2 } from "@/components/ui/h2";

export const SAMWhy1 = () => {
  return (
    <section className="flex min-h-dvh flex-col justify-center gap-8 py-24">
      <H2>Why is harmonized ecosystem mapping important? </H2>
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
    </section>
  );
};
