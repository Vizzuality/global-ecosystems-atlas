import { CheckedState } from "@radix-ui/react-checkbox";

import { useEcosystems } from "@/lib/taxonomy";

import { useSyncBiomes, useSyncEcosystems, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const EcosystemsTrigger = () => {
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const ecosystemsData = useEcosystems();
  const ecosystemsDataFiltered = useEcosystems({ realms, biomes });

  return (
    <div className="flex items-center gap-2">
      Ecosystems
      <Badge variant="secondary" className="rounded-2xl">
        {ecosystemsDataFiltered?.length}/{ecosystemsData?.length}
      </Badge>
    </div>
  );
};

export const EcosystemsContent = () => {
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const ecosystemsDataFiltered = useEcosystems({ realms, biomes });

  const handleChange = (ecosystemId: string, checked: CheckedState) => {
    if (!checked) {
      setEcosystems((prev) => prev.filter((ecosystem) => ecosystem !== ecosystemId));
    } else {
      setEcosystems((prev) => [...prev, ecosystemId]);
    }
  };

  return (
    <ul className="flex flex-col">
      {ecosystemsDataFiltered?.map((ecosystem) => {
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
