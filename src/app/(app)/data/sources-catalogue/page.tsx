import { Metadata } from "next";

import { SourcesCatalogue } from "@/containers/data/sources-catalogue";

export const metadata: Metadata = {
  title: "Data: Sources Catalogue | Global Ecosystems Atlas",
  description:
    "Explore how ecosystems are mapped, learn more about our methodology and how to use the data, browse our data sources, and find answers to your questions.",
};

export default async function SourcesCataloguePage() {
  return (
    <>
      <SourcesCatalogue />
    </>
  );
}
