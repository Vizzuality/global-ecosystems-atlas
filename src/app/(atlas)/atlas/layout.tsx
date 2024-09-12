import { PropsWithChildren } from "react";

import LayoutProviders from "@/app/(atlas)/atlas/layout-providers";

import { AtlasLayout } from "@/containers/atlas/layout";
export default function AtlasLayoutRoot({ children }: PropsWithChildren) {
  return (
    <LayoutProviders>
      <AtlasLayout>{children}</AtlasLayout>
    </LayoutProviders>
  );
}
