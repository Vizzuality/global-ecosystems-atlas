import { Metadata } from "next";

import { SAMSection1 } from "@/containers/stories/south-africa-mozambique";

export const metadata: Metadata = {
  title: "Stories: South Africa and Mozambique | Global Ecosystems Atlas",
  description: "Stories: South Africa and Mozambique description",
};

export default async function StoriesSouthAfricaMozambiquePage() {
  return (
    <>
      <SAMSection1 />
    </>
  );
}
