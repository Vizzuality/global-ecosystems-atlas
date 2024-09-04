import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Layers | Global Ecosystems Atlas",
  description: "Atlas Layers | Global Ecosystems Atlas description",
};

export default function AtlasLayersPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Layers</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>Atlas layers page</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
