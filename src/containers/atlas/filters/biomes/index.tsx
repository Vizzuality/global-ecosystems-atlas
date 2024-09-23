import { CheckedState } from "@radix-ui/react-checkbox";

import { useBiomes } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncEcosystems, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const BiomesTrigger = () => {
  const [realms] = useSyncRealms();
  const biomesData = useBiomes();
  const biomesDataFiltered = useBiomes({ realms });

  return (
    <div className="flex items-center gap-2">
      Biomes{" "}
      <Badge variant="secondary" className="rounded-2xl">
        {biomesDataFiltered?.length}/{biomesData?.length}
      </Badge>
    </div>
  );
};

export const BiomesContent = () => {
  const [realms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const biomesDataFiltered = useBiomes({ realms });

  const handleChange = (biomeId: string, checked: CheckedState) => {
    if (!checked) {
      setBiomes((prev) => prev.filter((biome) => biome !== biomeId));
    } else {
      setBiomes((prev) => [...prev, biomeId]);
    }

    if (ecosystems.length) {
      setEcosystems([]);
    }
  };

  return (
    <ul className="flex flex-col">
      {biomesDataFiltered?.map((biome) => {
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
