import {
  AtlasSidebarContainer,
  AtlasSidebarHeader,
  AtlasSidebarSection,
  AtlasSidebarTitle,
} from "@/containers/atlas/sidebar";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <AtlasSidebarSection>
      <AtlasSidebarHeader>
        <AtlasSidebarTitle>
          <Skeleton className="h-6 w-20" />
        </AtlasSidebarTitle>
      </AtlasSidebarHeader>
      <AtlasSidebarContainer>
        <div className="space-y-6">
          <div>
            <Skeleton className="h-20 w-full" />
          </div>
          <div className="flex gap-2">
            <div className="aspect-square w-1/2">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="aspect-square w-1/2">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
          <div className="flex h-96 flex-col gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-full w-full" />
          </div>
          <div className="flex h-96 flex-col gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      </AtlasSidebarContainer>
    </AtlasSidebarSection>
  );
}
