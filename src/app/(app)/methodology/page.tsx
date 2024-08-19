import { Metadata } from "next";

import { redirect, RedirectType } from "next/navigation";

export const metadata: Metadata = {
  title: "Methodology | Global Ecosystems Atlas",
  description: "Methodology Global Ecosystems Atlas description",
};

export default async function Methodology() {
  redirect("/coming-soon", RedirectType.replace);
}
