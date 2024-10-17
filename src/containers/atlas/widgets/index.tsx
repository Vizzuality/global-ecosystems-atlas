"use client";
import { createElement } from "react";

import { cn } from "@/lib/utils";

import { WidgetEcosystemsExtent } from "@/containers/atlas/widgets/efgs/extent";
import { WidgetEcosystemsProtectedEfgs } from "@/containers/atlas/widgets/efgs/protected_efgs";
import { WidgetLocationCountryContribution } from "@/containers/atlas/widgets/location/country_contribution";
import { WidgetLocationStatus } from "@/containers/atlas/widgets/location/current_status";
import { WidgetLocationEcosystemAssesment } from "@/containers/atlas/widgets/location/ecosystem_assesment";
import { WidgetLocationExtent } from "@/containers/atlas/widgets/location/extent";
import { WidgetLocationExtentRealms } from "@/containers/atlas/widgets/location/extent_realms";
import { WidgetLocationProtectedEfgs } from "@/containers/atlas/widgets/location/protected_efgs";
import { WidgetLocationRealmsBreak } from "@/containers/atlas/widgets/location/realms_break";

export const WIDGETS_LOCATION = [
  { locations: [], component: WidgetLocationStatus },
  { locations: [], component: WidgetLocationExtentRealms },
  { locations: [], component: WidgetLocationExtent },
  { locations: [], component: WidgetLocationCountryContribution },
  { locations: [], component: WidgetLocationProtectedEfgs },
  { locations: [], component: WidgetLocationEcosystemAssesment },
  { locations: [], component: WidgetLocationRealmsBreak },
];

export const WIDGETS_ECOSYSYTEMS = [
  { component: WidgetEcosystemsProtectedEfgs },
  { component: WidgetEcosystemsExtent },
];

export const WidgetLocationList = () => {
  return (
    <div className="divide-y divide-navy-100">
      {WIDGETS_LOCATION.map((Widget, index) => (
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
