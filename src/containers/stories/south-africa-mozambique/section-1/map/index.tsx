"use client";

import { useState } from "react";

import { LngLatBoundsLike, Map } from "react-map-gl";

import { env } from "@/env.mjs";

import { LayerIds } from "@/lib/layers";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { FitBounds } from "@/containers/stories/south-africa-mozambique/section-1/map/fit-bounds";
import { useStep } from "@/containers/stories/south-africa-mozambique/utils";

import { LayerManager } from "@/components/map/layer-manager";
import { useBbox } from "@/components/map/layer-manager/utils";
import Legend from "@/components/map/legend";
import LegendItem from "@/components/map/legend/item";
import { LegendItemProps } from "@/components/map/legend/types";

export const STEPS: {
  id: number;
  // layers is an array of id from LAYERS
  layers: LayerIds[];
  locations: string[];
  legend: LegendItemProps[];
}[] = [
  {
    id: 0,
    layers: ["satellite"],
    locations: ["ZAF_224", "MOZ_167"],
    legend: [],
  },
  {
    id: 1,
    layers: ["story_sa"],
    locations: ["ZAF_224"],
    legend: [
      {
        id: "story_sa",
        name: "South Africa's national ecosystem types",
        sortable: {
          enabled: false,
        },
      },
    ],
  },
  {
    id: 2,
    layers: ["story_mozambique"],
    locations: ["MOZ_167"],
    legend: [
      {
        id: "story_sa",
        name: "Mozambiques's national ecosystem types",
        sortable: {
          enabled: false,
        },
      },
    ],
  },
];

export const SAMSection1Map = () => {
  const [loaded, setLoaded] = useState(false);
  const [step] = useSyncStep();

  const s = useStep({
    steps: STEPS,
    step,
    offset: 0,
  });

  const STEP = STEPS[s];

  const BBOX = useBbox({ locations: STEP.locations });

  return (
    <div className="relative h-full w-full">
      <Map
        id="section-1-map"
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          bounds: BBOX as LngLatBoundsLike,
          fitBoundsOptions: {
            padding: {
              top: 50,
              bottom: 50,
              left: 50,
              right: 50,
            },
          },
        }}
        style={{ width: "100%", height: "100%" }}
        projection={{
          name: "mercator",
        }}
        mapStyle="mapbox://styles/mapbox/light-v10"
        scrollZoom={false}
        onLoad={() => {
          setLoaded(true);
        }}
      >
        <FitBounds />

        {loaded && (
          <LayerManager layers={STEP.layers} locations={STEP.locations} globalSettings={{}} />
        )}
      </Map>

      <div className="absolute bottom-10 right-4">
        <Legend
          className="rounded-lg border border-neutral-200 bg-white shadow-sm"
          sortable={{
            enabled: false,
          }}
        >
          {STEP.legend.map((legend) => (
            <LegendItem key={legend.id} {...legend} />
          ))}
        </Legend>
      </div>
    </div>
  );
};
