"use client";

import { useMemo } from "react";

import { useAtomValue } from "jotai";

import { usePointCustomTilerPointGet } from "@/types/generated/custom-tiler";
import { HTTPValidationError } from "@/types/generated/strapi.schemas";

import { popupAtom } from "@/app/(atlas)/atlas/store";

import { Skeleton } from "@/components/ui/skeleton";

import { ErrorType } from "@/services/api";

export const RealmsPopupLoading = () => {
  return (
    <div className="space-y-3 divide-y divide-navy-100">
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Realm</h3>
        <Skeleton className="h-5 max-w-[75%]" />
      </header>

      <div className="pt-3">
        <Skeleton className="h-40" />
      </div>
    </div>
  );
};

export const RealmsPopupError = ({ error }: { error: ErrorType<HTTPValidationError> | null }) => {
  const MESSAGE = useMemo(() => {
    if (error?.status === 400) {
      return {
        title: "Not found",
        message: "No data found for this location.",
      };
    }

    return {
      title: "Error",
      message: "An error occurred while fetching the data.",
    };
  }, [error]);

  return (
    <div className="space-y-3 divide-y divide-navy-100">
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Realm</h3>
        <h2 className="text-sm font-bold leading-5">{MESSAGE.title}</h2>
      </header>

      <div className="pt-3">
        <div className="flex h-40 items-center justify-center">
          <p className="max-w-36 text-center text-xs leading-snug">{MESSAGE.message}</p>
        </div>
      </div>
    </div>
  );
};

export const RealmsPopup = () => {
  const popup = useAtomValue(popupAtom);
  const { data, isFetching, isError, error } = usePointCustomTilerPointGet(
    {
      lat: popup?.lat ?? 0,
      lon: popup?.lng ?? 0,
      asset: "realms",
    },
    {
      query: {
        enabled: !!popup,
        retry: false,
      },
    },
  );

  if (isFetching) return <RealmsPopupLoading />;

  if (isError) return <RealmsPopupError error={error} />;

  return (
    <div
      className="space-y-3 divide-y divide-navy-100"
      style={{
        transform: "translateZ(0px)",
        backfaceVisibility: "hidden",
      }}
    >
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Realm</h3>
        <h2 className="text-sm font-bold leading-5">{data?.label}</h2>
      </header>
      {data?.source_datasets?.map((dataset) => (
        <div className="pt-3" key={dataset.label}>
          <ul className="space-y-2">
            <li>
              <h4 className="text-xs font-bold tracking-wide">Source dataset</h4>
              <p className="text-xs leading-snug">{dataset.label}</p>
            </li>
            <li>
              <h4 className="text-xs font-bold tracking-wide">Map class in source dataset</h4>
              <p className="text-xs leading-snug">{dataset.map_class_name}</p>
            </li>
            <li>
              <h4 className="text-xs font-bold tracking-wide">Sources agreement</h4>
              <p className="text-xs leading-snug">{data.sources_agreement}</p>
            </li>
            <li>
              <h4 className="text-xs font-bold tracking-wide">
                Spatial resolution in source dataset
              </h4>
              <p className="text-xs leading-snug">{dataset.spatial_resolution}m</p>
            </li>
            <li>
              <h4 className="text-xs font-bold tracking-wide">Year of publication</h4>
              <p className="text-xs leading-snug">{dataset.year}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
