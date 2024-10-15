"use client";

import { useMemo } from "react";

import { CheckedState } from "@radix-ui/react-checkbox";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";
import { cn } from "@/lib/utils";

import {
  useSyncBiomes,
  useSyncEcosystems,
  useSyncLocation,
  useSyncRealms,
} from "@/app/(atlas)/atlas/store";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const RealmsTrigger = () => {
  const [location] = useSyncLocation();
  const REALMS = useRealms({ location: "GLOB" });
  const REALMSFiltered = useRealms({ location });

  return (
    <div className="flex items-center gap-2">
      Realms
      <Badge variant="secondary" className="rounded-2xl">
        {REALMSFiltered?.length}/{REALMS?.length}
      </Badge>
    </div>
  );
};

export const RealmsContent = () => {
  const [location] = useSyncLocation();
  const [realms, setRealms] = useSyncRealms();
  const [, setBiomes] = useSyncBiomes();
  const [, setEcosystems] = useSyncEcosystems();

  const REALMS = useRealms({ location });
  const BIOMES = useBiomes({ location });
  const ECOSYSTEMS = useEcosystems({ location });

  // const REALMS = REALMS?.filter((r) => r.realm.length === 1);

  const DATA = useMemo(() => {
    return REALMS?.map((realm) => {
      return {
        ...realm,
        disabled: false,
      };
    });

    // return REALMS?.map((realm) => {
    //   const disabled =
    //     (realm.id === "S" && realms.includes("T")) ||
    //     (realm.id === "T" && realms.includes("S")) ||
    //     (realms.length > 1 && !realms.includes("S") && realm.id === "S") ||
    //     (realms.length > 1 && realms.includes("S") && !realms.includes(realm.id));
    //   return {
    //     ...realm,
    //     disabled,
    //   };
    // });
  }, [REALMS]);

  const handleChange = (realmId: string, checked: CheckedState) => {
    if (!checked) {
      setRealms((prev) => {
        const newRealms = prev.filter((realm) => realm !== realmId);

        if (newRealms.length === 0) {
          setBiomes([]);
          setEcosystems([]);
        }

        // Sync biomes
        const bs = BIOMES?.filter((b) => {
          return newRealms.includes(b.realm);
        })?.map((b) => b.id);
        if (!!bs?.length) {
          setBiomes(bs);
        }

        // Sync ecosystems
        const ecosystems = ECOSYSTEMS?.filter((e) => {
          return newRealms.includes(e.realm);
        })?.map((e) => e.id);

        if (!!ecosystems?.length) {
          setEcosystems(ecosystems);
        }

        return newRealms;
      });
    } else {
      setRealms((prev) => {
        const newRealms = [...prev, realmId];

        // Sync biomes
        const bs = BIOMES?.filter((b) => {
          return newRealms.includes(b.realm);
        })?.map((b) => b.id);

        if (!!bs?.length) {
          setBiomes(bs);
        }

        // Sync ecosystems
        const ecosystems = ECOSYSTEMS?.filter((e) => {
          return newRealms.includes(e.realm);
        })?.map((e) => e.id);

        if (!!ecosystems?.length) {
          setEcosystems(ecosystems);
        }

        return newRealms;
      });
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
