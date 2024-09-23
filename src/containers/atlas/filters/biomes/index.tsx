import { useMemo } from "react";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useBiomes } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const BiomesTrigger = () => {
  return <div>Biomes</div>;
};

export const BiomesContent = () => {
  const [realms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const biomesData = useBiomes();

  const handleChange = (biomeId: string, checked: CheckedState) => {
    if (!checked) {
      setBiomes((prev) => prev.filter((biome) => biome !== biomeId));
    } else {
      setBiomes((prev) => [...prev, biomeId]);
    }
  };

  const DATA = useMemo(() => {
    if (!realms.length) {
      return biomesData;
    }

    return biomesData?.filter((biome) => {
      const brls = biome.realms.sort().toString();
      const rls = realms.sort().toString();

      return rls === brls;
    });
  }, [biomesData, realms]);

  return (
    <ul className="flex flex-col">
      {DATA?.map((biome) => {
        return (
          <li key={biome.id} className="flex">
            <Checkbox
              id={biome.id}
              value={biome.id}
              checked={biomes.includes(biome.id)}
              className="mt-2 cursor-pointer"
              onCheckedChange={(checked: CheckedState) => handleChange(biome.id, checked)}
            />
            <Label htmlFor={biome.id} className="grow cursor-pointer py-2 pl-2 leading-tight">
              {biome.id} {biome.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
