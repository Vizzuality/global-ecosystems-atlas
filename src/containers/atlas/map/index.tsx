"use client";

import { useCallback, useEffect } from "react";

import Map, { LngLatBoundsLike, useMap } from "react-map-gl";

import { useAtom, useAtomValue } from "jotai";

import { env } from "@/env.mjs";

import {
  sidebarOpenAtom,
  tmpBboxAtom,
  useSyncBasemap,
  useSyncBbox,
} from "@/app/(atlas)/atlas/store";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";
import { MapSettings } from "@/containers/atlas/map/settings";
import { MapShare } from "@/containers/atlas/map/share";

import Controls from "@/components/map/controls";
import SettingsControl from "@/components/map/controls/settings";
import ShareControl from "@/components/map/controls/share";
import ZoomControl from "@/components/map/controls/zoom";

export const AtlasMap = () => {
  const { atlasMap } = useMap();
  const [bbox, setBbox] = useSyncBbox();
  const [tmpBbox, setTmpBbox] = useAtom(tmpBboxAtom);
  const sidebarOpen = useAtomValue(sidebarOpenAtom);
  const [basemap] = useSyncBasemap();

  const mapStyle = BASEMAPS.find((b) => b.value === basemap)?.mapStyle;

  const handleMove = () => {
    if (atlasMap) {
      const b = atlasMap
        .getBounds()
        ?.toArray()
        ?.flat()
        ?.map((v: number) => {
          return parseFloat(v.toFixed(2));
        });

      if (b) setBbox(b);
      setTmpBbox(undefined);
    }
  };

  const handleFitBounds = useCallback(() => {
    if (tmpBbox && atlasMap) {
      atlasMap.fitBounds(tmpBbox as LngLatBoundsLike, {
        padding: {
          top: 50,
          bottom: 50,
          left: sidebarOpen ? 600 : 125,
          right: 50,
        },
      });
    }
  }, [atlasMap, sidebarOpen, tmpBbox]);

  useEffect(() => {
    if (tmpBbox) {
      handleFitBounds();
    }
  }, [tmpBbox, handleFitBounds]);

  return (
    <div className="relative left-[calc(theme(space.10)_+_theme(space.8))] h-full w-[calc(100%_-_theme(space.10)_-_theme(space.8))] overflow-hidden bg-lightblue-50">
      <div className="h-full w-full grow bg-lightblue-50">
        <Map
          id="atlasMap"
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            bounds: bbox as LngLatBoundsLike,
            fitBoundsOptions: {
              padding: {
                top: 50,
                bottom: 50,
                left: sidebarOpen ? 600 : 125,
                right: 50,
              },
            },
          }}
          style={{ width: "100%", height: "100%" }}
          projection={{
            name: "mercator",
          }}
          mapStyle={mapStyle}
          onMove={handleMove}
        >
          <Controls>
            <ZoomControl />
            <SettingsControl>
              <MapSettings />
            </SettingsControl>
            <ShareControl>
              <MapShare />
            </ShareControl>
          </Controls>
        </Map>
      </div>
    </div>
  );
};
