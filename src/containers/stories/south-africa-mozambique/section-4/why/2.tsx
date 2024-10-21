import Image from "next/image";

export const SAMWhy2 = () => {
  return (
    <section className="flex flex-col justify-center gap-4 xl:min-h-dvh xl:py-48">
      <h3 className="text-lg font-bold uppercase">Bridging data gaps globally so all can use</h3>

      <div className="space-y-4">
        <p className="text-lg">
          Not only does the Atlas harmonise detailed national mapping between countries that have
          ecosystem maps, it supports countries with limited or outdated ecosystem mapping by
          filling gaps in knowledge using advanced technologies and data sources.
        </p>
        <p className="text-lg">
          This allows all nations to monitor and manage their ecosystems, enabling global
          participation in biodiversity conservation and fostering a more accurate understanding of
          our planet&apos;s ecosystems.
        </p>
      </div>
      <div className="-mx-4 mt-5 block sm:mx-auto xl:hidden">
        <Image src="/sam/5.webp" alt="Country contribution status" width={1266} height={1146} />
      </div>
    </section>
  );
};
