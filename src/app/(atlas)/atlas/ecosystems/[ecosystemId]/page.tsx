import { apiEcosystemsGet } from "@/types/generated/ecosystems";

import { AtlasEcosysytemsDetail } from "@/containers/atlas/ecosysytems/detail";
import { AtlasEcosysytemsDetailBack } from "@/containers/atlas/ecosysytems/detail/back";
import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export async function generateStaticParams() {
  const ecosystems = await apiEcosystemsGet();

  return ecosystems.data
    .filter((ecosystem) => ecosystem.efg_code !== "0")
    .map((ecosystem) => ({
      ecosystemId: `${ecosystem.efg_code}`,
    }));
}

export default function AtlasEcosysytemsDetailPage() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>
          <AtlasEcosysytemsDetailBack />
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <AtlasEcosysytemsDetail />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
