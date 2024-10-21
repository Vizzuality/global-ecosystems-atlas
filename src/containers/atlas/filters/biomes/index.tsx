"use client";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useBiomes, useEcosystems } from "@/lib/taxonomy";

import {
  useSyncBiomes,
  useSyncEcosystems,
  useSyncLocation,
  useSyncRealms,
} from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const BiomesTrigger = () => {
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const BIOMESFiltered = useBiomes({ location, realms });

  return (
    <div className="flex items-center gap-2 text-left leading-snug">
      Biomes{" "}
      <Badge variant="secondary" className="rounded-2xl">
        {biomes?.length || BIOMESFiltered?.length}/{BIOMESFiltered?.length}
      </Badge>
    </div>
  );
};

export const BiomesContent = () => {
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const BIOMESFiltered = useBiomes({ location, realms });
  const ECOSYSTEMS = useEcosystems({ location });

  const handleChange = (biomeId: string, checked: CheckedState) => {
    if (!checked) {
      setBiomes((prev) => {
        const newBiomes = prev.filter((biome) => biome !== biomeId);

        if (newBiomes.length === 0) {
          setEcosystems([]);
        }

        if (ecosystems.length > 0) {
          setEcosystems((prev) => {
            return prev.filter((ecosystem) => {
              const e = ECOSYSTEMS?.find((e) => {
                return e.id === ecosystem;
              });
              return e?.biome !== biomeId;
            });
          });
        }

        return newBiomes;
      });
    } else {
      setBiomes((prev) => {
        const newBiomes = [...prev, biomeId];

        setEcosystems([]);

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
