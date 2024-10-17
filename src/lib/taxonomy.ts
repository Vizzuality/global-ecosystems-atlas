import { groups } from "@visx/vendor/d3-array";

import { useApiLocationsLocationWidgetsWidgetIdGet } from "@/types/generated/locations";

export const REALM_ORDER = ["T", "S", "SF", "SM", "TF", "F", "FM", "M", "MT", "MFT"];

export const getRealmFromEFGCode = (efgCode: string) => {
  // remove numbers and dots, then split by letters
  if (!efgCode) return "";

  const realmIds = efgCode.replace(/[0-9.]/g, "");

  return realmIds;
};

export const getBiomeFromEFGCode = (efgCode: string) => {
  if (!efgCode) return "";

  const realmIds = efgCode
    .replace(/[0-9.]/g, "")
    .split("")
    .sort();
  const biomeNumber = efgCode.replace(/[A-Z]/g, "").split(".")[0].split("").sort().join("");

  return `${realmIds.join("")}${biomeNumber}`;
};

export const useGetGroups = (
  data: {
    id: string;
    realm:
      | {
          id: string;
          name: string;
        }
      | undefined;
    biome:
      | {
          id: string;
          name: string;
          biome: string;
          realm: string;
        }
      | undefined;
    label: string;
  }[],
) => {
  const REALMS = useRealms({ location: "GLOB" });
  const BIOMES = useBiomes({ location: "GLOB" });

  return groups(data, (d) => d.realm?.id)
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
    .toSorted((a, b) => {
      const aRealm = REALM_ORDER.indexOf(a.id ?? "");
      const bRealm = REALM_ORDER.indexOf(b.id ?? "");

      return aRealm - bRealm;
    });
};

export const useEcosystems = ({
  location,
  realms = [],
  biomes = [],
}: {
  location?: string | null;
  realms?: string[];
  biomes?: string[];
}) => {
  const { data: efgsData } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_efgs",
  );

  return efgsData?.data
    ?.map((e) => {
      return {
        id: `${e.id}`,
        name: e.label,
        code: e.id,
        biome: getBiomeFromEFGCode(e.id!),
        realm: getRealmFromEFGCode(e.id!),
      };
    })
    .toSorted((a, b) => {
      const aRealm = REALM_ORDER.indexOf(a.realm);
      const bRealm = REALM_ORDER.indexOf(b.realm);

      if (aRealm === bRealm) {
        return a.name.localeCompare(b.name);
      }

      return aRealm - bRealm;
    })
    .filter((e) => {
      if (!!biomes?.length) {
        return biomes?.includes(e.biome);
      }

      if (!!realms?.length) {
        return realms?.includes(e.realm);
      }

      return true;
    });
};

export const useEcosystemsIds = ({
  location,
  realms = [],
  biomes = [],
  ecosystems = [],
}: {
  location?: string | null;
  realms?: string[];
  biomes?: string[];
  ecosystems?: string[];
}) => {
  const es = useEcosystems({ location, realms, biomes });

  if (!!ecosystems.length) return ecosystems;

  if (realms.length === 0 && biomes.length === 0 && ecosystems.length === 0) {
    return [];
  }

  return es?.map((e) => e.id) ?? [];
};

export const useBiomes = ({
  location,
  realms = [],
}: {
  location?: string | null;
  realms?: string[];
}) => {
  const { data: BIOMES } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_biomes",
  );

  return BIOMES?.data
    ?.map((b) => {
      return {
        id: getBiomeFromEFGCode(b.id!),
        name: `${b.id} ${b.label}`.trim(),
        biome: b.id,
        realm: getRealmFromEFGCode(b.id!),
      };
    })
    ?.toSorted((a, b) => {
      const aRealm = REALM_ORDER.indexOf(a.realm);
      const bRealm = REALM_ORDER.indexOf(b.realm);

      if (aRealm === bRealm) {
        return a.name.localeCompare(b.name);
      }

      return aRealm - bRealm;
    })
    .filter((b) => {
      if (!!realms?.length) {
        return realms?.includes(b.realm);
      }

      return true;
    });
};

export const useBiomesIds = ({
  location,
  realms = [],
  biomes = [],
}: {
  location?: string | null;
  realms?: string[];
  biomes?: string[];
}) => {
  const bs = useBiomes({ location, realms });

  if (!!biomes.length) return biomes;

  if (realms.length === 0 && biomes.length === 0) {
    return [];
  }

  return bs?.map((b) => b.id) ?? [];
};

export const useRealms = ({ location }: { location?: string | null }) => {
  const { data: REALMS } = useApiLocationsLocationWidgetsWidgetIdGet(
    location ?? "GLOB",
    "extent_realms",
  );

  return REALMS?.data
    ?.map((r) => {
      return {
        id: r.id,
        name: `${r.label}`,
      };
    })
    .toSorted((a, b) => {
      const aIndex = REALM_ORDER.indexOf(a.id);
      const bIndex = REALM_ORDER.indexOf(b.id);

      return aIndex - bIndex;
    });
};
