import { PropsWithChildren } from "react";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getApiEcosystemsGetQueryOptions } from "@/types/generated/ecosystems";
import { getApiLocationsGetQueryOptions } from "@/types/generated/locations";

import LayoutProviders from "@/app/(atlas)/atlas/layout-providers";

import { AtlasLayout } from "@/containers/atlas/layout";
export default async function AtlasLayoutRoot({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getApiLocationsGetQueryOptions());
  await queryClient.prefetchQuery(getApiEcosystemsGetQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutProviders>
        <AtlasLayout>{children}</AtlasLayout>
      </LayoutProviders>
    </HydrationBoundary>
  );
}
