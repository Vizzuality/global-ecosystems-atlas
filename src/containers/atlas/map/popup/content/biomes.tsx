"use client";

import { useAtomValue } from "jotai";

import { usePointCustomTilerPointGet } from "@/types/generated/custom-tiler";

import { popupAtom } from "@/app/(atlas)/atlas/store";

import { Skeleton } from "@/components/ui/skeleton";

export const BiomesPopupLoading = () => {
  return (
    <div className="space-y-3 divide-y divide-navy-100">
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Biome</h3>
        <Skeleton className="h-5 max-w-[75%]" />
      </header>

      <div className="pt-3">
        <Skeleton className="h-40" />
      </div>
    </div>
  );
};

export const BiomesPopupError = () => {
  return (
    <div className="space-y-3 divide-y divide-navy-100">
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Biome</h3>
        <h2 className="text-sm font-bold leading-5">Error</h2>
      </header>

      <div className="pt-3">
        <div className="flex h-40 items-center justify-center">
          <p className="max-w-36 text-center text-xs leading-snug">
            An error occurred while fetching the data.
          </p>
        </div>
      </div>
    </div>
  );
};

export const BiomesPopup = () => {
  const popup = useAtomValue(popupAtom);
  const { data, isFetching, isError } = usePointCustomTilerPointGet(
    {
      lat: popup?.lat ?? 0,
      lon: popup?.lng ?? 0,
      asset: "biomes",
    },
    {
      query: {
        enabled: !!popup,
        retry: false,
      },
    },
  );

  if (isFetching) return <BiomesPopupLoading />;

  if (isError) return <BiomesPopupError />;

  return (
    <div className="space-y-3 divide-y divide-navy-100">
      <header className="space-y-0.5">
        <h3 className="text-2xs font-medium uppercase tracking-wider">Biome</h3>
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
