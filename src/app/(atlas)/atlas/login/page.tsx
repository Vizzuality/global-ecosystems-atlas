import { Metadata } from "next";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Log in | Global Ecosystems Atlas",
  description: "Atlas Log in | Global Ecosystems Atlas description",
};

export default function AtlasLoginPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Log in</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>Atlas log in page</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
