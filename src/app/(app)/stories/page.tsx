import { Metadata } from "next";

import StoriesHero from "@/containers/stories/hero";

export const metadata: Metadata = {
  title: "Stories | Global Ecosystems Atlas",
  description:
    "Discover how ecosystem insights are shaping conservation, guiding decisions, and driving change across the globe with our inspirational data stories",
};

export default async function Stories() {
  return (
    <>
      <StoriesHero />
    </>
  );
}
