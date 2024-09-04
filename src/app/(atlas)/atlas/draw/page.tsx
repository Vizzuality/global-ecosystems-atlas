import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Draw | Global Ecosystems Atlas",
  description: "Atlas Draw | Global Ecosystems Atlas description",
};

export default function AtlasDrawPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Draw a polygon</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>Atlas draw page</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
