"use client";

import { useParams } from "next/navigation";

import { useBiomes, useEcosystems, useRealms } from "@/lib/taxonomy";

export const AtlasEcosysytemsDetail = () => {
  const { ecosystemId } = useParams();
  const realmsData = useRealms();
  const biomesData = useBiomes();
  const ecosysytemsData = useEcosystems();

  const ECOSYSYTEM = ecosysytemsData?.find((e) => e.code === ecosystemId);
  const BIOME = biomesData?.find((biome) => biome.id === ECOSYSYTEM?.biome);
  const REALMS = ECOSYSYTEM?.realms.map((realm) => realmsData?.find((r) => r.id === realm));

  return (
    <div>
      <h1 className="">
        {ECOSYSYTEM?.code} {ECOSYSYTEM?.name}
      </h1>
      <p>
        {BIOME?.id} {BIOME?.name}
      </p>
      <p>{REALMS?.map((realm) => realm?.name).join(", ")}</p>
    </div>
  );
};
