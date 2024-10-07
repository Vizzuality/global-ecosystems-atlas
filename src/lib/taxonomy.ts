import { groups } from "@visx/vendor/d3-array";

import { useApiEcosystemsGet } from "@/types/generated/ecosystems";

export const getRealmsFromEFGCode = (efgCode: string) => {
  // remove numbers and dots, then split by letters
  const realmIds = efgCode.replace(/[0-9.]/g, "").split("");

  return realmIds;
};

export const getBiomeFromEFGCode = (efgCode: string) => {
  const realmIds = efgCode
    .replace(/[0-9.]/g, "")
    .split("")
    .sort();
  const biomeNumber = efgCode.replace(/[A-Z]/g, "").split(".")[0];

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
  const realmsData = useRealms();
  const biomesData = useBiomes();

  return groups(data, (d) => d.realm?.realms.sort().join(""))
    .map(([key, value]) => {
      return {
        id: key,
        name: realmsData?.find((r) => r.realms.sort().join("") === key)?.name,
        items: groups(value, (d) => d.biome?.id)
          .map(([key, value]) => {
            const b = biomesData?.find((b) => b.id === key);
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

export const useEcosystems = (props?: { realms?: string[]; biomes?: string[] }) => {
  const { data: ecosystemsData } = useApiEcosystemsGet();

  return ecosystemsData?.data
    .filter((e) => {
      if (e.efg_code !== "0") {
        return e.efg_code;
      }
      return false;
    })
    .map((e) => {
      return {
        id: `${e.efg_code}`,
        name: e.efg_name,
        code: e.efg_code,
        biome: getBiomeFromEFGCode(e.efg_code!),
        realms: getRealmsFromEFGCode(e.efg_code!),
      };
    })
    .filter((e) => {
      if (!props?.biomes?.length && !props?.realms?.length) {
        return true;
      }

      const brls = e.realms.sort().toString();
      const rls = props?.realms?.sort().toString();

      const bbms = e.biome;

      if (!props?.biomes?.length) {
        return rls === brls;
      }

      if (!props?.realms?.length) {
        return props.biomes.includes(bbms);
      }

      return rls === brls && props.biomes.includes(bbms);
    });
};

export const useBiomes = (props?: { realms?: string[] }) => {
  const { data: ecosystemsData } = useApiEcosystemsGet();

  return ecosystemsData?.data
    .filter((e) => {
      if (e.efg_code !== "0") {
        return e.efg_code;
      }
      return false;
    })
    .filter(
      (value, index, self) => index === self.findIndex((e) => e.biome_name === value.biome_name),
    )
    .map((e) => {
      return {
        id: getBiomeFromEFGCode(e.efg_code!),
        name: `${e.biome_name}`.trim(),
        biome: getBiomeFromEFGCode(e.efg_code!),
        realms: getRealmsFromEFGCode(e.efg_code!),
      };
    })
    .filter((b) => {
      if (props?.realms?.length) {
        const brls = b.realms.sort().toString();
        const rls = props.realms.sort().toString();

        return rls === brls;
      }
      return true;
    });
};

export const useRealms = () => {
  const { data: ecosystemsData } = useApiEcosystemsGet();

  return ecosystemsData?.data
    .filter((e) => {
      if (e.efg_code !== "0") {
        return e.efg_code;
      }
      return false;
    })
    .filter(
      (value, index, self) => index === self.findIndex((e) => e.realm_name === value.realm_name),
    )
    .map((e) => {
      return {
        id: getRealmsFromEFGCode(e.efg_code!).join(""),
        name: `${e.realm_name}`,
        realms: getRealmsFromEFGCode(e.efg_code!),
      };
    });
};
