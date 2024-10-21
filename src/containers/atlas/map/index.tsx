"use client";

import { useCallback, useEffect, useState } from "react";

import Map, { LngLatBoundsLike, useMap } from "react-map-gl";

import { useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { MapMouseEvent } from "mapbox-gl";
import { FiChevronUp } from "react-icons/fi";
import { useDebounce, usePreviousDifferent } from "rooks";

import { env } from "@/env.mjs";

import { cn } from "@/lib/utils";

import { getApiLocationsLocationGetQueryOptions } from "@/types/generated/locations";

import {
  atlasMobileLegendAtom,
  atlasMobileSidebarAtom,
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
import { MapLegendDesktop, MapLegendMobile } from "@/containers/atlas/map/legend";
import { AtlasPopup } from "@/containers/atlas/map/popup";
import { MapSettings } from "@/containers/atlas/map/settings";
import { MapShare } from "@/containers/atlas/map/share";
import { Media } from "@/containers/media";

import Controls from "@/components/map/controls";
import FeedbackControl from "@/components/map/controls/feedback";
import { LegendControl } from "@/components/map/controls/legend";
import { MenuControl } from "@/components/map/controls/menu";
import SettingsControl from "@/components/map/controls/settings";
import ShareControl from "@/components/map/controls/share";
import ZoomControl from "@/components/map/controls/zoom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";

export interface AtlasMapProps {
  mobile?: boolean;
}

export const AtlasMap = ({ mobile }: AtlasMapProps) => {
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
  const [atlasMobileSidebar, setAtlasMobileSidebar] = useAtom(atlasMobileSidebarAtom);
  const [atlasMobileLegend, setAtlasMobileLegend] = useAtom(atlasMobileLegendAtom);

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
      const left = mobile ? 50 : sidebarOpen ? 600 : 125;
      atlasMap.fitBounds(tmpBbox as LngLatBoundsLike, {
        padding: {
          top: 50,
          bottom: 50,
          left,
          right: 50,
        },
      });
    }
  }, [mobile, atlasMap, sidebarOpen, tmpBbox]);

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
    }
  }, [location, prevLocation, reset]);

  return (
    <div
      className={cn({
        "relative flex h-full w-full grow flex-col overflow-hidden bg-lightblue-50": true,
        "lg:left-[calc(theme(space.10)_+_theme(space.8))] lg:w-[calc(100%_-_theme(space.10)_-_theme(space.8))] lg:grow-0":
          true,
      })}
    >
      <div className="flex h-full w-full grow flex-col bg-lightblue-50">
        <Map
          id="atlasMap"
          mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            bounds: bbox as LngLatBoundsLike,
            fitBoundsOptions: {
              padding: {
                top: 50,
                bottom: 50,
                left: mobile ? 50 : sidebarOpen ? 600 : 125,
                right: 50,
              },
            },
          }}
          style={{ width: "100%", height: "100%", flexGrow: 1 }}
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
            {!mobile && <MenuControl />}
            {!mobile && <ZoomControl />}

            <SettingsControl id="tour-atlas-basemap">
              <MapSettings />
            </SettingsControl>
            <ShareControl id="tour-atlas-share">
              <MapShare />
            </ShareControl>
            <FeedbackControl id="tour-atlas-feedback" />

            {mobile && <LegendControl onClick={() => setAtlasMobileLegend(true)} />}
          </Controls>

          {loaded && <LayerManager />}
          {loaded && <AtlasPopup />}
        </Map>
      </div>

      <Media lessThan="lg">
        <>
          <div className="absolute bottom-10 right-4 z-10 w-full max-w-[calc(100%_-_theme(space.8))] shadow-lg">
            <Button
              variant="default"
              className="flex w-full items-center justify-between"
              onClick={() => setAtlasMobileSidebar(!atlasMobileSidebar)}
            >
              <span className="uppercase">Tools</span>
              <FiChevronUp className="h-5 w-5" />
            </Button>
          </div>

          <Sheet open={atlasMobileLegend} onOpenChange={setAtlasMobileLegend}>
            <SheetContent side="bottom" className="flex max-h-[80svh] min-h-0 grow flex-col">
              <SheetTitle hidden>Legend</SheetTitle>
              <SheetDescription hidden>Explore the map legend</SheetDescription>
              <MapLegendMobile />
            </SheetContent>
          </Sheet>
        </>
      </Media>

      <Media greaterThanOrEqual="lg">
        <MapLegendDesktop />
      </Media>
    </div>
  );
};
