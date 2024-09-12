"use client";

import { useCallback } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { useSyncBasemap } from "@/app/(atlas)/atlas/store";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";

export const BasemapItem = ({
  label,
  value,
  preview,
}: Pick<(typeof BASEMAPS)[number], "label" | "value" | "preview">) => {
  const [basemap, setBasemap] = useSyncBasemap();

  const handleToggleBasemap = useCallback(() => {
    setBasemap(value);
  }, [setBasemap, value]);

  return (
    <div className="flex w-full items-center justify-between space-x-8">
      <button className="group grow" type="button" onClick={handleToggleBasemap}>
        <div className="space-y-2">
          <div
            className={cn({
              "shrink-0 overflow-hidden rounded transition-opacity": true,
              "group-hover:opacity-75 group-active:outline group-active:outline-2 group-active:outline-navy-400":
                true,
              "outline outline-4 outline-navy-500 group-hover:opacity-100 group-active:outline-navy-500":
                value === basemap,
            })}
          >
            <Image src={preview} alt={label} width={96} height={64} className="w-full rounded" />
          </div>

          <span
            className={cn({
              "block text-sm font-medium transition-colors": true,
            })}
          >
            {label}
          </span>
        </div>
      </button>
    </div>
  );
};
