import { useState } from "react";

import { ScaleLinear, ScaleOrdinal } from "@visx/vendor/d3-scale";

import { cn } from "@/lib/utils";

export type DataProps = {
  id: number | string;
  value: number;
  label: string;
};

interface HorizontalBarProps<D extends Partial<DataProps>> {
  data: D[];
  xScale: ScaleLinear<number, number, never>;
  colorScale: ScaleOrdinal<string, string, never>;
  selected?: (string | number)[];
  interactive?: boolean;
  format: (value: D) => string;
  onBarClick?: (bar: D) => void;
}

const HorizontalBar = <D extends DataProps>({
  data,
  xScale,
  colorScale,
  selected,
  interactive = false,
  format,
  onBarClick,
}: HorizontalBarProps<D>) => {
  const [hover, setHover] = useState<string | number | null>(null);

  return (
    <div className="relative z-0">
      <ul className="table w-full table-auto border-separate">
        {data.map((d, i) => {
          const { id, label, value } = d;
          return (
            <li
              key={label + i}
              className={cn({
                "group table-row w-full": true,
                "cursor-pointer": interactive && value > 0,
              })}
              {...(interactive &&
                value > 0 && {
                  onMouseEnter: () => {
                    setHover(id);
                  },
                  onMouseLeave: () => {
                    setHover(null);
                  },
                  onClick: () => onBarClick && onBarClick(d),
                })}
            >
              <div className={cn({ "table-cell w-full": true, "pt-3": i !== 0 })}>
                <div className="flex grow flex-col gap-1">
                  <div className="line-clamp-1 text-xs font-semibold text-navy-700">{label}</div>
                  <div className="w-full bg-navy-50">
                    <div
                      className={cn({
                        "h-1.5 w-full rounded-lg": true,
                        "opacity-50": hover !== id && !!selected?.length && !selected?.includes(id),
                      })}
                      style={{
                        width: `${xScale(value)}%`,
                        background: colorScale(id.toString()),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="table-cell w-full pl-6 align-bottom">
                <div className="shrink-0 whitespace-nowrap text-right text-xl font-medium text-navy-700">
                  {format(d)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HorizontalBar;
