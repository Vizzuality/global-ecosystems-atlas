import { Metadata } from "next";

import { MethodologyCorrespondence } from "@/containers/data/methodology/correspondence";
import { MethodologyHero } from "@/containers/data/methodology/hero";
import { MethodologyImage } from "@/containers/data/methodology/image";
import { MethodologyMethods } from "@/containers/data/methodology/methods";
import { MethodologyQA } from "@/containers/data/methodology/qa";

export const metadata: Metadata = {
  title: "Data: Methodology | Global Ecosystems Atlas",
  description:
    "Explore how ecosystems are mapped, learn more about our methodology and how to use the data, browse our data sources, and find answers to your questions.",
};

export default async function Methodology() {
  return (
    <>
      <MethodologyHero />
      <MethodologyImage />
      <MethodologyCorrespondence />
      <MethodologyMethods />
      <MethodologyQA />
    </>
  );
}
