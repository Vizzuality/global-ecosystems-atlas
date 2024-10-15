"use client";

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

  const REALMS = useRealms({ location });
  const BIOMES = useBiomes({ location });
  const ecosysytemsData = useEcosystems({ location });

  const { push } = useRouter();

  const LOCATION = locationsData?.data.find((l) => l.location_code === location);

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
          {ecosysytemsData?.map((e) => (
            <TableRow
              key={e.name}
              className="w-full cursor-pointer overflow-hidden hover:bg-lightblue-50"
              onClick={() => handleRowClick(e.code)}
            >
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pl-0 text-xs font-medium"
                title={`${e.name}`}
              >
                {e.name}
              </TableCell>
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-xs font-medium"
                title={BIOMES?.find((biome) => biome.id === e.biome)?.name}
              >
                {BIOMES?.find((biome) => biome.id === e.biome)?.name}
              </TableCell>
              <TableCell
                className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pr-0 text-xs font-medium"
                title={REALMS?.find((r) => r.id === e.realms)?.name}
              >
                {REALMS?.find((r) => r.id === e.realms)?.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
