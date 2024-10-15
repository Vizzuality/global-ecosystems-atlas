import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

export const LegendLoader = ({
  children,
  isLoading,
  className,
}: PropsWithChildren<{ className?: string; isLoading: boolean }>) => {
  if (children && !isLoading) {
    return <>{children}</>;
  }

  return <Skeleton className={cn("h-20", className)} />;
};
