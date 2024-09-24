"use client";

import { BiomesContent, BiomesTrigger } from "@/containers/atlas/filters/biomes";
import { DepthContent, DepthTrigger } from "@/containers/atlas/filters/depth";
import { EcosystemsContent, EcosystemsTrigger } from "@/containers/atlas/filters/ecosystems";
import { FilterItem } from "@/containers/atlas/filters/item";
import { RealmsContent, RealmsTrigger } from "@/containers/atlas/filters/realms";

export const AtlasFilters = () => {
  return (
    <>
      <FilterItem defaultOpen={true} trigger={<RealmsTrigger />} component={<RealmsContent />} />
      <FilterItem trigger={<BiomesTrigger />} component={<BiomesContent />} />
      <FilterItem trigger={<EcosystemsTrigger />} component={<EcosystemsContent />} />
      <FilterItem trigger={<DepthTrigger />} component={<DepthContent />} />
    </>
  );
};
