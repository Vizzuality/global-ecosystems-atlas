import { Metadata } from "next";

import { HowToHero } from "@/containers/data/how-to/hero";
import { HowToImage } from "@/containers/data/how-to/image";
import { HowToUsetheData } from "@/containers/data/how-to/use-the-data";

export const metadata: Metadata = {
  title: "Data: How to use the data | Global Ecosystems Atlas",
  description:
    "Explore how ecosystems are mapped, learn more about our methodology and how to use the data, browse our data sources, and find answers to your questions.",
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
