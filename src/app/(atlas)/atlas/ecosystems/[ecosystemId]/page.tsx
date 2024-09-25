import { Metadata } from "next";

import Link from "next/link";

import { FiChevronLeft } from "react-icons/fi";

import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

export const metadata: Metadata = {
  title: "Atlas Ecosysytems Detail | Global Ecosystems Atlas",
  description: "Atlas Ecosysytems Detail | Global Ecosystems Atlas description",
};

export default function AtlasEcosysytemsDetailPage({
  params: { ecosystemId },
}: {
  params: { ecosystemId: string };
}) {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>
          <Link href="/atlas/ecosystems" className="flex gap-2">
            <FiChevronLeft className="mt-px h-5 w-5" /> List view of Ecosystem Groups
          </Link>
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>{ecosystemId}</AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
