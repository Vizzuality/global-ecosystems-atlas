"use client";

import { useApiLocationsGet } from "@/types/generated/locations";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { BiomesContent, BiomesTrigger } from "@/containers/atlas/filters/biomes";
import { DepthContent, DepthTrigger } from "@/containers/atlas/filters/depth";
import { EcosystemsContent, EcosystemsTrigger } from "@/containers/atlas/filters/ecosystems";
import { FilterItem } from "@/containers/atlas/filters/item";
import { RealmsContent, RealmsTrigger } from "@/containers/atlas/filters/realms";

export const AtlasFilters = () => {
  const [location] = useSyncLocation();
  const { data: locationsData } = useApiLocationsGet();

  const LOCATION = locationsData?.data.find((l) => l.location_code === location);

  return (
    <div className="space-y-5">
      {LOCATION && (
        <div className="text-sm font-medium">
          Location: <strong>{LOCATION.gis_name}</strong>
        </div>
      )}

      <div>
        <FilterItem defaultOpen={true} trigger={<RealmsTrigger />} component={<RealmsContent />} />
        <FilterItem trigger={<BiomesTrigger />} component={<BiomesContent />} />
        <FilterItem trigger={<EcosystemsTrigger />} component={<EcosystemsContent />} />
        <FilterItem defaultOpen={true} trigger={<DepthTrigger />} component={<DepthContent />} />
      </div>
    </div>
  );
};
