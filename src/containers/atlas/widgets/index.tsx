import { cn } from "@/lib/utils";

import { WidgetStatus } from "@/containers/atlas/widgets/current_status";
import { WidgetExtent } from "@/containers/atlas/widgets/extent";
import { WidgetExtentRealms } from "@/containers/atlas/widgets/extent_realms";
import { WidgetProtectedEfgs } from "@/containers/atlas/widgets/protected_efgs";
import { WidgetRealmsBreak } from "@/containers/atlas/widgets/realms_break";

export const WIDGETS_LOCATION = [
  <WidgetStatus key="current_status" />,
  <WidgetExtentRealms key="extent_realms" />,
  <WidgetExtent key="extent" />,
  <WidgetProtectedEfgs key="protected_efgs" />,
  <WidgetRealmsBreak key="realms_break" />,
];

export const WIDGETS_ECOSYSYTEMS = [
  <WidgetExtentRealms key="extent_realms" />,
  <WidgetExtent key="extent" />,
  <WidgetProtectedEfgs key="protected_efgs" />,
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
