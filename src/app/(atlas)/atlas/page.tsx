import { AtlasSearch } from "@/containers/atlas/search";
import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";
import { WidgetLocationList } from "@/containers/atlas/widgets";

export default async function AtlasPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>Search</AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <div className="space-y-6">
          <AtlasSearch />

          <WidgetLocationList />
        </div>
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
