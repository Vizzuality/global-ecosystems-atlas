import { useEffect, useMemo } from "react";

import { LngLatBoundsLike, useMap } from "react-map-gl";

import { usePreviousDifferent } from "rooks";

import { useSyncStep } from "@/app/(app)/stories/south-africa-mozambique/store";

import { STEPS } from "@/containers/stories/south-africa-mozambique/section-1/map";

export const FitBounds = () => {
  const [step] = useSyncStep();
  const prevStep = usePreviousDifferent(step);
  const { current } = useMap();

  const STEP = useMemo(() => {
    const s = STEPS.find((s) => s.id === step);

    return s;
  }, [step]);

  useEffect(() => {
    if (current && STEP && prevStep !== step) {
      current.fitBounds(STEP.bbox as LngLatBoundsLike, {
        padding: 50,
      });
    }
  }, [current, step, prevStep, STEP]);

  return null;
};
