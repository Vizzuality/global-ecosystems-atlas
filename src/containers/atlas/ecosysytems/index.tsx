"use client";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AtlasEcosysytemsList = () => {
  const realmsData = useRealms();
  const biomesData = useBiomes();
  const ecosysytemsData = useEcosystems();

  return (
    <div>
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
            <TableRow key={e.name} className="w-full overflow-hidden">
              <TableCell className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pl-0 text-xs font-medium">
                {e.code} {e.name}
              </TableCell>
              <TableCell className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-xs font-medium">
                {biomesData?.find((biome) => biome.id === e.biome)?.name}
              </TableCell>
              <TableCell className="max-w-0 overflow-hidden text-ellipsis whitespace-nowrap p-2 pr-0 text-xs font-medium">
                {e.realms.map((realm) => realmsData?.find((r) => r.id === realm)?.name).join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
