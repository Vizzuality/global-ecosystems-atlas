"use client";
import { PropsWithChildren, Suspense } from "react";

import { LayoutGroup } from "framer-motion";
import { useAtom } from "jotai";

import { mobileStateAtom } from "@/app/(atlas)/atlas/store";

import { AtlasHero } from "@/containers/atlas/hero";
import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";
import { AtlasTour } from "@/containers/atlas/tour";
import { Footer } from "@/containers/footer";
import { Header } from "@/containers/header";
import { Media } from "@/containers/media";
import { Newsletter } from "@/containers/newsletter";

import { Button } from "@/components/ui/button";

export const AtlasLayoutMobile = ({ children }: PropsWithChildren) => {
  const [mobileState, setMobileState] = useAtom(mobileStateAtom);

  return (
    <main className="flex min-h-dvh flex-col overflow-hidden">
      <Header />

      {mobileState !== "hero" && (
        <div className="container pb-4">
          <div className="flex justify-center gap-2">
            <Button
              size="sm"
              variant={mobileState === "map" ? "default" : "secondary"}
              onClick={() => setMobileState("map")}
            >
              <span>Map</span>
            </Button>
            <Button
              size="sm"
              variant={mobileState === "sidebar" ? "default" : "secondary"}
              onClick={() => setMobileState("sidebar")}
            >
              <span>Data</span>
            </Button>
          </div>
        </div>
      )}

      {mobileState === "hero" && (
        <>
          <AtlasHero />
          <Newsletter />
          <Footer />
        </>
      )}

      {mobileState === "map" && (
        <Suspense fallback={null}>
          <div className="flex grow flex-col">
            <AtlasMap />
          </div>
        </Suspense>
      )}

      {mobileState === "sidebar" && (
        <Suspense fallback={null}>
          <div className="flex h-full w-full">
            <LayoutGroup>
              <Suspense fallback={null}>
                <AtlasNav />
                <AtlasSidebar>{children}</AtlasSidebar>
              </Suspense>
            </LayoutGroup>
          </div>
        </Suspense>
      )}
    </main>
  );
};

export const AtlasLayoutDesktop = ({ children }: PropsWithChildren) => {
  return (
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
  );
};

export const AtlasLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Media lessThan="lg">
        <AtlasLayoutMobile>{children}</AtlasLayoutMobile>
      </Media>

      <Media greaterThanOrEqual="lg">
        <AtlasLayoutDesktop>{children}</AtlasLayoutDesktop>
      </Media>
    </>
  );
};
