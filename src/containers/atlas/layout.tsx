"use client";
import { PropsWithChildren, Suspense } from "react";

import { LayoutGroup } from "framer-motion";

// import { AtlasHero } from "@/containers/atlas/hero";
import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";
import { AtlasTour } from "@/containers/atlas/tour";
import { Footer } from "@/containers/footer";
import { Header } from "@/containers/header";
import { Media } from "@/containers/media";
import { Newsletter } from "@/containers/newsletter";

export const AtlasLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Media lessThan="lg">
        <main className="flex min-h-dvh flex-col">
          <Header />
          <Suspense fallback={null}>
            <div className="h-dvh">
              <AtlasMap />
            </div>
          </Suspense>

          {/* <AtlasHero /> */}
          <Newsletter />
          <Footer />
        </main>
      </Media>

      <Media greaterThanOrEqual="lg">
        <main className="flex h-dvh overflow-hidden">
          <AtlasTour />
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
      </Media>
    </>
  );
};
