import { Metadata } from "next";

import StoriesHero from "@/containers/stories/hero";

export const metadata: Metadata = {
  title: "Stories | Global Ecosystems Atlas",
  description: "Stories Global Ecosystems Atlas description",
};

export default async function Stories() {
  return (
    <>
      <StoriesHero />
    </>
  );
}
