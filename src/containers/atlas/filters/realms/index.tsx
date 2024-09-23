"use client";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useRealms } from "@/lib/taxonomy";

import { useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const RealmsTrigger = () => {
  return <div>Realms</div>;
};

export const RealmsContent = () => {
  const [realms, setRealms] = useSyncRealms();
  const realmsData = useRealms();

  const handleChange = (realmId: string, checked: CheckedState) => {
    if (!checked) {
      setRealms((prev) => prev.filter((realm) => realm !== realmId));
    } else {
      setRealms((prev) => [...prev, realmId]);
    }
  };

  return (
    <ul className="flex flex-col">
      {realmsData?.map((realm) => {
        const realmId = realm.realms.toString();
        return (
          <li key={realm.id} className="flex items-center">
            <Checkbox
              id={realmId}
              value={realmId}
              checked={realms.includes(realmId)}
              className="cursor-pointer"
              onCheckedChange={(checked: CheckedState) => handleChange(realmId, checked)}
            />
            <Label htmlFor={realmId} className="grow cursor-pointer py-2 pl-2">
              {realm.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
