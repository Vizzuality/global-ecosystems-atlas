"use client";
import { createElement } from "react";

import { cn } from "@/lib/utils";

import { useSyncLocation } from "@/app/(atlas)/atlas/store";

import { WidgetEcosystemsExtent } from "@/containers/atlas/widgets/efgs/extent";
import { WidgetEcosystemsProtectedEfgs } from "@/containers/atlas/widgets/efgs/protected_efgs";
// import { WidgetEcosystemsSourceSynthesis } from "@/containers/atlas/widgets/efgs/source_synth";
import { WidgetLocationCountryContribution } from "@/containers/atlas/widgets/location/country_contribution";
import { WidgetLocationStatus } from "@/containers/atlas/widgets/location/current_status";
import { WidgetLocationEcosystemAssesment } from "@/containers/atlas/widgets/location/ecosystem_assesment";
import { WidgetLocationExtent } from "@/containers/atlas/widgets/location/extent";
import { WidgetLocationExtentRealms } from "@/containers/atlas/widgets/location/extent_realms";
import { WidgetLocationProtectedEfgs } from "@/containers/atlas/widgets/location/protected_efgs";
import { WidgetLocationRealmsBreak } from "@/containers/atlas/widgets/location/realms_break";
import { WidgetLocationSourceSynthesis } from "@/containers/atlas/widgets/location/source_synth";

export const WIDGETS_LOCATION = [
  { excludeLocations: [], includeLocations: [], component: WidgetLocationStatus },
  { excludeLocations: [], includeLocations: [], component: WidgetLocationExtentRealms },
  { excludeLocations: [], includeLocations: [], component: WidgetLocationExtent },
  { excludeLocations: [], includeLocations: [], component: WidgetLocationCountryContribution },
  { excludeLocations: [], includeLocations: [], component: WidgetLocationProtectedEfgs },
  { excludeLocations: ["GLOB"], includeLocations: [], component: WidgetLocationEcosystemAssesment },
  { excludeLocations: ["GLOB"], includeLocations: [], component: WidgetLocationSourceSynthesis },
  { excludeLocations: [], includeLocations: [], component: WidgetLocationRealmsBreak },
];

export const WIDGETS_ECOSYSYTEMS = [
  { component: WidgetEcosystemsProtectedEfgs },
  { component: WidgetEcosystemsExtent },
  // { component: WidgetEcosystemsSourceSynthesis },
];

export const WidgetLocationList = () => {
  const [location] = useSyncLocation();

  return (
    <div className="divide-y divide-navy-100">
      {WIDGETS_LOCATION.filter((Widget) => {
        if (Widget.excludeLocations.length) {
          return !Widget.excludeLocations.includes(location ?? "GLOB");
        }
        return true;
      }).map((Widget, index) => (
        <div
          key={index}
          className={cn({
            "py-8": true,
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
