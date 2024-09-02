import { Metadata } from "next";

import { HowToHero } from "@/containers/data/how-to/hero";
import { HowToImage } from "@/containers/data/how-to/image";
import { HowToUsetheData } from "@/containers/data/how-to/use-the-data";

export const metadata: Metadata = {
  title: "How to use the data | Global Ecosystems Atlas",
  description: "How to use the data Global Ecosystems Atlas description",
};

export default async function HowToUseTheDataPage() {
  return (
    <>
      <HowToHero />
      <HowToImage />
      <HowToUsetheData />
    </>
  );
}
