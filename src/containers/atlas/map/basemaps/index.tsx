"use client";

import { BasemapItem } from "./item";

export const BASEMAPS = [
  {
    label: "Default",
    value: "light" as const,
    preview: `/atlas/basemaps/light.png`,
    mapStyle: "mapbox://styles/vizzgea/clzd26iv600a001qw50u1ga2i",
  },
  {
    label: "Terrain",
    value: "terrain" as const,
    preview: `/atlas/basemaps/terrain.png`,
    mapStyle: "mapbox://styles/vizzgea/cm2bwqmnq00rq01pgbx9e5qf1",
  },
  {
    label: "Satellite",
    value: "satellite" as const,
    preview: `/atlas/basemaps/satellite.png`,
    mapStyle: "mapbox://styles/vizzgea/cm2bwsl0900rs01pgb4dz6kcy",
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
