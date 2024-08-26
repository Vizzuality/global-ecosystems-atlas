import { Metadata } from "next";

import HomeHero from "@/containers/home/hero";
import HomeStories from "@/containers/home/stories";
import HomeVideo from "@/containers/home/video";
import HomeWhat from "@/containers/home/what";
import HomeWhere from "@/containers/home/where";
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
      <HomeWhat />
      <HomeWhere />
      <HomeStories />
    </>
  );
}
