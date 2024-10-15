"use client";

import { useCallback, useMemo } from "react";

import { useApiLocationsGet } from "@/types/generated/locations";

import { depthParser } from "@/app/(atlas)/atlas/parsers";
import { useSyncFilters, useSyncLocation } from "@/app/(atlas)/atlas/store";

import { BiomesContent, BiomesTrigger } from "@/containers/atlas/filters/biomes";
import { DepthContent, DepthTrigger } from "@/containers/atlas/filters/depth";
import { EcosystemsContent, EcosystemsTrigger } from "@/containers/atlas/filters/ecosystems";
import { FilterItem } from "@/containers/atlas/filters/item";
import { RealmsContent, RealmsTrigger } from "@/containers/atlas/filters/realms";

export const AtlasFilters = () => {
  const [location] = useSyncLocation();
  const { realms, biomes, ecosystems, depth, reset } = useSyncFilters();
  const { data: locationsData } = useApiLocationsGet();

  const LOCATION = locationsData?.data.find((l) => l.location_code === location);

  const clearAll = useMemo(() => {
    if (
      realms.length ||
      biomes.length ||
      ecosystems.length ||
      depth[0] !== depthParser.defaultValue[0] ||
      depth[1] !== depthParser.defaultValue[1]
    ) {
      return true;
    }
  }, [realms, biomes, ecosystems, depth]);

  const handleClearAll = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <div className="space-y-5">
      {LOCATION && (
        <div className="text-sm font-medium">
          Location: <strong>{LOCATION.gis_name}</strong>
        </div>
      )}

      <div>
        <div className="flex justify-end">
          <button
            className="py-2 text-sm font-medium text-navy-700 hover:underline disabled:pointer-events-none disabled:text-navy-300"
            disabled={!clearAll}
            onClick={handleClearAll}
          >
            Clear all
          </button>
        </div>
        <FilterItem defaultOpen={true} trigger={<RealmsTrigger />} component={<RealmsContent />} />
        <FilterItem trigger={<BiomesTrigger />} component={<BiomesContent />} />
        <FilterItem trigger={<EcosystemsTrigger />} component={<EcosystemsContent />} />
        <FilterItem defaultOpen={true} trigger={<DepthTrigger />} component={<DepthContent />} />
      </div>
    </div>
  );
};
