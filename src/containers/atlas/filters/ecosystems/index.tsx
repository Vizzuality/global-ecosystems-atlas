import { CheckedState } from "@radix-ui/react-checkbox";

import { useEcosystems } from "@/lib/taxonomy";

import {
  useSyncBiomes,
  useSyncEcosystems,
  useSyncLocation,
  useSyncRealms,
} from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const EcosystemsTrigger = () => {
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems] = useSyncEcosystems();

  const ECOSYSTEMSFiltered = useEcosystems({ location, realms, biomes });

  return (
    <div className="flex items-center gap-2 text-left leading-snug">
      Ecosystem functional groups
      <Badge variant="secondary" className="rounded-2xl">
        {ecosystems?.length || ECOSYSTEMSFiltered?.length}/{ECOSYSTEMSFiltered?.length}
      </Badge>
    </div>
  );
};

export const EcosystemsContent = () => {
  const [location] = useSyncLocation();
  const [realms] = useSyncRealms();
  const [biomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();

  const ECOSYSTEMSFiltered = useEcosystems({ location, realms, biomes });

  const handleChange = (ecosystemId: string, checked: CheckedState) => {
    if (!checked) {
      setEcosystems((prev) => prev.filter((ecosystem) => ecosystem !== ecosystemId));
    } else {
      setEcosystems((prev) => [...prev, ecosystemId]);
    }
  };

  return (
    <ul className="flex flex-col">
      {ECOSYSTEMSFiltered?.map((ecosystem) => {
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
              {ecosystem.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
