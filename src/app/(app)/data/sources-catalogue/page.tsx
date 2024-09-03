import { Metadata } from "next";

import { SourcesCatalogue } from "@/containers/data/sources-catalogue";

export const metadata: Metadata = {
  title: "Sources Catalogue | Global Ecosystems Atlas",
  description: "Sources Catalogue Global Ecosystems Atlas description",
};

export default async function SourcesCataloguePage() {
  return (
    <>
      <SourcesCatalogue />
    </>
  );
}
