import { Metadata } from "next";

import { redirect, RedirectType } from "next/navigation";

export const metadata: Metadata = {
  title: "Atlas | Global Ecosystems Atlas",
  description: "Atlas Global Ecosystems Atlas description",
};

export default async function Atlas() {
  redirect("/coming-soon", RedirectType.replace);
}
