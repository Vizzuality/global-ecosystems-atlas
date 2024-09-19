"use client";

import { useCallback, useState } from "react";

import { COUNTRIES } from "@/lib/countries";

import { useSyncCountry } from "@/app/(atlas)/atlas/store";

import { Search } from "@/components/ui/search";

type Option = {
  label: string;
  value: string;
  key: string;
};

export const AtlasSearch = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [, setCountry] = useSyncCountry();

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
        setCountry(null);
        return;
      }

      setSearch(value.label);
      setOpen(false);
      setCountry(value.value);
    },
    [setCountry],
  );

  return (
    <Search
      value={search}
      open={open}
      options={COUNTRIES.map((c) => ({
        label: c.name,
        value: c.iso3,
        key: c.iso3,
      }))}
      placeholder="Start searching..."
      isFetched={true}
      isFetching={false}
      onChange={handleSearch}
      onSelect={handleSelect}
    />
  );
};
