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
  const [realms] = useSyncRealms();
  // const REALMS = useRealms({ location: "GLOB" });
  const REALMSFiltered = useRealms({ location });

  return (
    <div className="flex items-center gap-2">
      Realms
      <Badge variant="secondary" className="rounded-2xl">
        {realms?.length || REALMSFiltered?.length}/{REALMSFiltered?.length}
      </Badge>
    </div>
  );
};

export const RealmsContent = () => {
  const [location] = useSyncLocation();
  const [realms, setRealms] = useSyncRealms();
  const [biomes, setBiomes] = useSyncBiomes();
  const [ecosystems, setEcosystems] = useSyncEcosystems();

  const REALMS = useRealms({ location });
  const BIOMES = useBiomes({ location });
  const ECOSYSTEMS = useEcosystems({ location });

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

        // Remove the biomes that belong to the realm that was unchecked
        if (biomes.length > 0) {
          setBiomes((prev) => {
            return prev.filter((biome) => {
              const b = BIOMES?.find((b) => {
                return b.id === biome;
              });
              return b?.realm !== realmId;
            });
          });
        }

        if (ecosystems.length > 0) {
          setEcosystems((prev) => {
            return prev.filter((ecosystem) => {
              const e = ECOSYSTEMS?.find((e) => {
                return e.id === ecosystem;
              });
              return e?.realm !== realmId;
            });
          });
        }

        return newRealms;
      });
    } else {
      setRealms((prev) => {
        return [...prev, realmId]; // // Sync biomes
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
