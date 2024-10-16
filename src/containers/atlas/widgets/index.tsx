"use client";
import { createElement } from "react";

import { cn } from "@/lib/utils";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { WidgetEcosystemsExtent } from "@/containers/atlas/widgets/efgs/extent";
import { WidgetEcosystemsProtectedEfgs } from "@/containers/atlas/widgets/efgs/protected_efgs";
import { WidgetLocationCountryContribution } from "@/containers/atlas/widgets/location/country_contribution";
import { WidgetLocationStatus } from "@/containers/atlas/widgets/location/current_status";
import { WidgetLocationExtent } from "@/containers/atlas/widgets/location/extent";
import { WidgetLocationExtentRealms } from "@/containers/atlas/widgets/location/extent_realms";
import { WidgetLocationProtectedEfgs } from "@/containers/atlas/widgets/location/protected_efgs";
import { WidgetLocationRealmsBreak } from "@/containers/atlas/widgets/location/realms_break";

export const WIDGETS_LOCATION = [
  { locations: [], component: WidgetLocationStatus },
  { locations: [], component: WidgetLocationExtentRealms },
  { locations: [], component: WidgetLocationExtent },
  { locations: ["GLOB"], component: WidgetLocationCountryContribution },
  { locations: [], component: WidgetLocationProtectedEfgs },
  { locations: [], component: WidgetLocationRealmsBreak },
];

export const WIDGETS_ECOSYSYTEMS = [
  { component: WidgetEcosystemsProtectedEfgs },
  { component: WidgetEcosystemsExtent },
  // <WidgetExtentRealms key="extent_realms" />,
  // <WidgetExtent key="extent" />,
  // <WidgetProtectedEfgs key="protected_efgs" />,
];

export const WidgetLocationList = () => {
  const [location] = useSyncLocation();

  return (
    <div className="divide-y divide-navy-100">
      {WIDGETS_LOCATION.filter((Widget) => {
        if (!Widget.locations.length) return true;

        return Widget.locations.includes(location ?? "GLOB");
      }).map((Widget, index) => (
        <div
          key={index}
          className={cn({
            "py-6": true,
            "pt-0": index === 0,
            "pb-0": index === WIDGETS_LOCATION.length - 1,
          })}
        >
          {createElement(Widget.component)}
        </div>
      ))}
    </div>
  );
};

export const WidgetEcosystemsList = () => {
  return (
    <div className="divide-y divide-navy-100">
      {WIDGETS_ECOSYSYTEMS.map((Widget, index) => (
        <div
          key={index}
          className={cn({
            "py-6": true,
            "pt-0": index === 0,
            "pb-0": index === WIDGETS_LOCATION.length - 1,
          })}
        >
          {createElement(Widget.component)}
        </div>
      ))}
    </div>
  );
};
