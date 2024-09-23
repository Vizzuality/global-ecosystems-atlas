import { Metadata } from "next";

import { AtlasFilters } from "@/containers/atlas/filters";
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
      <AtlasSidebarContainer>
        <AtlasFilters />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
