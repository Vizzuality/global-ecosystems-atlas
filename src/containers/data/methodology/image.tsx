import Image from "next/image";

import { TranslateY } from "@/components/animations/translateY";

export const MethodologyImage = () => {
  return (
    <div className="relative aspect-video max-h-[400px] overflow-hidden 2xl:max-h-[544px]">
      <TranslateY
        className="h-full w-full"
        scrollOptions={{
          offset: ["0 1", "1 0"],
        }}
        transformOptions={{
          from: [0, 1],
          to: ["-25%", `0%`],
        }}
      >
        <Image
          src="/data/methodology.avif"
          alt="Methodology"
          fill
          className="max-w-none scale-150 object-cover"
          priority
        />
      </TranslateY>
    </div>
  );
};
