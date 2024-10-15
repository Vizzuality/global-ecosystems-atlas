"use client";
import { PropsWithChildren, Suspense } from "react";

import { LayoutGroup } from "framer-motion";

import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";

export const AtlasLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex h-dvh overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full">
        <LayoutGroup>
          <Suspense fallback={null}>
            <AtlasNav />
            <AtlasSidebar>{children}</AtlasSidebar>
          </Suspense>
        </LayoutGroup>
      </div>
      <Suspense fallback={null}>
        <AtlasMap />
      </Suspense>
    </main>
  );
};
