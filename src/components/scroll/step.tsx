"use client";

import { ReactElement, useEffect, useMemo, useRef } from "react";

import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

type MarginValue = `${number}${"px" | "%"}`;
type MarginType =
  | MarginValue
  | `${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue}`
  | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export interface StepProps {
  id: string;
  children: ReactElement | ReactElement[];
  offset: number;
  className?: string;
  onEnter?: (id: string) => void;
}

export const Step = ({ id, children, offset, className, onEnter }: StepProps) => {
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
    <div id={id} ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};
