import { Metadata } from "next";

import HomeHero from "@/containers/home/hero";

export const metadata: Metadata = {
  title: "Global Ecosystems Atlas",
  description: "Global Ecosystems Atlas description",
};

export default function Home() {
  return (
    <>
      <HomeHero />
    </>
  );
}
