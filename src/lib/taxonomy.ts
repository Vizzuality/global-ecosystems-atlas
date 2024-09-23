import { useApiEcosystemsGet } from "@/types/generated/ecosystems";

export const getRealmsFromEFGCode = (efgCode: string) => {
  // remove numbers and dots, then split by letters
  const realmIds = efgCode.replace(/[0-9.]/g, "").split("");

  return realmIds;
};

export const getBiomeFromEFGCode = (efgCode: string) => {
  const biomeId = efgCode.split(".")[0];

  return biomeId;
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
        id: getRealmsFromEFGCode(e.efg_code!).toString(),
        name: e.realm_name,
        realms: getRealmsFromEFGCode(e.efg_code!),
      };
    })
    .filter((r) => r.realms.length === 1);
};
