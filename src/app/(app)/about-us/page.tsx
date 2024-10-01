import { Metadata } from "next";

import AboutUsData from "@/containers/about-us/data";
import AboutUsHero from "@/containers/about-us/hero";
import AboutUsPartners from "@/containers/about-us/partners";
import AboutUsVision from "@/containers/about-us/vision";

export const metadata: Metadata = {
  title: "About us | Global Ecosystems Atlas",
  description:
    "Learn about the Global Ecosystems Atlas, our mission to enhance understanding of Earth's ecosystems, and our commitment to biodiversity and conservation",
};

export default async function AboutUs() {
  return (
    <>
      <AboutUsHero />
      <AboutUsVision />
      <AboutUsPartners />
      <AboutUsData />
    </>
  );
}
