import { useState } from "react";

import { LngLatBoundsLike, Map, ViewState, ViewStateChangeEvent } from "react-map-gl";

import { env } from "@/env.mjs";

import Controls from "@/components/map/controls";
import ZoomControl from "@/components/map/controls/zoom";
import { LayerManager } from "@/components/map/layer-manager";
import { useBbox } from "@/components/map/layer-manager/utils";
import { Compare } from "@/components/ui/compare";

export const SAMCollaborativeMap = () => {
  const BBOX = useBbox({ locations: ["ZAF_224", "MOZ_167"] });

  const initialViewState = {
    bounds: BBOX as LngLatBoundsLike,
    fitBoundsOptions: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
  };
  const [viewState, setViewState] = useState<ViewState>();

  const mapStyle1 = "mapbox://styles/mapbox/light-v10";
  const mapStyle2 = "mapbox://styles/mapbox/light-v10";

  const handleMove = (e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
  };

  return (
    <Compare>
      <Map
        id="collaborative-map-1"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={initialViewState}
        {...viewState}
        projection={{
          name: "mercator",
        }}
        mapStyle={mapStyle1}
        scrollZoom={false}
        onMove={handleMove}
      >
        <>
          <Controls>
            <ZoomControl />
          </Controls>

          <LayerManager layers={["efgs"]} locations={["ZAF_224", "MOZ_167"]} globalSettings={{}} />
        </>
      </Map>
      <Map
        id="collaborative-map-2"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={initialViewState}
        {...viewState}
        projection={{
          name: "mercator",
        }}
        mapStyle={mapStyle2}
        scrollZoom={false}
        onMove={handleMove}
      >
        <>
          <Controls>
            <ZoomControl />
          </Controls>

          <LayerManager
            layers={["biomes"]}
            locations={["ZAF_224", "MOZ_167"]}
            globalSettings={{}}
          />
        </>
      </Map>
    </Compare>
  );
};
