import { Metadata } from "next";

import { MethodologyCorrespondence } from "@/containers/data/methodology/correspondence";
import { MethodologyHero } from "@/containers/data/methodology/hero";
import { MethodologyImage } from "@/containers/data/methodology/image";
import { MethodologyMethods } from "@/containers/data/methodology/methods";

export const metadata: Metadata = {
  title: "Methodology | Global Ecosystems Atlas",
  description: "Methodology Global Ecosystems Atlas description",
};

export default async function Methodology() {
  return (
    <>
      <MethodologyHero />
      <MethodologyImage />
      <MethodologyCorrespondence />
      <MethodologyMethods />
    </>
  );
}
