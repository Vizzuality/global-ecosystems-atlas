"use client";

import { ReactElement, useEffect, useMemo, useRef } from "react";

import { useInView } from "framer-motion";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export interface StepProps {
  id: string;
  children: ReactElement;
  offset: number;
  onEnter?: (id: string) => void;
}

export const Step = ({ id, children, offset, onEnter }: StepProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const margin = useMemo(() => {
    return `-${offset * 100}% ${0}px -${100 - offset * 100}% ${0}px` as MarginType;
  }, [offset]);

  const inView = useInView(ref, {
    amount: 0,
    margin,
  });

  useEffect(() => {
    if (inView && onEnter) {
      onEnter(id);
    }
  }, [id, inView, onEnter]);

  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
};
