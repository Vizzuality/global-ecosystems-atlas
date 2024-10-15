"use client";

import { Popup } from "react-map-gl";

// import { POPUPS } from "containers/datasets";
// import ProvincesPopup from "containers/datasets/provinces/popup";
import { useAtom } from "jotai";
import { FiX } from "react-icons/fi";

import { popupAtom, useSyncLayers, useSyncLayersSettings } from "@/app/(atlas)/atlas/store";

import { POPUPS } from "@/containers/atlas/map/popup/content";

import { Button } from "@/components/ui/button";

export const AtlasPopup = () => {
  const [layers] = useSyncLayers();
  const [layersSettings] = useSyncLayersSettings();

  const [popup, setPopup] = useAtom(popupAtom);

  if (!popup) return null;

  return (
    <Popup
      latitude={popup.lat}
      longitude={popup.lng}
      closeOnClick={false}
      maxWidth={"none"}
      className="font-sans"
      style={{
        padding: 0,
      }}
      closeButton={false}
      onClose={() => setPopup(null)}
    >
      <div className="pointer-events-none absolute left-0 top-0 h-4 w-full rounded-t-lg bg-gradient-to-b from-white" />
      <div
        className="max-h-[45vh] w-[380px] space-y-2.5 overflow-y-auto overflow-x-hidden rounded-lg bg-white p-3 pr-6 text-navy-500 shadow-[0_20px_15px_rgba(0,0,0,0.1)]"
        style={{
          transform: "translateZ(0px)",
          backfaceVisibility: "hidden",
        }}
      >
        {layers
          .filter((layer) => {
            const layerSettings = layersSettings?.[layer] ?? {};
            const visibility = layerSettings?.visibility ?? true;
            return visibility && !!POPUPS[layer as keyof typeof POPUPS];
          })
          .map((layer) => {
            const PopupComponent = POPUPS[layer as keyof typeof POPUPS];
            return <PopupComponent key={layer} />;
          })}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0"
        onClick={() => setPopup(null)}
      >
        <FiX className="h-5 w-5" />
      </Button>
      <div className="pointer-events-none absolute bottom-0 left-0 h-4 w-full rounded-b-lg bg-gradient-to-t from-white" />
    </Popup>
  );
};
