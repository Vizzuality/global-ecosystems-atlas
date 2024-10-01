import Link from "next/link";

import { FiChevronLeft } from "react-icons/fi";

import { apiEcosystemsGet } from "@/types/generated/ecosystems";

import { AtlasEcosysytemsDetail } from "@/containers/atlas/ecosysytems/detail";
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
          <Link href="/atlas/ecosystems" className="flex gap-2">
            <FiChevronLeft className="mt-px h-5 w-5" /> List view of Ecosystem Groups
          </Link>
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <AtlasEcosysytemsDetail />
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
