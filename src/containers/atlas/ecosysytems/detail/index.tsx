"use client";

import { useParams } from "next/navigation";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";

import { useApiLocationsGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { WidgetEcosystemsList } from "@/containers/atlas/widgets";

export const AtlasEcosysytemsDetail = () => {
  const [location] = useSyncLocation();
  const { ecosystemId } = useParams();

  const REALMS = useRealms({ location });
  const BIOMES = useBiomes({ location });
  const ECOSYSTEMS = useEcosystems({ location });

  const { data: locationsData } = useApiLocationsGet();
  const LOCATION = locationsData?.data.find((l) => l.location_code === location);

  const ECOSYSYTEM = ECOSYSTEMS?.find((e) => e.code === ecosystemId);
  const BIOME = BIOMES?.find((biome) => biome.id === ECOSYSYTEM?.biome);
  const REALM = REALMS?.find((r) => r.id === ECOSYSYTEM?.realm);

  return (
    <div className="space-y-5">
      <div className="space-y-2 border-b border-navy-100 pb-6">
        {LOCATION && (
          <div className="text-sm font-medium leading-snug">
            Location: <strong>{LOCATION.gis_name}</strong>
          </div>
        )}

        <div className="text-sm font-medium leading-snug">
          Ecosystem: <strong>{ECOSYSYTEM?.name}</strong>
        </div>
        <div className="text-sm font-medium leading-snug">
          Biome: <strong>{BIOME?.name}</strong>
        </div>
        <div className="text-sm font-medium leading-snug">
          Realm: <strong>{REALM?.name}</strong>
        </div>
      </div>

      <WidgetEcosystemsList />
    </div>
  );
};
