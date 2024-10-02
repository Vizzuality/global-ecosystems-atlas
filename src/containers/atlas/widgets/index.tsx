import { cn } from "@/lib/utils";

import { WidgetStatus } from "@/containers/atlas/widgets/current_status";
import { WidgetExtentRealms } from "@/containers/atlas/widgets/extent_realms";

export const WIDGETS_LOCATION = [
  <WidgetStatus key="current_status" />,
  <WidgetExtentRealms key="extent_realms" />,
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
  return <div></div>;
};
