"use client";

import { PropsWithChildren } from "react";

import { LayoutGroup } from "framer-motion";

import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";

export default function AtlasLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen">
      <LayoutGroup>
        <AtlasNav />
        <AtlasSidebar>{children}</AtlasSidebar>
        <AtlasMap />
      </LayoutGroup>
    </main>
  );
}
