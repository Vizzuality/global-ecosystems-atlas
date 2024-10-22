import { Suspense } from "react";

import { Metadata } from "next";

import Image from "next/image";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import {
  getApiLocationsGetQueryOptions,
  getApiLocationsLocationGetQueryOptions,
  getApiLocationsLocationWidgetsWidgetIdGetQueryOptions,
} from "@/types/generated/locations";

import Loading from "@/app/(app)/stories/south-africa-mozambique/loading";

import { SAMSection1 } from "@/containers/stories/south-africa-mozambique/section-1";
import { SAMSection2 } from "@/containers/stories/south-africa-mozambique/section-2";
import { SAMSection3 } from "@/containers/stories/south-africa-mozambique/section-3";
import { SAMSection4 } from "@/containers/stories/south-africa-mozambique/section-4";
import { SAMSection5 } from "@/containers/stories/south-africa-mozambique/section-5";

export const metadata: Metadata = {
  title: "Stories: South Africa and Mozambique | Global Ecosystems Atlas",
  description: "Stories: South Africa and Mozambique description",
};

export default async function StoriesSouthAfricaMozambiquePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getApiLocationsGetQueryOptions());
  await queryClient.prefetchQuery(getApiLocationsLocationGetQueryOptions("GLOB"));
  await queryClient.prefetchQuery(getApiLocationsLocationGetQueryOptions("ZAF_224"));
  await queryClient.prefetchQuery(getApiLocationsLocationGetQueryOptions("MOZ_167"));

  await queryClient.prefetchQuery(
    getApiLocationsLocationWidgetsWidgetIdGetQueryOptions("ZAF_224", "current_status"),
  );
  await queryClient.prefetchQuery(
    getApiLocationsLocationWidgetsWidgetIdGetQueryOptions("MOZ_167", "current_status"),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <SAMSection1 />
        <SAMSection2 />
        <SAMSection3 />
        <SAMSection4 />
        <Image
          src="/sam/sam-footer.jpeg"
          alt="South Africa and Mozambique"
          width={2878}
          height={699}
          className="hidden xl:block"
        />
        <SAMSection5 />
      </Suspense>
    </HydrationBoundary>
  );
}
