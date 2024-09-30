import { useState } from "react";

import {
  Layer,
  LngLatBoundsLike,
  Map,
  Source,
  ViewState,
  ViewStateChangeEvent,
} from "react-map-gl";

import { env } from "@/env.mjs";

import { Compare } from "@/components/map/compare";
import Controls from "@/components/map/controls";
import ZoomControl from "@/components/map/controls/zoom";

export const SAMCollaborativeMap = () => {
  const initialViewState = {
    bounds: [16.344, -34.819, 32.83, -22.091] as LngLatBoundsLike,
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

  const mapStyle1 = "mapbox://styles/mapbox/streets-v11";
  const mapStyle2 = "mapbox://styles/mapbox/satellite-v9";

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

          <Source
            id="source1"
            type="geojson"
            data={{
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [16.344, -34.819],
                    [32.83, -34.819],
                    [32.83, -22.091],
                    [16.344, -22.091],
                    [16.344, -34.819],
                  ],
                ],
              },
            }}
          >
            <Layer
              id="layer1"
              type="fill"
              paint={{
                "fill-color": "#f00",
                "fill-opacity": 0.5,
              }}
            />
          </Source>
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
          <Source
            id="source1"
            type="geojson"
            data={{
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [16.344, -34.819],
                    [32.83, -34.819],
                    [32.83, -22.091],
                    [16.344, -22.091],
                    [16.344, -34.819],
                  ],
                ],
              },
            }}
          >
            <Layer
              id="layer1"
              type="fill"
              paint={{
                "fill-color": "#0f0",
                "fill-opacity": 0.5,
              }}
            />
          </Source>
        </>
      </Map>
    </Compare>
  );
};
