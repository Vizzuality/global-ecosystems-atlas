import { Metadata } from "next";

import AboutUsHero from "@/containers/about-us/hero";

export const metadata: Metadata = {
  title: "About us | Global Ecosystems Atlas",
  description: "About us Global Ecosystems Atlas description",
};

export default async function AboutUs() {
  return (
    <>
      <AboutUsHero />
    </>
  );
}
