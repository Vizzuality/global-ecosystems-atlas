"use client";

import { useCallback, useState } from "react";

import { useSetAtom } from "jotai";

import { useApiLocationsGet } from "@/types/generated/locations";

import { bboxParser } from "@/app/(atlas)/atlas/parsers";
import { tmpBboxAtom, useSyncLocation } from "@/app/(atlas)/atlas/store";

import { Search } from "@/components/ui/search";

type Option = {
  label: string;
  value: string;
  key: string;
  bounds: number[];
};

export const AtlasSearch = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useSyncLocation();

  const setTmpBbox = useSetAtom(tmpBboxAtom);

  const { data: locationsData } = useApiLocationsGet();

  const handleSearch = useCallback(
    (value: string) => {
      setOpen(true);
      setSearch(value);
    },
    [setSearch],
  );

  const handleSelect = useCallback(
    (value: Option | null) => {
      if (!value) {
        setOpen(false);
        setSearch("");
        setLocation(null);
        setTmpBbox(bboxParser.defaultValue);
        return;
      }

      setSearch(value.label);
      setOpen(false);
      setLocation(value.value);
      setTmpBbox(value.bounds);
    },
    [setLocation, setTmpBbox],
  );

  return (
    <Search
      value={
        search || locationsData?.data.find((l) => l.location_code === location)?.gis_name || ""
      }
      open={open}
      options={
        locationsData?.data
          ?.filter(
            (value, index, self) => index === self.findIndex((t) => t.gis_name === value.gis_name),
          )
          .sort((a, b) => a.gis_name.localeCompare(b.gis_name))
          .map((l) => ({
            label: l.gis_name,
            value: l.location_code,
            key: l.location_code,
            bounds: l.bounds,
          })) || []
      }
      placeholder="Start searching..."
      onChange={handleSearch}
      onSelect={handleSelect}
    />
  );
};
