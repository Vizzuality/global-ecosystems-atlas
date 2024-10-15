"use client";

import { useParams } from "next/navigation";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { WidgetEcosystemsList } from "@/containers/atlas/widgets";

export const AtlasEcosysytemsDetail = () => {
  const [location] = useSyncLocation();
  const { ecosystemId } = useParams();
  const realmsData = useRealms({ location });
  const BIOMES = useBiomes({ location });
  const ecosysytemsData = useEcosystems({ location });

  const ECOSYSYTEM = ecosysytemsData?.find((e) => e.code === ecosystemId);
  const BIOME = BIOMES?.find((biome) => biome.id === ECOSYSYTEM?.biome);
  const REALM = realmsData?.find((r) => r.id === ECOSYSYTEM?.realms);

  return (
    <div>
      <h1 className="">
        {ECOSYSYTEM?.code} {ECOSYSYTEM?.name}
      </h1>
      <p>
        {BIOME?.id} {BIOME?.name}
      </p>
      <p>{REALM?.name}</p>

      <WidgetEcosystemsList />
    </div>
  );
};
