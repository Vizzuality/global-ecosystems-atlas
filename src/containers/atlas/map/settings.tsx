"use client";

import Basemaps from "./basemaps";

export const MapSettings = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold uppercase">Map settings</h3>

      <div className="space-y-3 divide-y">
        <Basemaps />
      </div>
    </div>
  );
};
