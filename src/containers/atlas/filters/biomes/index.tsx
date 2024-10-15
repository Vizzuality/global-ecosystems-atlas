"use client";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useBiomes, useEcosystems } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncEcosystems, useSyncLocation } from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const BiomesTrigger = () => {
  const [location] = useSyncLocation();
  const [biomes] = useSyncBiomes();
  // const BIOMES = useBiomes({ location: "GLOB" });
  const BIOMESFiltered = useBiomes({ location });

  return (
    <div className="flex items-center gap-2">
      Biomes{" "}
      <Badge variant="secondary" className="rounded-2xl">
        {biomes?.length || BIOMESFiltered?.length}/{BIOMESFiltered?.length}
      </Badge>
    </div>
  );
};

export const BiomesContent = () => {
  const [location] = useSyncLocation();

  const [biomes, setBiomes] = useSyncBiomes();
  const [, setEcosystems] = useSyncEcosystems();
  const BIOMESFiltered = useBiomes({ location });

  const ECOSYSTEMS = useEcosystems({ location });

  const handleChange = (biomeId: string, checked: CheckedState) => {
    if (!checked) {
      setBiomes((prev) => {
        const newBiomes = prev.filter((biome) => biome !== biomeId);

        if (newBiomes.length === 0) {
          setEcosystems([]);
        }

        // Sync ecosystems
        const ecosystems = ECOSYSTEMS?.filter((e) => {
          return newBiomes.includes(e.biome);
        })?.map((e) => e.id);

        if (!!ecosystems?.length) {
          setEcosystems(ecosystems);
        }

        return newBiomes;
      });
    } else {
      setBiomes((prev) => {
        const newBiomes = [...prev, biomeId];

        // Sync ecosystems
        const ecosystems = ECOSYSTEMS?.filter((e) => {
          return newBiomes.includes(e.biome);
        })?.map((e) => e.id);

        if (!!ecosystems?.length) {
          setEcosystems(ecosystems);
        }

        return newBiomes;
      });
    }
  };

  return (
    <ul className="flex flex-col">
      {BIOMESFiltered?.map((biome) => {
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
              {biome.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
