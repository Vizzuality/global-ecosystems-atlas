import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Upload | Global Ecosystems Atlas",
  description: "Atlas Upload | Global Ecosystems Atlas description",
};

export default function AtlasUploadPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Upload area</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>Atlas upload page</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
