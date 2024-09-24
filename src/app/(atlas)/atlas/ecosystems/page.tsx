import { Metadata } from "next";

import { AtlasEcosysytemsList } from "@/containers/atlas/ecosysytems";
import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Ecosysytems List | Global Ecosystems Atlas",
  description: "Atlas Ecosysytems List | Global Ecosystems Atlas description",
};

export default function AtlasEcosysytemsListPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Ecosysytems list</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <AtlasEcosysytemsList />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
