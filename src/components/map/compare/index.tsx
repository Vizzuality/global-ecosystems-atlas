import { Children, PropsWithChildren, useRef, useState } from "react";

import { Swipper } from "@/components/map/compare/swipper";

export const Compare = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0.5);

  if (Children.count(children) !== 2) {
    throw new Error("Compare should have exactly two children");
  }

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <Swipper x={x} rect={ref.current?.getBoundingClientRect()} onChange={setX} />

      {Children.map(children, (child, i) => (
        <div
          key={i}
          className="absolute left-0 top-0 h-full w-full"
          style={{
            clipPath: i === 0 ? `inset(0 ${(1 - x) * 100}% 0 0)` : `inset(0 0 0 ${x * 100}%)`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
