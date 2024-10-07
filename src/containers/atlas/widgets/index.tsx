import { cn } from "@/lib/utils";

import { WidgetEcosystemsExtent } from "@/containers/atlas/widgets/efgs/extent";
import { WidgetEcosystemsProtectedEfgs } from "@/containers/atlas/widgets/efgs/protected_efgs";
import { WidgetLocationStatus } from "@/containers/atlas/widgets/location/current_status";
import { WidgetLocationExtent } from "@/containers/atlas/widgets/location/extent";
import { WidgetLocationExtentRealms } from "@/containers/atlas/widgets/location/extent_realms";
import { WidgetLocationProtectedEfgs } from "@/containers/atlas/widgets/location/protected_efgs";
import { WidgetLocationRealmsBreak } from "@/containers/atlas/widgets/location/realms_break";

export const WIDGETS_LOCATION = [
  <WidgetLocationStatus key="current_status" />,
  <WidgetLocationExtentRealms key="extent_realms" />,
  <WidgetLocationExtent key="extent" />,
  <WidgetLocationProtectedEfgs key="protected_efgs" />,
  <WidgetLocationRealmsBreak key="realms_break" />,
];

export const WIDGETS_ECOSYSYTEMS = [
  <WidgetEcosystemsProtectedEfgs key="protected_efgs" />,
  <WidgetEcosystemsExtent key="extent" />,
  // <WidgetExtentRealms key="extent_realms" />,
  // <WidgetExtent key="extent" />,
  // <WidgetProtectedEfgs key="protected_efgs" />,
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
          {Widget}
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
          {Widget}
        </div>
      ))}
    </div>
  );
};
