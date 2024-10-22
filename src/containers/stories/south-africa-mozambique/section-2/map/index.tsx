import { useState } from "react";

import { LngLatBoundsLike, Map, ViewState, ViewStateChangeEvent } from "react-map-gl";

import { env } from "@/env.mjs";

import Controls from "@/components/map/controls";
import ZoomControl from "@/components/map/controls/zoom";
import { LayerManager } from "@/components/map/layer-manager";
import { useBbox } from "@/components/map/layer-manager/utils";
import Legend from "@/components/map/legend";
import LegendItem from "@/components/map/legend/item";
import { Compare } from "@/components/ui/compare";

export const SAMCollaborativeMap = () => {
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
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
      <div className="relative h-full w-full">
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
          onLoad={() => setLoaded1(true)}
        >
          <>
            <Controls>
              <ZoomControl />
            </Controls>

            {loaded1 && (
              <LayerManager
                layers={["story_sa", "story_mozambique"]}
                locations={["ZAF_224", "MOZ_167"]}
                globalSettings={{}}
              />
            )}
          </>
        </Map>

        <div className="absolute bottom-10 left-4 hidden lg:block">
          <Legend
            className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            sortable={{
              enabled: false,
            }}
          >
            <LegendItem
              id="national-ecosystems-maps"
              name="National Ecosystems Maps"
              sortable={{
                enabled: false,
              }}
            />
          </Legend>
        </div>
      </div>
      <div className="relative h-full w-full">
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
          onLoad={() => setLoaded2(true)}
        >
          <>
            <Controls>
              <ZoomControl />
            </Controls>

            {loaded2 && (
              <LayerManager
                layers={["efgs"]}
                locations={["ZAF_224", "MOZ_167"]}
                globalSettings={{}}
              />
            )}
          </>
        </Map>

        <div className="absolute bottom-10 right-4 hidden lg:block">
          <Legend
            className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            sortable={{
              enabled: false,
            }}
          >
            <LegendItem
              id="efgs"
              name="Global Ecosystem Atlas synthesis map"
              sortable={{
                enabled: false,
              }}
            />
          </Legend>
        </div>
      </div>
    </Compare>
  );
};
