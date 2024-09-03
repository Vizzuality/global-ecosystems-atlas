import { PropsWithChildren } from "react";

import { AtlasMap } from "@/containers/atlas/map";
import { AtlasNav } from "@/containers/atlas/nav";
import { AtlasSidebar } from "@/containers/atlas/sidebar";

export default function AtlasLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-screen">
      <AtlasNav />
      <AtlasSidebar>{children}</AtlasSidebar>
      <AtlasMap />
    </main>
  );
}
