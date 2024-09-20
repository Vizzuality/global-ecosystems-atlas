import Image from "next/image";

import { TranslateY } from "@/components/animations/translateY";

export const MethodologyImage = () => {
  return (
    <div className="relative aspect-video max-h-[800px] overflow-hidden">
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
          src="/data/methodology.jpeg"
          alt="Methodology"
          fill
          className="max-w-none scale-150 object-cover"
        />
      </TranslateY>
    </div>
  );
};
