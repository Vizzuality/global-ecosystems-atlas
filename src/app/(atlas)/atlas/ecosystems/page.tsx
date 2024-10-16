import { AtlasEcosysytemsList } from "@/containers/atlas/ecosysytems/list";
import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export default function AtlasEcosysytemsListPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Ecosysytem functional groups</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <AtlasEcosysytemsList />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
