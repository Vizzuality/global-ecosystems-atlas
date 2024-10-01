import { useEffect, useMemo } from "react";

import { LngLatBoundsLike, useMap } from "react-map-gl";

import { usePreviousDifferent } from "rooks";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

export const FitBounds = () => {
  const [step] = useSyncStep();
  const { current } = useMap();

  const s = Math.min(STEPS.length - 1, step);
  const prevStep = usePreviousDifferent(s);

  const STEP = useMemo(() => {
    return STEPS.find((s1) => s1.id === s);
  }, [s]);

  useEffect(() => {
    if (current && STEP && prevStep !== s) {
      current.fitBounds(STEP.bbox as LngLatBoundsLike, {
        padding: 50,
      });
    }
  }, [current, s, prevStep, STEP]);

  return null;
};
