import { useMemo } from "react";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useEcosystems } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncEcosystems, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const EcosystemsTrigger = () => {
  return <div>Ecosystems</div>;
};

export const EcosystemsContent = () => {
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const ecosystemsData = useEcosystems();

  const handleChange = (ecosystemId: string, checked: CheckedState) => {
    if (!checked) {
      setEcosystems((prev) => prev.filter((ecosystem) => ecosystem !== ecosystemId));
    } else {
      setEcosystems((prev) => [...prev, ecosystemId]);
    }
  };

  const DATA = useMemo(() => {
    if (!realms.length && !biomes.length) {
      return ecosystemsData;
    }

    return ecosystemsData?.filter((ecosystem) => {
      const brls = ecosystem.realms.sort().toString();
      const rls = realms.sort().toString();

      const bbms = ecosystem.biome;

      if (!biomes.length) {
        return rls === brls;
      }

      if (!realms.length) {
        return biomes.includes(bbms);
      }

      return rls === brls && biomes.includes(bbms);
    });
  }, [ecosystemsData, realms, biomes]);

  return (
    <ul className="flex flex-col">
      {DATA?.map((ecosystem) => {
        return (
          <li key={ecosystem.id} className="flex">
            <Checkbox
              id={ecosystem.id}
              value={ecosystem.id}
              checked={ecosystems.includes(ecosystem.id)}
              className="mt-2 cursor-pointer"
              onCheckedChange={(checked: CheckedState) => handleChange(ecosystem.id, checked)}
            />
            <Label htmlFor={ecosystem.id} className="grow cursor-pointer py-2 pl-2 leading-tight">
              {ecosystem.id} {ecosystem.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
