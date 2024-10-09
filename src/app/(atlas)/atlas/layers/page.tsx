import { AtlasLayers } from "@/containers/atlas/layers";
import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export default function AtlasLayersPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Layers</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <AtlasLayers />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
