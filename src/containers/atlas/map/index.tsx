"use client";

import { useCallback, useEffect, useState } from "react";

import Map, { LngLatBoundsLike, useMap } from "react-map-gl";

import { useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { MapMouseEvent } from "mapbox-gl";
import { useDebounce, usePreviousDifferent } from "rooks";

import { env } from "@/env.mjs";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import {
  popupAtom,
  sidebarOpenAtom,
  tmpBboxAtom,
  useSyncBasemap,
  useSyncBbox,
  useSyncFilters,
  useSyncLocation,
} from "@/app/(atlas)/atlas/store";

import { BASEMAPS } from "@/containers/atlas/map/basemaps";
import { LayerManager } from "@/containers/atlas/map/layer-manager";
import MapLegend from "@/containers/atlas/map/legend";
import { AtlasPopup } from "@/containers/atlas/map/popup";
import { MapSettings } from "@/containers/atlas/map/settings";
import { MapShare } from "@/containers/atlas/map/share";

import Controls from "@/components/map/controls";
import FeedbackControl from "@/components/map/controls/feedback";
import { MenuControl } from "@/components/map/controls/menu";
import SettingsControl from "@/components/map/controls/settings";
import ShareControl from "@/components/map/controls/share";
import ZoomControl from "@/components/map/controls/zoom";

export const AtlasMap = () => {
  const queryClient = useQueryClient();
  const { atlasMap } = useMap();

  const [loaded, setLoaded] = useState(false);

  const [location] = useSyncLocation();
  const { reset } = useSyncFilters();
  const prevLocation = usePreviousDifferent(location);

  const [basemap] = useSyncBasemap();
  const [bbox, setBbox] = useSyncBbox();

  const [tmpBbox, setTmpBbox] = useAtom(tmpBboxAtom);
  const setPopup = useSetAtom(popupAtom);
  const sidebarOpen = useAtomValue(sidebarOpenAtom);

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

  const handleMovedDebounced = useDebounce(handleMove, 500);

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

  const handleClick = useCallback(
    (e: MapMouseEvent) => {
      setPopup(e.lngLat);
    },
    [setPopup],
  );

  useEffect(() => {
    if (tmpBbox) {
      handleFitBounds();
    }
  }, [tmpBbox, handleFitBounds]);

  useEffect(() => {
    if (location !== prevLocation) {
      reset();
      // console.log("Location changed", location, prevLocation);
    }
  }, [location, prevLocation, reset]);

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
          onClick={handleClick}
          onMove={handleMovedDebounced}
          onLoad={async () => {
            if (location) {
              await queryClient.prefetchQuery(getApiLocationsLocationGetQueryOptions(location));
            }
            setLoaded(true);
          }}
        >
          <Controls>
            <MenuControl />
            <ZoomControl />
            <SettingsControl>
              <MapSettings />
            </SettingsControl>
            <ShareControl>
              <MapShare />
            </ShareControl>
            <FeedbackControl />
          </Controls>

          {loaded && <LayerManager />}
          {loaded && <AtlasPopup />}
        </Map>
      </div>

      <MapLegend />
    </div>
  );
};
