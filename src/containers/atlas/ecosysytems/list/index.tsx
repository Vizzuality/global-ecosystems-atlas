"use client";

import { useMemo } from "react";

import { useRouter } from "next/navigation";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";

import { useApiLocationsGet } from "@/types/generated/locations";
import { EcosystemEfgCode } from "@/types/generated/strapi.schemas";

import { useSyncLocation, useSyncSearchParams } from "@/app/(atlas)/atlas/store";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AtlasEcosysytemsList = () => {
  const [location] = useSyncLocation();
  const { data: locationsData } = useApiLocationsGet();

  const searchParams = useSyncSearchParams();

  const realmsData = useRealms({ location });
  const biomesData = useBiomes();
  const ecosysytemsData = useEcosystems();

  const { push } = useRouter();

  const LOCATION = locationsData?.data.find((l) => l.location_code === location);
  const ECOSYSTEMS = useMemo(() => {
    return ecosysytemsData?.filter((e) => {
      if (!LOCATION) {
        return true;
      }

      return LOCATION.efgs?.map((e) => e.efg_code).includes(e.code);
    });
  }, [ecosysytemsData, LOCATION]);

  const handleRowClick = (code: EcosystemEfgCode | undefined) => {
    push(`/atlas/ecosystems/${code}${searchParams}`);
  };

  return (
    <div className="space-y-5">
      {LOCATION && (
        <div className="text-sm font-medium">
          Location: <strong>{LOCATION.gis_name}</strong>
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="p-2 pl-0 font-bold">Ecosystem group</TableHead>
            <TableHead className="p-2 font-bold">Biome</TableHead>
            <TableHead className="p-2 pr-0 font-bold">Realms</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ECOSYSTEMS?.map((e) => (
            <TableRow
              key={e.name}
              className="w-full cursor-pointer overflow-hidden hover:bg-lightblue-50"
              onClick={() => handleRowClick(e.code)}
            >
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pl-0 text-xs font-medium"
                title={`${e.code} ${e.name}`}
              >
                {e.code} {e.name}
              </TableCell>
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-xs font-medium"
                title={biomesData?.find((biome) => biome.id === e.biome)?.name}
              >
                {biomesData?.find((biome) => biome.id === e.biome)?.name}
              </TableCell>
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pr-0 text-xs font-medium"
                title={e.realms
                  .map((realm) => realmsData?.find((r) => r.id === realm)?.name)
                  .join(", ")}
              >
                {e.realms.map((realm) => realmsData?.find((r) => r.id === realm)?.name).join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
