import { Metadata } from "next";

import { redirect, RedirectType } from "next/navigation";

export const metadata: Metadata = {
  title: "About us | Global Ecosystems Atlas",
  description: "About us Global Ecosystems Atlas description",
};

export default async function AboutUs() {
  redirect("/coming-soon", RedirectType.replace);
}
