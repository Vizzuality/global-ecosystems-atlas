"use client";

import { MapProvider } from "react-map-gl";

export default function LayoutProviders({ children }: { children: React.ReactNode }) {
  return <MapProvider>{children}</MapProvider>;
}
