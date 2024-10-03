"use client";

import { PropsWithChildren } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

export const Widget = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const WidgetTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="text-xs font-semibold uppercase">{children}</h3>;
};

export const WidgetContent = ({ children }: PropsWithChildren) => {
  return <div className="mt-4">{children}</div>;
};

export const WidgetHeader = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export const WidgetLoader = ({
  children,
  isLoading,
  className,
}: PropsWithChildren<{ className?: string; isLoading: boolean }>) => {
  if (children && !isLoading) {
    return <>{children}</>;
  }

  return <Skeleton className={cn("h-48", className)} />;
};

export const WidgetError = ({ children, isError }: PropsWithChildren<{ isError: boolean }>) => {
  if (children && !isError) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center px-6">
      <Image src="/atlas/widgets/error.svg" alt="Error" width={333} height={140} />

      <div className="text-center text-navy-400">
        <h4 className="text-xs font-bold">Something went wrong</h4>
        <p className="text-xs font-medium">
          We&apos;re encountering some issues at the moment. <br /> Please try again later.
        </p>
      </div>
    </div>
  );
};

export const WidgetNoData = ({ children, isNoData }: PropsWithChildren<{ isNoData: boolean }>) => {
  if (children && !isNoData) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center px-6">
      <Image src="/atlas/widgets/no-data.svg" alt="Error" width={164} height={130} />

      <div className="text-center text-navy-400">
        <h4 className="text-xs font-bold">No results for this location</h4>
        <p className="text-xs font-medium">
          Feel free to adjust your search criteria on the filters or check back later.
        </p>
      </div>
    </div>
  );
};
