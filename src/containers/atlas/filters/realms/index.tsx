"use client";

import { useMemo } from "react";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useRealms } from "@/lib/taxonomy";
import { cn } from "@/lib/utils";

import { useSyncBiomes, useSyncEcosystems, useSyncRealms } from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const RealmsTrigger = () => {
  return (
    <div className="flex items-center gap-2">
      Realms
      <Badge variant="secondary" className="rounded-2xl">
        4/4
      </Badge>
    </div>
  );
};

export const RealmsContent = () => {
  const [realms, setRealms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();
  const realmsData = useRealms();

  const DATA = useMemo(() => {
    if (!realms.length) {
      return realmsData?.map((realm) => {
        return {
          ...realm,
          disabled: false,
        };
      });
    }

    return realmsData?.map((realm) => {
      const disabled =
        (realm.id === "S" && realms.includes("T")) ||
        (realm.id === "T" && realms.includes("S")) ||
        (realms.length > 1 && !realms.includes("S") && realm.id === "S") ||
        (realms.length > 1 && realms.includes("S") && !realms.includes(realm.id));
      return {
        ...realm,
        disabled,
      };
    });
  }, [realms, realmsData]);

  const handleChange = (realmId: string, checked: CheckedState) => {
    if (!checked) {
      setRealms((prev) => prev.filter((realm) => realm !== realmId));
    } else {
      setRealms((prev) => [...prev, realmId]);
    }

    if (biomes.length) {
      setBiomes([]);
    }

    if (ecosystems.length) {
      setEcosystems([]);
    }
  };

  return (
    <ul className="flex flex-col">
      {DATA?.map((realm) => {
        return (
          <li key={realm.id} className="flex">
            <Checkbox
              id={realm.id}
              value={realm.id}
              checked={realms.includes(realm.id)}
              className={cn({
                "mt-2 cursor-pointer": true,
                "cursor-auto opacity-50": realm.disabled,
              })}
              disabled={realm.disabled}
              onCheckedChange={(checked: CheckedState) => handleChange(realm.id, checked)}
            />
            <Label htmlFor={realm.id} className="grow cursor-pointer py-2 pl-2 leading-tight">
              {realm.name}
            </Label>
          </li>
        );
      })}
    </ul>
  );
};
