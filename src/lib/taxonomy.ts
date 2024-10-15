import { groups } from "@visx/vendor/d3-array";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";
import { WidgetData } from "@/types/generated/strapi.schemas";

export const getRealmsFromEFGCode = (efgCode: string) => {
  // remove numbers and dots, then split by letters
  const realmIds = efgCode.replace(/[0-9.]/g, "");

  return realmIds;
};

export const getBiomeFromEFGCode = (efgCode: string) => {
  const realmIds = efgCode
    .replace(/[0-9.]/g, "")
    .split("")
    .sort();
  const biomeNumber = efgCode.replace(/[A-Z]/g, "").split(".")[0].split("").sort().join("");

  return `${realmIds.join("")}${biomeNumber}`;
};

export const getEFGSortedFromEFGCode = (efgCode: string) => {
  const realmIds = efgCode
    .replace(/[0-9.]/g, "")
    .split("")
    .sort();
  const biomeNumber = efgCode.replace(/[A-Z]/g, "").split(".")[0];
  const efgNumber = efgCode.replace(/[A-Z]/g, "").split(".")[1];

  return `${realmIds.join("")}${biomeNumber}.${efgNumber}`;
};

export const useGetGroups = (
  data: {
    id: string;
    realm:
      | {
          id: string;
          name: string;
          realms: string[];
        }
      | undefined;
    biome:
      | {
          id: string;
          name: string;
          biome: string;
          realms: string[];
        }
      | undefined;
    label: string;
  }[],
) => {
  const REALMS = useRealms({ location: "GLOB" });
  const BIOMES = useBiomes({ location: "GLOB" });

  return groups(data, (d) => d.realm?.realms.sort().join(""))
    .map(([key, value]) => {
      return {
        id: key,
        name: REALMS?.find((r) => r.id === key)?.name,
        items: groups(value, (d) => d.biome?.id)
          .map(([key, value]) => {
            const b = BIOMES?.find((b) => b.id === key);
            return {
              id: b?.id,
              name: b?.name,
              items: value.sort((a, b) => {
                return a.label.localeCompare(b.label);
              }),
            };
          })
          .sort((a, b) => {
            if (!a.id || !b.id) {
              return 0;
            }
            return a.id.localeCompare(b.id);
          }),
      };
    })
    .sort((a, b) => {
      if (!a.name || !b.name) {
        return 0;
      }
      return a.name.localeCompare(b.name);
    });
};

export const useEcosystems = ({ location }: { location?: string | null }) => {
  const { data: efgsData } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  return efgsData?.data
    .map((e) => {
      return {
        id: `${e.id}`,
        name: e.label,
        code: e.id,
        biome: getBiomeFromEFGCode(e.id!),
        realms: getRealmsFromEFGCode(e.id!),
      };
    })
    .toSorted((a, b) => {
      return a.name.localeCompare(b.name);
    });
};

export const useBiomes = ({ location }: { location?: string | null }) => {
  const { data: BIOMES } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_biomes",
  );

  const DATA = BIOMES?.data as (WidgetData & { biome_code: string })[] | undefined;

  return DATA?.map((b) => {
    return {
      id: getBiomeFromEFGCode(b.biome_code!),
      name: `${b.biome_code} ${b.label}`.trim(),
      biome: b.biome_code,
      realms: getRealmsFromEFGCode(b.biome_code!),
    };
  })?.toSorted((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const useRealms = ({ location }: { location?: string | null }) => {
  const { data: REALMS } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  const DATA = REALMS?.data as (WidgetData & { realm_code: string })[] | undefined;

  return DATA?.map((r) => {
    return {
      id: r.id,
      name: `${r.label}`,
      realms: r.realm_code,
    };
  });
};
