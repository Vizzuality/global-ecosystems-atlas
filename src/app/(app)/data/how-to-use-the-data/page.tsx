import { Metadata } from "next";

import { HowToHero } from "@/containers/data/how-to/hero";
import { HowToImage } from "@/containers/data/how-to/image";

export const metadata: Metadata = {
  title: "How to use the data | Global Ecosystems Atlas",
  description: "How to use the data Global Ecosystems Atlas description",
};

export default async function HowToUseTheData() {
  return (
    <>
      <HowToHero />
      <HowToImage />
    </>
  );
}
