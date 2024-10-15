"use client";
import { PropsWithChildren, Suspense, useEffect } from "react";

import { LayoutGroup } from "framer-motion";
import { usePreviousDifferent } from "rooks";

import { useSyncFilters, useSyncLocation } from "@/app/(atlas)/atlas/store";

import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";

export const AtlasLayout = ({ children }: PropsWithChildren) => {
  const [location] = useSyncLocation();
  const { reset } = useSyncFilters();
  const prevLocation = usePreviousDifferent(location);

  useEffect(() => {
    if (location !== prevLocation) {
      reset();
      // console.log("Location changed", location, prevLocation);
    }
  }, [location, prevLocation, reset]);

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
