import { Suspense } from "react";

import { Metadata } from "next";

import { SAMSection1 } from "@/containers/stories/south-africa-mozambique/section-1";
import { SAMSection2 } from "@/containers/stories/south-africa-mozambique/section-2";
import { SAMSection3 } from "@/containers/stories/south-africa-mozambique/section-3";
import { SAMSection4 } from "@/containers/stories/south-africa-mozambique/section-4";

export const metadata: Metadata = {
  title: "Stories: South Africa and Mozambique | Global Ecosystems Atlas",
  description: "Stories: South Africa and Mozambique description",
};

export default async function StoriesSouthAfricaMozambiquePage() {
  return (
    <Suspense fallback={null}>
      <SAMSection1 />
      <SAMSection2 />
      <SAMSection3 />
      <SAMSection4 />
    </Suspense>
  );
}
