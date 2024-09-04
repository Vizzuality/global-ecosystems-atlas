"use client";

import { PropsWithChildren } from "react";

import { LayoutGroup } from "framer-motion";

import LayoutProviders from "@/app/(atlas)/atlas/layout-providers";

import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";

export default function AtlasLayout({ children }: PropsWithChildren) {
  return (
    <LayoutProviders>
      <main className="flex h-screen">
        <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full">
          <LayoutGroup>
            <AtlasNav />
            <AtlasSidebar>{children}</AtlasSidebar>
          </LayoutGroup>
        </div>
        <AtlasMap />
      </main>
    </LayoutProviders>
  );
}
