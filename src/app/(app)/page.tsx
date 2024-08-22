import { Metadata } from "next";

import HomeHero from "@/containers/home/hero";
import HomeVideo from "@/containers/home/video";
import HomeWho from "@/containers/home/who";
import HomeWhy from "@/containers/home/why";

export const metadata: Metadata = {
  title: "Global Ecosystems Atlas",
  description: "Global Ecosystems Atlas description",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeVideo />
      <HomeWhy />
      <HomeWho />
    </>
  );
}
