"use client";

import { BasemapItem } from "./item";

export const BASEMAPS = [
  {
    label: "Default",
    value: "light" as const,
    preview: `/atlas/basemaps/light.png`,
    mapStyle: "mapbox://styles/mapbox/light-v10",
  },
  {
    label: "Terrain",
    value: "terrain" as const,
    preview: `/atlas/basemaps/terrain.png`,
    mapStyle: "mapbox://styles/mapbox/outdoors-v12",
  },
  {
    label: "Satellite",
    value: "satellite" as const,
    preview: `/atlas/basemaps/satellite.png`,
    mapStyle: "mapbox://styles/mapbox/satellite-v9",
  },
];

const Basemaps = (): JSX.Element => {
  return (
    <ul className="grid grid-flow-col grid-cols-12 gap-3">
      {BASEMAPS.map((b) => (
        <li className="col-span-4" key={b.value}>
          <BasemapItem {...b} />
        </li>
      ))}
    </ul>
  );
};

export default Basemaps;
