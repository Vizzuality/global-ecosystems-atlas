import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Filters | Global Ecosystems Atlas",
  description: "Atlas Filters | Global Ecosystems Atlas description",
};

export default function AtlasFiltersPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Filters</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>Atlas filters page</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
