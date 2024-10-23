import { cn } from "@/lib/utils";

import { LegendItemProps } from "@/components/map/legend/types";

export interface SAMLegendMobileProps {
  legends: LegendItemProps[];
  theme?: "light" | "dark";
}

export const SAMLegendMobile = ({ legends, theme = "light" }: SAMLegendMobileProps) => {
  return (
    <div className="w-full">
      <div className="container">
        {!!legends.length &&
          legends.map((l) => (
            <p
              key={l.id}
              className={cn({
                "text-xs": true,
                "text-white": theme === "dark",
              })}
            >
              {l.name}
            </p>
          ))}
      </div>
    </div>
  );
};
