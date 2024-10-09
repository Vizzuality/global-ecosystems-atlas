import { AtlasLayersAtlas } from "@/containers/atlas/layers/atlas";
import { AtlasLayersContext } from "@/containers/atlas/layers/context";
import { AtlasLayerStatus } from "@/containers/atlas/layers/status";

export const AtlasLayers = () => {
  return (
    <div className="flex flex-col gap-5 divide-y divide-navy-50">
      <div>
        <AtlasLayersAtlas />
      </div>
      <div className="pt-5">
        <AtlasLayerStatus />
      </div>
      <div className="pt-5">
        <AtlasLayersContext />
      </div>
    </div>
  );
};
